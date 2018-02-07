import { GamelistComponent } from '../components/gamelist/gamelist.component';
import { DynamicListComponents } from '../interfaces/dynamiclistcomponents';
import { GameService } from '../services/game.service';
import { ComponentListService } from '../interfaces/componentListService';

// export const COMPONENTS: DynamicListComponents[] = [
//     { name: 'game', component: GamelistComponent, service: GameService }
// ];
export const COMPONENTS: any[] = [
    { name: 'game', component: GamelistComponent, service: GameService }
];
