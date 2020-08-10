import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FoodTileComponent } from './components/food-tile/food-tile.component';

@NgModule({
    declarations: [FoodTileComponent],
    imports: [CommonModule, MaterialModule],
    exports: [MaterialModule, FoodTileComponent],
})
export class SharedModule {}
