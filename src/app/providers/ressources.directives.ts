import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[jhiauthority]'
})
// tslint:disable-next-line:directive-class-suffix
export class HasAnyauthority {
  enableResourcesControl = true;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input()
  set jhiHasAnyRessourcess(value: string | string[]) {
    if (!this.enableResourcesControl) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
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
