import actions from './actions';
import mutations from './mutations';
import { getters } from './getters';

const state = {
    watches: [
        {
            name: 'Air King',
            collection: 'Speedmaster',
            price: 12103000,
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `The Air-King dial features a distinctive black dial with a combination of large 3, 6 and 9 numerals marking the hours and a prominent minute scale for navigational time readings. It bears the name Air-King in the same lettering that was designed specifically for the model in the 1950s.`,
                par2:
                    'The Air-King epitomizes Rolex’s privileged ties with the world of aviation during its golden age in the 1930s. It was a period when spectacular progress in aircraft performance constantly expanded humanity’s capacity to conquer the skies, and led to the introduction of long-distance flights.',
                par3: `The Air-King pays homage to the golden age of aviation during the 1930s. One of the pioneers of this era, English aviator Charles Douglas Barnard, set a number of flight records. Of the Oyster, he said: “The peculiar qualities of this Rolex watch render it eminently suitable for flying purposes and I propose to use it on all my long-distance flights in the future”.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '36 mm',
                Bracelet: 'steel',
                Case: 'gem-set',
                'Case diameter': '40 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Air King.webp',
                'Air King 2.webp',
                'Air King 3.webp',
                'Air King 4.webp',
                'Air King 5.webp',
            ],
            url: 'Air King2',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Milgauss',
            collection: 'Speedmaster',
            price: 55131,
            material: 'steel',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Milgauss is a pioneering anti-magnetic watch designed to meet the demands of engineers and scientists.`,
                par2:
                    'Created in 1956, it can withstand magnetic fields of up to 1,000 gauss. Hence its name, “mille”, which is French for one thousand. The first watch of its kind, the Milgauss combines unique aesthetics and scientific heritage.',
                par3: `The green crystal marked a first in watchmaking when it was introduced by Rolex on the revamped version of the Milgauss in 2007. It is made of virtually scratchproof synthetic sapphire and ensures optimal legibility.`,
                par4: `Over time, the Milgauss has remained faithful to its scientific heritage and distinctive aesthetics. With its evocative orange seconds hand shaped like a lightning bolt – inspired by the original model – combined with its clean lines, this watch is recognisable at a glance.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '36 mm',
                Bracelet: 'steel',
                Case: 'steel',
                'Case diameter': '40 mm',
                'Dial colour': 'blue',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Milgauss.webp',
                'milgauss 2.jpg',
                'milgauss 3.webp',
                'milgauss 4.webp',
            ],
            url: 'Milgauss',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Cellini',
            collection: 'Speedmaster',
            price: 885400,
            material: 'gold',
            warranty: true,
            description: {
                par1: `The Cellini Moonphase in 18 ct Everose gold with a Leather strap.`,
                par2:
                    'This model features an exclusive display of the phases of the moon. Its White dial with a blue enamel disc at 6 o’clock displays the lunar cycle where the full moon is depicted by a meteorite applique.',
                par3: `The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 o’clock showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The moonphase is read via the indicator set at 12 o’clock on the subdial, as the full moon and new moon rotate through the lunar cycle. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '36 mm',
                Bracelet: 'gold',
                Case: 'gold',
                'Case diameter': '39 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Cellini.webp',
                'cellini2.webp',
                'cellini3.webp',
                'cellini4.webp',
                'cellini5.webp',
            ],
            url: 'Cellini',
            sex: 'male',
            type: 'classic',
        },

        {
            name: 'Yacht-Master II',
            collection: 'Speedmaster',
            price: 458540,
            material: 'steel',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Yacht-Master II in Oystersteel with an Oyster bracelet and a bidirectional rotatable bezel with a blue Cerachrom insert.`,
                par2:
                    'The only chronograph in the world with a mechanical memory, the Yacht-Master II with its bezel acting as a programmable countdown, is an essential tool for skippers to gauge their best course of action.',
                par3: `Rolex achieved perfection when it turned its attention to redefining the purpose and functionality of the bezel. Typically, a bezel operates independently from the internal mechanism; however, the Ring Command bezel in the Yacht-Master II regatta chronograph operates in conjunction with it. As a mechanical component linked to the movement, the bezel literally acts as the key to the programmable countdown, allowing it to be set and synchronised to the sequence of race start times. Complex in design, but simple in use, it is functionally beautiful.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '40 mm',
                Bracelet: 'steel',
                Case: 'steel',
                'Case diameter': '44 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Yacht-Master II.webp',
                'Yacht-Master II 2.webp',
                'Yacht-Master II 3.webp',
                'Yacht-Master II 4.webp',
                'Yacht-Master II 5.webp',
            ],
            url: 'Yacht-Master II',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Cosmograph Daytona',
            collection: 'Speedmaster',
            price: 458540,
            material: 'gold',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Cosmograph Daytona in 18 ct Everose gold with a pink and black dial and an Oysterflex bracelet, features a Black Cerachrom bezel and engraved tachymetric scale.`,
                par2:
                    'This chronograph was designed to be the ultimate timing tool for endurance racing drivers. More than 50 years after its creation, the Cosmograph Daytona remains in a class of its own among sport chronographs and continues to transcend time.',
                par3: `A key part of the model’s identity is the bezel engraved with a tachymetric scale for measuring average speeds of up to 400 miles or kilometres per hour. Blending of high technology with sleek aesthetics, the black bezel is reminiscent of the 1965 model that was fitted with a black Plexiglas bezel insert.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '40 mm',
                Bracelet: 'steel',
                Case: 'steel',
                'Case diameter': '44 mm',
                'Dial colour': 'brown',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Cosmograph Daytona.webp',
                'Cosmograph Daytona2.webp',
                'Cosmograph Daytona3.jpg',
            ],
            url: 'Cosmograph Daytona',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Sky-Dweller',
            collection: 'Speedmaster',
            price: 60050,
            material: 'gold',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Sky-Dweller in 18 ct yellow gold with a bright black dial and an Oysterflex bracelet.`,
                par2:
                    'This distinctive watch is characterized by its second time zone display on an off-centre disc on the dial. Furthermore, its innovative system for setting the functions, using the rotatable Ring Command bezel, is unique to Rolex. ',
                par3: `A fixed inverted red triangle on the dial points to the chosen reference time – the time at home or at the traveller’s usual workplace – on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone. The dials now feature rectangular index hour markers and longer hands, as well as a Chromalight display with long-lasting luminescence, which enhances legibility.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '40 mm',
                Bracelet: 'gold',
                Case: 'gold',
                'Case diameter': '42 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Sky-Dweller.webp',
                'Sky-Dweller2.webp',
                'Sky-Dweller3.jpg',
                'Sky-Dweller4.jpg',
                'Sky-Dweller5.jpg',
            ],
            url: 'Cosmograph Daytona',
            sex: 'male',
            type: 'classic',
        },

        {
            name: 'Sea-Dweller',
            collection: 'Speedmaster',
            price: 84050,
            material: 'steel and gold',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Sea-Dweller in Yellow Rolesor with a black ceramic bezel and an Oyster bracelet.`,
                par2:
                    'It features a distinctive black dial and large luminescent hour markers. Waterproof to a depth of 4,000 feet (1,220 metres) with a unidirectional 60-minute rotatable bezel, the Rolex Sea-Dweller is amongst the ultra-resistant divers’ watches engineered by Rolex for deep-sea exploration. ',
                par3: `The 60-minute graduated, unidirectional rotatable bezel of the Sea-Dweller enables divers to precisely and safely monitor their dive and decompression times. It is equipped with a patented black Cerachrom bezel insert manufactured by Rolex in a virtually scratchproof ceramic whose colour is unaffected by ultraviolet rays. The graduation is coated via PVD (Physical Vapour Deposition) with a thin layer of gold. The sleek black dial features large Chromalight hour markers and hands, filled with luminescent material that emits a long-lasting blue glow for excellent legibility in dark conditions.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '40 mm',
                Bracelet: 'steel and gold',
                Case: 'gold',
                'Case diameter': '43 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Sea-Dweller.webp',
                'Sea-Dweller2.webp',
                'Sea-Dweller3.webp',
                'Sea-Dweller4.webp',
                'Sea-Dweller5.webp',
            ],
            url: 'Sea-Dweller',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Explorer',
            collection: 'Speedmaster',
            price: 84050,
            material: 'steel',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals in Chromalight.`,
                par2:
                    'Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.',
                par3: `The dial is the distinctive face of a Rolex watch, the feature most responsible for its identity and readability. The latest Explorer model’s characteristic 3, 6 and 9 numerals are now filled with a luminescent material emitting a long-lasting blue glow, like the hour markers and hands. Like all Rolex timepieces, the Explorer's dial is designed and manufactured in-house, largely by hand to ensure perfection.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '39 mm',
                Bracelet: 'steel',
                Case: 'steel',
                'Case diameter': '43 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Explorer.webp',
                'Explorer2.webp',
                'Explorer3.webp',
                'Explorer4.webp',
            ],
            url: 'Explorer',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Oyster Perpetual 41',
            collection: 'Speedmaster',
            price: 1004050,
            material: 'steel',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual 41 with a silver dial and an Oyster bracelet.`,
                par2:
                    'The aesthetics of the Oyster Perpetual models set them apart as symbols of universal and classic style. They embody timeless form and function, firmly rooted in the pioneering origins of Rolex.',
                par3: `The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '39 mm',
                Bracelet: 'steel',
                Case: 'steel',
                'Case diameter': '41 mm',
                'Dial colour': 'silver',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Oyster Perpetual 41.webp',
                'Oyster Perpetual 41 2.webp',
                'Oyster Perpetual 41 3.jpg',
                'Oyster Perpetual 41 4.jpg',
                'Oyster Perpetual 41 5.jpg',
            ],
            url: 'Oyster Perpetual 41',
            sex: 'male',
            type: 'classic',
        },

        {
            name: 'Submariner',
            collection: 'Speedmaster',
            price: 1004050,
            material: 'steel',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Submariner in Oystersteel with a Black Cerachrom bezel and a black dial with large luminescent hour markers.`,
                par2:
                    'It features a unidirectional rotatable bezel with Cerachrom insert and solid-link Oyster bracelet. The latest generation Submariner and Submariner Date remain faithful to the original model launched in 1953. In watchmaking, the Submariner represented a historic turning point; it set the standard for divers’ watches.',
                par3: `The Submariner's rotatable bezel is a key functionality of the watch. Its engraved 60-minute graduations allow a diver to accurately and safely monitor diving time and decompression stops. Manufactured by Rolex from a hard, corrosion-resistant ceramic, the Cerachrom bezel insert is virtually scratchproof. A luminescent capsule on the zero marker ensures legibility, no matter how dark the environment. The bezel’s knurled edge is carefully designed to offer excellent grip under water, even with gloves.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '39 mm',
                Bracelet: 'steel',
                Case: 'steel',
                'Case diameter': '41 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Submariner.webp',
                'Submariner2.jpg',
                'Submariner3.webp',
                'Submariner4.webp',
                'Submariner5.jpg',
            ],
            url: 'Submariner',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Day-Date 40',
            collection: 'Speedmaster',
            price: 650050,
            material: 'gold',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Day-Date 40 in 18 ct white gold with an olive-green dial, Fluted bezel and a President bracelet.`,
                par2:
                    'The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956.',
                par3: `The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '40 mm',
                Bracelet: 'white gold',
                Case: 'white gold',
                'Case diameter': '40 mm',
                'Dial colour': 'green',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Day-Date 40.webp',
                'Day-Date 40 2.webp',
                'Day-Date 40 3.webp',
                'Day-Date 40 4.webp',
            ],
            url: 'Day-Date 40',
            sex: 'male',
            type: 'classic',
        },

        {
            name: 'GMT-Master II',
            collection: 'Speedmaster',
            price: 650050,
            material: 'steel and gold',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual GMT-Master II in Everose Rolesor with an Oyster bracelet.`,
                par2:
                    'This model features a black dial and a brown and black Cerachrom bezel. Designed to show the time in two different time zones simultaneously during intercontinental flights, the GMT-Master has come to be recognized for its robustness and versatile appearance.',
                par3: `In addition to conventional hour, minute and seconds hands, the GMT-Master II features an arrow-tipped hand, which circles the dial once every 24 hours, as well as a bidirectional rotatable 24-hour graduated bezel. The distinctively coloured 24-hour hand displays the “home” reference time in a first time zone which can be read on the graduations on the bezel.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '40 mm',
                Bracelet: 'Everose Rolesor',
                Case: 'Oystersteel and Everose gold',
                'Case diameter': '40 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'GMT-Master II.webp',
                'GMT-Master II 2.webp',
                'GMT-Master II 3.webp',
                'GMT-Master II 4.webp',
            ],
            url: 'GMT-Master',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'DateJust 41',
            collection: 'Speedmaster',
            price: 1020000,
            material: 'steel and gold',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Datejust 41 in Yellow Rolesor features a champagne-colour dial and a Jubilee bracelet.`,
                par2:
                    'The light reflections on the case sides and lugs highlight the elegant profile of the 41 mm Oyster case, which is fitted with a Fluted bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.',
                par3: `The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '41 mm',
                Bracelet: 'Everose Rolesor',
                Case: 'Oystersteel and Everose gold',
                'Case diameter': '40 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'DateJust 41.webp',
                'DateJust 41 2.webp',
                'DateJust 41 3.jpg',
                'DateJust 41 4.webp',
                'DateJust 41 5.webp',
            ],
            url: 'GMT-Master',
            sex: 'male',
            type: 'classic',
        },

        {
            name: 'DateJust 41',
            collection: 'Speedmaster',
            price: 1020000,
            material: 'steel and gold',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Datejust 41 in Yellow Rolesor features a champagne-colour dial and a Jubilee bracelet.`,
                par2:
                    'The light reflections on the case sides and lugs highlight the elegant profile of the 41 mm Oyster case, which is fitted with a Fluted bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.',
                par3: `The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '41 mm',
                Bracelet: 'Everose Rolesor',
                Case: 'Oystersteel and Everose gold',
                'Case diameter': '40 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'DateJust 41.webp',
                'DateJust 41 2.webp',
                'DateJust 41 3.jpg',
                'DateJust 41 4.webp',
                'DateJust 41 5.webp',
            ],
            url: 'Date-Just 41',
            sex: 'male',
            type: 'professional',
        },

        {
            name: 'Lady-DateJust',
            collection: 'Speedmaster',
            price: 6700000,
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Lady-Datejust in 18 ct yellow gold features a white mother-of-pearl, diamond-set dial and a President bracelet.`,
                par2: `The light reflections on the case sides and lugs highlight the elegant profile of the 28 mm Oyster case, which is fitted with a diamond-set bezel. Rolex's classic feminine watch, the Lady-Datejust is in the lineage of the Datejust, the emblematic model that has been a byword for style and accurate timekeeping.`,
                par3: `Mother-of-pearl is by its nature full of mystery and surprises. Depending on its origin, it can be pink, white, black or yellow. It differs in colour, intensity and structure according to the part of the shell from which it is extracted. At Rolex, mother-of-pearl is never artificially coloured. Instead, particular know-how and skill are devoted to simply highlighting its natural beauty and preserving the original hues. As all mother-of-pearl dials are unique pieces, an identical dial will never be found on another wrist.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Everose Rolesor',
                Case: 'yellow gold and diamonds',
                'Case diameter': '28 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Lady-DateJust.webp',
                'Lady-DateJust 2.jpg',
                'Lady-DateJust 3.jpg',
                'Lady-DateJust 4.jpg',
                'Lady-DateJust 5.jpg',
            ],
            url: 'Lady-DateJust',
            sex: 'female',
            type: 'professional',
        },

        {
            name: 'Pearlmaster 39',
            collection: 'Speedmaster',
            price: 10800000,
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Pearlmaster 39 in 18 ct white gold with a diamond-paved dial, featuring a diamond-set bezel, case and signature Pearlmaster bracelet.`,
                par2: `The Pearlmaster holds a special place in the Oyster collection, it represents the height of exquisiteness with precious metals and gemstones.`,
                par3: `The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'white gold and diamonds',
                'Case diameter': '39 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Pearlmaster 39.webp',
                'Pearlmaster 39 2.webp',
                'Pearlmaster 39 3.webp',
                'Pearlmaster 39 4.webp',
            ],
            url: 'Pearlmaster 39',
            sex: 'female',
            type: 'professional',
        },

        {
            name: 'DateJust 31',
            collection: 'Speedmaster',
            price: 680000,
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Datejust 31 in White Rolesor features an aubergine, diamond-set dial and an Oyster bracelet.`,
                par2: `Its dial features Large VI set with diamonds. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case, which is fitted with a diamond-set bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.`,
                par3: `The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'white gold and diamonds',
                'Case diameter': '39 mm',
                'Dial colour': 'purple',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'DateJust 31.webp',
                'DateJust 31 2.webp',
                'DateJust 31 3.webp',
                'DateJust 31 4.jpg',
                'DateJust 31 5.jpg',
            ],
            url: 'DateJust 31',
            sex: 'female',
            type: 'professional',
        },

        {
            name: 'Oyster Perpetual 31',
            collection: 'Speedmaster',
            price: 420000,
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual 31 with a coral red dial and an Oyster bracelet.`,
                par2: `The aesthetics of the Oyster Perpetual models set them apart as symbols of universal and classic style. They embody timeless form and function, firmly rooted in the pioneering origins of Rolex.`,
                par3: `The dial is the distinctive face of a Rolex watch, the feature most responsible for its identity and readability. Characterised by hour markers fashioned from 18 ct gold to prevent tarnishing, every Rolex dial is designed and manufactured in-house, largely by hand to ensure perfection.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'white gold and diamonds',
                'Case diameter': '31 mm',
                'Dial colour': 'coral red',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Oyster Perpetual 31.webp',
                'Oyster Perpetual 31 2.jpg',
                'Oyster Perpetual 31 3.jpg',
                'Oyster Perpetual 31 4.jpg',
            ],
            url: 'Oyster Perpetual 31',
            sex: 'female',
            type: 'professional',
        },

        {
            name: 'DateJust 36',
            collection: 'Speedmaster',
            price: 100000,
            material: 'steel and gold',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Datejust 36 in White Rolesor features a black dial and a Jubilee bracelet.`,
                par2: `The light reflections on the case sides and lugs highlight the elegant profile of the 36 mm Oyster case, which is fitted with a Fluted bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.`,
                par3: `The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Oystersteel',
                Case: 'oystersteel and white gold',
                'Case diameter': '36 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'DateJust 36.webp',
                'DateJust 36 2.jpg',
                'DateJust 36 3.jpg',
                'DateJust 36 4.jpg',
                'DateJust 36 5.jpg',
            ],
            url: 'DateJust 36',
            sex: 'female',
            type: 'classic',
        },

        {
            name: 'Lady-DateJust 28',
            collection: 'Speedmaster',
            price: 860000,
            material: 'steel',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Lady-Datejust in Oystersteel features a pink dial and an Oyster bracelet.`,
                par2: `The light reflections on the case sides and lugs highlight the elegant profile of the 28 mm Oyster case, which is fitted with a Domed bezel. Rolex's classic feminine watch, the Lady-Datejust is in the lineage of the Datejust, the emblematic model that has been a byword for style and accurate timekeeping.`,
                par3: `The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Oystersteel',
                Case: 'oystersteel and white gold',
                'Case diameter': '36 mm',
                'Dial colour': 'pink',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'Lady-DateJust 28.webp',
                'Lady-DateJust 28 2.jpg',
                'Lady-DateJust 28 3.jpg',
                'Lady-DateJust 28 4.jpg',
                'Lady-DateJust 28 5.jpg',
            ],
            url: 'DateJust 28',
            sex: 'female',
            type: 'classic',
        },

        {
            name: 'DateJust Esmerald',
            collection: 'Speedmaster',
            price: 930300,
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Datejust 31 in 18 ct yellow gold features a malachite, diamond-set dial and a President bracelet.`,
                par2: `Its dial features Roman VI and IX in 18 ct gold, set with 24 diamonds. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case, which is fitted with a diamond-set bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.`,
                par3: `Malachite is a natural ornamental stone that Rolex has already used for certain dials in the past, for example on a Cellini model in 1976 and on Oyster watches in the early 1980s. Rolex chose malachite for its intense green colour, the beauty of its structure and the fact that it is an exceptional stone that marries perfectly with yellow gold in particular; the perfect combination of Rolex’s two emblematic colours.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'yellow gold and diamonds',
                Case: 'yellow gold',
                'Case diameter': '31 mm',
                'Dial colour': 'green',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'DateJust Esmerald.webp',
                'DateJust Esmerald 2.jpg',
                'DateJust Esmerald 3.webp',
            ],
            url: 'DateJust Esmerald',
            sex: 'female',
            type: 'professional',
        },

        {
            name: 'DateJust Lunar',
            collection: 'Speedmaster',
            price: 70200,
            material: 'steel and gold',
            warranty: true,
            description: {
                par1: `This Oyster Perpetual Datejust 31 in Yellow Rolesor features an olive green, diamond-set dial and a Jubilee bracelet.`,
                par2: `Its dial features Large VI set with diamonds. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case, which is fitted with a Fluted bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.`,
                par3: `The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.`,
            },
            features: {
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Oystersteel and yellow gold',
                Case: 'Oystersteel and yellow gold',
                'Case diameter': '31 mm',
                'Dial colour': 'green',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            images: [
                'DateJust Lunar.webp',
                'DateJust Lunar 2.jpg',
                'DateJust Lunar 3.jpg',
                'DateJust Lunar 4.jpg',
                'DateJust Lunar 5.jpg',
            ],
            url: 'DateJust Lunar',
            sex: 'female',
            type: 'professional',
        },
    ],
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
