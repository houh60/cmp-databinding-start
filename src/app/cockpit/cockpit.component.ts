import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

    serverElements = [];
    newServerName: string = '';
    newServerContent: string = '';

    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

    @ViewChild('newServerNameInput') newServerNameInput: ElementRef;

    constructor() {}

    ngOnInit(): void {
    }

    onServerAdded(newServerNameInput) {
        this.serverCreated.emit({
            serverName: newServerNameInput.value,
            serverContent: this.newServerNameInput.nativeElement.value
        });
    }

    onBlueprintAdded(newServerNameInput) {
        this.blueprintCreated.emit({
            blueprintName: newServerNameInput.value,
            blueprintContent: this.newServerNameInput.nativeElement.value
        });
    }


    // onServerAdded() {
    //     this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // }

    // onBlueprintAdded() {
    //     this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent});
    // }

}
