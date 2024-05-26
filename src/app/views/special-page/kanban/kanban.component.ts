import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styles: [
  ]
})
export class KanbanComponent {
  items = [
    { name: "Dashboard plan" },
    { name: "Dashboard plan" },
    { name: "Dashboard plan" },
    { name: "Dashboard plan" }
  ];
  items2 = [
    { name: "Dashboard plan" },
  ];

  droppedItems = [
    { name: "Dashboard plan" },
    { name: "Dashboard plan" }
  ];

  droppedItems2 = [
    { name: "Dashboard plan" },
    { name: "Dashboard plan" }

  ];
  
  addItem(e: any) {
    // add to droppedItems list
    this.droppedItems.push(e.dragData);
    console.log(e.dragData);

    // remove from original list
    const index = this.items.indexOf(e.dragData);
    console.log("addItem index", index);
    if (index  > -1) {
      this.items.splice(index, 1);
    }
    const index2 = this.items2.indexOf(e.dragData);
    console.log("addItem index", index);
    if (index2  > -1) {
      this.items2.splice(index, 1);
    }

    const index3 = this.droppedItems2.indexOf(e.dragData);
    console.log("addItem index", index);
    if (index3  > -1) {
      this.droppedItems2.splice(index, 1);
    }
  }

  removeItem(e: any) {
    // add to original list
    this.items.push(e.dragData);

    // remove from droppedItems list
    const index = this.droppedItems.indexOf(e.dragData);
    console.log("removeItem index", index);
    if (index > -1) {
      this.droppedItems.splice(index, 1);

    }
    const index2 = this.droppedItems2.indexOf(e.dragData);
    console.log("removeItem index", index);
    if (index2 > -1) {
      this.droppedItems2.splice(index, 1);

    }

    const index3 = this.items2.indexOf(e.dragData);
    console.log("removeItem index", index);
    if (index3 > -1) {
      this.items2.splice(index, 1);

    }
  }

  addItem1(e: any) {
    // add to droppedItems list
    this.droppedItems2.push(e.dragData);
    console.log(e.dragData);

    // remove from original list
    const index = this.items2.indexOf(e.dragData);
    console.log("addItem index", index);
    if (index  > -1) {
      this.items2.splice(index, 1);
    }

    const index2 = this.items.indexOf(e.dragData);
    console.log("addItem index", index);
    if (index2  > -1) {
      this.items.splice(index, 1);
    }

    const index3 = this.droppedItems.indexOf(e.dragData);
    console.log("addItem index", index);
    if (index3  > -1) {
      this.droppedItems.splice(index, 1);
    }
  }

  removeItem1(e: any) {
    // add to original list
    this.items2.push(e.dragData);

    // remove from droppedItems list
    const index = this.droppedItems2.indexOf(e.dragData);
    console.log("removeItem index", index);
    if (index > -1) {
      this.droppedItems2.splice(index, 1);

    }

    const index2 = this.droppedItems.indexOf(e.dragData);
    console.log("removeItem index", index);
    if (index2 > -1) {
      this.droppedItems.splice(index, 1);

    }

    const index3 = this.items.indexOf(e.dragData);
    console.log("removeItem index", index);
    if (index3 > -1) {
      this.items.splice(index, 1);

    }
  }
}
