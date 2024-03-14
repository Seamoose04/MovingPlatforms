/**
* Custom blocks
*/

//% color=#42f551 icon="↔"
namespace Platforms {
    //% block="AutoCreateMovingPlatforms. Platform tile %platform_image=tileset_tile_picker, Background tile %background_image=tileset_tile_picker, Start tile %start_image=tileset_tile_picker, End tile %end_image=tileset_tile_picker."
    //% inlineInputMode=inline
    export function createMovingPlatforms(platform_image: Image, start_image: Image, end_image: Image, background_image: Image): void {
        MovingPlatform.fromScene(platform_image, background_image, start_image, end_image);
    }

    // export function generatePlatformWalls(platform_image: Image) {
        
    // }
}