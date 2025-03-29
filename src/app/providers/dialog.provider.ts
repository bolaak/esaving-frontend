import {Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Component, EmbeddedViewRef, Type} from '@angular/core';
import { DialogComponent } from '../components/dialog-component';

@Injectable()
export class DialogProvider {
    // private _snackbar: any;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _applicationRef: ApplicationRef,
        private _injector: Injector,
    ) {}

    open<T extends DialogComponent>(
        component: Type<T>,
        args: {
            data?: any,
            onClosed?: (data?: any) => void,
        } = {},
        // onOpened?: (component?: T) => void,
    ) {
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = componentFactory.create(this._injector);
        this._applicationRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);

        const i = componentRef.instance;
        i.data = args.data || {};

        i.onDialog(() => {
            i.open();
        });

        i.onClosed((data) => {
            if (args.onClosed) {
                args.onClosed(data);
            }
            componentRef.destroy();
        });

        /* i.onOpened((component) => {
            if (onOpened) {
                onOpened(component);
            }
        }); */

        // return componentRef;
    }
}
