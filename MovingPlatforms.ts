/**
* Custom blocks
*/

//% color=#42f551 icon="↔"
namespace pathfinder {
    //@param platform_image
    //@param start_image
    //@param end_image
    //@param background_image
    //% block="AutoCreateMovingPlatforms. Platform tile %platform_image=tileset_tile_picker, Start tile %start_image=tileset_tile_picker, End tile %end_image=tileset_tile_picker, Background tile %background_image=tileset_tile_picker."
    //% inlineInputMode=inline
    export function createPlatforms(platform_image: Image, start_image: Image, end_image: Image, background_image: Image): void {
        MovingPlatform.fromCurrentTilemap(platform_image, start_image, end_image, background_image);
    }
}