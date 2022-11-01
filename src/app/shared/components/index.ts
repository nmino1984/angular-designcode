// Import Components
import { CardInterestComponent } from "./cards/card-interest/card-interest.component";
import { CardUserComponent } from "./cards/card-user/card-user.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";

export const components: any[] = [
    CardUserComponent,
    CardInterestComponent,
    TitleH1Component

];

//Export all Components
export * from "./cards/card-user/card-user.component";
export * from "./cards/card-interest/card-interest.component";
export * from './titles/title-h1/title-h1.component';