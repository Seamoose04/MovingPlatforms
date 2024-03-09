/**
* Custom blocks
*/

//% color=#42f551 icon="↔"
namespace pathfinder {
    //% block="AutoCreateMovingPlatforms $platform_image $start_image $end_image $background_image"
    //% inlineInputMode=inline
    //% platform_image.defl="tile_image_picker"
    //% start_image.defl="tile_image_picker"
    //% end_image.defl="tile_image_picker"
    //% background_image.defl="tile_image_picker"
    export function createPlatforms(platform_image: Image, start_image: Image, end_image: Image, background_image: Image): void {
        MovingPlatform.fromCurrentTilemap(platform_image, start_image, end_image, background_image);
    }
}