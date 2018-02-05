import { GamelistComponent } from '../gamelist/gamelist.component';
import DynamicListComponents from '../../interfaces/dynamiclistcomponents';

export const COMPONENTS: DynamicListComponents[] = [
    { component: GamelistComponent, name: 'game' }
];
