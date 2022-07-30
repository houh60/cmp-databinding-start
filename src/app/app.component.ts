import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [
        { type: 'server', name: 'Testserver 1', content: 'Just a test!' },
        { type: 'blueprint', name: 'Testblueprint 1', content: 'Just a test!' },
    ];
    newServerName = '';
    newServerContent = '';

    oddNums: number[] = [];
    evenNums: number[] = [];

    onServerAdded(serverData: { serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.blueprintName,
            content: blueprintData.blueprintContent
        });
    }

    onIntervalFired(e: any) {
        if(e % 2 === 0) {
            this.evenNums.push(e);
        } else {
            this.oddNums.push(e);
        }
        console.log('e: ', e);
    }

    trackByFn(index: number, num: number) {
        return num;
    }
}
