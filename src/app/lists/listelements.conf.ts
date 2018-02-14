import { GamelistComponent } from '../components/gamelist/gamelist.component';
import { DynamicListComponents } from '../interfaces/dynamiclistcomponents';

export const COMPONENTS: DynamicListComponents[] = [
    { name: 'game', component: GamelistComponent }
];
