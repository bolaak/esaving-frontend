import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ApiProviders } from './api-providers.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[jhiHasAnyRessources]'
})
export class HasAnyRessourcesDirective {
  enableResourcesControl = true;
  ressourcesUsers: any[];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
    console.log('Cool');
      // this.ressourcesUsers = this.userRessources();
   }

   userRessources() {
    let ru: any [] = [];
    ru = JSON.parse(localStorage.getItem('789'));
    // ru.push(JSON.parse(localStorage.getItem('789')));
    return ru;
  }

  @Input()
  set jhiHasAnyRessources(value: string | string[]) {
    if (!this.enableResourcesControl) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
    }
    /* if (!value) {
        //this.viewContainerRef.clear();
        return;
    } */
    this.updateView(value);
    // Get notified each time authentication state changes.
    // tslint:disable-next-line: no-use-before-declare
    EventBus.subscribe('ressources', () => this.updateView(value));
  }

  private updateView(value: string | string[]): void {
    const ressources: any[] = [];
    const ressource = this.userRessources();
    if (ressource) {
      ressource.forEach((element) => {
        ressources.push(element.codeRolePredefini);
      });
    } else {
      return;
    }
    // if (Array.isArray(value) && value[0] && value.length == 1) {
    //     this.viewContainerRef.clear();
    //     let index = -1;
    //     for (let item of value) {
    //         item = item ? item.trim() : item;
    //         if (ressources.indexOf(item) != -1) index = 1;
    //     }
    //     // if (LOCAL_FLAG && index != -1)
    //     if (index != -1)
    //         this.viewContainerRef.createEmbeddedView(this.templateRef);
    //     return;
    // }
    value = Array.isArray(value) ? value : [value];
    this.viewContainerRef.clear();
    let index = -1;
    for (let item of value) {
      item = item ? item.trim() : item;
      // tslint:disable-next-line: triple-equals
      if (ressources.indexOf(item) != -1) { index = 1; }
    }
    if (!value[0]) { index = 1; }
    // tslint:disable-next-line: triple-equals
    if (index != -1) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}

const EventBus = {
  topics: {},

  subscribe: function (topic, listener) {
    // create the topic if not yet created
    if (!this.topics[topic]) { this.topics[topic] = []; }

    // add the listener
    this.topics[topic].push(listener);
  },

  publish: function (topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if (!this.topics[topic] || this.topics[topic].length < 1) { return; }

    // send the event to all listeners
    this.topics[topic].forEach(function (listener) {
      listener(data);
    });
  }
};
