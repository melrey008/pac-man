let janaria = game.createSprite(4, 4)
let pac_man = game.createSprite(2, 2)
let mamua = game.createSprite(0, 2)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
pac_man.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 200) {
        pac_man.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pac_man.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pac_man.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pac_man.change(LedSpriteProperty.X, 1)
    }
})
