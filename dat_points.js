const categories = {
    'Satellite Dishes': {
        // displayname: 'Satellite Dishes', // if key doesn't exist, fallback to category id
        icon: './icons/votv.png', // if key doesn't exist, fallback to icon of first ever marker requesting this category
        group: 'Locations' // if key doesn't exist, fallback to Misc group
    },
    'Transformers': {
        group: 'Locations'
    },
    'CR': {
        displayname: 'Coordinate Radars',
        icon: './icons/cr.png',
        group: 'Locations'
    },
    'KerfurO Accessories': {
        group: 'Collectables'
    },
    'Plushes': {
        group: 'Collectables'
    },
    'Furfur Totems': {
        group: 'Collectables'
    },
    'Metal Tiles': {
        group: 'Collectables'
    },
    'Points of Interest': {
        group: 'Locations'
    },
    'miscellaneous': { // Category for automatic fallback.
        displayname: 'Miscellaneous',
    }
}

const markers = [
    // Satellites
    {
        name: "Bravo",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/b.png",
        xPos: -100,
        yPos: -200
    },
    {
        name: "Charlie",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/c.png",
        xPos: 0,
        yPos: -200
    },
    {
        name: "Delta",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/d.png",
        xPos: 100,
        yPos: -200
    },
    {
        name: "Echo",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/e.png",
        xPos: 200,
        yPos: -100
    },
    {
        name: "Foxtrot",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/f.png",
        xPos: 200,
        yPos: 0
    },
    {
        name: "Golf",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/g.png",
        xPos: 200,
        yPos: 100
    },
    {
        name: "Hotel",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/h.png",
        xPos: 100,
        yPos: 200
    },
    {
        name: "India",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/i.png",
        xPos: 0,
        yPos: 200
    },
    {
        name: "Juliett",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/j.png",
        xPos: -100,
        yPos: 200
    },
    {
        name: "Kilo",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/k.png",
        xPos: -200,
        yPos: 100
    },
    {
        name: "Lima",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/l.png",
        xPos: -200,
        yPos: 0
    },
    {
        name: "Mike",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/m.png",
        xPos: -200,
        yPos: -100
    },
    {
        name: "November",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/n.png",
        xPos: -300,
        yPos: -300
    },
    {
        name: "Oscar",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/o.png",
        xPos: 300,
        yPos: -300
    },
    {
        name: "Papa",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/p.png",
        xPos: 300,
        yPos: 300
    },
    {
        name: "Quebec",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/q.png",
        xPos: -300,
        yPos: 300
    },
    {
        name: "Romeo",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/r.png",
        xPos: -500,
        yPos: -500
    },
    {
        name: "Sierra",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/s.png",
        xPos: 0,
        yPos: -500
    },
    {
        name: "Tango",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/t.png",
        xPos: 500,
        yPos: -500
    },
    {
        name: "Uniform",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/u.png",
        xPos: 500,
        yPos: 0
    },
    {
        name: "Victor",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/v.png",
        xPos: 500,
        yPos: 500
    },
    {
        name: "Whiskey",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/w.png",
        xPos: 0,
        yPos: 500
    },
    {
        name: "Xray",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/x.png",
        xPos: -500,
        yPos: 500
    },
    {
        name: "Yankee",
        description: "",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/y.png",
        xPos: -500,
        yPos: 0
    },
    {
        name: "Zulu",
        description: "Shh...",
        related_images: [],
        category: "Satellite Dishes",
        icon: "./icons/z.png",
        xPos: 10000,
        yPos: 10000
    },
    // Transformers
    {
        name: "Power Station",
        description: "",
        related_images: [],
        category: "Transformers",
        icon: "./icons/generator.png",
        xPos: 64,
        yPos: 64.3
    },
    {
        name: "Transformer #1",
        description: "Target with <i>sv.target TF_1</i>.<br>Supplies and explosive items are strewn throughout the building. Inside, you can find some partially-filled gas cans and a toolbox, and you can find a lighter and instructions on how to make molotovs on the desk.",
        related_images: [],
        category: "Transformers",
        icon: "./icons/transformer1.png",
        xPos: 396.1,
        yPos: 200
    },
    {
        name: "Transformer #2",
        description: "Target with <i>sv.target TF_2</i>.<br>Some trash lays around. You can find scrap and some almost-full gas cans inside. There are two benches outside.",
        related_images: [],
        category: "Transformers",
        icon: "./icons/transformer2.png",
        xPos: -546,
        yPos: 234
    },
    {
        name: "Transformer #3",
        description: "Target with <i>sv.target TF_3</i>.<br>Garbage litters the area and the door is boarded up, which forces you to enter with a carefully-placed crouch jump, a crowbar, or by using the vent on the side of the building. A full gas can and some batteries can be found in the supply room, and there's instructions on how to make a cooler under some of the garbage. A cat bed for Maxwell can be found behind a pallet.",
        related_images: [],
        category: "Transformers",
        icon: "./icons/transformer3.png",
        xPos: -396.5,
        yPos: -480.1
    },
    // CR Towers
    {
        name: "Coordinate Radar #1",
        description: "Target with <i>sv.target CR1</i>.",
        related_images: [],
        category: "CR",
        icon: "./icons/cr1.png",
        xPos: 103.9,
        yPos: 446
    },
    {
        name: "Coordinate Radar #2",
        description: "Target with <i>sv.target CR2</i>.",
        related_images: [],
        category: "CR",
        icon: "./icons/cr2.png",
        xPos: 540,
        yPos: -326.54
    },
    {
        name: "Coordinate Radar #3",
        description: "Target with <i>sv.target CR3</i>.",
        related_images: [],
        category: "CR",
        icon: "./icons/cr3.png",
        xPos: -624.47,
        yPos: -369.8
    },
    // Furfur Totems
    {
        name: "Furfur Totem",
        description: "",
        related_images: ['./images/furfur1_1.png', './images/furfur1_2.png'],
        category: "Furfur Totems",
        icon: "./icons/furfurA_0.png",
        xPos: -671.8,
        yPos: -563.7
    },
    {
        name: "Furfur Totem",
        description: "Can be dug up around the rocks near the fence.",
        related_images: ['./images/furfur2_1.png'],
        category: "Furfur Totems",
        icon: "./icons/furfurA_1.png",
        xPos: 253,
        yPos: 585.1
    },
    {
        name: "Furfur Totem",
        description: "Can be dug up close to the root around 3am. You may need scuba gear to do it.",
        related_images: ['./images/furfur3_1.png'],
        category: "Furfur Totems",
        icon: "./icons/furfurA_2.png",
        xPos: 391.1,
        yPos: -383.7
    },
    // Metal Tiles
    { // moved to roof above living quarters, next to skylight window
        name: "Metal Tile #1",
        description: "Hidden in an outdoor alcove on the side of the base. You can get it by dropping down from the roof.",
        related_images: ['./images/tile1_1.png', './images/tile1_2.png'],
        category: "Metal Tiles",
        icon: "./icons/metal_tile.png",
        xPos: -4.16,
        yPos: 9.87
    },
    { // still on top of the bridge, will need new pictures
        name: "Metal Tile #2",
        description: "On top of the post of the bridge.",
        related_images: ['./images/tile2_1.png', './images/tile2_2.png'],
        category: "Metal Tiles",
        icon: "./icons/metal_tile.png",
        xPos: -69.67,
        yPos: -10.9
    },
    // { // moved, no longer in the area
    //     name: "Metal Tile #3",
    //     description: "Found at the base of a tree in the wilderness.",
    //     related_images: ['./images/tile3_1.png', './images/tile3_2.png'],
    //     category: "Metal Tiles",
    //     icon: "./icons/metal_tile.png",
    //     xPos: -464.3,
    //     yPos: 173.5
    // },
    // { // moved? no longer on the cliff
    //     name: "Metal Tile #4",
    //     description: "Found around the rim of the cliff to the north of Yankee.",
    //     related_images: ['./images/tile4_1.png', './images/tile4_2.png'],
    //     category: "Metal Tiles",
    //     icon: "./icons/metal_tile.png",
    //     xPos: -525.3,
    //     yPos: -48
    // },
    // { // not there
    //     name: "Metal Tile #5",
    //     description: "Between two supply boxes at the hole.",
    //     related_images: ['./images/tile5_1.png', './images/tile5_2.png', './images/tile5_3.png'],
    //     category: "Metal Tiles",
    //     icon: "./icons/metal_tile.png",
    //     xPos: -615,
    //     yPos: -23
    // },
    // { // missing
    //     name: "Metal Tile #6",
    //     description: "On the roof of the guard's booth. You can get on top by parkouring on the metal poles nearby.",
    //     related_images: ['./images/tile6_1.png', './images/tile6_2.png', './images/tile6_3.png'],
    //     category: "Metal Tiles",
    //     icon: "./icons/metal_tile.png",
    //     xPos: -372,
    //     yPos: 702.6
    // },
    { // still exists, photo doesn't need to be updated
        name: "Metal Tile #7",
        description: "Found on the ground next to the green locker.",
        related_images: ['./images/tile7_1.png', './images/tile7_2.png'],
        category: "Metal Tiles",
        icon: "./icons/metal_tile.png",
        xPos: 616,
        yPos: 621
    },
    // { // missing
    //     name: "Metal Tile #8",
    //     description: "Found behind the server room of uniform. Once you are near the doors, crouch under the railing and walk around the platform to find it.",
    //     related_images: ['./images/tile8_1.png', './images/tile8_2.png'],
    //     category: "Metal Tiles",
    //     icon: "./icons/metal_tile.png",
    //     xPos: 500.37,
    //     yPos: -2.7
    // },
    // { // missing.
    //     name: "Metal Tile #9",
    //     description: "This marker isn't placed wrong. Go past the fence and keep going until you hit the corner between the northern and eastern invisible walls.",
    //     related_images: ['./images/tile9_1.png', './images/tile9_2.png', './images/tile9_3.png'],
    //     category: "Metal Tiles",
    //     icon: "./icons/metal_tile.png",
    //     xPos: 874,
    //     yPos: -874
    // },
    // Argemia Plushes
    {
        name: "Red Argemia",
        description: "Located in a steep pit next to a donut. Interacting with the donut will teleport you back home.<br>NOTE: The walls of the pit are too steep to allow you to walk out, so you can bring your ATV/a hook into the pit or interact with the donut to get out.",
        related_images: ['./images/redArgemia1_1.png', './images/redArgemia1_2.png'],
        category: "Plushes",
        icon: "./icons/red_argemia.png",
        xPos: 626,
        yPos: -128
    },
    {
        name: "Green Argemia",
        description: "Outside of the fence, located on the top of the mountain",
        related_images: ['./images/greenArgemia1_1.png', './images/greenArgemia1_2.png', './images/greenArgemia1_3.png'],
        category: "Plushes",
        icon: "./icons/green_argemia.png",
        xPos: 239,
        yPos: 828
    },
    {
        name: "Blue Argemia",
        description: "In the river near quebec.",
        related_images: ['./images/blueArgemia1_1.png'],
        category: "Plushes",
        icon: "./icons/blue_argemia.png",
        xPos: -309.6,
        yPos: 394.1
    },
    {
        name: "Cyan Argemia",
        description: "To summon, put exactly 12 shrimp packs in the pool, and then trigger an explosion in the water. A gas can is a good way to create an explosion.",
        related_images: ['./images/cyanArgemia1_1.png'],
        category: "Plushes",
        icon: "./icons/cyan_argemia.png",
        xPos: -8.5,
        yPos: 23.5
    },
    {
        name: "Magenta Argemia",
        description: "Spawns after you pick up the lifecrystal signal.",
        related_images: ['./images/magentaArgemia1_1.png'],
        category: "Plushes",
        icon: "./icons/magenta_argemia.png",
        xPos: 637.5,
        yPos: 46.8
    },
    {
        name: "Yellow Argemia",
        description: "The yellow Argemia plush requires a ritual to spawn.<br>- First, place a shrimp pack (or multiple) at each corner of the map's fence.<br>- Next, place a shrimp pack on the sewer drain in the basement.<br>- Then, nearing 12:50 at night, stand in a corner of the basement and face away from the shrimp. Around 00:00, a wooshing sound will play, and you can turn to find the argemia summoned. It might take a couple minutes to spawn, so do not turn until you hear it spawn or at least 00:15.<br><br>You can use a clock/watch to help keep track of time. This ritual can be difficult to preform due to cockroaches or Arirals eating the shrimp you've placed.",
        related_images: ['./images/yellowArgemia1_1.png', './images/yellowArgemia1_2.png'],
        category: "Plushes",
        icon: "./icons/yellow_argemia.png",
        xPos: -11,
        yPos: 23
    },
    {
        name: "Glowing Blue Argemia",
        description: "Found on top of an invisible cube in the sky. The item is fixed so only player interaction can move it. You can reach it by climbing the invisible wall with a hook.",
        related_images: ['./images/glowingBlueArgemia1_1.png', './images/glowingBlueArgemia1_2.png'],
        category: "Plushes",
        icon: "./icons/glowing_blue_argemia.png",
        xPos: 872,
        yPos: -792
    },
    {
        name: "Glowing Cyan Argemia",
        description: "Needs to be dug up using a shovel. You can use a metal detector if you're having any trouble finding it. Be careful to not let the plushie roll down the hill.",
        related_images: ['./images/glowingCyanArgemia1_1.png', './images/glowingCyanArgemia1_2.png', './images/glowingCyanArgemia1_3.png'],
        category: "Plushes",
        icon: "./icons/glowing_cyan_argemia.png",
        xPos: -634,
        yPos: 181.4
    },
    {
        name: "Glowing Magenta Argemia",
        description: "The plush's spawn location is located near the top of the tower. In order for the plush to spawn, something (a piece of trash, a drone, etc.) needs to enter the spawning location's hitbox. The usual method is placing a drone around (35.22, -37.23) and then having the drone fly straight up. You can use a digital map to place the drone accurately.<br>When the plush spawns, it will fall. Make sure to watch the drone's camera and check outside often so you don't miss it.",
        related_images: ['./images/glowingMagentaArgemia1_1.png', './images/glowingMagentaArgemia1_2.png'],
        category: "Plushes",
        icon: "./icons/glowing_magenta_argemia.png",
        xPos: 35.22,
        yPos: -37.23
    },
    {
        name: "Antibreather Plush",
        description: "Appears in the nest in the antibreather cave at 3:33am in-game. In order for it to spawn, you must be in the cave when the time passes. The plush won't disappear, but the plush only spawns in once, so don't lose it.<br>To open the cave, you need to be in the cave entrance when either wolfgang or the antibreather goes through it.",
        related_images: ['./images/antibreatherPlush1_1.png', './images/antibreatherPlush1_2.png'],
        category: "Plushes",
        icon: "./icons/antibreather_plush.png",
        xPos: -672.7,
        yPos: -567
    },
    {
        name: "Dream Plush",
        description: "A rainbow flower teddy bear plush.",
        related_images: ['./images/dreamPlush1_1.png'],
        category: "Plushes",
        icon: "./icons/dream_plush.png",
        xPos: 353,
        yPos: -311.8
    },
    // Points of interest
    {
        name: "Unknown Rozital Technology",
        description: "Found situated between two rocks, and will do nothing until you discover a certain signal.",
        related_images: ['./images/rozitalTech1_1.png', './images/rozitalTech1_2.png', './images/rozitalTech1_3.png', './images/rozitalTech1_4.png'],
        category: "Points of Interest",
        icon: "./icons/rozital.png",
        xPos: 637,
        yPos: 44
    },
    {
        name: "Basalt Pillars",
        description: "<div style=\"color: red;\">Warning: This could ruin your save</div><br>Can be found with the metal detector. Once dug up, it'll slowly grow out of the ground and start spreading. They will slowly spread in your direction. <u>The pillars have high durability, but they can be destroyed with a crowbar or shovel.</u>",
        related_images: ['./images/basaltPillars1_1.png', './images/basaltPillars1_2.png'],
        category: "",
        icon: "./icons/basalt_pillar.png",
        xPos: 465.5,
        yPos: -86.1
    },
    {
        name: "Green Locker",
        description: "Insert all 9 metal tiles and press the button.",
        related_images: ['./images/greenLocker1_1.png'],
        category: "Points of Interest",
        icon: "./icons/green_locker.png",
        xPos: 614.8,
        yPos: 627.5
    },
    {
        name: "Old Shack",
        description: "A dilapidated, old shack sits in the middle of the woods, and inside, a scorch mark stains the smooth dirt ground. From the mark sprouts a vibrant blood-red tree.<br>The air is strong here...",
        related_images: [],
        category: "Points of Interest",
        icon: "./icons/shack.png",
        xPos: 408.5,
        yPos: 24.3
    },
    // { // disabled as area has changed signifigantly
    //     name: "",
    //     description: "",
    //     related_images: [],
    //     category: "Points of Interest",
    //     icon: "./icons/debug.png",
    //     xPos: 655,
    //     yPos: -618.26
    // },
    {
        name: "Well",
        description: "",
        related_images: ['./images/well1_1.png'],
        category: "Points of Interest",
        icon: "./icons/well.png",
        xPos: 564.31,
        yPos: 265.66
    },
    {
        name: "Bunker",
        description: "",
        related_images: [],
        category: "Points of Interest",
        icon: "./icons/bunker.png",
        xPos: 60.25,
        yPos: 625.5
    },
    {
        name: "Picnic",
        description: "Appears on day 8",
        related_images: [],
        category: "Points of Interest",
        icon: "./icons/heater.png",
        xPos: -199,
        yPos: -483
    },
    {
        name: "Ariral Campsite",
        description: "Their new \"home\".",
        related_images: [],
        category: "Points of Interest",
        icon: "./icons/warp_arrow.png",
        xPos: 371.69,
        yPos: 388.55
    },
    {
        name: "Gravesite",
        description: "",
        related_images: [],
        category: "Points of Interest",
        icon: "./icons/grave.png",
        xPos: -347.4,
        yPos: -565.4
    },
    // Chicken Sandwiches
    {
        name: "Sandwich #1",
        description: "On top of the servers.",
        related_images: ['./images/sandwich1_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -8.73,
        yPos: 27.75
    },
    {
        name: "Sandwich #2",
        description: "Inside the oven.",
        related_images: ['./images/sandwich2_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -14.6,
        yPos: 8.75
    },
    {
        name: "Sandwich #3",
        description: "On top of the toilet in the corner.",
        related_images: ['./images/sandwich3_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -9.45,
        yPos: -0.12
    },
    {
        name: "Sandwich #4",
        description: "On the radio tower of top of one of the antennas. You can climb the pole with a hook to reach it.<br>Note that the light mounted on top doesn't have a hitbox, so the sandwich and you can fall right through it.",
        related_images: ['./images/sandwich4_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 22.8,
        yPos: -28.4
    },
    {
        name: "Sandwich #5",
        description: "Under the basement stairs.",
        related_images: ['./images/sandwich5_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -20.4,
        yPos: 27.2
    },
    {
        name: "Sandwich #6",
        description: "On the roof, on top of the air conditioning system and under the small radio tower",
        related_images: ['./images/sandwich6_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -2.5,
        yPos: 27.98
    },
    {
        name: "Sandwich #7",
        description: "On top of the Radome.",
        related_images: ['./images/sandwich7_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -17.04,
        yPos: 14.58
    },
    {
        name: "Sandwich #8",
        description: "On the roof of the garage.",
        related_images: ['./images/sandwich8_1.png', './images/sandwich8_2.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -19.58,
        yPos: 7.39
    },
    {
        name: "Sandwich #9",
        description: "On top of one of the stone arches.",
        related_images: ['./images/sandwich9_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 216,
        yPos: 541.1
    },
    {
        name: "Sandwich #10",
        description: "Under the bridge near the base.",
        related_images: ['./images/sandwich10_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -65.16,
        yPos: -12.78
    },
    {
        name: "Sandwich #11",
        description: "Inside the large log under a bunch of rocks.",
        related_images: ['./images/sandwich11_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 349.5,
        yPos: -344.6
    },
    {
        name: "Sandwich #12",
        description: "Under a supply crate in the poly testing area.",
        related_images: ['./images/sandwich12_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 518,
        yPos: -211.65
    },
    {
        name: "Sandwich #13",
        description: "Inside the old shack, in a corner under a table.",
        related_images: ['./images/sandwich13_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 409,
        yPos: 24.1
    },
    {
        name: "Sandwich #14",
        description: "Behind transformer 2 on the roof. Crammed between the wall and some machinery.",
        related_images: ['./images/sandwich14_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -549.8,
        yPos: 234.58
    },
    {
        name: "Sandwich #15",
        description: "Located on the metal walkways that go around Juliett.",
        related_images: ['./images/sandwich15_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -99.97,
        yPos: 203.2
    },
    {
        name: "Sandwich #16",
        description: "On the ground under the generator.",
        related_images: ['./images/sandwich16_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -623.1,
        yPos: -25.8
    },
    {
        name: "Sandwich #17",
        description: "On the ground outside of the cave.",
        related_images: ['./images/sandwich17_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -651.1,
        yPos: -587.6
    },
    {
        name: "Sandwich #18",
        description: "Inside the cave, in the middle of a pile of mushrooms.",
        related_images: ['./images/sandwich18_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: -683.8,
        yPos: -582.0
    },
    {
        name: "Sandwich #19",
        description: "On the ground next to the <i>Unknown Rozital Technology</i>.",
        related_images: ['./images/sandwich19_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 639.2,
        yPos: 44
    },
    {
        name: "Sandwich #20",
        description: "Needs to be dug up with a shovel. A metal detector can help in finding it.",
        related_images: ['./images/sandwich20_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 157.1,
        yPos: -583.95
    },
    {
        name: "Sandwich #21",
        description: "In a group of rocks behind Wiskey.",
        related_images: ['./images/sandwich21_1.png'],
        category: "Chicken Sandwiches",
        icon: "./icons/chickensandwich.png",
        xPos: 18.07,
        yPos: 529.25
    },
    // Skulls
    {
        name: "Skull",
        description: "Behind the boxes in the corner of the basement.",
        related_images: ['./images/skull1_1.png'],
        category: "Skulls",
        icon: "./icons/skull.png",
        xPos: -7.25,
        yPos: 19.74
    },
    {
        name: "Skull",
        description: "Dug up from under the Unknown Rozital Technology.<br>It can also be dug up while the Technology is still there if you shovel a specific point",
        related_images: ['./images/skull2_1.png', './images/skull2_2.png'],
        category: "Skulls",
        icon: "./icons/skull.png",
        xPos: 637.54,
        yPos: 44.2
    },
    {
        name: "Skull",
        description: "At Stonehenge.",
        related_images: ['./images/skull3_1.png'],
        category: "Skulls",
        icon: "./icons/skull.png",
        xPos: 212.27,
        yPos: 541.1
    },
    {
        name: "Skull",
        description: "Inside the gravel circle.",
        related_images: ['./images/skull4_1.png'],
        category: "Skulls",
        icon: "./icons/skull.png",
        xPos: -352,
        yPos: 47.4
    },
    {
        name: "Skull",
        description: "Inside the Box of Bones.",
        related_images: ['./images/boneBox1_3.png'],
        category: "Skulls",
        icon: "./icons/skull.png",
        xPos: 263.6,
        yPos: -7.3
    },
    {
        name: "Skull",
        description: "Near the radioactive capsule.",
        related_images: ['./images/skull5_1.png'],
        category: "Skulls",
        icon: "./icons/skull.png",
        xPos: -570,
        yPos: 302.76
    },
    {
        name: "Skull",
        description: "Inside the cave entrance.",
        related_images: ['./images/skull6_1.png'],
        category: "Skulls",
        icon: "./icons/skull.png",
        xPos: -655.93,
        yPos: -600.3
    },
    // Halloween Pumpkins
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>On top of the incinerator.",
        related_images: ['./images/pumpkin1_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: -21.53,
        yPos: 22.07
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>In front of the cave entrance.",
        related_images: ['./images/pumpkin2_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: -651.53,
        yPos: -588.92
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>At the top of the ladder, inside the wind turbine's nacelle.",
        related_images: ['./images/pumpkin3_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 118.4,
        yPos: -420.7
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>On top of the drain leading into the river.",
        related_images: ['./images/pumpkin4_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 671.74,
        yPos: -280.42
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>At the bottom of the smaller lake. Having scuba gear or a hook is recommended to reach it.",
        related_images: [],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 394.22,
        yPos: -496
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>On the barrier going over the river.",
        related_images: ['./images/pumpkin6_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 543.1,
        yPos: -699.4
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>Inside the large log under some rocks.",
        related_images: ['./images/pumpkin7_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 349.45,
        yPos: -344.64
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>On the roof of TR_3.",
        related_images: ['./images/pumpkin8_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: -400.8,
        yPos: -481.9
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>On top of Stonehenge.",
        related_images: ['./images/pumpkin9_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 210.44,
        yPos: 542.5
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>At the bottom of the well.",
        related_images: ['./images/pumpkin10_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 564.35,
        yPos: 265.7
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>Under the William Statue.",
        related_images: ['./images/pumpkin11_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 12.63,
        yPos: 580.9
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>Outside the construction site cabins.",
        related_images: ['./images/pumpkin12_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: -547,
        yPos: -56.6
    },
    {
        name: "Pumpkin",
        description: "Exclusive to the Halloween gamemode.<br><br>On top of the utility pole's light.",
        related_images: ['./images/pumpkin13_1.png'],
        category: "Halloween Pumpkins",
        icon: "./icons/pumpkin.png",
        xPos: 173.9,
        yPos: 51.96
    },
    // Items of Interest
    {
        name: "Shovel",
        description: "Found leaning on 3 supply boxes next to stonehenge.",
        related_images: ['./images/shovel1_1.png'],
        category: "Tools",
        icon: "./icons/shovel.png",
        xPos: 209.2,
        yPos: 535.2
    },
    {
        name: "Shovel",
        description: "Leaning against the wall, next to the red tree.",
        related_images: [],
        category: "Tools",
        icon: "./icons/shovel.png",
        xPos: 408.36,
        yPos: 20.95
    },
    {
        name: "Shovel",
        description: "Inside the building. You can break the door by hitting it with a crowbar, shovel, etc.",
        related_images: ['./images/shovel3_1.png'],
        category: "Tools",
        icon: "./icons/shovel.png",
        xPos: -369.12,
        yPos: 702.32
    },
    {
        name: "Shovel",
        description: "Found up in TR_2.",
        related_images: ['./images/shovel4_1.png'],
        category: "Tools",
        icon: "./icons/shovel.png",
        xPos: -543.53,
        yPos: 237.09
    },
    {
        name: "Watering Can",
        description: "Found on a shelf in TR_1.",
        related_images: ['./images/wateringCan1_1.png'],
        category: "Tools",
        icon: "./icons/watering_can.png",
        xPos: 398.72,
        yPos: 197.67
    },
    {
        name: "Watering Can",
        description: "Found up in TR_2.",
        related_images: ['./images/wateringCan2_1.png'],
        category: "Tools",
        icon: "./icons/watering_can.png",
        xPos: -549.13,
        yPos: 236.71
    },
    {
        name: "Watering Can",
        description: "Found in the corner of TR_3.",
        related_images: ['./images/wateringCan3_1.png'],
        category: "Tools",
        icon: "./icons/watering_can.png",
        xPos: -402.26,
        yPos: -477.54
    },
    {
        name: "Axe",
        description: "Inside the abandoned shack under the bed.",
        related_images: ['./images/axe1_1.png'],
        category: "Tools",
        icon: "./icons/axe.png",
        xPos: 406.5,
        yPos: 22.5
    },
    {
        name: "Cacti",
        description: "Dug up next to the light post",
        related_images: ['./images/cacti1_1.png'],
        category: "",
        icon: "./icons/cacti.png",
        xPos: 149.2,
        yPos: -10.5
    },
    {
        name: "Box of Drives",
        description: "A box containing 8 drives with level 3 signals can be dug up near the pole in the middle of the grassy circle. You won't get any points for selling them, but make sure to check them out on your console at some point :)",
        related_images: ['./images/driveBox1_1.png'],
        category: "",
        icon: "./icons/drive_box.png",
        xPos: -118.8,
        yPos: -42.1
    },
    // { // Inaccessible, again
    //     name: "Drive",
    //     description: "Can be dug up on the gravel between the bunker and the parking lot.",
    //     related_images: [],
    //     category: "",
    //     icon: "./icons/drive.png",
    //     xPos: 16.5,
    //     yPos: 22.4
    // },
    {
        name: "Box of bones",
        description: "Can be dug up next to the boulder in the middle of the grassy circle. An old wooden box containing a some bones and a skull. The box is breakable.",
        related_images: ['./images/boneBox1_1.png', './images/boneBox1_2.png', './images/boneBox1_3.png'],
        category: "",
        icon: "./icons/old_wooden_box.png",
        xPos: 263.6,
        yPos: -7.3
    },
    {
        name: "Radioactive Capsule",
        description: "Located in the middle of a dirt patch with a skeleton reaching out placed next to it. Needs a shovel to get it out of the ground",
        related_images: ['./images/radioactiveCapsule1_1.png', './images/radioactiveCapsule1_2.png', './images/radioactiveCapsule1_3.png'],
        category: "",
        icon: "./icons/radioactive_canister.png",
        xPos: -569.5,
        yPos: 303.3
    },
    {
        name: "EMF Detector",
        description: "Buried close to a floodlight. Toggle on with right click while holding. 5 lights on it indicate how strong the emf is. Example locations for strong EMF is the basement, stonehenge, and the old shack.",
        related_images: ['./images/emfDetector1_1.png'],
        category: "Tools",
        icon: "./icons/emf_detector.png",
        xPos: -623,
        yPos: -33.8
    },
    {
        name: "Pickaxe",
        description: "Stuck in the ground next to a underwater root. You may need scuba gear to reach it.",
        related_images: [],
        category: "Tools",
        icon: "./icons/pickaxe.png",
        xPos: 391.6,
        yPos: -384.3
    },
    {
        name: "Geiger Counter",
        description: "A tool for detecting radiation.",
        related_images: [],
        category: "Tools",
        icon: "./icons/geiger_counter.png",
        xPos: 62.9,
        yPos: 627.77
    },
    {
        name: "Gravity Gun",
        description: "Spawns once you catch a certain signal.",
        related_images: [],
        category: "Tools",
        icon: "./icons/gravgun.png",
        xPos: -651.9,
        yPos: -236.7
    },
    {
        name: "Candle Holder",
        description: "An old style candle holder you can dig up from inside a log. It is a Youtuber easter egg created in reference to the Youtuber <a href=\"https://www.youtube.com/channel/UCnCmb1vpv90EeSX5g7K4UYQ\" target=\"_blank\" rel=\"noopener noreferrer\">The Librarian</a>. You can light it with a lighter!",
        related_images: [],
        category: "",
        icon: "./icons/candle.png",
        xPos: 378.5,
        yPos: -461
    },
    {
        name: "Argemia Mug",
        description: "Located on top of the utility pole, a basic white mug with a portrait of Argemia Armuntela on the side. The item is fixed so only player interaction can move it. You can use a hook to climb the pole.",
        related_images: ['./images/argemug1_1.png'],
        category: "",
        icon: "./icons/argemug.png",
        xPos: -62.2,
        yPos: -304.58
    },
    {
        name: "Fishing Supplies",
        description: "Needs to be dug up with a shovel.<br>Located to the right of the wind turbine, an old box containing some fishing rod parts and some bait. Put all the fishing rod parts together on a workbench to create a fishing rod.<br>Note that this digging spot requires more precision compared to other buried objects.",
        related_images: ['./images/fishingSupplies1_1.png'],
        category: "Tools",
        icon: "./icons/fishermans_box.png",
        xPos: 176.0,
        yPos: -460.46
    },
    {
        name: "Bike Helmet",
        description: "The bike helmet protects your head, which can decrease your damage taken from impacts. You can reach it by climbing up or grappling down the cliff using a hook, or by very carefully sliding down.",
        related_images: ['./images/helmet1_1.png', './images/helmet1_2.png', './images/helmet1_3.png'],
        category: "Tools",
        icon: "./icons/helmet.png",
        xPos: -50.6,
        yPos: 630
    },
    {
        name: "Hiking Boots",
        description: "Found in the corner of TR_3.<br>Wearing them allows you to walk up steeper surfaces without slipping and allows you to fall farther distances without collapsing or taking damage.",
        related_images: ['./images/hikingBoots1_1.png'],
        category: "Tools",
        icon: "./icons/hiking_boots.png",
        xPos: -402.4,
        yPos: -478.67
    },
    {
        name: "MRE Barrel",
        description: "Inside an upright log in the river. Has 38 MREs in it.",
        related_images: [],
        category: "",
        icon: "./icons/barrel.png",
        xPos: 233.36,
        yPos: -329.2
    },
    {
        name: "Jackets",
        description: "Two jackets, equippable on Omega Kerfur.",
        related_images: [],
        category: "KerfurO Accessories",
        icon: "./icons/jacket.png",
        xPos: -622.3,
        yPos: -30
    },
    {
        name: "Bowties",
        description: "Two bowties, equippable on Omega Kerfur.",
        related_images: [],
        category: "KerfurO Accessories",
        icon: "./icons/bowtie.png",
        xPos: 518.7,
        yPos: -212.8
    },
    {
        name: "Large Glasses",
        description: "Two large pairs of glasses, equippable on Omega Kerfur.",
        related_images: [],
        category: "KerfurO Accessories",
        icon: "./icons/kerf_glasses.png",
        xPos: 61.39,
        yPos: 625.86
    },
    {
        name: "Badge",
        description: "Two badges, equippable on Omega Kerfur.",
        related_images: [],
        category: "KerfurO Accessories",
        icon: "./icons/badge.png",
        xPos: -621.15,
        yPos: -28.2
    },
    {
        name: "Maid Outfit",
        description: "It's a maid outfit. Located in a safe that can be dug up near the lightpost. Omega Kerfur can wear it, or you can.<br>Be careful to not stand on where the safe is while you are digging it up, or you might get stuck in it.",
        related_images: ['./images/maidOutfit1_1.png', './images/maidOutfit1_2.png'],
        category: "KerfurO Accessories",
        icon: "./icons/maid_outfit.png",
        xPos: -357.4,
        yPos: -488.95
    },
    {
        name: "Jar of honey",
        description: "A jar of honey. On top of the utility pole, restores 10 food and 100 health on consumption.",
        related_images: [],
        category: "",
        icon: "./icons/jar_of_honey.png",
        xPos: -352.5,
        yPos: -438.7
    },
    {
        name: "Massive Limestone Cube",
        description: "A diggable Massive Limestone Cube",
        related_images: [],
        category: "",
        icon: "./icons/limestone_block.png",
        xPos: 566.74,
        yPos: 236.66
    },
    {
        name: "Wasp Nest",
        description: "A diggable Wasp Nest",
        related_images: [],
        category: "",
        icon: "./icons/wasp_nest.png",
        xPos: 420.7,
        yPos: 266.3
    },
    {
        name: "Thingy Seeds",
        description: "Seeds for growing a special type of plant.",
        related_images: ['./images/thingySeeds1_1.png', './images/thingySeeds1_2.png'],
        category: "",
        icon: "./icons/thingy_seeds.png",
        xPos: 411.9,
        yPos: 25.6
    },
    {
        name: "Car Battery Charger",
        description: "Found on top of the workbench in the side room.<br><br>To use it, plug it into a nearby outlet, and then bring a car battery close (you can extract it from your ATV with a wrench).<br>When you bring a car battery close, the charger will automatically conenct to it and start charging it. Make sure the correct color clamps are connected to the correct color contacts, otherwise it'll spark and eventually explode. (Rotate the battery to change what contacts the battery charger connects to)",
        related_images: [],
        category: "",
        icon: "./icons/carbatterycharger.png",
        xPos: -550.11,
        yPos: 235.97
    },
    // Blueprints
    {
        name: "Radioactive Capsule Blueprint",
        description: "A blueprint for making radioactive capsules. Including it on the bench along with 4 Compressed radioactive material, 4 Metal Scrap, and a gas welder allows you to craft a radioactive capsule.",
        related_images: [],
        category: "",
        icon: "./icons/blueprint.png",
        xPos: 62.45,
        yPos: 627.27
    },
    // KerfurO parts
    {
        name: "Limb Joints",
        description: "Found in TR_1. In the office, inside a bucket.",
        related_images: ['./images/limbJoints1_1.png'],
        category: "KerfurO Parts",
        icon: "./icons/limb_joint.png",
        xPos: 390.47,
        yPos: 198.27
    },
    {
        name: "Limb Joints",
        description: "Found in TR_2. In the office, on a box under a workbench.",
        related_images: ['./images/limbJoints2_1.png'],
        category: "KerfurO Parts",
        icon: "./icons/limb_joint.png",
        xPos: -550.22,
        yPos: 235.5
    },
    {
        name: "Limb Joints",
        description: "Found in TR_3. In the office corner on the shelf.",
        related_images: ['./images/limbJoints3_1.png'],
        category: "KerfurO Parts",
        icon: "./icons/limb_joint.png",
        xPos: -400.55,
        yPos: -477.15
    },
    {
        name: "Buried Kerfur Parts",
        description: "Contains two ball joints.",
        related_images: [],
        category: "KerfurO Parts",
        icon: "./icons/old_wooden_box.png",
        xPos: -541.07,
        yPos: -475.35
    },
    {
        name: "Buried Kerfur Parts",
        description: "Contains two ball joints.",
        related_images: [],
        category: "KerfurO Parts",
        icon: "./icons/old_wooden_box.png",
        xPos: -529.78,
        yPos: -462.75
    },
    {
        name: "Buried Kerfur Parts",
        description: "Contains two ball joints.",
        related_images: [],
        category: "KerfurO Parts",
        icon: "./icons/old_wooden_box.png",
        xPos: -532.58,
        yPos: -481.11
    },
    {
        name: "Buried Kerfur Parts",
        description: "Contains two ball joints.",
        related_images: [],
        category: "KerfurO Parts",
        icon: "./icons/old_wooden_box.png",
        xPos: -524.08,
        yPos: -471.09
    },
    {
        name: "Buried Kerfur Parts",
        description: "Contains two ball joints.",
        related_images: [],
        category: "KerfurO Parts",
        icon: "./icons/old_wooden_box.png",
        xPos: -531.98,
        yPos: -472.44
    },
    {
        name: "Buried Kerfur Parts",
        description: "Contains two ball joints.",
        related_images: [],
        category: "KerfurO Parts",
        icon: "./icons/old_wooden_box.png",
        xPos: -524.14,
        yPos: -479.11
    },
    {
        name: "Omega AI Module",
        description: "Located in a safe found at the bottom of the lake, it's quite hard to get it out of the water.<br><br>Cracking the safe is easy.<br>First, grab onto the safe's door and start turning your scroll wheel in a direction. Go slowly as your mouse wheel can go. As you spin the dial, you will hear clicking. Once you hear a click that is very slightly different, reverse the direction you are scrolling and start spinning in the opposite direction. Continue going back and forth, reversing your scrolling until the safe unlocks.",
        related_images: [],
        category: "KerfurO Parts",
        icon: "./icons/omega_ai_module.png",
        xPos: 404.8,
        yPos: -406
    },
    // Notes
    {
        name: "Note",
        description: "<blockquote>\"password: 1111\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 1.43,
        yPos: 5.49
    },
    {
        name: "Note",
        description: "<blockquote>\"1234 pass\"</blockquote>The password for the admin room.",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -15.28,
        yPos: 11.9
    },
    {
        name: "Note",
        description: "<blockquote>\"Do not enter\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 20.35,
        yPos: 23.32
    },
    {
        name: "Note",
        description: "Inside a basement locker with some rocks.<blockquote>\"tools to break the boxes with\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -14.94,
        yPos: 19.38
    },
    {
        name: "Note",
        description: "Attached to the face of the drive eraser.<blockquote>\"This machine erases the data from the drive.<br>Insert the drive into the drive slot, press the button, wait a few minutes, then take the empty drive.\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 1.27,
        yPos: 11.76
    },
    {
        name: "Note",
        description: "<blockquote>\"ATV maintenance:<br><br>You must keep the ATV at the maximum efficiancy, this is the quick recap of what you should and should not to do.<br><br>1) The Fuel<br>You must refuel your ATV if you don't want to get stuck in the middle of nowhere.<br><br>2) The Battery<br>The battry drains whenever you use the functions of the atv such as turbo of lights, do not forget to turn them off if youre not using them.<br><br>3) Wheels<br>Keep an eye on the wheels and keep them in the good state, otherwise they will break apart and need a replacement. Use the wrench to detach the wheels and fix them by using the tools you can find.<br><br>4) Cleaning<br>Keep your ATV clean and nice. Use the sponge or any other cleaning tools and scrub the dirt away. To clean the wheels they should be detached first.\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -23.1,
        yPos: 9.8
    },
    {
        name: "Note",
        description: "Attached to the face of the tape machine.<blockquote>\"Tapes are a cruicial part of the daily task! You must send a both tapes every day to complete the daily task.<br>Make sure they are both full of data!\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 0,
        yPos: 23.76
    },
    {
        name: "Note",
        description: "Attached to the wall next to the drone panel.<blockquote>Drone can be used to send off the daily task items and sell items for points.<br><br>Open the Delivery Drone Access Panel, then use the keyboard to call or send the drone.<br>Put items in the drone sack, then use the keyboard again to send off the drone.<br><br>To put items in the sack - you can use it as a normal container, for big items like the drive box - hold Shift and LMB on the sack to put the item into the container.</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -24,
        yPos: 2.47
    },
    {
        name: "Note",
        description: "Attached to the face of the console.<blockquote>You can do sv.target with different types of objects such as:<br>ATV - atv, car, vehicle<br>Coordinate radars - cr1, cr2, cr3<br>Alpha Base - base, home<br>Different satellites by their name<br>Misc objects</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 1.13,
        yPos: 25.57
    },
    {
        name: "Note",
        description: "<blockquote>\"23:11<br>Taking a note for whoever reading this, saw that one figure standing next to the concrete pole. Could not get a good look, my eyes were blurry from the lack of sleep, maybe hallucination who knows. Keep your eye on this.<br><br>Update 8:40<br>Came out investigating the place, saw footprints at the exact same place where the figure was last night.<br><br>Update 17:09<br>i do not feel safe here i want to leave\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -1.9,
        yPos: 27.06
    },
    {
        name: "Note",
        description: "<blockquote>\"...do-it-yourself kinda thing...<br><br>...green crystals, a couple of them...<br><br>...your hands on welding apparatus...\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperWhite.png",
        xPos: 61.56,
        yPos: 623.33
    },
    {
        name: "Note",
        description: "<blockquote>\"Ich habe keine Familie oder Freunde, also niemanden, der bereit wäre, an einem solchen Leben teilzunehmen, also wer auch immer das ist. Ich übertrage Ihnen das Eigentum an meiner wertvollen Ausrüstung. Sie finden es möglicherweise bei 175:-460. Viel Glück.<br><br>Ludwig Handschuch.\"</blockquote>This note describes the fishing box at x: 176, y: -460.46.",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 58.36,
        yPos: 627.51
    },
    {
        name: "Note",
        description: "<blockquote>\"Day 41<br><br>We finally got more financial support for out mission<br>We can get deeper this time.<br><br>But today i noticed something interesting, the hole made one deep bassy sound.<br>Couldnt record it and i dont know if it was naturally made sound, but it sounds like really deep metal squeek<br><br>This hole is pretty weird\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -622.15,
        yPos: -30.43
    },
    {
        name: "Note",
        description: "<blockquote>\"Day 14<br><br>Is this thing infinite? I dont know! It keeps going down and down and down we have no rope already!<br>At least these yellow metal walls have ridges on them so we dont have to climb on dry ass concrete walls.<br><br>We dont give up, we are going down for answers.\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -351.5,
        yPos: 46.9
    },
    {
        name: "Note",
        description: "<blockquote>\"...and do NOT forget the coolers! They are quite expensive so i found a way how to assemble them by yourself...<br><br>...and you will need: 2 accumulators, 4 metal parts and 4 sets of electronics...<br><br>...scrap of metal, you can find some for gpus...<br><br>...you will figure out how to assemble...<br><br>...metal scrap as slot...\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: -394.4,
        yPos: -482.27
    },
    {
        name: "Note",
        description: "<blockquote>\"Diaboli campestribus<br><br>Redi ad unde venistis<br><br>Noli redire, et huius loci obliviscere<br><br>Non hic es receptus<br><br>Diaboli campestribus\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 213.44,
        yPos: 541.83
    },
    {
        name: "Note",
        description: "There are 3 pieces of paper here, stacked on top of eachother:<blockquote>\"...pour gasoline in an empty bottle, 2 pieces of paper...<br><br>...craft...<br><br>...enough damage...<br><br>...collapsed into pieces...<br><br>...more this night, they keep...\"</blockquote><br>Paper 2:<blockquote>\"...from the ground, like an undead!<br><br>It was chasing me all the way up to the booth, tried to lock...<br><br>...bones, glowing eye, making weird ungodly sounds...\"</blockquote><br>Paper 3:<blockquote>\"...hammer, this thing does not care! The bite felt like a hydraulic press, kicked its leg...<br><br>...and they keep the money, this is a cursed place, no wonder they drop less and less people...<br><br>...the fence, i do not care if they shoot me from these towers, the forest is dense enough...\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 390.5,
        yPos: 201.7
    },
    {
        name: "Note",
        description: "<blockquote>\"WIP<br>New trees test polygon<br>Take some food\"</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 517.5,
        yPos: -212.6
    },
    {
        name: "Notebook",
        description: "<blockquote>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH<br>IT\"S RAINING FLESH</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/notebook.png",
        xPos: 774.79,
        yPos: -478.15
    },
    {
        name: "Note",
        description: "<blockquote>if you hear music in a forest - run</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperBrown.png",
        xPos: 388.44,
        yPos: 531.22
    },
    {
        name: "Notebook",
        description: "<blockquote>...this shit is ridiculous, we told you pack everything and leave ASAP, but you would not do...<br><br>..and buy as much [gas] as possible, you got it? It is easier to get and we do not have much time, use [bottles] to pour the right amount. After all it is...</blockquote><br><blockquote>...metal pipe, look in the [metal] pile under my workstation, you should find something as a tube substitute, and make...</blockquote><br><blockquote>..seal with [plastic], look at the scrap pile again, right next to my table in the workshop...<br><br>...improve, by [gluing] together an [electronic] part to the tube, fix it with [plastic], and strap it to the tube...</blockquote><br><blockquote>...NOT a joke alright? I hope this piece will reach your destination, best of...</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/notebook.png",
        xPos: 526.93,
        yPos: -699.31
    },
    {
        name: "Note",
        description: "<blockquote>68454731694g766s6o74306i46334764686649776t75437b6q704932695n49306e4x437b504s73326o446536504j4761504w47324675726f68454731694t766r684j737s504g59646p44646r68454731694j766w6c74306s4644397n6f4s49776c75437o6p704932695e49306s4g437o504r73326f446536504x4761504f6t676n6649776f75437s6d704932695o49306n4j437s504f73326p446536504s4761504i55326s4f7o6r68454731694j766w6c74306s6o4j4931694s49776c75437o6p704932695e49746t745135504f73326p446536504r6j35694s49306b4t437n504i73326t446536504g4761504s4q63694j586w68454731694g766s6o74306i6t4g4931694o49776o75437e6u704932695b49766o33546r68454731694j766w6c74306s6o4j4931694s49776c75437o6p704932695e49716t754979504f73326p446536504s4761504j59646t44646f68454731694t766r6f74306w477547706d5o49776o75437e6u7049766d44646s6o4j4931694s49776c75437o6p704932695e496x69326530504f73326p446536504s4761504j59646t44646f68454731694t766r6f74306w684g5567504s73326o446536504j4761504x59646c44646s68454731694s766i6t74306f46334764686649776p75437n6g704932695s49306b4t437n504i73326t446536504g4761504s47324675726r68454731694j766w684g737o504s59646f44646w68454731694g766s6o74306i4644397s6c4o49776o75437e6u704932695b49306o4s437e504w73326c446536504t4761504r6j676s6649776c75437o6p704932695e49306s4g437o504r73326f446536504x4761504f55326o4r7e6w68454731694g766s6o74306i6t4g4931694o49776o75437e6u704932695b49746p745135504r73326f446536504w6g35694o49306n4j437s504f73326p446536504s4761504i4v63694g586s68454731694s766i6t74306f6p4s4931694e49776t75437b6q704932695n49766e33546w68454731694g766s6o74306i6t4g4931694o49776o75437e6u704932695b49716p754979504r73326f446536504x4761504g59646p44646r68454731694j766w6c74306s477547706p5e49776t75437b6q7049766p44646i6t4g4931694o49776o75437e6u704932695b496t69326530504r73326f446536504x4761504g59646p44646r68454731694j766w6c74306s684s5567504i73326t446536504g4761504t59646o44646i68454731694x766f6p74306r46334764686649776f75437s6d704932695o49306n4j437s504f73326p446536504s4761504i47324675726w68454731694g766s684s737e504x59646c44646s68454731694s766i6t74306f4644397o6o4e49776t75437b6q704932695n49306e4x437b504s73326o446536504j4761504w6g676o6649776o75437e6u704932695b49306o4s437e504w73326c446536504t4761504r55326e4w7b6s68454731694s766i6t74306f6p4s4931694e49776t75437b6q704932695n49746f745135504w73326c446536504s6s35694e49306s4g437o504r73326f446536504x4761504f4r63694s586i68454731694x766f6p74306r6f4x4931694b49776p75437n6g704932695s49766b33546s68454731694s766i6t74306f6p4s4931694e49776t75437b6q704932695n49716f754979504w73326c446536504t4761504s59646f44646w68454731694g766s6o74306i477547706u5b49776p75437n6g7049766u44646f6p4s4931694e49776t75437b6q704932695n496j69326530504w73326c446536504t4761504s59646f44646w68454731694g766s6o74306i684x5567504f73326p446536504s4761504j59646t44646f68454731694t766r6f74306w46334764686649776c75437o6p704932695e49306s4g437o504r73326f446536504x4761504f47324675726s68454731694s766i684x737b504t59646o44646i68454731694x766f6p74306r4644397e6t4b49776p75437n6g704932695s49306b4t437n504i73326t446536504g4761504s6s676e6649776t75437b6q704932695n49306e4x437b504s73326o446536504j4761504w55326b4s7n6i68454731694x766f6p74306r6f4x4931694b49776p75437n6g704932695s49746c745135504s73326o446536504i6x35694b49306o4s437e504w73326c446536504t4761504r4h63694x586f68454731694t766r6f74306w6c4t4931694n49776f75437s6d704932695o49766n33546i68454731694x766f6p74306r6f4x4931694b49776p75437n6g704932695s49716c754979504s73326o446536504j4761504x59646c44646s68454731694s766i6t74306f477547706q5n49776f75437s6d7049766q44646r6f4x4931694b49776p75437n6g704932695s496g69326530504s73326o446536504j4761504x59646c44646s68454731694s766i6t74306f684t5567504r73326f446536504x4761504g59646p44646r68454731694j766w6c74306s46334764686649776o75437e6u704932695b49306o4s437e504w73326c446536504t4761504r47324675726i68454731694x766f684t737n504j59646t44646f68454731694t766r6f74306w4644397b6p4n49776f75437s6d704932695o49306n4j437s504f73326p446536504s4761504i6x676b6649776p75437n6g704932695s49306b4t437n5048</blockquote>",
        related_images: [],
        category: "Notes",
        icon: "./icons/paperWhite.png",
        xPos: -1908.67,
        yPos: 1731.12
    }
]