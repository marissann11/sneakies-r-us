const { Shoe } = require('../models');

const shoeData = [
  {
    name: 'Adidas Yeezy Boost 380 Alien',
    our_price: 315,
    description: `Yeezy has introduced a new silhouette to their product line with the adidas Yeezy Boost 
    380 Alien, now available on StockX. This model was originally known to be the Yeezy Boost 350 V3, 
    but upon release it was given its own name. This 380 Alien features a never before seen Primeknit 
    pattern on its upper and lacks the traditional lateral side strip. An upgraded thicker Boost midsole 
    and engineered outsole grip complete the design.`,
    brand: 'Adidas',
    year: '2019',
    filename: 'Alien.jpg',
    price: 'price_1KbIsNDT393wRvxWSM70EonW',
  },
  {
    name: 'Nike Air Max 1 Atmos Safari',
    our_price: 615,
    description: `The Atmos x Air Max 1 'Safari' is a 2016 re-release of a classic 2002 collaboration 
        with Japanese brand Atmos. The reissue features the same color-blocking as the original but swaps 
        out the 2002s canvas toe box and gum sole for a hairy suede toe box and ice-blue translucent sole.`,
    brand: 'Nike',
    year: 2016,
    filename: 'AtmosSafari.jpg',
    price: 'price_1KbIslDT393wRvxWBNsg522o',
  },
  {
    name: 'Adidas Yeezy Boost 350 V2 Beluga 2.0',
    our_price: 575,
    description: `The Yeezy Beluga 2.0 takes Kanye West's famous adidas sneakers full circle by returning to the 
    colors of the first adidas Yeezy Boost 350 V2. While the original colorway featured a bright orange 
    (officially Solar Red) stripe across the side, the 2017 release of the Yeezy Beluga colorway is much more subtle. 
    This colorway utilizes the same Zebra-like stripes as the original but the SPLY-350 branding is the only part of the 
    upper with a contrasted color-this time called Bold Orange.`,
    brand: 'Adidas',
    year: 2017,
    filename: 'Beluga2.jpg',
    price: 'price_1KbIt6DT393wRvxWQcNwpFWI',
  },
  {
    name: 'New Balance 550 Shadow',
    our_price: 115,
    description: `The New Balance 550 Shadow features a black and grey leather upper with mesh paneling around the collars. 
    A puffed New Balance logo and "550" branding on the quarter panels nods to the origins of New Balance's basketball line.`,
    brand: 'NewBalance',
    year: '2021',
    filename: 'Black550.jpg',
    price: 'price_1KbIucDT393wRvxW0fFdycDB',
  },
  {
    name: 'Air Jordan 6 Retro Carmine',
    our_price: 270,
    description: `The Air Jordan 6 Carmine returned in its original form in 2021. The nearly 20-year-old colorway 
    first made its appearance in 1991 during Michael Jordan’s ’91-’92 season and brought in a new form of color 
    blocking to the signature silhouette. The Air Jordan 6 Carmine combines red, white, and black colors to 
    represent the Chicago Bulls’ signature colors. The upper features bold red and white colors that help the 
    model pop while on foot. From there, the upper is met with a white and black midsole, with hits of an icy blue 
    outsole appear as well. The final touch to this OG’s return is the signature “Nike Air” on the heel, replacing 
    2008 and 2012 retros’ “Jumpman” logo.`,
    brand: 'Jordan',
    year: '2021',
    filename: 'Carmines.jpg',
    price: 'price_1KbIvADT393wRvxW2XsPBbri',
  },
  {
    name: 'Air Jordan 13 Retro Flint',
    our_price: 300,
    description: `With previous retros in 2005 and 2010, this is the third time that the Jordan 13 Flint has been 
    reintroduced. This Jordan 13 Retro consists of a navy mesh and white leather upper with flint grey suede underlays. 
    A Jumpman holograph on the ankle, 3M detailing throughout the upper, and Carolina blue branding on the tongue completes 
    the design.`,
    brand: 'Jordan',
    year: '2020',
    filename: 'Flint.jpg',
    price: 'price_1KbIvcDT393wRvxWC7rQuvko',
  },
  {
    name: 'Air Jordan 1 Retro High OG Light Fusion Red',
    our_price: 160,
    description: `The Air Jordan 1 Light Fusion Red features a white leather upper with Light Fusion Red overlays and 
    Laser Orange on the Swoosh and ankle wrap. A woven Nike label stitched atop the tongue completes the design.`,
    brand: 'Jordan',
    year: '2021',
    filename: 'Fusion.jpg',
    price: 'price_1KbIvxDT393wRvxWcH16edIR',
  },
  {
    name: 'Air Jordan 6 Retro Gold Hoops',
    our_price: 200,
    description: `The women's Air Jordan 6 Gold Hoops (W) draws inspiration from gold hoop earrings and their allure. 
    Its design is composed of a white tumbled leather upper with hints of pale pink on the tongue. From there, interconnected 
    gold hoops and Jumpman emblems are attached to the shoe’s signature lace lock`,
    brand: 'Jordan',
    year: '2021',
    filename: 'Hoops.jpg',
    price: 'price_1KbIwQDT393wRvxWweMrCzNQ',
  },
  {
    name: 'New Balance 990v3 x JJJJound',
    our_price: 400,
    description: `JJJJound and New Balance teamed up again for their second 990v3 design with the New Balance 990v3 JJJJound Olive.
    Arriving with olive mesh and premium suede uppers, the New Balance 990v3 JJJJound Olive uses a minimalist approach to create 
    a shoe geared for everyday wear. Black New Balance logos and overlays bring sharp contrast to the tonal green background. A silver 
    reflective heel wrap with JJJJound branding adds a custom touch. From there, a cream ENCAP sole at the base completes the design.`,
    brand: 'NewBalance',
    year: '2022',
    filename: 'JJJJound.jpg',
    price: 'price_1KbIwmDT393wRvxWbV2GoPgu',
  },
  {
    name: 'Air Jordan 1 x SB LA to Chicago',
    our_price: 590,
    description: `This AJ 1 SB comes with a white upper plus blue and yellow accents, 
    yellow Nike "Swoosh", white midsole, and a black sole. Underneath the purple and yellow coloring
    you can find some other colors, but only when the paint is irritated. GET TO SKATING!!!`,
    brand: 'Jordan',
    year: 2019,
    filename: 'LaToChi.jpg',
    price: 'price_1KaTYjDT393wRvxWhswRyLW5',
  },
  {
    name: 'Air Jordan 1 x Off White UNC ',
    our_price: 2500,
    description: `The third installment of the Air Jordan and Virgil Agbloh collaboration. 
        This sneakers pays homage to the glory days of Jordan in college at UNC. 
        The sneakers come in a white, dark powder blue and cone colorway, with 
        a white and blue deconstructed leather upper and Off-White detailing throughout.`,
    brand: 'Jordan',
    year: 2018,
    filename: 'OffWhiteUNC.jpg',
    price: 'price_1KaWMODT393wRvxWQqj9g0oJ',
  },
  {
    name: 'Nike Air Max 1 x Parra',
    our_price: 675,
    description: `Legendary Dutch artist Parra and Nike have once 
        again teamed up for their first collab in over a decade!
        This Nike Air Max 1 takes abstract interpretations of cityscape and 
        landscape imagery, applying it to the Air Max's iconic silhouette. 
        Using his traditional color palette of white, light blue, red, grey, 
        and pink, this pair is sure to turn heads with its unique and vibrant style.`,
    brand: 'Nike',
    year: 2018,
    filename: 'ParraAM1.jpg',
    price: 'price_1KaWMkDT393wRvxWdXh9zY6X',
  },
  {
    name: 'Air Jordan 1 Rookie of the Year',
    our_price: 665,
    description: `What better way to celebrate MJs rookie of the year award than clinching 
        the Jordan 1 Retro High Rookie of the Year. This unique shoe comes with a white and 
        harvest leather upper, black Nike “Swoosh”, white midsole, and a black sole.`,
    brand: 'Jordan',
    year: 2018,
    filename: 'ROTY.jpg',
    price: 'price_1KaWN8DT393wRvxWyj3DCHEI',
  },
  {
    name: 'Air Jordan 1 Retro High Royal Toe',
    our_price: 300,
    description: `The Royal Toe takes inspiration from the original Jordan 1 Royal colorway 
    (which released in 1985) and adds design elements of the Black Toe 1 to create a familiar, 
    but new dialogue. This AJ 1 features a white and royal leather upper with black leather overlays 
    and detailing. A white midsole, royal outsole, and branded leather tongue tag completes this design.`,
    brand: 'Jordan',
    year: '2020',
    filename: 'RoyalToe.jpg',
    price: 'price_1KbIxFDT393wRvxWGdTQITfs',
  },
  {
    name: 'Air Jordan 1 Shattered Backboard',
    our_price: 1600,
    description: `The name “Shattered Backboard” comes from a moment after Michael Jordans 
    rookie season, in the summer of 1985, when he played in an exhibition game in Italy. 
    Jordan, wearing the orange, black, and white of Stefanel Trieste, hit a dunk so hard 
    he shattered the glass backboard.`,
    brand: 'Jordan',
    year: 2015,
    filename: 'SBB.jpg',
    price: 'price_1KaWNVDT393wRvxWLW6ULrgi',
  },
  {
    name: 'Air Jordan 1 Retro High OG Seafoam',
    our_price: 270,
    description: `The women's Air Jordan 1 High Seafoam (W) arrives in a smooth white leather 
    construction with Seafoam Durabuck overlays and Swooshes. On the laces, crisp bronze trimming 
    stands out against the design's subtle coloration.`,
    brand: 'Jordan',
    year: '2021',
    filename: 'Seafoam.jpg',
    price: 'price_1KbIxaDT393wRvxW8p4vywnz',
  },
  {
    name: 'Nike x Stussy Air Zoom Spiridon Fossil',
    our_price: 565,
    description: `Stussy teams up with Nike once again to deliver the Nike Air Zoom Spiridon 
    Cage 2 Stussy Fossil. After originally debuting in 2003, this design received a refresh 
    with the help of lifestyle label Stussy. This Spridion Cage 2 consists of a mesh upper with 
    woven textile overlays and a black Swoosh. A caged Zoom Air unit, Stussy branding on the heel 
    and toe, and Fossil sole completes the design.`,
    brand: 'Nike',
    year: 2020,
    filename: 'Spiridon.jpg',
    price: 'price_1KaWNtDT393wRvxWYVKwtWov',
  },
  {
    name: 'Adidas Yeezy Boost 350 V2 Static',
    our_price: 400,
    description: `Electrify your sneaker rotation with the adidas Yeezy Boost 350 V2 Static. 
        This Yeezy 350 V2 comes with a grey and white upper and a white sole. The see through upper helps
        you to show off the cool socks in you lost a long time ago.`,
    brand: 'Adidas',
    year: 2018,
    filename: 'Static.jpg',
    price: 'price_1KaWOFDT393wRvxWLM0Yjlas',
  },
  {
    name: 'Nike Air Force 1 Low x Supreme Wheat',
    our_price: 215,
    description: `Drawing inspiration from classic work boots, the Nike Air Force 1 Low SP 
        Supreme Wheat features a Flax Durabuck upper with Supreme Box Logo insignias on the 
        lateral heels. At the base, a matching Flax Air sole completes the design. This model 
        was exclusively sold through Supreme stores and their online shops.`,
    brand: 'Nike',
    year: 2021,
    filename: 'SupAF1.jpg',
    price: 'price_1KaWP8DT393wRvxWYgEoTnOv',
  },
  {
    name: 'Nike Air Max 98 x Supreme Snakeskin',
    our_price: 450,
    description: `The Supreme x Air Max 98 'Snakeskin' puts snakeskin detailing on its overlays. 
    The rest of the shoe incorporates a metallic silver mesh with reflective piping, while the 
    heel tab and toe sport Supreme branding, with 'World Famous' across the heels.`,
    brand: 'Nike',
    year: '2016',
    filename: 'SupAM98.jpg',
    price: 'price_1KbIyADT393wRvxWDUIXZPxN',
  },
  {
    name: 'Air Jordan 4 Retro x Travis Scott Cactus Jack',
    our_price: '1000',
    description: `The only way to describe the Travis Scott Air Jordan 4 Retros properly would be 
    to use the rappers own adlib: la flame. These Jordan 4s were made in collaboration with rapper, 
    Travis Scott and nicknamed the "Cactus Jack" edition. Similar in design to the infamous Eminem pair, 
    these feature a lighter shade of blue suede on the upper. Black accents, a red liner, paint splatter 
    detailing, a white midsole and "Cactus Jack" branding on the back heel tab finish things off for this pair.`,
    brand: 'Jordan',
    year: '2018',
    filename: 'Travis.jpg',
    price: 'price_1KbIyVDT393wRvxW68nLAxFw',
  },
  {
    name: 'New Balance 550 UNC White University Blue',
    our_price: 175,
    description: `New Balance has a handful of firm favorites among the sneakerhead community, 
    but none have taken off quite like its 550 silhouette. As expected, the retro Basketball 
    Oxford shape is presented in white to show off its OG shapes and style, complete with a 
    padded “N” emblem on the mid-panel alongside old-school branding on the tongue, “NB” emblems 
    on the rear, and “550” gracing the vamp.`,
    brand: 'NewBalance',
    year: '2022',
    filename: 'UNC550.jpg',
    price: 'price_1KbIzSDT393wRvxWn5UoUXni',
  },
  {
    name: 'Adidas Yeezy Boost 700 Wave Runner',
    our_price: 400,
    description: `First releasing in November of 2017, the Yeezy Boost 700s represented what 
        was a significant shift in Kanyes design aesthetic, moving from the minimalistic silhouettes 
        of early Yeezy seasons to this chunky runner model. It once again showed how Kanye stays ahead 
        of the curve, as chunkier sneakers became more en vogue in 2018. The shoe features an upper with 
        grey and black suede overlays, premium leather with blue mesh underlays, neon green laces, and its 
        signature chunky midsole with encapsulated Boost technology.`,
    brand: 'Adidas',
    year: 2017,
    filename: 'WaveRunner.jpg',
    price: 'price_1KaWPTDT393wRvxW1VNawTZB',
  },
  {
    name: 'Adidas Yeezy Boost 350 V2 Zebra',
    our_price: 425,
    description: `Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of 
        NBA All-Star Weekend, these Yeezy's are nicknamed the "Zebras," and come in a classic white, 
        black and red color scheme. Sporting a white-based Primeknit upper with black accents giving 
        off a Zebra stripe vibe, “SPLY-350” displayed across the sides in red finished off by a translucent 
        BOOST cushioned sole. To date they are the most limited adidas Yeezy release and have instantly become 
        one of the most popular colorways`,
    brand: 'Adidas',
    year: 2017,
    filename: 'Zebras.jpg',
    price: 'price_1KaWPrDT393wRvxW9KJe2SF6',
  },
];

const seedShoes = () => Shoe.bulkCreate(shoeData);

module.exports = seedShoes;
