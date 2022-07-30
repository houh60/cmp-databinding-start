import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [
        {type: 'server', name: 'Testserver 1', content: 'Just a test!'},
        {type: 'blueprint', name: 'Testblueprint 1', content: 'Just a test!'},
    ];
    newServerName = '';
    newServerContent = '';

    onServerAdded(serverData: {serverName: string, serverContent: string}) {
        console.log('serverName: ', serverData.serverName);
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.blueprintName,
            content: blueprintData.blueprintContent
        });
    }
}
