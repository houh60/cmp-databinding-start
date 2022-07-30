import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

    lastNum = 0;
    interval;
    start = false;

    @Output() numOut: EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
    }

    startGame() {
        this.start = true;
        this.interval = setInterval(() => {
            this.numOut.emit(this.lastNum++);
        }, 1000);
    }

    pauseGame() {
        this.start = false;
        clearInterval(this.interval);
    }

}
