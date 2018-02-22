import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    log(message) {
        console.log(message);
    }
}
