import { GamelistComponent } from '../components/gamelist/gamelist.component';
import { DynamicListComponents } from '../interfaces/dynamiclistcomponents';
import { GameService } from '../services/game.service';

export const COMPONENTS: DynamicListComponents[] = [
    { name: 'game', component: GamelistComponent, service: GameService }
];
