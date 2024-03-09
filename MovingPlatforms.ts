/**
* Custom blocks
*/

//% color=#42f551 icon="↔"
namespace pathfinder {
    //% block
    export function createPlatforms(platform_image: Image, start_image: Image, end_image: Image, background_image: Image): void {
        MovingPlatform.fromCurrentTilemap(platform_image, start_image, end_image, background_image);
    }
}