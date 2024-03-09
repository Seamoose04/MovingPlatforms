/**
* Custom blocks
*/

//% color=#42f551 icon="↔"
namespace pathfinder {
    //% block="AutoCreateMovingPlatforms. Platform tile $platform_image, Start tile $start_image, End tile $end_image, Background tile $background_image."
    //% inlineInputMode=inline
    //% platform_image.shadow="tileset_tile_picker"
    //% start_image.shadow="tileset_tile_picker"
    //% end_image.shadow="tileset_tile_picker"
    //% background_image.shadow="tileset_tile_picker"
    export function createPlatforms(platform_image: Image, start_image: Image, end_image: Image, background_image: Image): void {
        MovingPlatform.fromCurrentTilemap(platform_image, start_image, end_image, background_image);
    }
}