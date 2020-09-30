import actions from './actions';
import mutations from './mutations';

const state = {
    watches: [
        {
            name: 'Omega-Speedmaster-Moonwatch',
            collection: 'Speedmaster',
            price: '5299.00',
            material: 'steel',
            category: '',
            warranty: true,
            description: {
                par1:
                    'The OMEGA Speedmaster is one of OMEGA’s most iconic timepieces. Having been a part of all six lunar missions, the legendary Speedmaster is an impressive representation of the brand’s adventurous pioneering spirit.',
                par2: `This OMEGA Speedmaster Professional “Moonwatch” features a black dial covered by a scratch-resistant sapphire crystal and graced by a small seconds sub-dial, 30-minute recorder and 12-hour recorder along with a central chronograph hand. The black bezel, with its tachymetric scale, is mounted on a 42 mm stainless steel case and presented on a matching bracelet.`,
                par3: `At the heart of this chronograph is OMEGA’s mechanical calibre 1863, the legendary manual-winding movement worn on the Moon, visible through the transparent caseback. This timepiece is offered with a special Moonwatch presentation box which contains a "NATO" strap, a strap for astronauts, a tool to change the bracelet and a book highlighting Speedmaster's adventures.`,
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
            },

            techData: {
                'Between lugs': '20 mm',
                Bracelet: 'steel',
                Case: 'Steel',
                'Case diameter': '42 mm',
                'Dial colour': 'Black',
                Crystal:
                    'Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment inside',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'omega-speedmaster-moonwatch',
            sex: 'male',
        },

        {
            name: 'Omega-Seamaster-Diver-300m',
            collection: 'Seamaster',
            price: '8299.00',
            material: 'steel',
            warranty: true,
            description: {
                par1:
                    'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following. Today’s modern collection has embraced that famous ocean heritage and updated it with OMEGA’s best innovation and design.',
                par2: `This 42 mm model is crafted from stainless steel and includes a black ceramic bezel with a white enamel diving scale. The dial is also polished black ceramic and features laser-engraved waves and a date window at 6 o’clock.`,
                par3: `The skeleton hands and raised indexes are rhodium-plated and are filled with white Super-LumiNova, while the helium escape valve has been given a conical design.`,
                par4: `The watch is presented on a black rubber strap and is driven by the OMEGA Master Chronometer Calibre 8800, which can be seen through the sapphire-crystal on the wave-edged caseback.`,
            },
            features: {
                'ANTI-MAGNETIC': `The movement is unaffected by exposure to strong magnetic fields, even those greater than 1.5 tesla (15,000 gauss)`,

                DATE: `The movement is unaffected by exposure to strong magnetic fields, even those greater than 1.5 tesla (15,000 gauss)`,

                'SCREW-IN CROWN': `Self-locking crown, screwed into the tube of the case, used for highly water resistant divers' watches.`,

                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                CHRONOGRAPH:
                    'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
            },

            techData: {
                'Between lugs': '20 mm',
                Bracelet: 'rubber strap',
                Case: 'Steel',
                'Case diameter': '42 mm',
                'Dial colour': 'Black',
                Crystal:
                    'Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '30 bar (300 metres / 1000 feet)',
            },

            url: 'omega-speedmaster-moonwatch',
            sex: 'male',
        },

        {
            name: 'Speedmaster-Moonwatch-Space',
            collection: 'Seamaster',
            price: '12.199',
            material: 'steel',
            warranty: true,
            description: {
                par1:
                    'The OMEGA Speedmaster is one of OMEGA’s most iconic timepieces. The Moonwatch "First Omega in Space" was inspired by the watch worn by astronaut Wally Shirra in 1962 as he orbited the earth during the "Sigma 7" mission.',
                par2: `This numbered edition model features a bold varnished black dial with a small seconds dial, a 30-minute recorder and 12-hour recorder, along with a central chronograph hand and a scratch-resistant sapphire crystal. The black bezel, with its tachymetric scale, is mounted on a 39.7 mm stainless steel case with symmetric lugs, and the watch is presented on a brown leather strap.`,
                par3: `At the heart of this chronograph is OMEGA's calibre 1861, the famous manual-winding movement that was worn on the moon, which is covered by a caseback embossed with the original 1962 Seahorse.`,
            },
            features: {
                'ANTI-MAGNETIC': `The movement is unaffected by exposure to strong magnetic fields, even those greater than 1.5 tesla (15,000 gauss)`,

                'SCREW-IN CROWN': `Self-locking crown, screwed into the tube of the case, used for highly water resistant divers' watches.`,

                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
            },

            techData: {
                'Between lugs': '19 mm',
                Bracelet: 'leather strap',
                Case: 'Steel',
                'Case diameter': '39.7 mm',
                'Dial colour': 'Black',
                Crystal:
                    'Scratch‑resistant sapphire crystal with anti‑reflective treatment inside',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Speedmaster-Moonwatch-Space',
            sex: 'male',
        },

        {
            name: 'Omega-Seamaster-Diver-300m-SeaKing',
            collection: 'Seamaster',
            price: '16.499',
            material: 'steel',
            warranty: true,
            description: {
                par1:
                    'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following. Today’s modern collection has embraced that famous ocean heritage and updated it with OMEGA’s best innovation and design.',
                par2: `This 42 mm model is crafted from stainless steel and includes a blue ceramic bezel with a white enamel diving scale. The dial is sun-brushed PVD chrome colour ceramic and features laser-engraved waves and a date window at 6 o’clock.`,
                par3: `The skeleton hands and raised indexes are blued and are filled with white Super-LumiNova, while the helium escape valve has been given a conical design.`,
                par4: `The watch is presented on a blue rubber strap and is driven by the OMEGA Master Chronometer Calibre 8800, which can be seen through the sapphire-crystal on the wave-edged caseback.`,
            },
            features: {
                'ANTI-MAGNETIC': `The movement is unaffected by exposure to strong magnetic fields, even those greater than 1.5 tesla (15,000 gauss)`,

                'SCREW-IN CROWN': `Self-locking crown, screwed into the tube of the case, used for highly water resistant divers' watches.`,

                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '20 mm',
                Bracelet: 'rubber strap',
                Case: 'Steel',
                'Case diameter': '42 mm',
                'Dial colour': 'Grey',
                Crystal:
                    'Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '30 bar (300 metres / 1000 feet)',
            },

            url: 'Omega-Seamaster-Diver-300m-SeaKing',
            sex: 'male',
        },

        {
            name: 'Constellation-Femine',
            collection: 'De Ville',
            price: '100 100.00',
            material: 'steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm 18K Sedna™ gold model features a diamond-paved bezel, blue aventurine glass dial with diamond hour markers and a date window at the 6 o'clock position. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K Sedna™ gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8701, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Gold',
                Case: 'Gold',
                'Case diameter': '29 mm',
                'Dial colour': 'Blue',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Femine',
            sex: 'female',
        },

        {
            name: 'Constellation-Axel',
            collection: 'De Ville',
            price: '100 150.00',
            material: 'steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm 18K yellow gold model features a diamond-paved bezel, pearled mother-of-pearl dial with diamond hour markers and a date window at the 6 o'clock position. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K yellow gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8701, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Gold',
                Case: 'Gold',
                'Case diameter': '29 mm',
                'Dial colour': 'White',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Axel',
            sex: 'female',
        },

        {
            name: 'Constellation-Beauty',
            collection: 'De Ville',
            price: '108 500.00',
            material: 'steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm 18K yellow gold model features a diamond-paved bezel, pearled mother-of-pearl dial with diamond hour markers and a date window at the 6 o'clock position. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K yellow gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8701, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Gold',
                Case: 'Gold',
                'Case diameter': '29 mm',
                'Dial colour': 'Silver',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Beauty',
            sex: 'female',
        },

        {
            name: 'Constellation-Witch',
            collection: 'De Ville',
            price: '48 200.00',
            material: 'gold',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm 18K yellow gold model features a diamond-paved bezel, pearled mother-of-pearl dial with diamond hour markers and a date window at the 6 o'clock position. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K yellow gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8701, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Steel and Gold',
                Case: 'Steel and Gold',
                'Case diameter': '29 mm',
                'Dial colour': 'Yellow',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Witch',
            sex: 'female',
        },

        {
            name: 'Constellation-Lady',
            collection: 'De Ville',
            price: '72 900.00',
            material: 'Steel and Gold',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm 18K yellow gold model features a diamond-paved bezel, pearled mother-of-pearl dial with diamond hour markers and a date window at the 6 o'clock position. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K yellow gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8701, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Steel and Gold',
                Case: 'Steel and Gold',
                'Case diameter': '29 mm',
                'Dial colour': 'Yellow',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Lady',
            sex: 'female',
        },

        {
            name: 'Constellation-Snowflake',
            collection: 'De Ville',
            price: '62 600.00',
            material: 'Steel and Gold',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm 18K yellow gold model features a diamond-paved bezel, pearled mother-of-pearl dial with diamond hour markers and a date window at the 6 o'clock position. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K yellow gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8701, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Steel and Gold',
                Case: 'Steel and Gold',
                'Case diameter': '29 mm',
                'Dial colour': 'Yellow',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Snowflake',
            sex: 'female',
        },

        {
            name: 'Constellation-Booty',
            collection: 'De Ville',
            price: '62 600.00',
            material: 'Steel and Gold',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm 18K yellow gold model features a diamond-paved bezel, pearled mother-of-pearl dial with diamond hour markers and a date window at the 6 o'clock position. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K yellow gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8701, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Steel and Gold',
                Case: 'Steel and Gold',
                'Case diameter': '29 mm',
                'Dial colour': 'Yellow',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Booty',
            sex: 'female',
        },

        {
            name: 'Constellation-Insanity',
            collection: 'De Ville',
            price: '62 600.00',
            material: 'Steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 29 mm stainless steel model features a diamond-paved bezel, pearled mother-of-pearl dial with diamond hour markers and a date window at the 6 o'clock position. The hands, OMEGA logo, Constellation star and diamond holders are in 18K white gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8700, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.6 mm',
                Bracelet: 'Steel',
                Case: 'Steel',
                'Case diameter': '29 mm',
                'Dial colour': 'Yellow',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Insanity',
            sex: 'female',
        },

        {
            name: 'Constellation-Piss',
            collection: 'De Ville',
            price: '62 600.00',
            material: 'Gold',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 28 mm 18K Sedna™ gold model features a bezel engraved with Roman numerals, white mother-of-pearl dial with diamond hour markers and scratch-resistant sapphire crystal. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K Sedna™ gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8700, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.5 mm',
                Bracelet: 'Gold',
                Case: 'Gold',
                'Case diameter': '28 mm',
                'Dial colour': 'Yellow',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Constellation-Piss',
            sex: 'female',
        },

        {
            name: 'Constellation-Wenus',
            collection: 'De Ville',
            price: '94 400.00',
            material: 'Gold and Steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 28 mm 18K Sedna™ gold model features a bezel engraved with Roman numerals, white mother-of-pearl dial with diamond hour markers and scratch-resistant sapphire crystal. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K Sedna™ gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8700, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.5 mm',
                Bracelet: 'Gold and Steel',
                Case: 'Gold and Steel',
                'Case diameter': '28 mm',
                'Dial colour': 'Yellow',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '3 bar (30 metres / 100 feet)',
            },

            url: 'Constellation-Wenus',
            sex: 'female',
        },

        {
            name: 'Constellation-Asteroid',
            collection: 'De Ville',
            price: '94 400.00',
            material: 'Gold and Steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 28 mm 18K Sedna™ gold model features a bezel engraved with Roman numerals, white mother-of-pearl dial with diamond hour markers and scratch-resistant sapphire crystal. The bracelet, hands, OMEGA logo, Constellation star and diamond holders are also in 18K Sedna™ gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8700, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '15.9 mm',
                Bracelet: 'Gold and Steel',
                Case: 'Gold and Steel',
                'Case diameter': '25 mm',
                'Dial colour': 'Blue',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '3 bar (30 metres / 100 feet)',
            },

            url: 'Constellation-Asteroid',
            sex: 'female',
        },

        {
            name: 'Constellation-Tiktok',
            collection: 'De Ville',
            price: '20 700.00',
            material: 'Gold and Steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 28 mm 18K Sedna™ gold and stainless steel model features a bezel engraved with Roman numerals, white mother-of-pearl dial and scratch-resistant sapphire crystal. The hands, OMEGA logo, Constellation star and indexes are also in 18K Sedna™ gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8700, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '16.9 mm',
                Bracelet: 'Gold and Steel',
                Case: 'Gold and Steel',
                'Case diameter': '25 mm',
                'Dial colour': 'White',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '3 bar (30 metres / 100 feet)',
            },

            url: 'Constellation-Tiktok',
            sex: 'female',
        },

        {
            name: 'Constellation-Tiktok',
            collection: 'De Ville',
            price: '20 700.00',
            material: 'Gold and Steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 28 mm 18K Sedna™ gold and stainless steel model features a bezel engraved with Roman numerals, white mother-of-pearl dial and scratch-resistant sapphire crystal. The hands, OMEGA logo, Constellation star and indexes are also in 18K Sedna™ gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8700, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '16.9 mm',
                Bracelet: 'Gold and Steel',
                Case: 'Gold and Steel',
                'Case diameter': '25 mm',
                'Dial colour': 'White',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '3 bar (30 metres / 100 feet)',
            },

            url: 'Constellation-Tiktok',
            sex: 'female',
        },

        {
            name: 'Constellation-Infinity',
            collection: 'De Ville',
            price: '27 400.00',
            material: 'Gold and Steel',
            warranty: true,
            description: {
                par1: `The dramatic and enduring design of the OMEGA Constellation is characterised by its famous half-moons, “claws” on the case and mono-rang bracelet.`,
                par2: `This 28 mm 18K Sedna™ gold and stainless steel model features a bezel engraved with Roman numerals, white mother-of-pearl dial and scratch-resistant sapphire crystal. The hands, OMEGA logo, Constellation star and indexes are also in 18K Sedna™ gold.`,
                par3: `At the heart of this timepiece is the OMEGA Co-Axial Master Chronometer Calibre 8700, visible through the domed scratch-resistant sapphire crystal.`,
            },
            features: {
                'UNIDIRECTIONAL ROTATING BEZEL': `A bezel which turns in only one direction. Particularly useful for divers who cannot accidentally rotate it in the wrong direction, which could cause them to miscalculate their dive times. A rotating bezel makes it easy to measure elapsed time.`,
                TACHYMETER:
                    'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
                'SMALL SECONDS':
                    'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
                'TRANSPARENT CASE BACK':
                    'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
                'HELIUM ESCAPE VALVE': `Decompression system which allows helium to escape from inside the watch when the watch is worn for professional use in pressure chambers. (Long-term underwater work, crude oil exploration, etc.)`,
            },

            techData: {
                'Between lugs': '17.5 mm',
                Bracelet: 'Gold and Steel',
                Case: 'Gold and Steel',
                'Case diameter': '25 mm',
                'Dial colour': 'White',
                Crystal:
                    ' Domed scratch‑resistant sapphire crystal with anti‑reflective treatment on both sides',
                'Water resistance': '3 bar (30 metres / 100 feet)',
            },

            url: 'Constellation-Infinity',
            sex: 'female',
        },

        {
            name: 'Lady-DateJust',
            collection: 'Speedmaster',
            price: '220 600. 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1:
                    'The classic Rolex Datejust is the archetype of the modern watch, thanks to aesthetics and functions that transcend changes in fashion. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it one of the most recognized and recognizable of watches.',
                par2: `The light reflections on the case sides and lugs highlight the elegant profile of the 28 mm Oyster case, which is fitted with a diamond-set bezel. Rolex's classic feminine watch, the Lady-Datejust is in the lineage of the Datejust, the emblematic model that has been a byword for style and accurate timekeeping.`,
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
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'steel',
                Case: 'gem-set',
                'Case diameter': '28 mm',
                'Dial colour': 'white',
                Crystal:
                    'Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment inside',
                'Water resistance': '5 bar (50 metres / 167 feet)',
            },

            url: 'Lady-DateJust',
            sex: 'female',
        },

        {
            name: 'Pearlmaster 39',
            collection: 'Speedmaster',
            price: '220 600. 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1:
                    'The Rolex Pearlmaster is Rolex’s crowning jewellery watch. Featuring the softly curved lines of the Pearlmaster design, it is characterised by uniquely rich dials and exquisite gem settings of diamonds, sapphires or rubies and available only in 18 ct yellow, white or Everose gold made by Rolex in its own foundry.',
                par2: `The Oyster Perpetual Pearlmaster 39 in 18 ct white gold with a diamond-paved dial, featuring a diamond-set bezel, case and signature Pearlmaster bracelet.`,
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
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'gem-set',
                'Case diameter': '39 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            url: 'Pearlmaster 39',
            sex: 'male',
        },

        {
            name: 'DateJust 31',
            collection: 'Speedmaster',
            price: '60 300 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1:
                    'Its dial features Large VI set with diamonds. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case, which is fitted with a diamond-set bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.',
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
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'gem-set',
                'Case diameter': '31 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            url: 'DateJust 31',
            sex: 'female',
        },

        {
            name: 'DateJust 31',
            collection: 'Speedmaster',
            price: '60 300 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1:
                    'Its dial features Large VI set with diamonds. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case, which is fitted with a diamond-set bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.',
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
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'gem-set',
                'Case diameter': '31 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            url: 'DateJust 31',
            sex: 'female',
        },

        {
            name: 'DateJust 31',
            collection: 'Speedmaster',
            price: '60 300 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1:
                    'Its dial features Large VI set with diamonds. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case, which is fitted with a diamond-set bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.',
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
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'gem-set',
                'Case diameter': '31 mm',
                'Dial colour': 'white',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            url: 'DateJust 31',
            sex: 'female',
        },

        {
            name: 'DayDate 40',
            collection: 'Speedmaster',
            price: '92 100 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Day-Date 40 in 18 ct white gold, with a black, diamond-set dial, diamond-set bezel and a President bracelet.`,
                par2:
                    'Its dial features 10 baguette-cut diamonds. The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956.',
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
            },

            techData: {
                'Between lugs': '17 mm',
                Bracelet: 'Diamond-set',
                Case: 'gem-set',
                'Case diameter': '40 mm',
                'Dial colour': 'black',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            url: 'DayDate 40',
            sex: 'male',
        },

        {
            name: 'Day-date 25',
            collection: 'Speedmaster',
            price: '101 800 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Day-Date 36 in 18 ct yellow gold, with a turquoise dial, diamond-set bezel and a President bracelet.`,
                par2:
                    'Its dial features Hour markers in 18 ct gold set with 32 diamonds, Roman VI and IX in 18 ct gold set with 24 diamonds. The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956.',
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
            },

            techData: {
                'Between lugs': '27 mm',
                Bracelet: 'Diamond-set',
                Case: 'gem-set',
                'Case diameter': '36 mm',
                'Dial colour': 'blue',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            url: 'Day-date 25',
            sex: 'female',
        },

        // {
        //     name: 'DateJust 36',
        //     collection: 'Speedmaster',
        //     price: '101 800 00',
        //     material: 'gem-set',
        //     warranty: true,
        //     description: {
        //         par1: `This Oyster Perpetual Datejust 36 in Everose Rolesor features a dark rhodium, diamond-set dial and a Jubilee bracelet.`,
        //         par2:
        //             'Its dial features Roman VI and IX in 18 ct  gold, set with 24 diamonds. The light reflections on the case sides and lugs highlight the elegant profile of the 36 mm Oyster case, which is fitted with a diamond-set bezel. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognized and recognizable of watches.',
        //     },
        //     features: {
        //         CHRONOGRAPH:
        //             'Complicated watch with a function for measuring short time periods in addition to its function for permanently displaying hours, minutes and seconds.',
        //         TACHYMETER:
        //             'A tachymeter is an instrument for measuring speed. It is a chronograph with a graduated dial on which speed can be read off in kilometres per hour based on 1000 metres distance.',
        //         'SMALL SECONDS':
        //             'A hand on a sub-dial which tracks seconds typically it completes a full rotation in one minute.',
        //         'TRANSPARENT CASE BACK':
        //             'A transparent case back - frequently made of sapphire - makes it possible to see the movement inside the watch.',
        //     },

        //     techData: {
        //         'Between lugs': '27 mm',
        //         Bracelet: 'Diamond-set',
        //         Case: 'gem-set',
        //         'Case diameter': '36 mm',
        //         'Dial colour': 'blue',
        //         Crystal:
        //             'Scratch-resistant sapphire, Cyclops lens over the date',
        //         'Water resistance': '10 bar (100 metres / 130 feet)',
        //     },

        //     url: 'DateJust 36',
        //     sex: 'male',
        // },

        {
            name: 'Day-Date 40',
            collection: 'Speedmaster',
            price: '75 500 00',
            material: 'gem-set',
            warranty: true,
            description: {
                par1: `The Oyster Perpetual Day-Date 40 in 18 ct yellow gold, with a champagne colour, diamond-set dial, diamond-set bezel and a President bracelet.`,
                par2:
                    'Its dial features 10 baguette-cut diamonds. The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956.',
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
            },

            techData: {
                'Between lugs': '27 mm',
                Bracelet: 'Diamond-set',
                Case: 'gem-set',
                'Case diameter': '36 mm',
                'Dial colour': 'yellow',
                Crystal:
                    'Scratch-resistant sapphire, Cyclops lens over the date',
                'Water resistance': '10 bar (100 metres / 130 feet)',
            },

            url: 'Day-Date 40',
            sex: 'male',
        },
    ],
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
