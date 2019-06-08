var updated = '31 May 19';
var vLength = '2641';
var dLength = '2622';
var gLength = '0149';
var bLength = '0123';

var songs = [
{ value: "(Don't Fear) The Reaper by Blue Öyster Cult", data: "0" },
{ value: "(Funky) Sex Farm by Spinal Tap", data: "1" },
{ value: "(I Just) Died in Your Arms by Cutting Crew", data: "2" },
{ value: "(If You're Wondering If I Want You To) I Want You To by Weezer", data: "3" },
{ value: "(Listen to the) Flower People (Reggae Stylee) by Spinal Tap", data: "4" },
{ value: "(Reprise) Sandblasted Skin by Pantera", data: "5" },
{ value: "(Sittin' on the) Dock of the Bay (Take 2) by Otis Redding", data: "6" },
{ value: "(Take These) Chains by Judas Priest", data: "7" },
{ value: "(We Are) The Road Crew '08 by Motörhead", data: "8" },
{ value: "(You Can Still) Rock in America by Night Ranger", data: "9" },
{ value: "(You're) Breakin' Up by The Black Cheers", data: "10" },
{ value: "...And Justice for All by Metallica", data: "11" },
{ value: "¡Viva la Gloria! by Green Day", data: "12" },
{ value: "¿Viva la Gloria? (Little Girl) by Green Day", data: "13" },
{ value: "100,000 Years (Live) by KISS", data: "14" },
{ value: "10's by Pantera", data: "15" },
{ value: "13 Steps to Nowhere by Pantera", data: "16" },
{ value: "18 and Life by Skid Row", data: "17" },
{ value: "1901 by Phoenix", data: "18" },
{ value: "1969 by The Stooges", data: "19" },
{ value: "1983 by Neon Trees", data: "20" },
{ value: "2 Minutes to Midnight by Iron Maiden", data: "21" },
{ value: "20th Century Boy by T. Rex", data: "22" },
{ value: "21 Guns by Green Day", data: "23" },
{ value: "2112 by Rush", data: "24" },
{ value: "2112: Discovery, Presentation by Rush", data: "25" },
{ value: "2112: Oracle: The Dream, Soliloquy, Grand Finale by Rush", data: "26" },
{ value: "2112: Overture, The Temples of Syrinx by Rush", data: "27" },
{ value: "21st Century (Digital Boy) by Bad Religion", data: "28" },
{ value: "21st Century Breakdown by Green Day", data: "29" },
{ value: "24K Magic by Bruno Mars", data: "30" },
{ value: "25 or 6 to 4 by Chicago", data: "31" },
{ value: "29 Fingers by The Konks", data: "32" },
{ value: "3 Dimes Down by Drive-By Truckers", data: "33" },
{ value: "3AM by Matchbox Twenty", data: "34" },
{ value: "3rd Stone from the Sun by The Jimi Hendrix Experience", data: "35" },
{ value: "3's & 7's by Queens of the Stone Age", data: "36" },
{ value: "5 Minutes Alone by Pantera", data: "37" },
{ value: "666 by Anvil", data: "38" },
{ value: "7 Things by Miley Cyrus", data: "39" },
{ value: "867-5309/Jenny by Tommy Tutone", data: "40" },
{ value: "99 by Barns Courtney", data: "41" },
{ value: "A Clean Shot by The Myriad", data: "42" },
{ value: "A Day Like This by SpongeBob SquarePants", data: "43" },
{ value: "A Dios le Pido by Juanes", data: "44" },
{ value: "A Favor House Atlantic by Coheed and Cambria", data: "45" },
{ value: "A Girl Like You by The Smithereens", data: "46" },
{ value: "A Jagged Gorgeous Winter by The Main Drag", data: "47" },
{ value: "A Little Less Sixteen Candles, a Little More Touch Me by Fall Out Boy", data: "48" },
{ value: "A Little Respect by Erasure", data: "49" },
{ value: "A Looking in View by Alice In Chains", data: "50" },
{ value: "A Lot Like Me by The Offspring", data: "51" },
{ value: "A Passage To Bangkok by Rush", data: "52" },
{ value: "A Prophecy by Asking Alexandria", data: "53" },
{ value: "A Sky Full Of Stars by Coldplay", data: "54" },
{ value: "A Thing About You (Live) by Tom Petty & The Heartbreakers", data: "55" },
{ value: "A Tout le Monde by Megadeth", data: "56" },
{ value: "A Warrior's Call by Volbeat", data: "57" },
{ value: "A Whiter Shade of Pale by Procol Harum", data: "58" },
{ value: "A Woman in Love (It's Not Me) (Live) by Tom Petty & The Heartbreakers", data: "59" },
{ value: "ABC by The Jackson 5", data: "60" },
{ value: "About a Girl by Nirvana", data: "61" },
{ value: "Absolutely (Story Of A Girl) by Nine Days", data: "62" },
{ value: "Accidentally in Love by Counting Crows", data: "63" },
{ value: "According to You by Orianthi", data: "64" },
{ value: "Ace of Spades '08 by Motörhead", data: "65" },
{ value: "Aces High (Live) by Iron Maiden", data: "66" },
{ value: "Action by Sweet", data: "67" },
{ value: "Adam's Song by Blink-182", data: "68" },
{ value: "Adolescents by Incubus", data: "69" },
{ value: "Adventure of a Lifetime by Coldplay", data: "70" },
{ value: "Aerials by System of a Down", data: "71" },
{ value: "Aesthetics of Hate by Machine Head", data: "72" },
{ value: "Africa by Toto", data: "73" },
{ value: "Afterlife by Avenged Sevenfold", data: "74" },
{ value: "Again by Flyleaf", data: "75" },
{ value: "Ain't It Fun by Paramore", data: "76" },
{ value: "Ain't Messin 'Round by Gary Clark Jr.", data: "77" },
{ value: "Ain't No Telling by The Jimi Hendrix Experience", data: "78" },
{ value: "Ain't Talkin' 'Bout Love by Van Halen", data: "79" },
{ value: "Airbrushed by Anamanaguchi", data: "80" },
{ value: "Airplanes by B.o.B (featuring Hayley Williams)", data: "81" },
{ value: "Alabama Getaway by The Grateful Dead", data: "82" },
{ value: "Albert by Eddie Japan", data: "83" },
{ value: "Alex Chilton by The Replacements", data: "84" },
{ value: "Aliens Exist by Blink-182", data: "85" },
{ value: "Alive by P.O.D.", data: "86" },
{ value: "Alive by Pearl Jam", data: "87" },
{ value: "Alive by The Temper Trap", data: "88" },
{ value: "Alive (Live: Drop in the Park) by Pearl Jam", data: "89" },
{ value: "All About That Bass by Meghan Trainor", data: "90" },
{ value: "All Along the Watchtower by The Jimi Hendrix Experience", data: "91" },
{ value: "All Apologies by Nirvana", data: "92" },
{ value: "All For You by Sister Hazel", data: "93" },
{ value: "All Going Out Together by Big Dipper", data: "94" },
{ value: "All I Wanna Do by Sheryl Crow", data: "95" },
{ value: "All I Want by A Day to Remember", data: "96" },
{ value: "All I Want by The Offspring", data: "97" },
{ value: "All Mixed Up by The Cars", data: "98" },
{ value: "All My Life by Foo Fighters", data: "99" },
{ value: "All of This by Shaimus", data: "100" },
{ value: "All Over Again by Locksley", data: "101" },
{ value: "All Over You by Live", data: "102" },
{ value: "All Right Now by Free", data: "103" },
{ value: "All Star by Smash Mouth", data: "104" },
{ value: "All the Rage Back Home by Interpol", data: "105" },
{ value: "All the Small Things by Blink-182", data: "106" },
{ value: "All the Things That Go to Make Heaven and Earth by The New Pornographers", data: "107" },
{ value: "All These Things That I've Done by The Killers", data: "108" },
{ value: "All You Wanted by Michelle Branch", data: "109" },
{ value: "All-American Girl by Carrie Underwood", data: "110" },
{ value: "Almost Easy by Avenged Sevenfold", data: "111" },
{ value: "Alone by Heart", data: "112" },
{ value: "Alone in My Head by Hautewerk", data: "113" },
{ value: "Alone Time by Tigerman WOAH", data: "114" },
{ value: "Alright by Darius Rucker", data: "115" },
{ value: "Always by Blink-182", data: "116" },
{ value: "Always Something There to Remind Me by Naked Eyes", data: "117" },
{ value: "Am I Crazy by Little Fish", data: "118" },
{ value: "Amaranth by Nightwish", data: "119" },
{ value: "Amazing Journey by The Who", data: "120" },
{ value: "Amber by 311", data: "121" },
{ value: "America by Spinal Tap", data: "122" },
{ value: "American Dream by Silverstein", data: "123" },
{ value: "American Eulogy by Green Day", data: "124" },
{ value: "American Girl (Live) by Tom Petty & The Heartbreakers", data: "125" },
{ value: "American Idiot by Green Day", data: "126" },
{ value: "American Music by Violent Femmes", data: "127" },
{ value: "American Pie by Don McLean", data: "128" },
{ value: "American Woman by The Guess Who", data: "129" },
{ value: "Among the Living by Anthrax", data: "130" },
{ value: "Amongst the Waves by Pearl Jam", data: "131" },
{ value: "And She Was by Talking Heads", data: "132" },
{ value: "And The Cradle Will Rock... by Van Halen", data: "133" },
{ value: "Andres by L7", data: "134" },
{ value: "Angel by Aerosmith", data: "135" },
{ value: "Angel by Jimi Hendrix", data: "136" },
{ value: "Angel of Death by Slayer", data: "137" },
{ value: "Animal by Neon Trees", data: "138" },
{ value: "Animal (Live) by Def Leppard", data: "139" },
{ value: "Animal I Have Become by Three Days Grace", data: "140" },
{ value: "Animals by Nickelback", data: "141" },
{ value: "Another One Bites the Dust by Queen", data: "142" },
{ value: "Another Way to Die by Disturbed", data: "143" },
{ value: "Antibodies by Poni Hoax", data: "144" },
{ value: "Ants Marching by Dave Matthews Band", data: "145" },
{ value: "Any Man of Mine by Shania Twain", data: "146" },
{ value: "Apache Rose Peacock by Red Hot Chili Peppers", data: "147" },
{ value: "Appetite by The Gracious Few", data: "148" },
{ value: "Applause by Lady Gaga", data: "149" },
{ value: "A-Punk by Vampire Weekend", data: "150" },
{ value: "Aqualung by Jethro Tull", data: "151" },
{ value: "Arabella by Arctic Monkeys", data: "152" },
{ value: "Are We the Waiting/St. Jimmy by Green Day", data: "153" },
{ value: "Are You Dead Yet? by Children of Bodom", data: "154" },
{ value: "Are You Experienced? by The Jimi Hendrix Experience", data: "155" },
{ value: "Are You Gonna Be My Girl by Jet", data: "156" },
{ value: "Are You Gonna Go My Way by Lenny Kravitz", data: "157" },
{ value: "Ashes to Fire by Ghost Hounds", data: "158" },
{ value: "Asylum by Disturbed", data: "159" },
{ value: "At Night In Dreams by White Denim", data: "160" },
{ value: "Attack by 30 Seconds to Mars", data: "161" },
{ value: "Attention by Charlie Puth", data: "162" },
{ value: "Audience of One by Rise Against", data: "163" },
{ value: "Australia by The Shins", data: "164" },
{ value: "Awake by Godsmack", data: "165" },
{ value: "Away by Toadies", data: "166" },
{ value: "Awful Beautiful Life by Darryl Worley", data: "167" },
{ value: "A-YO by Lady Gaga", data: "168" },
{ value: "B.Y.O.B. by System of a Down", data: "169" },
{ value: "Baba O'Riley by The Who", data: "170" },
{ value: "Baby Come Back by Player", data: "171" },
{ value: "Back From The Dead by Spinal Tap", data: "172" },
{ value: "Back in Black (Live) by AC/DC", data: "173" },
{ value: "Back in the Saddle by Aerosmith", data: "174" },
{ value: "Back To Me by Of Mice & Men", data: "175" },
{ value: "Back To The Shack by Weezer", data: "176" },
{ value: "Backwoods by Justin Moore", data: "177" },
{ value: "Backwoods Company by The Wild Feathers", data: "178" },
{ value: "Bad Case of Loving You (Doctor, Doctor) by Robert Palmer", data: "179" },
{ value: "Bad Catholics by The Barbazons", data: "180" },
{ value: "Bad Company by Bad Company", data: "181" },
{ value: "Bad Luck by Social Distortion", data: "182" },
{ value: "Bad Medicine by Bon Jovi", data: "183" },
{ value: "Bad Moon Rising by Creedence Clearwater Revival", data: "184" },
{ value: "Bad Omen by Megadeth", data: "185" },
{ value: "Bad Reputation by Joan Jett", data: "186" },
{ value: "Bad Romance by Lady Gaga", data: "187" },
{ value: "Bad to the Bone by George Thorogood & the Destroyers", data: "188" },
{ value: "Ballroom Blitz by Sweet", data: "189" },
{ value: "Band on the Run by Paul McCartney & Wings", data: "190" },
{ value: "Band on the Run (Live) by Paul McCartney", data: "191" },
{ value: "Bandages by Hot Hot Heat", data: "192" },
{ value: "Bang a Gong by T. Rex", data: "193" },
{ value: "Bang Bang by Little Fish", data: "194" },
{ value: "Bang Your Head (Metal Health) by Quiet Riot", data: "195" },
{ value: "Bark at the Moon by Ozzy Osbourne", data: "196" },
{ value: "Barracuda by Heart", data: "197" },
{ value: "Basket Case by Green Day", data: "198" },
{ value: "Bat Country by Avenged Sevenfold", data: "199" },
{ value: "Bathwater by No Doubt", data: "200" },
{ value: "Battle Royale by The Word Alive", data: "201" },
{ value: "Beast and the Harlot by Avenged Sevenfold", data: "202" },
{ value: "Beat It on Down the Line by The Grateful Dead", data: "203" },
{ value: "Beautiful by Snoop Dogg", data: "204" },
{ value: "Beautiful Disaster by 311", data: "205" },
{ value: "Beautiful Thieves by AFI", data: "206" },
{ value: "Been Caught Stealing by Jane's Addiction", data: "207" },
{ value: "Beer for My Horses by Toby Keith", data: "208" },
{ value: "Beer! by Psychostick", data: "209" },
{ value: "Beethoven's C*** by Serj Tankian", data: "210" },
{ value: "Beetlebum by Blur", data: "211" },
{ value: "Before He Cheats by Carrie Underwood", data: "212" },
{ value: "Before I Forget by Slipknot", data: "213" },
{ value: "Before the Lobotomy by Green Day", data: "214" },
{ value: "Behind Blue Eyes by The Who", data: "215" },
{ value: "Believer by Imagine Dragons", data: "216" },
{ value: "Bend Down Low by Bob Marley and the Wailers", data: "217" },
{ value: "Bent by Matchbox Twenty", data: "218" },
{ value: "Best of Me by Morningwood", data: "219" },
{ value: "Best of You by Foo Fighters", data: "220" },
{ value: "Best Song Ever by One Direction", data: "221" },
{ value: "Bethany by Goddamn Draculas", data: "222" },
{ value: "Better by Guns N' Roses", data: "223" },
{ value: "Beverly Hills by Weezer", data: "224" },
{ value: "Bicycle Race by Queen", data: "225" },
{ value: "Big Bang Baby by Stone Temple Pilots", data: "226" },
{ value: "Big Bottom by Spinal Tap", data: "227" },
{ value: "Big Empty by Stone Temple Pilots", data: "228" },
{ value: "Big Shot by Billy Joel", data: "229" },
{ value: "Billion Dollar Babies (Live) by Alice Cooper", data: "230" },
{ value: "Billionaire by Travie McCoy (ft. Bruno Mars)", data: "231" },
{ value: "Birth In Reverse by St. Vincent", data: "232" },
{ value: "Bitch by Meredith Brooks", data: "233" },
{ value: "Bizarre Love Triangle by New Order", data: "234" },
{ value: "Black by Pearl Jam", data: "235" },
{ value: "Black Betty by Ram Jam", data: "236" },
{ value: "Black Corridor by Worshipper", data: "237" },
{ value: "Black Friday by Steely Dan", data: "238" },
{ value: "Black Hole Sun by Soundgarden", data: "239" },
{ value: "Black Magic by Slayer", data: "240" },
{ value: "Black Magic Woman by Santana", data: "241" },
{ value: "Black Seas by Arctic Horror", data: "242" },
{ value: "Black Streak by Nemes", data: "243" },
{ value: "Black Sunshine by White Zombie", data: "244" },
{ value: "Blackened by Metallica", data: "245" },
{ value: "Blaze of Glory by Bon Jovi", data: "246" },
{ value: "Bleed by Meshuggah", data: "247" },
{ value: "Bleed American by Jimmy Eat World", data: "248" },
{ value: "Blew by Nirvana", data: "249" },
{ value: "Blinded By Fear by At the Gates", data: "250" },
{ value: "Blink by Father Octopus", data: "251" },
{ value: "Blister In The Sun by Violent Femmes", data: "252" },
{ value: "Blitzkrieg Bop by Ramones", data: "253" },
{ value: "Blood and Thunder by Mastodon", data: "254" },
{ value: "Blood Doll by Anarchy Club", data: "255" },
{ value: "Blood on My Hands by The Used", data: "256" },
{ value: "Blood Red Rock by Bang Camaro", data: "257" },
{ value: "Blood Sugar Sex Magik by Red Hot Chili Peppers", data: "258" },
{ value: "Bloodhands (Oh My Fever) by In The Valley Below", data: "259" },
{ value: "Bloodstone by Judas Priest", data: "260" },
{ value: "Blow Up the Outside World by Soundgarden", data: "261" },
{ value: "Blown Away by Carrie Underwood", data: "262" },
{ value: "Blue Bayou by Roy Orbison", data: "263" },
{ value: "Blue Christmas by The Pretenders", data: "264" },
{ value: "Blue Collar Man (Long Nights) by Styx", data: "265" },
{ value: "Blue Jean by David Bowie", data: "266" },
{ value: "Blue Jeans by Silvertide", data: "267" },
{ value: "Blue Monday by New Order", data: "268" },
{ value: "Blue Morning, Blue Day by Foreigner", data: "269" },
{ value: "Blue Sky by The Allman Brothers Band", data: "270" },
{ value: "Blue Spark by X", data: "271" },
{ value: "Blurred Lines by Robin Thicke ft. Pharrell", data: "272" },
{ value: "Blurry by Puddle of Mudd", data: "273" },
{ value: "Bodhisattva by Steely Dan", data: "274" },
{ value: "Bodies by Drowning Pool", data: "275" },
{ value: "Body I Occupy by The Naked Brothers Band", data: "276" },
{ value: "Body Like A Back Road by Sam Hunt", data: "277" },
{ value: "Body Like That by The Eiffels", data: "278" },
{ value: "Body Talks by The Struts", data: "279" },
{ value: "Bohemian Rhapsody by Queen", data: "280" },
{ value: "Bold as Love by The Jimi Hendrix Experience", data: "281" },
{ value: "Bombtrack by Rage Against the Machine", data: "282" },
{ value: "Boom by P.O.D.", data: "283" },
{ value: "Bored To Death by Blink-182", data: "284" },
{ value: "Born Again Tomorrow by Bon Jovi", data: "285" },
{ value: "Born on the Bayou by Creedence Clearwater Revival", data: "286" },
{ value: "Born This Way by Lady Gaga", data: "287" },
{ value: "Born to Quit by The Used", data: "288" },
{ value: "Boulevard of Broken Dreams by Green Day", data: "289" },
{ value: "Bounce by The Cab", data: "290" },
{ value: "Boyfriend by Justin Bieber", data: "291" },
{ value: "Brain Stew/Jaded by Green Day", data: "292" },
{ value: "Brainpower by Freezepop", data: "293" },
{ value: "Brand New Cadillac by The Clash", data: "294" },
{ value: "Brandy (You're A Fine Girl) by Looking Glass", data: "295" },
{ value: "Brass In Pocket by The Pretenders", data: "296" },
{ value: "Break My Heart by Nikko", data: "297" },
{ value: "Break on Through (To the Other Side) by The Doors", data: "298" },
{ value: "Breakdown (Live) by Tom Petty & The Heartbreakers", data: "299" },
{ value: "Breakfast At Tiffany's by Deep Blue Something", data: "300" },
{ value: "Breaking by Anberlin", data: "301" },
{ value: "Breaking the Girl by Red Hot Chili Peppers", data: "302" },
{ value: "Breaking the Habit by Linkin Park", data: "303" },
{ value: "Breaking the Law (Live) by Judas Priest", data: "304" },
{ value: "Breakout by Foo Fighters", data: "305" },
{ value: "Breath by Breaking Benjamin", data: "306" },
{ value: "Breed by Nirvana", data: "307" },
{ value: "Brick by Boring Brick by Paramore", data: "308" },
{ value: "Brick House by Commodores", data: "309" },
{ value: "Bring Me to Life by Evanescence", data: "310" },
{ value: "Bringin' On the Heartbreak by Def Leppard", data: "311" },
{ value: "Broken by lovelytheband", data: "312" },
{ value: "Broken by Seether ft. Amy Lee", data: "313" },
{ value: "Brother by Pearl Jam", data: "314" },
{ value: "Brown Eyed Girl by Van Morrison", data: "315" },
{ value: "Buddy Holly by Weezer", data: "316" },
{ value: "Buffalo Soldier by Bob Marley and the Wailers", data: "317" },
{ value: "Build a Bridge by Limp Bizkit", data: "318" },
{ value: "Bullet With A Name by Nonpoint", data: "319" },
{ value: "Bulletproof by La Roux", data: "320" },
{ value: "Bullets & Guns by Them Terribles", data: "321" },
{ value: "Bulls on Parade by Rage Against the Machine", data: "322" },
{ value: "Bully by Shinedown", data: "323" },
{ value: "Burden in My Hand by Soundgarden", data: "324" },
{ value: "Burn by Nine Inch Nails", data: "325" },
{ value: "Burn by Rob Zombie", data: "326" },
{ value: "Burn It Down by Five Finger Death Punch", data: "327" },
{ value: "Burn It Down by Linkin Park", data: "328" },
{ value: "Burn It to the Ground by Nickelback", data: "329" },
{ value: "Burn You Down by Opiate for the Masses", data: "330" },
{ value: "Burnin' and Lootin' by Bob Marley and the Wailers", data: "331" },
{ value: "Burnin' for You by Blue Öyster Cult", data: "332" },
{ value: "Burnin' It Down by Jason Aldean", data: "333" },
{ value: "Burning Down the House by Talking Heads", data: "334" },
{ value: "Burnout by Green Day", data: "335" },
{ value: "Bury Me Alive by We Are The Fallen", data: "336" },
{ value: "Business Time by Flight of the Conchords", data: "337" },
{ value: "By the Way by Red Hot Chili Peppers", data: "338" },
{ value: "Bye Bye Love by The Cars", data: "339" },
{ value: "Cake By The Ocean by DNCE", data: "340" },
{ value: "California (There Is No End To Love) by U2", data: "341" },
{ value: "California Über Alles by Dead Kennedys", data: "342" },
{ value: "Californication by Red Hot Chili Peppers", data: "343" },
{ value: "Call Me by Blondie", data: "344" },
{ value: "Call Me Maybe by Carly Rae Jepsen", data: "345" },
{ value: "Call Me When You're Sober by Evanescence", data: "346" },
{ value: "Calling Dr. Love by KISS", data: "347" },
{ value: "Can I Play with Madness by Iron Maiden", data: "348" },
{ value: "Can't Be Tamed by Miley Cyrus", data: "349" },
{ value: "Can't Feel My Face by The Weeknd", data: "350" },
{ value: "Can't Get Enough by Bad Company", data: "351" },
{ value: "Can't Get Enough of You Baby by Smash Mouth", data: "352" },
{ value: "Can't Hold Us by Macklemore & Ryan Lewis ft. Ray Dalton", data: "353" },
{ value: "Can't Let Go by Death of the Cool", data: "354" },
{ value: "Can't Let Go by Lucinda Williams", data: "355" },
{ value: "Can't Stand Losing You by The Police", data: "356" },
{ value: "Can't Stop Rockin' by Styx/REO Speedwagon", data: "357" },
{ value: "Capital G by Nine Inch Nails", data: "358" },
{ value: "Caprici di Diablo by Yngwie Malmsteen's Rising Force", data: "359" },
{ value: "Captain Jack by Billy Joel", data: "360" },
{ value: "Caraphernelia by Pierce the Veil", data: "361" },
{ value: "Caravan by Rush", data: "362" },
{ value: "Carry On Wayward Son by Kansas", data: "363" },
{ value: "Casablanca by Littlefoot", data: "364" },
{ value: "Casey Jones by The Grateful Dead", data: "365" },
{ value: "Castles Made of Sand by The Jimi Hendrix Experience", data: "366" },
{ value: "Catcher in the Rye by Guns N' Roses", data: "367" },
{ value: "Caught in a Mosh by Anthrax", data: "368" },
{ value: "Caught Up In You by .38 Special", data: "369" },
{ value: "Cedarwood Road by U2", data: "370" },
{ value: "Celebration by Kool & the Gang", data: "371" },
{ value: "Celebrity Skin by Hole", data: "372" },
{ value: "Centerfold by The J. Geils Band", data: "373" },
{ value: "Centuries by Fall Out Boy", data: "374" },
{ value: "Century City (Live) by Tom Petty & The Heartbreakers", data: "375" },
{ value: "Champagne Supernova by Oasis", data: "376" },
{ value: "Chandelier by Sia", data: "377" },
{ value: "Charlene (I'm Right Behind You) by Stephen and the Colberts", data: "378" },
{ value: "Cheap Thrills by Sia ft. Sean Paul", data: "379" },
{ value: "Cheat on the Church by Graveyard BBQ", data: "380" },
{ value: "Check My Brain by Alice In Chains", data: "381" },
{ value: "Check Yes Juliet by We the Kings", data: "382" },
{ value: "Cheerleader (Felix Jaehn Remix) by OMI", data: "383" },
{ value: "Cheeseburger in Paradise by Jimmy Buffett", data: "384" },
{ value: "Cherry Bomb by The Runaways", data: "385" },
{ value: "Cherry Pie by Warrant", data: "386" },
{ value: "Cherry Waves by Deftones", data: "387" },
{ value: "Cherub Rock by Smashing Pumpkins", data: "388" },
{ value: "Chest Fever (Live) by The Band", data: "389" },
{ value: "Chicken Fried by Zac Brown Band", data: "390" },
{ value: "Child in Time by Deep Purple", data: "391" },
{ value: "Children of the Revolution by T. Rex", data: "392" },
{ value: "China Cat Sunflower by The Grateful Dead", data: "393" },
{ value: "China Grove by The Doobie Brothers", data: "394" },
{ value: "Chinese Democracy by Guns N' Roses", data: "395" },
{ value: "Chiron by All That Remains", data: "396" },
{ value: "Chop Suey by System of a Down", data: "397" },
{ value: "Christian's Inferno by Green Day", data: "398" },
{ value: "Christmas Is the Time to Say I Love You by Billy Squier", data: "399" },
{ value: "Chump by Green Day", data: "400" },
{ value: "Circles by Pierce the Veil", data: "401" },
{ value: "Cirice by Ghost", data: "402" },
{ value: "Cities in Dust by Siouxsie and The Banshees", data: "403" },
{ value: "Clampdown by The Clash", data: "404" },
{ value: "Claudette by Roy Orbison", data: "405" },
{ value: "Clint Eastwood by Gorillaz", data: "406" },
{ value: "Clocks by Coldplay", data: "407" },
{ value: "Closer by Lacuna Coil", data: "408" },
{ value: "Closer by Nine Inch Nails", data: "409" },
{ value: "Closer by The Chainsmokers ft. Halsey", data: "410" },
{ value: "Closer to the Edge by 30 Seconds to Mars", data: "411" },
{ value: "Closer to the Heart by Rush", data: "412" },
{ value: "Closer, Closer by The Warning Shots", data: "413" },
{ value: "Closing Time by Semisonic", data: "414" },
{ value: "Clouds Over California by DevilDriver", data: "415" },
{ value: "Club Foot by Kasabian", data: "416" },
{ value: "C'mon C'mon by The Von Bondies", data: "417" },
{ value: "Cocoon by Catfish And The Bottlemen", data: "418" },
{ value: "Code Monkey by Jonathan Coulton", data: "419" },
{ value: "Coffin Nails by Atreyu", data: "420" },
{ value: "Cold by Crossfade", data: "421" },
{ value: "Cold as Ice by Foreigner", data: "422" },
{ value: "Cold Clear Light by Johnny Blazes and The Pretty Boys", data: "423" },
{ value: "Cold Rain and Snow by The Grateful Dead", data: "424" },
{ value: "Collide by Anarchy Club", data: "425" },
{ value: "Colony of Birchmen by Mastodon", data: "426" },
{ value: "Combat Baby by Metric", data: "427" },
{ value: "Come As You Are (Live from MTV Unplugged) by Nirvana", data: "428" },
{ value: "Come On Eileen by Dexys Midnight Runners", data: "429" },
{ value: "Come On Eileen by Save Ferris", data: "430" },
{ value: "Come Out and Play (Keep 'Em Separated) by The Offspring", data: "431" },
{ value: "Comedown by Bush", data: "432" },
{ value: "Coming Clean by Green Day", data: "433" },
{ value: "Coming in from the Cold by Bob Marley and the Wailers", data: "434" },
{ value: "Complete Control by The Clash", data: "435" },
{ value: "Complicated by Avril Lavigne", data: "436" },
{ value: "Conquer All by Behemoth", data: "437" },
{ value: "Constant Disaster by When Particles Collide", data: "438" },
{ value: "Constant Motion by Dream Theater", data: "439" },
{ value: "Control by Mute Math", data: "440" },
{ value: "Control by Puddle of Mudd", data: "441" },
{ value: "Conventional Lover by Speck", data: "442" },
{ value: "Cool for Cats by Squeeze", data: "443" },
{ value: "Cosmic Dancer by T. Rex", data: "444" },
{ value: "Could You Be Loved by Bob Marley and the Wailers", data: "445" },
{ value: "Countdown to Insanity by H-Blockx", data: "446" },
{ value: "Counting Stars by OneRepublic", data: "447" },
{ value: "Country Song by Seether", data: "448" },
{ value: "Cowboy Casanova by Carrie Underwood", data: "449" },
{ value: "Cowboy Song (Live) by Thin Lizzy", data: "450" },
{ value: "Cowboys From Hell (Live From Monsters In Moscow) by Pantera", data: "451" },
{ value: "Crackerman by Stone Temple Pilots", data: "452" },
{ value: "Crackity Jones by Pixies", data: "453" },
{ value: "Crash by The Primitives", data: "454" },
{ value: "Crawl by Kings Of Leon", data: "455" },
{ value: "Crawling by Linkin Park", data: "456" },
{ value: "Crawling Back to You by Daughtry", data: "457" },
{ value: "Crawling in the Dark by Hoobastank", data: "458" },
{ value: "Crazy by Aerosmith", data: "459" },
{ value: "Crazy Babies by Ozzy Osbourne", data: "460" },
{ value: "Crazy Little Thing Called Love by Queen", data: "461" },
{ value: "Crazy On You by Heart", data: "462" },
{ value: "Crazy Town by Jason Aldean", data: "463" },
{ value: "Crazy Train by Ozzy Osbourne", data: "464" },
{ value: "Crazy Tuesday by thenewno2", data: "465" },
{ value: "Cream and Bastards Rise by Harvey Danger", data: "466" },
{ value: "Creep by Radiohead", data: "467" },
{ value: "Creep by Stone Temple Pilots", data: "468" },
{ value: "Creepin' Up the Backstairs by The Fratellis", data: "469" },
{ value: "Crippled Inside by John Lennon", data: "470" },
{ value: "Critical Acclaim by Avenged Sevenfold", data: "471" },
{ value: "Crocodile Rock by Elton John", data: "472" },
{ value: "Cross That Line by Michael Christmas", data: "473" },
{ value: "Crosseyed and Painless by Talking Heads", data: "474" },
{ value: "Crosstown Traffic by The Jimi Hendrix Experience", data: "475" },
{ value: "Crushcrushcrush by Paramore", data: "476" },
{ value: "Cry Lonely by Cross Canadian Ragweed", data: "477" },
{ value: "Cry Thunder by DragonForce", data: "478" },
{ value: "Cry, Cry, Cry by Johnny Cash", data: "479" },
{ value: "Cryin' by Aerosmith", data: "480" },
{ value: "Cult of Personality by Living Colour", data: "481" },
{ value: "Cumberland Blues by The Grateful Dead", data: "482" },
{ value: "Cumbersome by Seven Mary Three", data: "483" },
{ value: "Cups and Cakes by Spinal Tap", data: "484" },
{ value: "Curl of the Burl by Mastodon", data: "485" },
{ value: "Cuz U R Next by Ministry", data: "486" },
{ value: "D.O.A. by The Haunted", data: "487" },
{ value: "Dame Aire by Skizoo", data: "488" },
{ value: "Dammit by Blink-182", data: "489" },
{ value: "Damnation Game by Yngwie Malmsteen's Rising Force", data: "490" },
{ value: "Dance Epidemic by Electric Six", data: "491" },
{ value: "Dance The Night Away by Van Halen", data: "492" },
{ value: "Dance, Dance by Fall Out Boy", data: "493" },
{ value: "Dancing With Myself by Generation X", data: "494" },
{ value: "Danger Zone by Kenny Loggins", data: "495" },
{ value: "Dani California by Red Hot Chili Peppers", data: "496" },
{ value: "Darling Dear by Little Fish", data: "497" },
{ value: "Database Corrupted by Dealership", data: "498" },
{ value: "Date with the Night by Yeah Yeah Yeahs", data: "499" },
{ value: "Dawn Patrol by Megadeth", data: "500" },
{ value: "Day Late, Dollar Short by The Acro-brats", data: "501" },
{ value: "Days Go By by Keith Urban", data: "502" },
{ value: "Days Go By by The Offspring", data: "503" },
{ value: "Dead by Pixies", data: "504" },
{ value: "Dead & Bloated by Stone Temple Pilots", data: "505" },
{ value: "Dead Black (Heart of Ice) by Soul Remnants", data: "506" },
{ value: "Dead End Friends by Them Crooked Vultures", data: "507" },
{ value: "Dead Leaves and the Dirty Ground by The White Stripes", data: "508" },
{ value: "Dead Memories by Slipknot", data: "509" },
{ value: "Dead on Arrival by Fall Out Boy", data: "510" },
{ value: "Dearest (I'm So Sorry) by Picture Me Broken", data: "511" },
{ value: "Death on Two Legs (Dedicated to...) by Queen", data: "512" },
{ value: "Death or Glory by The Clash", data: "513" },
{ value: "Debaser by Pixies", data: "514" },
{ value: "Decent Days and Nights by The Futureheads", data: "515" },
{ value: "Deep by Pearl Jam", data: "516" },
{ value: "Delinquents by Woe, Is Me", data: "517" },
{ value: "De-Luxe by Lush", data: "518" },
{ value: "Desire by U2", data: "519" },
{ value: "Desperate Times, Desperate Measures by Underoath", data: "520" },
{ value: "Detroit Rock City by KISS", data: "521" },
{ value: "Deuce (Live) by KISS", data: "522" },
{ value: "Devil's Child by Judas Priest", data: "523" },
{ value: "Devil's Island by Megadeth", data: "524" },
{ value: "Devour by Shinedown", data: "525" },
{ value: "Diamond Eyes (Boom-Lay Boom-Lay Boom) by Shinedown", data: "526" },
{ value: "Diary of a Madman by Ozzy Osbourne", data: "527" },
{ value: "Die, All Right! by The Hives", data: "528" },
{ value: "Different Colors by Walk The Moon", data: "529" },
{ value: "Different People by No Doubt", data: "530" },
{ value: "Dig by Incubus", data: "531" },
{ value: "Diggin' Me Down by Ozzy Osbourne", data: "532" },
{ value: "Dirt Road Anthem by Jason Aldean", data: "533" },
{ value: "Dirty Deeds Done Dirt Cheap (Live) by AC/DC", data: "534" },
{ value: "Dirty Little Secret by All-American Rejects", data: "535" },
{ value: "Dirty Pool by Stevie Ray Vaughan and Double Trouble", data: "536" },
{ value: "Disengage by Suicide Silence", data: "537" },
{ value: "Dis-Moi by BB Brunes", data: "538" },
{ value: "Disposable Teens by Marilyn Manson", data: "539" },
{ value: "Dissident Aggressor (Live) by Judas Priest", data: "540" },
{ value: "Distracted by KSM", data: "541" },
{ value: "Divide by All That Remains", data: "542" },
{ value: "Do Not Disturb by Halestorm", data: "543" },
{ value: "Do You Believe in Love by Huey Lewis and the News", data: "544" },
{ value: "Do You Feel Like We Do (Live) by Peter Frampton", data: "545" },
{ value: "Do You Really Want to Hurt Me by Culture Club", data: "546" },
{ value: "Do You Want To by Franz Ferdinand", data: "547" },
{ value: "Do Your Worst by Rivals Sons", data: "548" },
{ value: "DOA by Foo Fighters", data: "549" },
{ value: "Dog Days Are Over by Florence + the Machine", data: "550" },
{ value: "Dogs Can Grow Beards All Over by The Devil Wears Prada", data: "551" },
{ value: "Doin' That Rag by The Grateful Dead", data: "552" },
{ value: "Doll by Foo Fighters", data: "553" },
{ value: "Dolly Dagger by Jimi Hendrix", data: "554" },
{ value: "Don't Bury Me... I'm Still Not Dead by Riverboat Gamblers", data: "555" },
{ value: "Don't Cha Stop by The Cars", data: "556" },
{ value: "Don't Do Me Like That by Tom Petty & The Heartbreakers", data: "557" },
{ value: "Don't Ease Me In by The Grateful Dead", data: "558" },
{ value: "Don't Feel Like That Anymore by Johnny Cooper", data: "559" },
{ value: "Don't Go Away Mad (Just Go Away) by Mötley Crüe", data: "560" },
{ value: "Don't Know What You Got (Till It's Gone) by Cinderella", data: "561" },
{ value: "Don't Let Me Down (Slowly) by The Main Drag", data: "562" },
{ value: "Don't Let the Sun Go Down on Me by Elton John", data: "563" },
{ value: "Don't Look Back In Anger by Oasis", data: "564" },
{ value: "Don't Make Me Wait by Locksley", data: "565" },
{ value: "Don't Speak by No Doubt", data: "566" },
{ value: "Don't Stand So Close to Me by The Police", data: "567" },
{ value: "Don't Stop by Fleetwood Mac", data: "568" },
{ value: "Don't Stop (Color on the Walls) by Foster the People", data: "569" },
{ value: "Don't Stop Believing by Journey", data: "570" },
{ value: "Don't Stop Me Now by Queen", data: "571" },
{ value: "Don't Take Your Guns to Town by Johnny Cash", data: "572" },
{ value: "Don't Talk to Strangers by Rick Springfield", data: "573" },
{ value: "Don't Tell Me by Nikko", data: "574" },
{ value: "Don't Tell Me You Love Me by Night Ranger", data: "575" },
{ value: "Don't Wanna Fight by Alabama Shakes", data: "576" },
{ value: "Don't You (Forget About Me) by Simple Minds", data: "577" },
{ value: "Don't You Evah by Spoon", data: "578" },
{ value: "Don't You Want Me by The Human League", data: "579" },
{ value: "Dope Nose by Weezer", data: "580" },
{ value: "Doppelgänger by Freezepop", data: "581" },
{ value: "Down by 311", data: "582" },
{ value: "Down by Blink-182", data: "583" },
{ value: "Down at the Whisky by Mötley Crüe", data: "584" },
{ value: "Down In a Hole by Alice In Chains", data: "585" },
{ value: "Down on the Corner by Creedence Clearwater Revival", data: "586" },
{ value: "Down Under by Men at Work", data: "587" },
{ value: "Down with the Sickness by Disturbed", data: "588" },
{ value: "Downfall by Trust Company", data: "589" },
{ value: "Dr. Feelgood by Mötley Crüe", data: "590" },
{ value: "Drag Me Down by One Direction", data: "591" },
{ value: "Drag the Waters by Pantera", data: "592" },
{ value: "Dragula by Rob Zombie", data: "593" },
{ value: "Drain the Blood by The Distillers", data: "594" },
{ value: "Drain You by Nirvana", data: "595" },
{ value: "Dream Baby (How Long Must I Dream) by Roy Orbison", data: "596" },
{ value: "Dream Genie by Lightning Bolt", data: "597" },
{ value: "Dream On (Live) by Aerosmith", data: "598" },
{ value: "Dream Police by Cheap Trick", data: "599" },
{ value: "Dreamin' by Weezer", data: "600" },
{ value: "Dreaming of Love by Lights Resolve", data: "601" },
{ value: "Dreaming of You by The Coral", data: "602" },
{ value: "Dreams by Beck", data: "603" },
{ value: "Dreams by Fleetwood Mac", data: "604" },
{ value: "Dreams by The Cranberries", data: "605" },
{ value: "Drive by Incubus", data: "606" },
{ value: "Driver 8 by R.E.M.", data: "607" },
{ value: "Drop It Like It's Hot by Snoop Dogg", data: "608" },
{ value: "Drops of Jupiter by Train", data: "609" },
{ value: "Drown by Bring Me The Horizon", data: "610" },
{ value: "Drunken Lullabies (Live) by Flogging Molly", data: "611" },
{ value: "Du Hast by Rammstein", data: "612" },
{ value: "Duality by Slipknot", data: "613" },
{ value: "Dude (Looks Like a Lady) by Aerosmith", data: "614" },
{ value: "Dune Buggy by The Presidents of the United States of America", data: "615" },
{ value: "Dystopia by Megadeth", data: "616" },
{ value: "East Jesus Nowhere by Green Day", data: "617" },
{ value: "Eat Me Alive (Live) by Judas Priest", data: "618" },
{ value: "Eat the Rich by Aerosmith", data: "619" },
{ value: "Edge of Seventeen (Just Like the White Winged Dove) by Stevie Nicks", data: "620" },
{ value: "El Scorcho by Weezer", data: "621" },
{ value: "Electric Crown by Testament", data: "622" },
{ value: "Electric Love by BØRNS", data: "623" },
{ value: "Electric Version by The New Pornographers", data: "624" },
{ value: "Embedded by Job For A Cowboy", data: "625" },
{ value: "Emenius Sleepus by Green Day", data: "626" },
{ value: "Eminence Front by The Who", data: "627" },
{ value: "Empire of the Gun by God Forbid", data: "628" },
{ value: "Employee of the Month by SpongeBob SquarePants", data: "629" },
{ value: "Empty Walls by Serj Tankian", data: "630" },
{ value: "End It on This by No Doubt", data: "631" },
{ value: "End Transmission by AFI", data: "632" },
{ value: "Enjoy the Silence by Depeche Mode", data: "633" },
{ value: "Enough Space by Foo Fighters", data: "634" },
{ value: "Entangled by Honest Bob and the Factory-to-Dealer Incentives", data: "635" },
{ value: "Epic by Faith No More", data: "636" },
{ value: "E-Pro by Beck", data: "637" },
{ value: "Escape (The Piña Colada Song) by Rupert Holmes", data: "638" },
{ value: "Even Flow by Pearl Jam", data: "639" },
{ value: "Even the Losers (Live) by Tom Petty & The Heartbreakers", data: "640" },
{ value: "Ever Fallen in Love by Buzzcocks", data: "641" },
{ value: "Everlong by Foo Fighters", data: "642" },
{ value: "Every Breath You Take by The Police", data: "643" },
{ value: "Every Little Thing She Does Is Magic by The Police", data: "644" },
{ value: "Every Morning by Sugar Ray", data: "645" },
{ value: "Every Rose Has Its Thorn by Poison", data: "646" },
{ value: "Every Teardrop Is a Waterfall by Coldplay", data: "647" },
{ value: "Everybody Talks by Neon Trees", data: "648" },
{ value: "Everybody Wants to Rule the World by Tears for Fears", data: "649" },
{ value: "Everybody Wants You by Billy Squier", data: "650" },
{ value: "Everybody's Fool by Evanescence", data: "651" },
{ value: "Everything You Want by Vertical Horizon", data: "652" },
{ value: "Everything Zen by Bush", data: "653" },
{ value: "Excuse Me Mr. by No Doubt", data: "654" },
{ value: "Ex-Girlfriend by No Doubt", data: "655" },
{ value: "Exodus by Bob Marley and the Wailers", data: "656" },
{ value: "Exploited & Exposed by Symbion Project", data: "657" },
{ value: "Ex's & Oh's by Elle King", data: "658" },
{ value: "Extraordinary Girl by Green Day", data: "659" },
{ value: "Eye of the Tiger by Survivor", data: "660" },
{ value: "F.O.D. by Green Day", data: "661" },
{ value: "Face Down in the Dirt by Mötley Crüe", data: "662" },
{ value: "Face to the Floor by Chevelle", data: "663" },
{ value: "Fa-Fa-Fa-Fa-Fa (Sad Song) by Otis Redding", data: "664" },
{ value: "Failure by Breaking Benjamin", data: "665" },
{ value: "Fake Friends by Joan Jett and the Blackhearts", data: "666" },
{ value: "Fake It by Seether", data: "667" },
{ value: "Falling Away from Me by KoRn", data: "668" },
{ value: "False Alarm by The Bronx", data: "669" },
{ value: "Fame by David Bowie", data: "670" },
{ value: "Famous Last Words by My Chemical Romance", data: "671" },
{ value: "Fancy by Reba McEntire", data: "672" },
{ value: "Fantasma by Linea 77", data: "673" },
{ value: "Farewell, Mona Lisa by The Dillinger Escape Plan", data: "674" },
{ value: "Fascination by Alphabeat", data: "675" },
{ value: "Fat Bottomed Girls by Queen", data: "676" },
{ value: "Fat Lip by Sum 41", data: "677" },
{ value: "Fear of the Dark (Live) by Iron Maiden", data: "678" },
{ value: "Feather Pluckn by The Presidents of the United States of America", data: "679" },
{ value: "February Stars by Foo Fighters", data: "680" },
{ value: "Feed the Tree by Belly", data: "681" },
{ value: "Feel Good Drag by Anberlin", data: "682" },
{ value: "Feel Good Inc. by Gorillaz", data: "683" },
{ value: "Feel Invincible by Skillet", data: "684" },
{ value: "Feel It Still by Portugal. The Man", data: "685" },
{ value: "Feel the Pain by Dinosaur Jr.", data: "686" },
{ value: "Feelin' Stronger Every Day by Chicago", data: "687" },
{ value: "Feeling This by Blink-182", data: "688" },
{ value: "Feels Like the First Time by Foreigner", data: "689" },
{ value: "Fell in Love with a Girl by The White Stripes", data: "690" },
{ value: "Fell on Black Days by Soundgarden", data: "691" },
{ value: "Fever by Judas Priest", data: "692" },
{ value: "Fever by The Black Keys", data: "693" },
{ value: "Figure It Out by Royal Blood", data: "694" },
{ value: "Figured You Out by Nickelback", data: "695" },
{ value: "Fíjate Bien by Juanes", data: "696" },
{ value: "Fire by Ohio Players", data: "697" },
{ value: "Fire by The Jimi Hendrix Experience", data: "698" },
{ value: "Fire (Live) by Jimi Hendrix", data: "699" },
{ value: "Fire and Ice by Pat Benatar", data: "700" },
{ value: "Fire It Up by Thousand Foot Krutch", data: "701" },
{ value: "Fire on the Mountain by The Grateful Dead", data: "702" },
{ value: "Fire Your Guns (Live) by AC/DC", data: "703" },
{ value: "Fireflies by Owl City", data: "704" },
{ value: "First by Cold War Kids", data: "705" },
{ value: "First Date by Blink-182", data: "706" },
{ value: "Five Feet High and Rising by Johnny Cash", data: "707" },
{ value: "Five Magics by Megadeth", data: "708" },
{ value: "Fix You by Coldplay", data: "709" },
{ value: "Flag in the Ground by Sonata Arctica", data: "710" },
{ value: "Flagpole Sitta by Harvey Danger", data: "711" },
{ value: "Flathead by The Fratellis", data: "712" },
{ value: "Flight of Icarus by Iron Maiden", data: "713" },
{ value: "Flirtin' with Disaster by Molly Hatchet", data: "714" },
{ value: "Float by Switchfoot", data: "715" },
{ value: "Float On by Modest Mouse", data: "716" },
{ value: "Floods by Pantera", data: "717" },
{ value: "Fly by Night by Rush", data: "718" },
{ value: "Fly Like an Eagle by Steve Miller Band", data: "719" },
{ value: "Fly on the Wall by Miley Cyrus", data: "720" },
{ value: "Flying High Again by Ozzy Osbourne", data: "721" },
{ value: "Follow Me Down by The Pretty Reckless", data: "722" },
{ value: "Follow You Down by Gin Blossoms", data: "723" },
{ value: "Folsom Prison Blues by Johnny Cash", data: "724" },
{ value: "Foolin' by Def Leppard", data: "725" },
{ value: "Footloose by Kenny Loggins", data: "726" },
{ value: "For Those About to Rock (We Salute You) (Live) by AC/DC", data: "727" },
{ value: "For What It's Worth by Buffalo Springfield", data: "728" },
{ value: "Force of Nature by Pearl Jam", data: "729" },
{ value: "Foreplay/Long Time by Boston", data: "730" },
{ value: "Forever by In This Moment", data: "731" },
{ value: "Forever by Papa Roach", data: "732" },
{ value: "Forever In Your Hands by All That Remains", data: "733" },
{ value: "Forget About Tomorrow by The Bergamot", data: "734" },
{ value: "Fortunate Son by Creedence Clearwater Revival", data: "735" },
{ value: "Fortunate Son (Original Version) by Creedence Clearwater Revival", data: "736" },
{ value: "Found Out About You by Gin Blossoms", data: "737" },
{ value: "Four Horsemen by The Clash", data: "738" },
{ value: "Foxey Lady by The Jimi Hendrix Experience", data: "739" },
{ value: "Frankenstein by The Edgar Winter Group", data: "740" },
{ value: "Franklin's Tower by The Grateful Dead", data: "741" },
{ value: "Freak on a Leash by KoRn", data: "742" },
{ value: "Freakshow by HourCast", data: "743" },
{ value: "Free and Easy (Down the Road I Go) by Dierks Bentley", data: "744" },
{ value: "Free Bird by Lynyrd Skynyrd", data: "745" },
{ value: "Free Fallin' by Tom Petty", data: "746" },
{ value: "Free Falling by The Warning", data: "747" },
{ value: "Free Ride by The Edgar Winter Group", data: "748" },
{ value: "Freedom by Jimi Hendrix", data: "749" },
{ value: "Freedom Train by Lenny Kravitz", data: "750" },
{ value: "Freewill (Vault Edition) by Rush", data: "751" },
{ value: "Freeze-Frame by The J. Geils Band", data: "752" },
{ value: "Friday I'm In Love by The Cure", data: "753" },
{ value: "From Out of Nowhere by Faith No More", data: "754" },
{ value: "Funhouse by P!nk", data: "755" },
{ value: "Funk #49 by James Gang", data: "756" },
{ value: "Funky Monks by Red Hot Chili Peppers", data: "757" },
{ value: "Future Perfect Tense by Sweet Billy Pilgrim", data: "758" },
{ value: "Futures by Jimmy Eat World", data: "759" },
{ value: "Garden by Pearl Jam", data: "760" },
{ value: "Gasoline by Audioslave", data: "761" },
{ value: "Gasoline by Bouncing Souls", data: "762" },
{ value: "Gay Bar by Electric Six", data: "763" },
{ value: "Geek Stink Breath by Green Day", data: "764" },
{ value: "Geraldine by Glasvegas", data: "765" },
{ value: "Get Clean by Anarchy Club", data: "766" },
{ value: "Get Free by The Vines", data: "767" },
{ value: "Get It On by The Chevelles", data: "768" },
{ value: "Get Lucky by Daft Punk ft. Pharrell Williams", data: "769" },
{ value: "Get Out by The Vines", data: "770" },
{ value: "Get Ready 2 Rokk by Freezepop", data: "771" },
{ value: "Get the Party Started by P!nk", data: "772" },
{ value: "Get Up (I Feel Like Being a) Sex Machine - Pt 1 by James Brown", data: "773" },
{ value: "Get Up, Stand Up by Bob Marley and the Wailers", data: "774" },
{ value: "Get Your Rock On by The Janitors", data: "775" },
{ value: "Ghost of Perdition by Opeth", data: "776" },
{ value: "Ghostbusters by Ray Parker Jr.", data: "777" },
{ value: "Giddy On Up by Laura Bell Bundy", data: "778" },
{ value: "Gimme Chocolate!! by BABYMETAL", data: "779" },
{ value: "Gimme Shelter by The Rolling Stones", data: "780" },
{ value: "Gimme Some Money by Spinal Tap", data: "781" },
{ value: "Gimme Some Truth by John Lennon", data: "782" },
{ value: "Gimme Three Steps by Lynyrd Skynyrd", data: "783" },
{ value: "Girl U Want by Devo", data: "784" },
{ value: "Girl, You Have No Faith in Medicine by The White Stripes", data: "785" },
{ value: "Girlfriend Is Better by Talking Heads", data: "786" },
{ value: "Girls & Boys by Good Charlotte", data: "787" },
{ value: "Girls Just Want To Have Fun by Cyndi Lauper", data: "788" },
{ value: "Girls Like You by Maroon 5", data: "789" },
{ value: "Girl's Not Grey by AFI", data: "790" },
{ value: "Girls on Film by Duran Duran", data: "791" },
{ value: "Girls Who Play Guitars by Maxïmo Park", data: "792" },
{ value: "Give It All by Rise Against", data: "793" },
{ value: "Give It Away by Red Hot Chili Peppers", data: "794" },
{ value: "Give It to Me by Cocktail Slippers", data: "795" },
{ value: "Give Me Novacaine/She's a Rebel by Green Day", data: "796" },
{ value: "Give Yourself A Try by The 1975", data: "797" },
{ value: "Gives You Hell by All-American Rejects", data: "798" },
{ value: "Glass House by Kaleo", data: "799" },
{ value: "Glory of Love by Peter Cetera", data: "800" },
{ value: "Go with the Flow by Queens of the Stone Age", data: "801" },
{ value: "Go Your Own Way by Fleetwood Mac", data: "802" },
{ value: "God Damn by Avenged Sevenfold", data: "803" },
{ value: "Godzilla by Blue Öyster Cult", data: "804" },
{ value: "Going Mobile by The Who", data: "805" },
{ value: "Going Under by Evanescence", data: "806" },
{ value: "Going Underground by The Jam", data: "807" },
{ value: "Gold Cobra by Limp Bizkit", data: "808" },
{ value: "Gold Dust Woman by Fleetwood Mac", data: "809" },
{ value: "Gold On The Ceiling by The Black Keys", data: "810" },
{ value: "Gone by Crooked X", data: "811" },
{ value: "Gone by Montgomery Gentry", data: "812" },
{ value: "Gone Away by The Offspring", data: "813" },
{ value: "Gonna See My Friend by Pearl Jam", data: "814" },
{ value: "Gonzo by All-American Rejects", data: "815" },
{ value: "Good by STL GLD", data: "816" },
{ value: "Good Girl by Carrie Underwood", data: "817" },
{ value: "Good Mourning/Black Friday by Megadeth", data: "818" },
{ value: "Good Riddance (Time of Your Life) by Green Day", data: "819" },
{ value: "Good Time by Alan Jackson", data: "820" },
{ value: "Good Times Roll by The Cars", data: "821" },
{ value: "Good Vibrations (Live) by The Beach Boys", data: "822" },
{ value: "Got Nuffin by Spoon", data: "823" },
{ value: "Got Some by Pearl Jam", data: "824" },
{ value: "Got You (Where I Want You) by The Flys", data: "825" },
{ value: "Got Your Six by Five Finger Death Punch", data: "826" },
{ value: "Gotas de Agua Dulce by Juanes", data: "827" },
{ value: "Gouge Away by Pixies", data: "828" },
{ value: "Grace by Supergrass", data: "829" },
{ value: "Graffiti by CHVRCHES", data: "830" },
{ value: "Green Grass and High Tides by The Outlaws", data: "831" },
{ value: "Green River by Creedence Clearwater Revival", data: "832" },
{ value: "Grenade by Bruno Mars", data: "833" },
{ value: "Grind by Alice In Chains", data: "834" },
{ value: "Grinder (Live) by Judas Priest", data: "835" },
{ value: "Guerrilla Radio by Rage Against the Machine", data: "836" },
{ value: "Gunpowder & Lead by Miranda Lambert", data: "837" },
{ value: "Guns of Summer by Coheed and Cambria", data: "838" },
{ value: "Gypsy Eyes by The Jimi Hendrix Experience", data: "839" },
{ value: "Had a Dad by Jane's Addiction", data: "840" },
{ value: "Hail to the King by Avenged Sevenfold", data: "841" },
{ value: "Hair of the Dog by Nazareth", data: "842" },
{ value: "Hair Trigger by The Acro-brats", data: "843" },
{ value: "Hallowed Be Thy Name (Live) by Iron Maiden", data: "844" },
{ value: "Halls of Valhalla by Judas Priest", data: "845" },
{ value: "Hammer Smashed Face by Cannibal Corpse", data: "846" },
{ value: "Hammer to Fall by Queen", data: "847" },
{ value: "Hammerhead by The Offspring", data: "848" },
{ value: "Hand Me Down World by The Guess Who", data: "849" },
{ value: "HandClap by Fitz and the Tantrums", data: "850" },
{ value: "Handlebars by Flobots", data: "851" },
{ value: "Hands Down by Dashboard Confessional", data: "852" },
{ value: "Hang You from the Heavens by The Dead Weather", data: "853" },
{ value: "Hangar 18 by Megadeth", data: "854" },
{ value: "Hanging on the Telephone by Blondie", data: "855" },
{ value: "Hanukkah Blessings by Barenaked Ladies", data: "856" },
{ value: "Happy by Pharrell Williams", data: "857" },
{ value: "Happy Now? by No Doubt", data: "858" },
{ value: "Happy Song by Bring Me The Horizon", data: "859" },
{ value: "Happy Xmas (War is Over) by John & Yoko, The Plastic Ono Band", data: "860" },
{ value: "Happy? by Mudvayne", data: "861" },
{ value: "Hard Rock Hallelujah by Lordi", data: "862" },
{ value: "Hard To Handle by The Black Crowes", data: "863" },
{ value: "Hard to See by Five Finger Death Punch", data: "864" },
{ value: "Harmony Hall by Vampire Weekend", data: "865" },
{ value: "Hash Pipe by Weezer", data: "866" },
{ value: "Hateful by The Clash", data: "867" },
{ value: "Have a Nice Day by Bon Jovi", data: "868" },
{ value: "Have You Ever Seen the Rain? by Creedence Clearwater Revival", data: "869" },
{ value: "Having a Blast by Green Day", data: "870" },
{ value: "Hay Poco Rock & Roll by Platero y Tú", data: "871" },
{ value: "Head Like a Hole by Nine Inch Nails", data: "872" },
{ value: "Head Over Feet by Alanis Morissette", data: "873" },
{ value: "Head Over Heels by Tears for Fears", data: "874" },
{ value: "Headknocker by Foreigner", data: "875" },
{ value: "Headphones On by Miranda Cosgrove", data: "876" },
{ value: "Heart of Glass by Blondie", data: "877" },
{ value: "Heart of the Sunrise by Yes", data: "878" },
{ value: "Heartbeat Song by Kelly Clarkson", data: "879" },
{ value: "Heartbreaker by Pat Benatar", data: "880" },
{ value: "Heartkiller by HIM", data: "881" },
{ value: "Heart-Shaped Box by Nirvana", data: "882" },
{ value: "Heat of the Moment by Asia", data: "883" },
{ value: "Heathens by Twenty One Pilots", data: "884" },
{ value: "Heatseeker (Live) by AC/DC", data: "885" },
{ value: "Heaven Beside You by Alice In Chains", data: "886" },
{ value: "Heaven Is A Place On Earth by Belinda Carlisle", data: "887" },
{ value: "Heaven Knows by The Pretty Reckless", data: "888" },
{ value: "Heavy Duty by Spinal Tap", data: "889" },
{ value: "Heir Apparent by Opeth", data: "890" },
{ value: "Helen Wheels by Paul McCartney & Wings", data: "891" },
{ value: "Helena by My Chemical Romance", data: "892" },
{ value: "Helena Beat by Foster the People", data: "893" },
{ value: "Hell Ain't a Bad Place to Be (Live) by AC/DC", data: "894" },
{ value: "Hell Hole by Spinal Tap", data: "895" },
{ value: "Hell in a Bucket by The Grateful Dead", data: "896" },
{ value: "Hell on the Heart by Eric Church", data: "897" },
{ value: "Hella Good by No Doubt", data: "898" },
{ value: "Hello There by Cheap Trick", data: "899" },
{ value: "Hello, I Love You by The Doors", data: "900" },
{ value: "Hells Bells (Live) by AC/DC", data: "901" },
{ value: "Help Is on the Way by Rise Against", data: "902" },
{ value: "Hemorrhage (In My Hands) by Fuel", data: "903" },
{ value: "Henrietta by The Fratellis", data: "904" },
{ value: "Here Comes My Girl (Live) by Tom Petty & The Heartbreakers", data: "905" },
{ value: "Here Comes Your Man by Pixies", data: "906" },
{ value: "Here I Go Again by Whitesnake", data: "907" },
{ value: "Here It Goes Again by OK Go", data: "908" },
{ value: "Here We Are Juggernaut by Coheed and Cambria", data: "909" },
{ value: "Here Without You by 3 Doors Down", data: "910" },
{ value: "Heroes by David Bowie", data: "911" },
{ value: "He's a Rocker by The Vines", data: "912" },
{ value: "Hey by Pixies", data: "913" },
{ value: "Hey Baby by No Doubt", data: "914" },
{ value: "Hey Baby, Here's That Song You Wanted by Blessthefall", data: "915" },
{ value: "Hey Dude by Kula Shaker", data: "916" },
{ value: "Hey Jealousy by Gin Blossoms", data: "917" },
{ value: "Hey Joe (Live) by The Jimi Hendrix Experience", data: "918" },
{ value: "Hey John, What's Your Name Again? by The Devil Wears Prada", data: "919" },
{ value: "Hey Man Nice Shot by Filter", data: "920" },
{ value: "Hey There Mr. Brooks by Asking Alexandria", data: "921" },
{ value: "Hey Ya! by Outkast", data: "922" },
{ value: "Hey You by No Doubt", data: "923" },
{ value: "Hey, Johnny Park! by Foo Fighters", data: "924" },
{ value: "Hier Kommt Alex by Die Toten Hosen", data: "925" },
{ value: "High Road by Mastodon", data: "926" },
{ value: "High Voltage (Live) by AC/DC", data: "927" },
{ value: "Higher by Creed", data: "928" },
{ value: "Higher Ground by Stevie Wonder", data: "929" },
{ value: "Highway Chile by The Jimi Hendrix Experience", data: "930" },
{ value: "Highway Star by Deep Purple", data: "931" },
{ value: "Highway to Hell (Live) by AC/DC", data: "932" },
{ value: "Hillbilly Deluxe by Brooks & Dunn", data: "933" },
{ value: "History Repeats by Creaturos", data: "934" },
{ value: "Hit Me With Your Best Shot by Pat Benatar", data: "935" },
{ value: "Hitch A Ride by Boston", data: "936" },
{ value: "Hitchin' a Ride by Green Day", data: "937" },
{ value: "Hold My Hand by Hootie & The Blowfish", data: "938" },
{ value: "Hold On by All That Remains", data: "939" },
{ value: "Hold On by Wilson Phillips", data: "940" },
{ value: "Hold On Loosely by .38 Special", data: "941" },
{ value: "Hold the Line by Toto", data: "942" },
{ value: "Hole in the Earth by Deftones", data: "943" },
{ value: "Holiday by Green Day", data: "944" },
{ value: "Holiday in Cambodia by Dead Kennedys", data: "945" },
{ value: "Holy Diver by Dio", data: "946" },
{ value: "Holy Wars... The Punishment Due by Megadeth", data: "947" },
{ value: "Homecoming by Green Day", data: "948" },
{ value: "Homegrown by Zac Brown Band", data: "949" },
{ value: "Honey, I'm Good. by Andy Grammer", data: "950" },
{ value: "Hong Kong Garden by Siouxsie and The Banshees", data: "951" },
{ value: "Hook by Blues Traveler", data: "952" },
{ value: "Hooked On A Feeling by Blue Swede", data: "953" },
{ value: "Horseshoes and Handgrenades by Green Day", data: "954" },
{ value: "Hot Blooded by Foreigner", data: "955" },
{ value: "Hot For Teacher by Van Halen", data: "956" },
{ value: "Hotel Key by Old Dominion", data: "957" },
{ value: "Hounds of Love by The Futureheads", data: "958" },
{ value: "Hour of Rats by The Red Chord", data: "959" },
{ value: "House Party by Sam Hunt", data: "960" },
{ value: "How Do You Like Me Now?! by Toby Keith", data: "961" },
{ value: "How Do You Sleep? by John Lennon", data: "962" },
{ value: "How Far We've Come by Matchbox Twenty", data: "963" },
{ value: "How We'd Look on Paper by The Main Drag", data: "964" },
{ value: "How You Remind Me by Nickelback", data: "965" },
{ value: "How? by John Lennon", data: "966" },
{ value: "Howlin' for You by The Black Keys", data: "967" },
{ value: "HTML Rulez D00d by The Devil Wears Prada", data: "968" },
{ value: "Huckleberry Crumble by Stone Temple Pilots", data: "969" },
{ value: "Humanoid by Tokio Hotel", data: "970" },
{ value: "Hunger Strike by Temple of the Dog", data: "971" },
{ value: "Hungry Like the Wolf by Duran Duran", data: "972" },
{ value: "Hurry Up (& Wait For You) by Julie Rhodes", data: "973" },
{ value: "Hymn 43 by Jethro Tull", data: "974" },
{ value: "Hymn For The Weekend by Coldplay", data: "975" },
{ value: "Hypnotize by System of a Down", data: "976" },
{ value: "Hysteria by Muse", data: "977" },
{ value: "I Ain't Superstitious by Megadeth", data: "978" },
{ value: "I Alone by Live", data: "979" },
{ value: "I Am a Rock by Simon & Garfunkel", data: "980" },
{ value: "I Am Electric by Heaven's Basement", data: "981" },
{ value: "I Believe in a Thing Called Love by The Darkness", data: "982" },
{ value: "I Bet My Life by Imagine Dragons", data: "983" },
{ value: "I Bleed by Pixies", data: "984" },
{ value: "I Can See for Miles by The Who", data: "985" },
{ value: "I Can't Go For That (No Can Do) by Hall & Oates", data: "986" },
{ value: "I Can't Keep My Eyes Off of You by SpongeBob SquarePants", data: "987" },
{ value: "I Could Have Lied by Red Hot Chili Peppers", data: "988" },
{ value: "I Didn't Say I Was Powerful, I Said I Was a Wizard by Chiodos", data: "989" },
{ value: "I Don't Care by Fall Out Boy", data: "990" },
{ value: "I Don't Know by Ozzy Osbourne", data: "991" },
{ value: "I Don't Like You by Electric Six", data: "992" },
{ value: "I Don't Wanna Be A Soldier Mama by John Lennon", data: "993" },
{ value: "I Don't Wanna Stop by Ozzy Osbourne", data: "994" },
{ value: "I Don't Want to Be by Gavin DeGraw", data: "995" },
{ value: "I Don't Want to Go to School by The Naked Brothers Band", data: "996" },
{ value: "I Don't Want to Miss a Thing by Aerosmith", data: "997" },
{ value: "I Fought the Law by The Clash", data: "998" },
{ value: "I Get By by Honest Bob and the Factory-to-Dealer Incentives", data: "999" },
{ value: "I Go to Extremes by Billy Joel", data: "1000" },
{ value: "I Got Mine by The Black Keys", data: "1001" },
{ value: "I Got Stripes by Johnny Cash", data: "1002" },
{ value: "I Got You (I Feel Good) by James Brown", data: "1003" },
{ value: "I Gotta Feeling by The Black Eyed Peas", data: "1004" },
{ value: "I Hate Everything About You by Three Days Grace", data: "1005" },
{ value: "I Hate Myself For Loving You by Joan Jett and the Blackhearts", data: "1006" },
{ value: "I Hear the Dead by Dolly Spartans", data: "1007" },
{ value: "I Heard It Through the Grapevine by Creedence Clearwater Revival", data: "1008" },
{ value: "I Know Where You Came From by Hautewerk", data: "1009" },
{ value: "I Love Rock N' Roll by Joan Jett and the Blackhearts", data: "1010" },
{ value: "I Love This Bar by Toby Keith", data: "1011" },
{ value: "I Melt with You by Modern English", data: "1012" },
{ value: "I Miss The Misery by Halestorm", data: "1013" },
{ value: "I Miss You by Blink-182", data: "1014" },
{ value: "I Must Not Think Bad Thoughts by X", data: "1015" },
{ value: "I Need A Miracle by The Grateful Dead", data: "1016" },
{ value: "I Need to Know by Tom Petty & The Heartbreakers", data: "1017" },
{ value: "I Only Want You by Eagles of Death Metal", data: "1018" },
{ value: "I Predict a Riot by Kaiser Chiefs", data: "1019" },
{ value: "I Ran (So Far Away) by A Flock of Seagulls", data: "1020" },
{ value: "I Recognize by Newfane", data: "1021" },
{ value: "I Remember You by Skid Row", data: "1022" },
{ value: "I Shot the Sheriff by Bob Marley and the Wailers", data: "1023" },
{ value: "I Stand Alone by Godsmack", data: "1024" },
{ value: "I Still Believe by Frank Turner", data: "1025" },
{ value: "I Think I'm Paranoid by Garbage", data: "1026" },
{ value: "I Told You So by Keith Urban", data: "1027" },
{ value: "I Turn My Camera On by Spoon", data: "1028" },
{ value: "I Walk the Line by Johnny Cash", data: "1029" },
{ value: "I Wanna Be Sedated by Ramones", data: "1030" },
{ value: "I Wanna Be Your Dog by The Stooges", data: "1031" },
{ value: "I Wanna Be Your Man by Endeverafter", data: "1032" },
{ value: "I Wanna Dance With Somebody (Who Loves Me) by Whitney Houston", data: "1033" },
{ value: "I Wanna Rock by Twisted Sister", data: "1034" },
{ value: "I Want a New Drug by Huey Lewis and the News", data: "1035" },
{ value: "I Want It All by Queen", data: "1036" },
{ value: "I Want To Break Free by Queen", data: "1037" },
{ value: "I Want to Know What Love Is by Foreigner", data: "1038" },
{ value: "I Want You by Savage Garden", data: "1039" },
{ value: "I Want You Back by The Jackson 5", data: "1040" },
{ value: "I Want You to Want Me (Live) by Cheap Trick", data: "1041" },
{ value: "I Was Wrong by Social Distortion", data: "1042" },
{ value: "I Will Follow by U2", data: "1043" },
{ value: "I Will Not Bow by Breaking Benjamin", data: "1044" },
{ value: "I Will Possess Your Heart by Death Cab For Cutie", data: "1045" },
{ value: "I Will Survive by Cake", data: "1046" },
{ value: "I Will Wait by Mumford & Sons", data: "1047" },
{ value: "I Wish by Stevie Wonder", data: "1048" },
{ value: "I Won't Back Down by Tom Petty", data: "1049" },
{ value: "I Write Sins Not Tragedies by Panic at the Disco", data: "1050" },
{ value: "I.R.S. by Guns N' Roses", data: "1051" },
{ value: "I.V. by X Japan", data: "1052" },
{ value: "Icarus - Borne on Wings of Steel (Live) by Kansas", data: "1053" },
{ value: "Ice Ice Baby by Vanilla Ice", data: "1054" },
{ value: "Icky Thump by The White Stripes", data: "1055" },
{ value: "Idealistic Types by Prong", data: "1056" },
{ value: "Idiots Rule by Jane's Addiction", data: "1057" },
{ value: "If 6 Was 9 by The Jimi Hendrix Experience", data: "1058" },
{ value: "If I Ain't Got You by The Len Price 3", data: "1059" },
{ value: "If It Means a Lot to You by A Day to Remember", data: "1060" },
{ value: "If the World by Guns N' Roses", data: "1061" },
{ value: "If Today Was Your Last Day by Nickelback", data: "1062" },
{ value: "If You Can't Hang by Sleeping With Sirens", data: "1063" },
{ value: "If You Could Only See by Tonic", data: "1064" },
{ value: "If You Have to Ask by Red Hot Chili Peppers", data: "1065" },
{ value: "If You Leave Me Now by Chicago", data: "1066" },
{ value: "Ignorance by Paramore", data: "1067" },
{ value: "I'll Be There for You by Bon Jovi", data: "1068" },
{ value: "I'll Stick Around by Foo Fighters", data: "1069" },
{ value: "I'm Alright by Kenny Loggins", data: "1070" },
{ value: "I'm Broken by Pantera", data: "1071" },
{ value: "I'm Cryin' by Stevie Ray Vaughan and Double Trouble", data: "1072" },
{ value: "I'm Eighteen (Live) by Alice Cooper", data: "1073" },
{ value: "I'm Gone, I'm Going by Lesley Roy", data: "1074" },
{ value: "I'm Gonna Be (500 Miles) by The Proclaimers", data: "1075" },
{ value: "I'm in Love with My Car by Queen", data: "1076" },
{ value: "I'm in Touch with Your World by The Cars", data: "1077" },
{ value: "I'm Made of Wax, Larry, What Are You Made Of? by A Day to Remember", data: "1078" },
{ value: "I'm Not Down by The Clash", data: "1079" },
{ value: "I'm Not Okay (I Promise) by My Chemical Romance", data: "1080" },
{ value: "I'm Shipping Up to Boston by Dropkick Murphys", data: "1081" },
{ value: "I'm Sick Y'all by Otis Redding", data: "1082" },
{ value: "I'm So Sick by Flyleaf", data: "1083" },
{ value: "I'm Still Standing by Elton John", data: "1084" },
{ value: "I'm the Man by Anthrax", data: "1085" },
{ value: "I'm Yours by Jason Mraz", data: "1086" },
{ value: "Image of the Invisible by Thrice", data: "1087" },
{ value: "Imagine by John Lennon", data: "1088" },
{ value: "Immortalized by Disturbed", data: "1089" },
{ value: "In a Big Country by Big Country", data: "1090" },
{ value: "In Bloom by Nirvana", data: "1091" },
{ value: "In Dreams by Roy Orbison", data: "1092" },
{ value: "In My Head by Queens of the Stone Age", data: "1093" },
{ value: "In the End by Green Day", data: "1094" },
{ value: "In the End by Linkin Park", data: "1095" },
{ value: "In the Meantime by Spacehog", data: "1096" },
{ value: "In Too Deep by Sum 41", data: "1097" },
{ value: "In Waves by Trivium", data: "1098" },
{ value: "In-A-Gadda-Da-Vida by Iron Butterfly", data: "1099" },
{ value: "Indestructible by Disturbed", data: "1100" },
{ value: "Indians by Anthrax", data: "1101" },
{ value: "Infinite Dreams by Iron Maiden", data: "1102" },
{ value: "Inside Out by Eve 6", data: "1103" },
{ value: "Inside the Fire by Disturbed", data: "1104" },
{ value: "Intentional Heartache by Dwight Yoakam", data: "1105" },
{ value: "Interstate Love Song by Stone Temple Pilots", data: "1106" },
{ value: "Invincible by Pat Benatar", data: "1107" },
{ value: "Iris by Goo Goo Dolls", data: "1108" },
{ value: "Irish Blood, English Heart by Morrissey", data: "1109" },
{ value: "Iron Maiden (Live) by Iron Maiden", data: "1110" },
{ value: "Ironic by Alanis Morissette", data: "1111" },
{ value: "Irresistible by Fall Out Boy", data: "1112" },
{ value: "Is She Really Going Out With Him? by Joe Jackson", data: "1113" },
{ value: "Is There a Ghost by Band of Horses", data: "1114" },
{ value: "Is This Love by Bob Marley and the Wailers", data: "1115" },
{ value: "Island in the Sun by Weezer", data: "1116" },
{ value: "It Happens by Sugarland", data: "1117" },
{ value: "It Hurts by Angels & Airwaves", data: "1118" },
{ value: "It's Been Awhile by Staind", data: "1119" },
{ value: "It's Complicated by A Day to Remember", data: "1120" },
{ value: "It's My Life by Bon Jovi", data: "1121" },
{ value: "It's My Life by No Doubt", data: "1122" },
{ value: "It's Not My Time by 3 Doors Down", data: "1123" },
{ value: "It's Not Over by Daughtry", data: "1124" },
{ value: "It's So Hard by John Lennon", data: "1125" },
{ value: "It's Still Rock and Roll to Me by Billy Joel", data: "1126" },
{ value: "It's the End of the World as We Know It by R.E.M.", data: "1127" },
{ value: "I've Done Everything for You by Rick Springfield", data: "1128" },
{ value: "I've Got Dreams to Remember by Otis Redding", data: "1129" },
{ value: "I've Seen All Good People by Yes", data: "1130" },
{ value: "Jailbreak (Live) by AC/DC", data: "1131" },
{ value: "Jailbreak (Live) by Thin Lizzy", data: "1132" },
{ value: "Jamie All Over by Mayday Parade", data: "1133" },
{ value: "Jammin' Me (Live) by Tom Petty & The Heartbreakers", data: "1134" },
{ value: "Jamming by Bob Marley and the Wailers", data: "1135" },
{ value: "Jane by Jefferson Starship", data: "1136" },
{ value: "Jane Says by Jane's Addiction", data: "1137" },
{ value: "Janie's Got A Gun by Aerosmith", data: "1138" },
{ value: "Jealous Guy by John Lennon", data: "1139" },
{ value: "Jeepster by T. Rex", data: "1140" },
{ value: "Jeremy by Pearl Jam", data: "1141" },
{ value: "Jerk It Out by Caesars", data: "1142" },
{ value: "Jerry Was a Race Car Driver by Primus", data: "1143" },
{ value: "Jessica by The Allman Brothers Band", data: "1144" },
{ value: "Jessie's Girl by Rick Springfield", data: "1145" },
{ value: "Jesus Built My Hotrod by Ministry", data: "1146" },
{ value: "Jesus Christ Pose by Soundgarden", data: "1147" },
{ value: "Jesus Freak by dc Talk", data: "1148" },
{ value: "Jesus of Suburbia by Green Day", data: "1149" },
{ value: "Jet (Live) by Paul McCartney", data: "1150" },
{ value: "Jimmy Jazz by The Clash", data: "1151" },
{ value: "Jive Talkin' by Bee Gees", data: "1152" },
{ value: "Johnny B. Goode by Chuck Berry", data: "1153" },
{ value: "Johnny Guitar by Pearl Jam", data: "1154" },
{ value: "Joker & The Thief by Wolfmother", data: "1155" },
{ value: "Juke Box Hero by Foreigner", data: "1156" },
{ value: "Jumper by Third Eye Blind", data: "1157" },
{ value: "Jungle Boogie by Kool & the Gang", data: "1158" },
{ value: "Junkies for Fame by Shinedown", data: "1159" },
{ value: "Just a Girl by No Doubt", data: "1160" },
{ value: "Just Breathe by Pearl Jam", data: "1161" },
{ value: "Just Dance by Lady Gaga", data: "1162" },
{ value: "Just for Tonight by One Night Only", data: "1163" },
{ value: "Just Like Heaven by The Cure", data: "1164" },
{ value: "Just the Way You Are by Bruno Mars", data: "1165" },
{ value: "Just What I Needed by The Cars", data: "1166" },
{ value: "Kamikaze by Walk The Moon", data: "1167" },
{ value: "Karma Chameleon by Culture Club", data: "1168" },
{ value: "Karma Police by Radiohead", data: "1169" },
{ value: "Kaya by Bob Marley and the Wailers", data: "1170" },
{ value: "Keep On Loving You by REO Speedwagon", data: "1171" },
{ value: "Keep Yourself Alive by Queen", data: "1172" },
{ value: "Kick It Out by Heart", data: "1173" },
{ value: "Kickstart My Heart by Mötley Crüe", data: "1174" },
{ value: "Kids by MGMT", data: "1175" },
{ value: "Kids Don't Follow by The Replacements", data: "1176" },
{ value: "Kids in America by The Muffs", data: "1177" },
{ value: "Kids in the Street by All-American Rejects", data: "1178" },
{ value: "Killed by Death '08 by Motörhead", data: "1179" },
{ value: "Killer Queen by Queen", data: "1180" },
{ value: "Killing in the Name by Rage Against the Machine", data: "1181" },
{ value: "Killing Is Just A Means by Permaband", data: "1182" },
{ value: "Killing Loneliness by HIM", data: "1183" },
{ value: "King For A Day (ft. Kellin Quinn) by Pierce the Veil", data: "1184" },
{ value: "King George by Dover", data: "1185" },
{ value: "King of Rock by Run-DMC", data: "1186" },
{ value: "King of the World by Weezer", data: "1187" },
{ value: "Kings and Queens by 30 Seconds to Mars", data: "1188" },
{ value: "Kiss a Girl by Keith Urban", data: "1189" },
{ value: "Kiss Them for Me by Siouxsie and The Banshees", data: "1190" },
{ value: "Knifeman by The Bronx", data: "1191" },
{ value: "Knight on the Town by Kula Shaker", data: "1192" },
{ value: "Knock Em Down by Duck & Cover", data: "1193" },
{ value: "Know Your Enemy by Green Day", data: "1194" },
{ value: "Koka Kola by The Clash", data: "1195" },
{ value: "Kool Thing by Sonic Youth", data: "1196" },
{ value: "Kryptonite by 3 Doors Down", data: "1197" },
{ value: "Kung Fu Fighting by Carl Douglas", data: "1198" },
{ value: "L.A. Woman by The Doors", data: "1199" },
{ value: "La Bamba by Los Lobos", data: "1200" },
{ value: "La Camisa Negra by Juanes", data: "1201" },
{ value: "La La Love You by Pixies", data: "1202" },
{ value: "Lady Gaga's 'Poker Face' (South Park Version) by Eric Cartman", data: "1203" },
{ value: "Lady In A Blue Dress by Senses Fail", data: "1204" },
{ value: "Ladybug by The Presidents of the United States of America", data: "1205" },
{ value: "Laid to Rest by Lamb of God", data: "1206" },
{ value: "Landslide by Fleetwood Mac", data: "1207" },
{ value: "Lasso by Phoenix", data: "1208" },
{ value: "Last by Nine Inch Nails", data: "1209" },
{ value: "Last Dance by The Raveonettes", data: "1210" },
{ value: "Last Night on Earth by Green Day", data: "1211" },
{ value: "Last of My Kind by Alice In Chains", data: "1212" },
{ value: "Last of the American Girls by Green Day", data: "1213" },
{ value: "Last One to Die by Rancid", data: "1214" },
{ value: "Last Resort by Papa Roach", data: "1215" },
{ value: "Last Train to Clarksville by The Monkees", data: "1216" },
{ value: "Lay Your Hands On Me by Bon Jovi", data: "1217" },
{ value: "Lazaretto by Jack White", data: "1218" },
{ value: "Lazy Eye by Silversun Pickups", data: "1219" },
{ value: "Learn to Fly by Foo Fighters", data: "1220" },
{ value: "Learning To Fly by Tom Petty & The Heartbreakers", data: "1221" },
{ value: "Leave The Night On by Sam Hunt", data: "1222" },
{ value: "Leaving Here by The Who", data: "1223" },
{ value: "Left Behind by Slipknot", data: "1224" },
{ value: "Legendary Child by Aerosmith", data: "1225" },
{ value: "Lemon Meringue Tie by Dance Gavin Dance", data: "1226" },
{ value: "Lenny by Stevie Ray Vaughan and Double Trouble", data: "1227" },
{ value: "Less Talk More Rokk by Freezepop", data: "1228" },
{ value: "Let Forever Be by The Chemical Brothers", data: "1229" },
{ value: "Let Her Cry by Hootie & The Blowfish", data: "1230" },
{ value: "Let It All Hang Out by Weezer", data: "1231" },
{ value: "Let Love Rule by Lenny Kravitz", data: "1232" },
{ value: "Let Me Hear You Scream by Ozzy Osbourne", data: "1233" },
{ value: "Let Me Roll It by Paul McCartney & Wings", data: "1234" },
{ value: "Let There Be Rock (Live) by AC/DC", data: "1235" },
{ value: "Let's Dance by David Bowie", data: "1236" },
{ value: "Let's Just Dance by Ships Have Sailed", data: "1237" },
{ value: "Letterbomb by Green Day", data: "1238" },
{ value: "Levitate by I Mother Earth", data: "1239" },
{ value: "Liar (It Takes One to Know One) by Taking Back Sunday", data: "1240" },
{ value: "LiesLiesLies by Ministry", data: "1241" },
{ value: "Life Is a Highway by Rascal Flatts", data: "1242" },
{ value: "Life is Beautiful by Sixx:A.M.", data: "1243" },
{ value: "Lifeline by Papa Roach", data: "1244" },
{ value: "Lifestyles Of The Rich & Famous by Good Charlotte", data: "1245" },
{ value: "Light My Fire by The Doors", data: "1246" },
{ value: "Light the Fuse by Slydigs", data: "1247" },
{ value: "Light Up The Night by The Protomen", data: "1248" },
{ value: "Lightning Crashes by Live", data: "1249" },
{ value: "Like a Fool by Shaimus", data: "1250" },
{ value: "Like A Stone by Audioslave", data: "1251" },
{ value: "Limelight by Rush", data: "1252" },
{ value: "Limelight (Original Version) by Rush", data: "1253" },
{ value: "Linger by The Cranberries", data: "1254" },
{ value: "Lips Of An Angel by Hinder", data: "1255" },
{ value: "Listen to the Music by The Doobie Brothers", data: "1256" },
{ value: "Lisztomania by Phoenix", data: "1257" },
{ value: "Lithium by Evanescence", data: "1258" },
{ value: "Lithium (Live at Reading) by Nirvana", data: "1259" },
{ value: "Little Black Backpack '09 by Stroke 9", data: "1260" },
{ value: "Little Miss Can't Be Wrong by Spin Doctors", data: "1261" },
{ value: "Little Miss Lover by The Jimi Hendrix Experience", data: "1262" },
{ value: "Little of Your Time by Maroon 5", data: "1263" },
{ value: "Little Sister by Queens of the Stone Age", data: "1264" },
{ value: "Little Talks by Of Monsters And Men", data: "1265" },
{ value: "Little White Church by Little Big Town", data: "1266" },
{ value: "Little Wing by The Jimi Hendrix Experience", data: "1267" },
{ value: "Live Forever by Oasis", data: "1268" },
{ value: "Live In The Moment by Portugal. The Man", data: "1269" },
{ value: "Live Life Loud by Hawk Nelson", data: "1270" },
{ value: "Lively Up Yourself by Bob Marley and the Wailers", data: "1271" },
{ value: "Livin' at the Corner of Dude & Catastrophe by MC Frontalot feat. Brad Sucks", data: "1272" },
{ value: "Livin' on a Prayer by Bon Jovi", data: "1273" },
{ value: "Livin' On The Edge by Aerosmith", data: "1274" },
{ value: "Living After Midnight (Live) by Judas Priest", data: "1275" },
{ value: "Living Dead Girl by Rob Zombie", data: "1276" },
{ value: "Living for the City by Stevie Wonder", data: "1277" },
{ value: "Living in America by The Sounds", data: "1278" },
{ value: "Living Through Me (Hell's Wrath) by Pantera", data: "1279" },
{ value: "Living Well Is the Best Revenge by R.E.M.", data: "1280" },
{ value: "Llama by Phish", data: "1281" },
{ value: "Locked Out of Heaven by Bruno Mars", data: "1282" },
{ value: "Lodger by Blanks.", data: "1283" },
{ value: "Lodi by Creedence Clearwater Revival", data: "1284" },
{ value: "London Calling by The Clash", data: "1285" },
{ value: "Lonely As You by Foo Fighters", data: "1286" },
{ value: "Lonely Boy by The Black Keys", data: "1287" },
{ value: "Lonely Is The Night by Billy Squier", data: "1288" },
{ value: "Long Away by Queen", data: "1289" },
{ value: "Long Cool Woman (In A Black Dress) by The Hollies", data: "1290" },
{ value: "Long Hot Summer Night by The Jimi Hendrix Experience", data: "1291" },
{ value: "Long Road to Ruin by Foo Fighters", data: "1292" },
{ value: "Long Train Runnin' by The Doobie Brothers", data: "1293" },
{ value: "Longshot by Catfish and the Bottlemen", data: "1294" },
{ value: "Longview by Green Day", data: "1295" },
{ value: "Look Around by Red Hot Chili Peppers", data: "1296" },
{ value: "Lookin' for a Good Time by Lady Antebellum", data: "1297" },
{ value: "Lookin' Out My Back Door by Creedence Clearwater Revival", data: "1298" },
{ value: "Los Angeles by X", data: "1299" },
{ value: "Lose It by Kane Brown", data: "1300" },
{ value: "Losing My Religion by R.E.M.", data: "1301" },
{ value: "Lost in the Supermarket by The Clash", data: "1302" },
{ value: "Lounge Act by Nirvana", data: "1303" },
{ value: "Love Addict by Family Force 5", data: "1304" },
{ value: "Love Her Madly by The Doors", data: "1305" },
{ value: "Love Hurts by Nazareth", data: "1306" },
{ value: "Love in an Elevator by Aerosmith", data: "1307" },
{ value: "Love Is a Battlefield by Pat Benatar", data: "1308" },
{ value: "Love Like Winter by AFI", data: "1309" },
{ value: "Love Man by Otis Redding", data: "1310" },
{ value: "Love Me Two Times by The Doors", data: "1311" },
{ value: "Love My Way by The Psychedelic Furs", data: "1312" },
{ value: "Love or Confusion by The Jimi Hendrix Experience", data: "1313" },
{ value: "Love Rollercoaster by Ohio Players", data: "1314" },
{ value: "Love Shack by The B-52's", data: "1315" },
{ value: "Love Spreads by The Stone Roses", data: "1316" },
{ value: "Love Stinks by The J. Geils Band", data: "1317" },
{ value: "Love Struck Baby by Stevie Ray Vaughan and Double Trouble", data: "1318" },
{ value: "Love That Hurts by PREACHERVAN", data: "1319" },
{ value: "Love Will Tear Us Apart by Joy Division", data: "1320" },
{ value: "Love Yourself by Justin Bieber", data: "1321" },
{ value: "LoveGame by Lady Gaga", data: "1322" },
{ value: "Lover Alot by Aerosmith", data: "1323" },
{ value: "Lover's Rock by The Clash", data: "1324" },
{ value: "Lovesong by The Cure", data: "1325" },
{ value: "Low Rider by WAR", data: "1326" },
{ value: "Lucid Dreams by Franz Ferdinand", data: "1327" },
{ value: "Lucky Denver Mint by Jimmy Eat World", data: "1328" },
{ value: "Lucretia by Megadeth", data: "1329" },
{ value: "Lump by The Presidents of the United States of America", data: "1330" },
{ value: "Lust For Life by Iggy Pop", data: "1331" },
{ value: "Lying From You by Linkin Park", data: "1332" },
{ value: "Machinehead by Bush", data: "1333" },
{ value: "Madagascar by Guns N' Roses", data: "1334" },
{ value: "Made of Scars by Stone Sour", data: "1335" },
{ value: "Madhouse (Live) by Anthrax", data: "1336" },
{ value: "Magic Bus (Live at Leeds) by The Who", data: "1337" },
{ value: "Magic Man by Heart", data: "1338" },
{ value: "Magnetic Baby by Semi Precious Weapons", data: "1339" },
{ value: "Main Offender by The Hives", data: "1340" },
{ value: "Mainstream Kid by Brandi Carlile", data: "1341" },
{ value: "Make Me Smile by Chicago", data: "1342" },
{ value: "Make Me Smile (Come Up and See Me) by Steve Harley & Cockney Rebel", data: "1343" },
{ value: "Make Some Noise by Beastie Boys", data: "1344" },
{ value: "MakeDamnSure by Taking Back Sunday", data: "1345" },
{ value: "Makes Me Wonder by Maroon 5", data: "1346" },
{ value: "Mala Gente by Juanes", data: "1347" },
{ value: "Mama Tried by Merle Haggard", data: "1348" },
{ value: "Mama, I'm Coming Home by Ozzy Osbourne", data: "1349" },
{ value: "Man in the Box by Alice In Chains", data: "1350" },
{ value: "Man of Me by Gary Allan", data: "1351" },
{ value: "Man on the Moon by R.E.M.", data: "1352" },
{ value: "Maneater by Hall & Oates", data: "1353" },
{ value: "Manic Depression by The Jimi Hendrix Experience", data: "1354" },
{ value: "MANTRA by Bring Me The Horizon", data: "1355" },
{ value: "Manu Chao by Les Wampas", data: "1356" },
{ value: "Many Shades of Black by The Raconteurs", data: "1357" },
{ value: "Maps by Yeah Yeah Yeahs", data: "1358" },
{ value: "March of the Pigs by Nine Inch Nails", data: "1359" },
{ value: "Margaritaville by Jimmy Buffett", data: "1360" },
{ value: "Marry You by Bruno Mars", data: "1361" },
{ value: "Mary Had a Little Lamb by Stevie Ray Vaughan and Double Trouble", data: "1362" },
{ value: "Mary Jane's Last Dance (Live) by Tom Petty & The Heartbreakers", data: "1363" },
{ value: "Master Exploder by Tenacious D", data: "1364" },
{ value: "Master of the Universe by Hawkwind", data: "1365" },
{ value: "Master/Slave by Pearl Jam", data: "1366" },
{ value: "May This Be Love by The Jimi Hendrix Experience", data: "1367" },
{ value: "Maybe I'm Amazed by Paul McCartney", data: "1368" },
{ value: "Me and Bobby McGee by Janis Joplin & the Full Tilt Boogie Band", data: "1369" },
{ value: "Me and My Gang by Rascal Flatts", data: "1370" },
{ value: "Me Enamora by Juanes", data: "1371" },
{ value: "Mean Girls by Petty Morals", data: "1372" },
{ value: "Mean Woman Blues by Roy Orbison", data: "1373" },
{ value: "Meaning of Life by Disturbed", data: "1374" },
{ value: "Meant to Live by Switchfoot", data: "1375" },
{ value: "Medicate by AFI", data: "1376" },
{ value: "Megasus by Megasus", data: "1377" },
{ value: "Melatonin by Silversun Pickups", data: "1378" },
{ value: "Mellowship Slinky in B Major by Red Hot Chili Peppers", data: "1379" },
{ value: "Mercy by Dave Matthews Band", data: "1380" },
{ value: "Message in a Bottle by The Police", data: "1381" },
{ value: "Metal Gods (Live) by Judas Priest", data: "1382" },
{ value: "Metal on Metal by Anvil", data: "1383" },
{ value: "Metal Thrashing Mad (Live) by Anthrax", data: "1384" },
{ value: "Metropolis - Part 1 The Miracle And The Sleeper by Dream Theater", data: "1385" },
{ value: "Miami 2017 (Seen the Lights Go Out on Broadway) by Billy Joel", data: "1386" },
{ value: "Mica by Mission of Burma", data: "1387" },
{ value: "MidLife Crisis by Faith No More", data: "1388" },
{ value: "Midnight Rider by The Allman Brothers Band", data: "1389" },
{ value: "Milwaukee by The Both", data: "1390" },
{ value: "Minerva by Deftones", data: "1391" },
{ value: "Minority by Green Day", data: "1392" },
{ value: "Miracle Man by Ozzy Osbourne", data: "1393" },
{ value: "Misery by Maroon 5", data: "1394" },
{ value: "Misery Business by Paramore", data: "1395" },
{ value: "Miss Independent by Kelly Clarkson", data: "1396" },
{ value: "Miss Murder by AFI", data: "1397" },
{ value: "Mississippi Queen by Mountain", data: "1398" },
{ value: "Modern Love by David Bowie", data: "1399" },
{ value: "Molly's Chambers by Kings Of Leon", data: "1400" },
{ value: "Mona Lisa by Dead Sara", data: "1401" },
{ value: "Monarchy of Roses by Red Hot Chili Peppers", data: "1402" },
{ value: "Moneytalks (Live) by AC/DC", data: "1403" },
{ value: "Monkey Gone to Heaven by Pixies", data: "1404" },
{ value: "Monkey Wrench by Foo Fighters", data: "1405" },
{ value: "Monsoon by Tokio Hotel", data: "1406" },
{ value: "Monster by Lady Gaga", data: "1407" },
{ value: "Monster by Skillet", data: "1408" },
{ value: "Monster by The Automatic", data: "1409" },
{ value: "Mony Mony by Billy Idol", data: "1410" },
{ value: "Moonage Daydream by David Bowie", data: "1411" },
{ value: "More Human Than Human by White Zombie", data: "1412" },
{ value: "More Than a Feeling by Boston", data: "1413" },
{ value: "More Than Meets the Eye by Testament", data: "1414" },
{ value: "More Than Words by Extreme", data: "1415" },
{ value: "Mother Mother by Tracy Bonham", data: "1416" },
{ value: "Mountain Man by Crash Kings", data: "1417" },
{ value: "Mountain Song by Jane's Addiction", data: "1418" },
{ value: "Mouth for War by Pantera", data: "1419" },
{ value: "Move Along by All-American Rejects", data: "1420" },
{ value: "Move Over by Janis Joplin", data: "1421" },
{ value: "Moves Like Jagger by Maroon 5 ft. Christina Aguilera", data: "1422" },
{ value: "Movin' Out (Anthony's Song) by Billy Joel", data: "1423" },
{ value: "Moving in Stereo by The Cars", data: "1424" },
{ value: "Moving to Seattle by The Material", data: "1425" },
{ value: "Mr. Brightside by The Killers", data: "1426" },
{ value: "Mr. Cab Driver by Lenny Kravitz", data: "1427" },
{ value: "Mr. Crowley by Ozzy Osbourne", data: "1428" },
{ value: "Mr. Grieves by Pixies", data: "1429" },
{ value: "Mr. Jones by Counting Crows", data: "1430" },
{ value: "Mud on the Tires by Brad Paisley", data: "1431" },
{ value: "Murder City by Green Day", data: "1432" },
{ value: "Music Is Worth Living For by Andrew W.K.", data: "1433" },
{ value: "Must Have Done Something Right by Relient K", data: "1434" },
{ value: "My Best Friend's Girl by The Cars", data: "1435" },
{ value: "My Best Theory by Jimmy Eat World", data: "1436" },
{ value: "My Body by Young the Giant", data: "1437" },
{ value: "My Curse by Killswitch Engage", data: "1438" },
{ value: "My Demons by Starset", data: "1439" },
{ value: "My Generation (Live at Leeds) by The Who", data: "1440" },
{ value: "My God Is The Sun by Queens of the Stone Age", data: "1441" },
{ value: "My Happy Ending by Avril Lavigne", data: "1442" },
{ value: "My Hero by Foo Fighters", data: "1443" },
{ value: "My Iron Lung by Radiohead", data: "1444" },
{ value: "My Last Words by Megadeth", data: "1445" },
{ value: "My Life by Billy Joel", data: "1446" },
{ value: "My Lovely Man by Red Hot Chili Peppers", data: "1447" },
{ value: "My Name Is Jonas by Weezer", data: "1448" },
{ value: "My Old School by Steely Dan", data: "1449" },
{ value: "My Own Eyes by Weird Al Yankovic", data: "1450" },
{ value: "My Own Summer (Shove It) by Deftones", data: "1451" },
{ value: "My Own Worst Enemy by Lit", data: "1452" },
{ value: "My Poor Brain by Foo Fighters", data: "1453" },
{ value: "My Sharona by The Knack", data: "1454" },
{ value: "My Songs Know What You Did in the Dark (Light Em Up) by Fall Out Boy", data: "1455" },
{ value: "My Wave by Soundgarden", data: "1456" },
{ value: "My Way by Limp Bizkit", data: "1457" },
{ value: "N.I.B. by Black Sabbath", data: "1458" },
{ value: "Naïve by The Kooks", data: "1459" },
{ value: "Naked Eye by Luscious Jackson", data: "1460" },
{ value: "Naked in the Rain by Red Hot Chili Peppers", data: "1461" },
{ value: "Natural by Imagine Dragons", data: "1462" },
{ value: "Natural Disaster by Plain White T's", data: "1463" },
{ value: "Nearly Lost You by Screaming Trees", data: "1464" },
{ value: "Need You Now by Lady Antebellum", data: "1465" },
{ value: "Need You Tonight by INXS", data: "1466" },
{ value: "Nemesis by Arch Enemy", data: "1467" },
{ value: "Never Again by Nickelback", data: "1468" },
{ value: "Never Enough by One Direction", data: "1469" },
{ value: "Never Gonna Give You Up by Rick Astley", data: "1470" },
{ value: "Never Let 'Em Hold Ya Back! by Parlour Bells", data: "1471" },
{ value: "Never Let Me Down Again by Depeche Mode", data: "1472" },
{ value: "Never Let You Go '09 by Third Eye Blind", data: "1473" },
{ value: "Never Too Late by Three Days Grace", data: "1474" },
{ value: "Nevermore by Symphony X", data: "1475" },
{ value: "New by No Doubt", data: "1476" },
{ value: "New Dark Ages by Bad Religion", data: "1477" },
{ value: "New Divide by Linkin Park", data: "1478" },
{ value: "New Fang by Them Crooked Vultures", data: "1479" },
{ value: "New Kid in School by The Donnas", data: "1480" },
{ value: "New Moon Rising by Wolfmother", data: "1481" },
{ value: "New Slang by The Shins", data: "1482" },
{ value: "New Wave by Pleymo", data: "1483" },
{ value: "New Way Home by Foo Fighters", data: "1484" },
{ value: "Next to You by The Police", data: "1485" },
{ value: "Nice Guys Finish Last by Green Day", data: "1486" },
{ value: "Night Fever by Bee Gees", data: "1487" },
{ value: "Night Lies by Bang Camaro", data: "1488" },
{ value: "Night On Bald Mountain (Mussorgsky) by Paul Henry Smith & The Fauxharmonic Orchestra", data: "1489" },
{ value: "Nightmare by Avenged Sevenfold", data: "1490" },
{ value: "Nightmare by Crooked X", data: "1491" },
{ value: "Nights on Broadway by Bee Gees", data: "1492" },
{ value: "Nightwatchman (Live) by Tom Petty & The Heartbreakers", data: "1493" },
{ value: "Nine in the Afternoon by Panic at the Disco", data: "1494" },
{ value: "Nirvana by Juliana Hatfield", data: "1495" },
{ value: "No Control by Bad Religion", data: "1496" },
{ value: "No Excuses by Alice In Chains", data: "1497" },
{ value: "No Fun by The Stooges", data: "1498" },
{ value: "No Hassle Night by The Dead Weather", data: "1499" },
{ value: "No Mercy by Tijuana Sweetheart", data: "1500" },
{ value: "No More Tears by Ozzy Osbourne", data: "1501" },
{ value: "No More Trouble by Bob Marley and the Wailers", data: "1502" },
{ value: "No One Knows by Queens of the Stone Age", data: "1503" },
{ value: "No One Like You by Scorpions", data: "1504" },
{ value: "No One's Gonna Love You by Band of Horses", data: "1505" },
{ value: "No Place For Me by Black Beach", data: "1506" },
{ value: "No Rain by Blind Melon", data: "1507" },
{ value: "No Regrets by Authority Zero", data: "1508" },
{ value: "No Sleep till Brooklyn by Beastie Boys", data: "1509" },
{ value: "No Surprise by Daughtry", data: "1510" },
{ value: "No Time by The Guess Who", data: "1511" },
{ value: "No Woman No Cry by Bob Marley and the Wailers", data: "1512" },
{ value: "No. 13 Baby by Pixies", data: "1513" },
{ value: "Nobody's Fool by Cinderella", data: "1514" },
{ value: "Nookie by Limp Bizkit", data: "1515" },
{ value: "Not Again by Staind", data: "1516" },
{ value: "Nothin' but a Good Time by Poison", data: "1517" },
{ value: "Now I'm Here by Queen", data: "1518" },
{ value: "Numb by Linkin Park", data: "1519" },
{ value: "Nur ein Wort by Wir sind Helden", data: "1520" },
{ value: "Obsession by Animotion", data: "1521" },
{ value: "Ocean Avenue by Yellowcard", data: "1522" },
{ value: "Ocean Size by Jane's Addiction", data: "1523" },
{ value: "Oceans by Pearl Jam", data: "1524" },
{ value: "Ode To My Family by The Cranberries", data: "1525" },
{ value: "Ode to Solitude by HIM", data: "1526" },
{ value: "Oh Love by Green Day", data: "1527" },
{ value: "Oh My God by Ida Maria", data: "1528" },
{ value: "Oh My Love by John Lennon", data: "1529" },
{ value: "Oh Yeah by The Subways", data: "1530" },
{ value: "Oh Yoko! by John Lennon", data: "1531" },
{ value: "Oh, Pretty Woman by Roy Orbison", data: "1532" },
{ value: "On A Plain by Nirvana", data: "1533" },
{ value: "On My Mind by Ellie Goulding", data: "1534" },
{ value: "On the Backs of Angels by Dream Theater", data: "1535" },
{ value: "On the Road Again by Willie Nelson", data: "1536" },
{ value: "Once by Pearl Jam", data: "1537" },
{ value: "Once Bitten Twice Shy by Great White", data: "1538" },
{ value: "Once in a Lifetime by Talking Heads", data: "1539" },
{ value: "One by U2", data: "1540" },
{ value: "One Armed Scissor by At the Drive-In", data: "1541" },
{ value: "One Big Holiday by My Morning Jacket", data: "1542" },
{ value: "One Love/People Get Ready by Bob Marley and the Wailers", data: "1543" },
{ value: "One More Night by Maroon 5", data: "1544" },
{ value: "One of THOSE Nights by The Cab", data: "1545" },
{ value: "One Rainy Wish by The Jimi Hendrix Experience", data: "1546" },
{ value: "One Step Closer by Linkin Park", data: "1547" },
{ value: "One Vision by Queen", data: "1548" },
{ value: "One Way or Another by Blondie", data: "1549" },
{ value: "One Week by Barenaked Ladies", data: "1550" },
{ value: "Only a Memory by The Smithereens", data: "1551" },
{ value: "Only One by Yellowcard", data: "1552" },
{ value: "Only the Good Die Young by Billy Joel", data: "1553" },
{ value: "Only the Lonely (Know the Way I Feel) by Roy Orbison", data: "1554" },
{ value: "Only Wanna Be With You by Hootie & The Blowfish", data: "1555" },
{ value: "Ooby Dooby by Roy Orbison", data: "1556" },
{ value: "Open My Eyes by Inhabited", data: "1557" },
{ value: "Open Water by Assuming We Survive", data: "1558" },
{ value: "Opening Band by Paul and Storm", data: "1559" },
{ value: "Operation Ground and Pound by DragonForce", data: "1560" },
{ value: "Orange Amber by The Vines", data: "1561" },
{ value: "Orange Crush by R.E.M.", data: "1562" },
{ value: "Origin of Species by MC Frontalot", data: "1563" },
{ value: "Otherside by Red Hot Chili Peppers", data: "1564" },
{ value: "Our Lips Are Sealed by Go-Go's", data: "1565" },
{ value: "Our Truth by Lacuna Coil", data: "1566" },
{ value: "Out Here All Night by Damone", data: "1567" },
{ value: "Out of Line by Buckcherry", data: "1568" },
{ value: "Outer Space by Ace Frehley", data: "1569" },
{ value: "Outer Space by The Muffs", data: "1570" },
{ value: "Outshined by Soundgarden", data: "1571" },
{ value: "Outside by Staind", data: "1572" },
{ value: "Outside by Tribe", data: "1573" },
{ value: "Outtathaway by The Vines", data: "1574" },
{ value: "Over My Head by Judah & The Lion", data: "1575" },
{ value: "Over the Mountain by Ozzy Osbourne", data: "1576" },
{ value: "Overkill by Men at Work", data: "1577" },
{ value: "Owner of a Lonely Heart by Yes", data: "1578" },
{ value: "Oye Mi Amor by Maná", data: "1579" },
{ value: "Pac-Man Fever by Buckner & Garcia", data: "1580" },
{ value: "Pain by Jimmy Eat World", data: "1581" },
{ value: "Pain by Three Days Grace", data: "1582" },
{ value: "Pain And Pleasure by Judas Priest", data: "1583" },
{ value: "Pain Killer by Ruby Rose Fox", data: "1584" },
{ value: "Painkiller by Judas Priest", data: "1585" },
{ value: "Panama by Van Halen", data: "1586" },
{ value: "Panic by Sublime with Rome", data: "1587" },
{ value: "Panic Attack by Dream Theater", data: "1588" },
{ value: "Panic Switch by Silversun Pickups", data: "1589" },
{ value: "Paparazzi by Lady Gaga", data: "1590" },
{ value: "Paradise by Coldplay", data: "1591" },
{ value: "Paradise by the Dashboard Light by Meat Loaf", data: "1592" },
{ value: "Parallel Universe by Red Hot Chili Peppers", data: "1593" },
{ value: "Paralyzer by Finger Eleven", data: "1594" },
{ value: "Parasite (Live) by KISS", data: "1595" },
{ value: "Pardon Me by Incubus", data: "1596" },
{ value: "Party for Two (with Billy Currington) by Shania Twain", data: "1597" },
{ value: "Party Hard by Andrew W.K.", data: "1598" },
{ value: "Party Rock Anthem by LMFAO ft. Lauren Bennett & GoonRock", data: "1599" },
{ value: "PDA by Interpol", data: "1600" },
{ value: "Peace Frog by The Doors", data: "1601" },
{ value: "Peace of Mind by Boston", data: "1602" },
{ value: "Peace Sells by Megadeth", data: "1603" },
{ value: "Peacemaker by Green Day", data: "1604" },
{ value: "Peek-a-Boo by Siouxsie and The Banshees", data: "1605" },
{ value: "People Are People by Depeche Mode", data: "1606" },
{ value: "People Are Strange by The Doors", data: "1607" },
{ value: "People Got a Lotta Nerve by Neko Case", data: "1608" },
{ value: "Perfect Day by Lady Antebellum", data: "1609" },
{ value: "Perfect Insanity by Disturbed", data: "1610" },
{ value: "Perfect Situation by Weezer", data: "1611" },
{ value: "Perfekte Welle by Juli", data: "1612" },
{ value: "Personal Jesus by Depeche Mode", data: "1613" },
{ value: "Peut-Être une Angine by Anaïs", data: "1614" },
{ value: "Phantom of the Opera by Iron Maiden", data: "1615" },
{ value: "Photograph by Def Leppard", data: "1616" },
{ value: "Photograph by Nickelback", data: "1617" },
{ value: "Piano Man by Billy Joel", data: "1618" },
{ value: "Pick Me Up by Dinosaur Jr.", data: "1619" },
{ value: "Pick Up the Pieces by Average White Band", data: "1620" },
{ value: "Pictures of Girls by Wallows", data: "1621" },
{ value: "Pictures of Matchstick Men by Status Quo", data: "1622" },
{ value: "Piece of My Heart by Janis Joplin", data: "1623" },
{ value: "Pig's in Zen by Jane's Addiction", data: "1624" },
{ value: "Pilgrim by Wolfmother", data: "1625" },
{ value: "Pinball Wizard by The Who", data: "1626" },
{ value: "Pistol Whipped by Tijuana Sweetheart", data: "1627" },
{ value: "Play That Funky Music by Wild Cherry", data: "1628" },
{ value: "Play the Game by Queen", data: "1629" },
{ value: "Please Don't Leave Me by P!nk", data: "1630" },
{ value: "Pleasure (Pleasure) by Bang Camaro", data: "1631" },
{ value: "Plush by Stone Temple Pilots", data: "1632" },
{ value: "Point of Know Return (Live) by Kansas", data: "1633" },
{ value: "Poison by Alice Cooper", data: "1634" },
{ value: "Poison Was the Cure by Megadeth", data: "1635" },
{ value: "Poker Face by Lady Gaga", data: "1636" },
{ value: "Police Truck by Dead Kennedys", data: "1637" },
{ value: "Policy of Truth by Depeche Mode", data: "1638" },
{ value: "Polly by Nirvana", data: "1639" },
{ value: "Pompeii by Bastille", data: "1640" },
{ value: "Porch by Pearl Jam", data: "1641" },
{ value: "Pork and Beans by Weezer", data: "1642" },
{ value: "Portions for Foxes by Rilo Kiley", data: "1643" },
{ value: "Possum Kingdom by Toadies", data: "1644" },
{ value: "Postpone by Catfish And The Bottlemen", data: "1645" },
{ value: "Pour Some Sugar on Me (Live) by Def Leppard", data: "1646" },
{ value: "Power and the Passion by Midnight Oil", data: "1647" },
{ value: "Powerslave by Iron Maiden", data: "1648" },
{ value: "Pray For Plagues by Bring Me The Horizon", data: "1649" },
{ value: "Prayer by Disturbed", data: "1650" },
{ value: "Prayer of the Refugee by Rise Against", data: "1651" },
{ value: "Precious by The Pretenders", data: "1652" },
{ value: "Prelude/Angry Young Man by Billy Joel", data: "1653" },
{ value: "Prequel to the Sequel by Between the Buried and Me", data: "1654" },
{ value: "Pressure by Billy Joel", data: "1655" },
{ value: "Pressure by Paramore", data: "1656" },
{ value: "Pretend We're Dead by L7", data: "1657" },
{ value: "Pretty Fly (For a White Guy) by The Offspring", data: "1658" },
{ value: "Pretty in Pink by The Psychedelic Furs", data: "1659" },
{ value: "Pretty Noose by Soundgarden", data: "1660" },
{ value: "Pride (In The Name Of Love) by U2", data: "1661" },
{ value: "Pride and Joy by Stevie Ray Vaughan and Double Trouble", data: "1662" },
{ value: "Private Eyes by Hall & Oates", data: "1663" },
{ value: "Proibito by Litfiba", data: "1664" },
{ value: "Promise Everything by Basement", data: "1665" },
{ value: "Promised Land by Vesuvius", data: "1666" },
{ value: "Promises in the Dark by Pat Benatar", data: "1667" },
{ value: "Prophecy (Live) by Judas Priest", data: "1668" },
{ value: "Prostitute by Guns N' Roses", data: "1669" },
{ value: "Proud Mary by Creedence Clearwater Revival", data: "1670" },
{ value: "Psycho Killer by Talking Heads", data: "1671" },
{ value: "Psychosocial by Slipknot", data: "1672" },
{ value: "Public Enemy No. 1 by Megadeth", data: "1673" },
{ value: "Pull Me Under by Dream Theater", data: "1674" },
{ value: "Pulling Teeth by Green Day", data: "1675" },
{ value: "Pulse of the Maggots by Slipknot", data: "1676" },
{ value: "Pump It Up by Elvis Costello", data: "1677" },
{ value: "Pumped Up Kicks by Foster the People", data: "1678" },
{ value: "Purple Haze by The Jimi Hendrix Experience", data: "1679" },
{ value: "Push by Matchbox Twenty", data: "1680" },
{ value: "Push It by Static-X", data: "1681" },
{ value: "Push Push (Lady Lightning) by Bang Camaro", data: "1682" },
{ value: "Queen Bitch by David Bowie", data: "1683" },
{ value: "R U Mine? by Arctic Monkeys", data: "1684" },
{ value: "Radar Love by Golden Earring", data: "1685" },
{ value: "Radio by No Small Children", data: "1686" },
{ value: "Radio Free Europe by R.E.M.", data: "1687" },
{ value: "Radio Ga Ga by Queen", data: "1688" },
{ value: "Radio Radio by Elvis Costello", data: "1689" },
{ value: "Radioactive by Imagine Dragons", data: "1690" },
{ value: "Rag Doll by Aerosmith", data: "1691" },
{ value: "Rain Is a Good Thing by Luke Bryan", data: "1692" },
{ value: "Rainbow in the Dark by Dio", data: "1693" },
{ value: "Raining Blood by Slayer", data: "1694" },
{ value: "Raise Your Glass by P!nk", data: "1695" },
{ value: "Ramblin' Man by The Allman Brothers Band", data: "1696" },
{ value: "Rape Me by Nirvana", data: "1697" },
{ value: "Rapid Fire (Live) by Judas Priest", data: "1698" },
{ value: "Rapture by Blondie", data: "1699" },
{ value: "Rats in the Cellar by Aerosmith", data: "1700" },
{ value: "Rattlesnake Shake by Mötley Crüe", data: "1701" },
{ value: "Re: Your Brains by Jonathan Coulton", data: "1702" },
{ value: "Ready, Set, Go! by Tokio Hotel", data: "1703" },
{ value: "Real Good Looking Boy by The Who", data: "1704" },
{ value: "Real Wild Child by Everlife", data: "1705" },
{ value: "Real World by All-American Rejects", data: "1706" },
{ value: "Re-Arranged by Limp Bizkit", data: "1707" },
{ value: "Rebel Girl by Bikini Kill", data: "1708" },
{ value: "Rebel Heart by The Shelters", data: "1709" },
{ value: "Rebel Love Song by Black Veil Brides", data: "1710" },
{ value: "Rebel Yell by Billy Idol", data: "1711" },
{ value: "Rebellion (ft. Daron Malakian) by Linkin Park", data: "1712" },
{ value: "Rebound by Laura Bell Bundy", data: "1713" },
{ value: "Recession by Jeff Allen ft. Noelle LeBlanc and Naoko Takamoto", data: "1714" },
{ value: "Red Barchetta by Rush", data: "1715" },
{ value: "Red Devil by Yngwie Malmsteen's Rising Force", data: "1716" },
{ value: "Red Red Wine by UB40", data: "1717" },
{ value: "Red Tandy by The Mother Hips", data: "1718" },
{ value: "Redemption Song by Bob Marley and the Wailers", data: "1719" },
{ value: "Redneck by Lamb of God", data: "1720" },
{ value: "Re-Education (Through Labor) by Rise Against", data: "1721" },
{ value: "Refugee (Live) by Tom Petty & The Heartbreakers", data: "1722" },
{ value: "Rehab by Amy Winehouse", data: "1723" },
{ value: "Re-Hash by Gorillaz", data: "1724" },
{ value: "Reinventing Your Exit by Underoath", data: "1725" },
{ value: "Relax (Come Fighting) by Frankie Goes to Hollywood", data: "1726" },
{ value: "Release by Pearl Jam", data: "1727" },
{ value: "Relentless Chaos by Miss May I", data: "1728" },
{ value: "Remedy by Seether", data: "1729" },
{ value: "Remedy by The Black Crowes", data: "1730" },
{ value: "Reminiscing by Little River Band", data: "1731" },
{ value: "Renegade by Styx", data: "1732" },
{ value: "Renegades by X Ambassadors", data: "1733" },
{ value: "Reptilia by The Strokes", data: "1734" },
{ value: "Rescue Me by 30 Seconds to Mars", data: "1735" },
{ value: "Rescue Me by Buckcherry", data: "1736" },
{ value: "Restless Heart Syndrome by Green Day", data: "1737" },
{ value: "Revolution Rock by The Clash", data: "1738" },
{ value: "Rhiannon by Fleetwood Mac", data: "1739" },
{ value: "Riad N' the Bedouins by Guns N' Roses", data: "1740" },
{ value: "Ride by The Vines", data: "1741" },
{ value: "Ride by Trace Adkins", data: "1742" },
{ value: "Ride by Twenty One Pilots", data: "1743" },
{ value: "Ride a White Swan by T. Rex", data: "1744" },
{ value: "Ride the Lightning by Metallica", data: "1745" },
{ value: "Riders on the Storm by The Doors", data: "1746" },
{ value: "Ridin' in My Chevy by Snoop Dogg", data: "1747" },
{ value: "Ridin' the Hook by SpongeBob SquarePants", data: "1748" },
{ value: "Ridin' the Storm Out by REO Speedwagon", data: "1749" },
{ value: "Riding on the Wind by Judas Priest", data: "1750" },
{ value: "Right Here, Right Now by Jesus Jones", data: "1751" },
{ value: "Rime of the Ancient Mariner by Iron Maiden", data: "1752" },
{ value: "Ring of Fire by Johnny Cash", data: "1753" },
{ value: "Ring of Fire by Social Distortion", data: "1754" },
{ value: "Rio by Duran Duran", data: "1755" },
{ value: "Riptide by Vance Joy", data: "1756" },
{ value: "Rise Above This by Seether", data: "1757" },
{ value: "River of Tuoni by Amberian Dawn", data: "1758" },
{ value: "Rize Of The Fenix by Tenacious D", data: "1759" },
{ value: "Road To Nowhere by Ozzy Osbourne", data: "1760" },
{ value: "Roadhouse Blues by The Doors", data: "1761" },
{ value: "Roam by The B-52's", data: "1762" },
{ value: "Rob the Prez-O-Dent by That Handsome Devil", data: "1763" },
{ value: "Rock & Roll Queen by The Subways", data: "1764" },
{ value: "Rock and Roll All Nite (Live) by KISS", data: "1765" },
{ value: "Rock and Roll Band by Boston", data: "1766" },
{ value: "Rock and Roll, Hoochie Koo by Rick Derringer", data: "1767" },
{ value: "Rock Band Network Megamix 01 by Various Artists", data: "1768" },
{ value: "Rock Lobster by The B-52's", data: "1769" },
{ value: "Rock Me by Liz Phair", data: "1770" },
{ value: "Rock 'n' Roll Creation by Spinal Tap", data: "1771" },
{ value: "Rock 'n' Roll Dream by Crooked X", data: "1772" },
{ value: "Rock 'n' Roll High School by Ramones", data: "1773" },
{ value: "Rock 'n' Roll Nightmare by Spinal Tap", data: "1774" },
{ value: "Rock 'n' Roll Star by Oasis", data: "1775" },
{ value: "Rock of Ages by Def Leppard", data: "1776" },
{ value: "Rock Ready by Crown of Thorns", data: "1777" },
{ value: "Rock Rebellion by Bang Camaro", data: "1778" },
{ value: "Rock the Casbah by The Clash", data: "1779" },
{ value: "Rock This Town by Brian Setzer", data: "1780" },
{ value: "Rock Your Socks by Tenacious D", data: "1781" },
{ value: "Rockaway Beach by Ramones", data: "1782" },
{ value: "Rock'n Me by Steve Miller Band", data: "1783" },
{ value: "Rockstar by Nickelback", data: "1784" },
{ value: "Roll To Me by Del Amitri", data: "1785" },
{ value: "Roll with the Changes by REO Speedwagon", data: "1786" },
{ value: "Rooftops (A Liberation Broadcast) by Lostprophets", data: "1787" },
{ value: "Rooster by Alice In Chains", data: "1788" },
{ value: "Rope by Foo Fighters", data: "1789" },
{ value: "Rosanna by Toto", data: "1790" },
{ value: "Round and Round by Ratt", data: "1791" },
{ value: "Roundabout by Yes", data: "1792" },
{ value: "Roxanne by The Police", data: "1793" },
{ value: "Royals by Lorde", data: "1794" },
{ value: "Ruby by Kaiser Chiefs", data: "1795" },
{ value: "Ruby Soho by Rancid", data: "1796" },
{ value: "Rude by MAGIC!", data: "1797" },
{ value: "Rude Mood by Stevie Ray Vaughan and Double Trouble", data: "1798" },
{ value: "RudeBoys by Dutch ReBelle", data: "1799" },
{ value: "Rudie Can't Fail by The Clash", data: "1800" },
{ value: "Run by Foo Fighters", data: "1801" },
{ value: "Run For Cover by Blitz Kids", data: "1802" },
{ value: "Run Through the Jungle by Creedence Clearwater Revival", data: "1803" },
{ value: "Run to the Hills (Original Version) by Iron Maiden", data: "1804" },
{ value: "Run-Around by Blues Traveler", data: "1805" },
{ value: "Runaway by Bon Jovi", data: "1806" },
{ value: "Runnin' Down a Dream by Tom Petty", data: "1807" },
{ value: "Runnin' Wild by Airbourne", data: "1808" },
{ value: "Runnin' With The Devil by Van Halen", data: "1809" },
{ value: "Running by No Doubt", data: "1810" },
{ value: "Rust in Peace... Polaris by Megadeth", data: "1811" },
{ value: "Rusty Cage by Soundgarden", data: "1812" },
{ value: "S.O.M.P. by Skratch'N Snyf", data: "1813" },
{ value: "S.O.S. by The Glorious Sons", data: "1814" },
{ value: "Sabotage by Beastie Boys", data: "1815" },
{ value: "Safe and Sound by Capital Cities", data: "1816" },
{ value: "Saints of Los Angeles by Mötley Crüe", data: "1817" },
{ value: "Salute Your Solution by The Raconteurs", data: "1818" },
{ value: "Salvation by The Strumbellas", data: "1819" },
{ value: "Same Ol' Situation (S.O.S.) by Mötley Crüe", data: "1820" },
{ value: "Sanctified by Nine Inch Nails", data: "1821" },
{ value: "Santa Monica by Everclear", data: "1822" },
{ value: "Santeria by Sublime", data: "1823" },
{ value: "Sassafras Roots by Green Day", data: "1824" },
{ value: "Satch Boogie by Joe Satriani", data: "1825" },
{ value: "Satellite by Rise Against", data: "1826" },
{ value: "Satellite Radio by Steve Earle", data: "1827" },
{ value: "Satisfy My Soul by Bob Marley and the Wailers", data: "1828" },
{ value: "Saturday Morning by EELS", data: "1829" },
{ value: "Saturday Night Special by Lynyrd Skynyrd", data: "1830" },
{ value: "Saturday Night's Alright for Fighting by Elton John", data: "1831" },
{ value: "Saucy Jack by Spinal Tap", data: "1832" },
{ value: "Save A Horse (Ride A Cowboy) by Big & Rich", data: "1833" },
{ value: "Save Tonight by Eagle-Eye Cherry", data: "1834" },
{ value: "Save Yourself by tiLLie", data: "1835" },
{ value: "Savior by Rise Against", data: "1836" },
{ value: "Say Goodbye to Hollywood by Billy Joel", data: "1837" },
{ value: "Say It Ain't So by Weezer", data: "1838" },
{ value: "Say You'll Haunt Me by Stone Sour", data: "1839" },
{ value: "Scar Tissue by Red Hot Chili Peppers", data: "1840" },
{ value: "Scarlet Begonias by The Grateful Dead", data: "1841" },
{ value: "Scenes from an Italian Restaurant by Billy Joel", data: "1842" },
{ value: "School by Nirvana", data: "1843" },
{ value: "School's Out (Live) by Alice Cooper", data: "1844" },
{ value: "Science Genius Girl by Freezepop", data: "1845" },
{ value: "Scraped by Guns N' Roses", data: "1846" },
{ value: "Scream by Avenged Sevenfold", data: "1847" },
{ value: "Scream Aim Fire by Bullet For My Valentine", data: "1848" },
{ value: "Screaming For Vengeance by Judas Priest", data: "1849" },
{ value: "Sea and Sand by The Who", data: "1850" },
{ value: "Seasons by The Veer Union", data: "1851" },
{ value: "Seasons in the Abyss by Slayer", data: "1852" },
{ value: "Seasons of Wither by Aerosmith", data: "1853" },
{ value: "Second & Sebring by Of Mice & Men", data: "1854" },
{ value: "Second Chance by Shinedown", data: "1855" },
{ value: "See the Light by Green Day", data: "1856" },
{ value: "See You by Foo Fighters", data: "1857" },
{ value: "See You Again by Miley Cyrus", data: "1858" },
{ value: "Seize the Day by Avenged Sevenfold", data: "1859" },
{ value: "Self Esteem by The Offspring", data: "1860" },
{ value: "Semi-Charmed Life '09 by Third Eye Blind", data: "1861" },
{ value: "Send the Pain Below by Chevelle", data: "1862" },
{ value: "Sensual Seduction by Snoop Dogg", data: "1863" },
{ value: "September by Earth, Wind & Fire", data: "1864" },
{ value: "Settlin' by Sugarland", data: "1865" },
{ value: "Seven by Sunny Day Real Estate", data: "1866" },
{ value: "Seven by Tijuana Sweetheart", data: "1867" },
{ value: "Seven Nation Army by The White Stripes", data: "1868" },
{ value: "Seven Seas of Rhye by Queen", data: "1869" },
{ value: "Seventeen by Winger", data: "1870" },
{ value: "Seventh Son of a Seventh Son by Iron Maiden", data: "1871" },
{ value: "Sex and Candy by Marcy Playground", data: "1872" },
{ value: "Sex on Fire by Kings Of Leon", data: "1873" },
{ value: "Sex Type Thing by Stone Temple Pilots", data: "1874" },
{ value: "Shackler's Revenge by Guns N' Roses", data: "1875" },
{ value: "Shadow by Bearstronaut", data: "1876" },
{ value: "Shadow of the Day by Linkin Park", data: "1877" },
{ value: "ShadowBang (Head) by Bang on a Can All-Stars", data: "1878" },
{ value: "Shadows of the Night by Pat Benatar", data: "1879" },
{ value: "Shake by Count Zero", data: "1880" },
{ value: "Shame by Elle King", data: "1881" },
{ value: "Shame by Jocelyn & Chris Arndt", data: "1882" },
{ value: "Shape of You by Ed Sheeran", data: "1883" },
{ value: "She by Green Day", data: "1884" },
{ value: "She by Legitimate Front", data: "1885" },
{ value: "She Does by Locksley", data: "1886" },
{ value: "She Drives Me Crazy by Fine Young Cannibals", data: "1887" },
{ value: "She Goes Down by Mötley Crüe", data: "1888" },
{ value: "She Hates Me by Puddle of Mudd", data: "1889" },
{ value: "She Looks So Perfect by 5 Seconds of Summer", data: "1890" },
{ value: "She Sells Sanctuary by The Cult", data: "1891" },
{ value: "She Talks to Angels by The Black Crowes", data: "1892" },
{ value: "She Thinks My Tractor's Sexy by Kenny Chesney", data: "1893" },
{ value: "Shelter Me by Cinderella", data: "1894" },
{ value: "Shepherd of Fire by Avenged Sevenfold", data: "1895" },
{ value: "She's a Genius by Jet", data: "1896" },
{ value: "She's a Handsome Woman by Panic at the Disco", data: "1897" },
{ value: "She's a Hottie by Toby Keith", data: "1898" },
{ value: "She's Always a Woman by Billy Joel", data: "1899" },
{ value: "She's Country by Jason Aldean", data: "1900" },
{ value: "She's Fetching by Big Dipper", data: "1901" },
{ value: "She's Not There by The Zombies", data: "1902" },
{ value: "She's So Fine by The Jimi Hendrix Experience", data: "1903" },
{ value: "She's So Mean by Matchbox Twenty", data: "1904" },
{ value: "Shhh.... by The Darkest of the Hillside Thickets", data: "1905" },
{ value: "Shimmer & Shine by Ben Harper and Relentless7", data: "1906" },
{ value: "Shine by Collective Soul", data: "1907" },
{ value: "Shining Star by Earth, Wind & Fire", data: "1908" },
{ value: "Shockwave by Black Tide", data: "1909" },
{ value: "Shoot the Runner by Kasabian", data: "1910" },
{ value: "Shoot to Thrill (Live) by AC/DC", data: "1911" },
{ value: "Shooting Star by Bad Company", data: "1912" },
{ value: "Shooting the Moon by OK Go", data: "1913" },
{ value: "Short and Sweet by Spinal Tap", data: "1914" },
{ value: "Short Skirt/Long Jacket by Cake", data: "1915" },
{ value: "Should I Stay or Should I Go by The Clash", data: "1916" },
{ value: "Shoulder to the Plow by Breaking Wheel", data: "1917" },
{ value: "Should've Been a Cowboy by Toby Keith", data: "1918" },
{ value: "Shout by Tears for Fears", data: "1919" },
{ value: "Shout by The Isley Brothers", data: "1920" },
{ value: "Show Me the Way by Black Tide", data: "1921" },
{ value: "Shut Up and Dance by Walk The Moon", data: "1922" },
{ value: "Shy by HUNNY", data: "1923" },
{ value: "Sick, Sick, Sick by Queens of the Stone Age", data: "1924" },
{ value: "Sideways by Dierks Bentley", data: "1925" },
{ value: "Signs by Giant Target", data: "1926" },
{ value: "Silent Lucidity by Queensrÿche", data: "1927" },
{ value: "Silver by Pixies", data: "1928" },
{ value: "Simple Kind of Life by No Doubt", data: "1929" },
{ value: "Simple Man by Lynyrd Skynyrd", data: "1930" },
{ value: "Simplify by Young the Giant", data: "1931" },
{ value: "Sin Wagon by Dixie Chicks", data: "1932" },
{ value: "Sing by Ed Sheeran", data: "1933" },
{ value: "Sing by My Chemical Romance", data: "1934" },
{ value: "Sing the Changes (Live) by Paul McCartney", data: "1935" },
{ value: "Single White Female by Chely Wright", data: "1936" },
{ value: "Sink by Animal Flag", data: "1937" },
{ value: "Sins of My Youth by Neon Trees", data: "1938" },
{ value: "Sir Duke by Stevie Wonder", data: "1939" },
{ value: "Sir Psycho Sexy by Red Hot Chili Peppers", data: "1940" },
{ value: "Sister Christian by Night Ranger", data: "1941" },
{ value: "Sister Europe by The Psychedelic Furs", data: "1942" },
{ value: "Siva by Smashing Pumpkins", data: "1943" },
{ value: "Sixteen by No Doubt", data: "1944" },
{ value: "Skullcrusher Mountain by Jonathan Coulton", data: "1945" },
{ value: "Sky Is Over by Serj Tankian", data: "1946" },
{ value: "Skydiver by Ruby Rose Fox", data: "1947" },
{ value: "Sleep Now in the Fire by Rage Against the Machine", data: "1948" },
{ value: "Sleepwalker by Megadeth", data: "1949" },
{ value: "Slice of Your Pie by Mötley Crüe", data: "1950" },
{ value: "Slide by Goo Goo Dolls", data: "1951" },
{ value: "Slow Ride by Foghat", data: "1952" },
{ value: "Small Axe by Bob Marley and the Wailers", data: "1953" },
{ value: "Smash It Up (Part II) by The Damned", data: "1954" },
{ value: "Smells Like Teen Spirit by Nirvana", data: "1955" },
{ value: "Smile Like You Mean It by The Killers", data: "1956" },
{ value: "Smoke on the Water by Deep Purple", data: "1957" },
{ value: "Smokin' by Boston", data: "1958" },
{ value: "Smooth by Santana (ft. Rob Thomas)", data: "1959" },
{ value: "Smooth Criminal by Alien Ant Farm", data: "1960" },
{ value: "Snoop's Upside Ya Head by Snoop Dogg", data: "1961" },
{ value: "Snow ((Hey Oh)) by Red Hot Chili Peppers", data: "1962" },
{ value: "Snuff by Slipknot", data: "1963" },
{ value: "So Cold by Breaking Benjamin", data: "1964" },
{ value: "So Far Away by Avenged Sevenfold", data: "1965" },
{ value: "So Far Away by Staind", data: "1966" },
{ value: "So Lonely by The Police", data: "1967" },
{ value: "So Much to Say by Dave Matthews Band", data: "1968" },
{ value: "So What by P!nk", data: "1969" },
{ value: "So What'cha Want by Beastie Boys", data: "1970" },
{ value: "Sober by P!nk", data: "1971" },
{ value: "Sober Up by AJR ft. Rivers Cuomo", data: "1972" },
{ value: "Some Nights by Fun.", data: "1973" },
{ value: "Somebody to Love by Jefferson Airplane", data: "1974" },
{ value: "Somebody To Love by Queen", data: "1975" },
{ value: "Somebody Told Me by The Killers", data: "1976" },
{ value: "Someday by Nickelback", data: "1977" },
{ value: "Something About You by Boston", data: "1978" },
{ value: "Something Bigger, Something Brighter by Pretty Girls Make Graves", data: "1979" },
{ value: "Something From Nothing by Foo Fighters", data: "1980" },
{ value: "Something In The Way by Nirvana", data: "1981" },
{ value: "Sometimes Salvation by The Black Crowes", data: "1982" },
{ value: "Somewhere I Belong by Linkin Park", data: "1983" },
{ value: "Song #3 by Stone Sour", data: "1984" },
{ value: "Song 2 by Blur", data: "1985" },
{ value: "Song of the Century by Green Day", data: "1986" },
{ value: "Song with a Mission by The Sounds", data: "1987" },
{ value: "Sons and Daughters by The 88", data: "1988" },
{ value: "Sooner or Later by Breaking Benjamin", data: "1989" },
{ value: "Sorrow by Bad Religion", data: "1990" },
{ value: "Sorry by Guns N' Roses", data: "1991" },
{ value: "Sorry by Justin Bieber", data: "1992" },
{ value: "Sorry Not Sorry by Demi Lovato", data: "1993" },
{ value: "Sort Of by Silversun Pickups", data: "1994" },
{ value: "Soul Kitchen by The Doors", data: "1995" },
{ value: "Soul Sucker by Ozzy Osbourne", data: "1996" },
{ value: "Souls of Black by Testament", data: "1997" },
{ value: "South of Heaven by Slayer", data: "1998" },
{ value: "South Side of the Sky by Yes", data: "1999" },
{ value: "Soy Bomb by Honest Bob and the Factory-to-Dealer Incentives", data: "2000" },
{ value: "Space Cowboy by Steve Miller Band", data: "2001" },
{ value: "Space Oddity by David Bowie", data: "2002" },
{ value: "Space Truckin' by Deep Purple", data: "2003" },
{ value: "Spaceman by The Killers", data: "2004" },
{ value: "Spanish Bombs by The Clash", data: "2005" },
{ value: "Spanish Castle Magic by The Jimi Hendrix Experience", data: "2006" },
{ value: "speed fighter by masaya matsuura", data: "2007" },
{ value: "Speed of Sound by Pearl Jam", data: "2008" },
{ value: "Spiders by System of a Down", data: "2009" },
{ value: "Spiderwebs by No Doubt", data: "2010" },
{ value: "Spill the Wine by WAR", data: "2011" },
{ value: "Spinning Wheel by Blood, Sweat & Tears", data: "2012" },
{ value: "Spirit in the Sky by Norman Greenbaum", data: "2013" },
{ value: "Spoonman by Soundgarden", data: "2014" },
{ value: "Sprode by Freezepop", data: "2015" },
{ value: "Stacked Actors by Foo Fighters", data: "2016" },
{ value: "Stand by R.E.M.", data: "2017" },
{ value: "Stand Back by Stevie Nicks", data: "2018" },
{ value: "Stand in the Rain by Superchick", data: "2019" },
{ value: "Stand Up and Shout by Dio", data: "2020" },
{ value: "Standing in the Shower... Thinking by Jane's Addiction", data: "2021" },
{ value: "Starboy by The Weeknd ft. Daft Punk", data: "2022" },
{ value: "Starlight by BABYMETAL", data: "2023" },
{ value: "Starship Trooper by Yes", data: "2024" },
{ value: "Starships by Nicki Minaj", data: "2025" },
{ value: "Start A Band by Brad Paisley ft. Keith Urban", data: "2026" },
{ value: "Start All Over by Miley Cyrus", data: "2027" },
{ value: "Starting Over by Killswitch Engage", data: "2028" },
{ value: "Starting to Appreciate by Tutankamon", data: "2029" },
{ value: "Stash by Phish", data: "2030" },
{ value: "State of Love and Trust (Live: Drop in the Park) by Pearl Jam", data: "2031" },
{ value: "Stay Away by Nirvana", data: "2032" },
{ value: "Stay Together for the Kids by Blink-182", data: "2033" },
{ value: "Stayin' Alive by Bee Gees", data: "2034" },
{ value: "Steady at the Wheel by Shooter Jennings", data: "2035" },
{ value: "Steady, As She Goes by The Raconteurs", data: "2036" },
{ value: "Steal Away (The Night) by Ozzy Osbourne", data: "2037" },
{ value: "Steal My Sunshine by LEN", data: "2038" },
{ value: "Steeler (Live) by Judas Priest", data: "2039" },
{ value: "Stereo Hearts by Gym Class Heroes (ft. Adam Levine)", data: "2040" },
{ value: "Sticky Sweet by Mötley Crüe", data: "2041" },
{ value: "Stigmata by Ministry", data: "2042" },
{ value: "Still Alive by GLaDOS", data: "2043" },
{ value: "Still Breathing by Green Day", data: "2044" },
{ value: "Still Into You by Paramore", data: "2045" },
{ value: "Still of the Night by Whitesnake", data: "2046" },
{ value: "Still The One by Orleans", data: "2047" },
{ value: "Still Waiting by Sum 41", data: "2048" },
{ value: "Stir It Up by Bob Marley and the Wailers", data: "2049" },
{ value: "Stitches by Shawn Mendes", data: "2050" },
{ value: "Stolen Dance by Milky Chance", data: "2051" },
{ value: "Stone Cold Crazy by Queen", data: "2052" },
{ value: "Stone Free by Jimi Hendrix", data: "2053" },
{ value: "Stonehenge by Spinal Tap", data: "2054" },
{ value: "Stop by Jane's Addiction", data: "2055" },
{ value: "Stop and Stare by OneRepublic", data: "2056" },
{ value: "Stop Draggin' My Heart Around by Stevie Nicks", data: "2057" },
{ value: "Stop Me if You Think You've Heard This One Before by The Smiths", data: "2058" },
{ value: "Stop Start Again by Hautewerk", data: "2059" },
{ value: "Stop! by Against Me!", data: "2060" },
{ value: "Story of My Life by One Direction", data: "2061" },
{ value: "Story of My Life by Social Distortion", data: "2062" },
{ value: "Straight Lines by Silverchair", data: "2063" },
{ value: "Strange Times by The Black Keys", data: "2064" },
{ value: "Stranglehold by Ted Nugent", data: "2065" },
{ value: "Stray Cat Strut by Brian Setzer", data: "2066" },
{ value: "Street of Dreams by Guns N' Roses", data: "2067" },
{ value: "Stressed Out by Twenty One Pilots", data: "2068" },
{ value: "Stricken by Disturbed", data: "2069" },
{ value: "Stronger (What Doesn't Kill You) by Kelly Clarkson", data: "2070" },
{ value: "Strutter (Live) by KISS", data: "2071" },
{ value: "Stumble and Fall by Razorlight", data: "2072" },
{ value: "Stupid Girl by Garbage", data: "2073" },
{ value: "Stupify by Disturbed", data: "2074" },
{ value: "Sturm & Drang by KMFDM", data: "2075" },
{ value: "Subdivisions by Rush", data: "2076" },
{ value: "Suck My Kiss by Red Hot Chili Peppers", data: "2077" },
{ value: "Suddenly I See by KT Tunstall", data: "2078" },
{ value: "Suds in the Bucket by Sara Evans", data: "2079" },
{ value: "Suffragette City by David Bowie", data: "2080" },
{ value: "Sugar Magnolia by The Grateful Dead", data: "2081" },
{ value: "Sugar, We're Goin Down by Fall Out Boy", data: "2082" },
{ value: "Sugar, You by Oh Honey", data: "2083" },
{ value: "Sugarbaby by Morningwood", data: "2084" },
{ value: "Suicide Note Pt. II by Pantera", data: "2085" },
{ value: "Sulfur by Slipknot", data: "2086" },
{ value: "Summer Nights by Rascal Flatts", data: "2087" },
{ value: "Summer of '69 by Bryan Adams", data: "2088" },
{ value: "Summertime Blues (Live at Leeds) by The Who", data: "2089" },
{ value: "Summertime Boy by Seasick Steve", data: "2090" },
{ value: "Summertime Rolls by Jane's Addiction", data: "2091" },
{ value: "Sun Hits the Sky by Supergrass", data: "2092" },
{ value: "Sunday Bloody Sunday by U2", data: "2093" },
{ value: "Sunday Morning by No Doubt", data: "2094" },
{ value: "Sundial by Wolfmother", data: "2095" },
{ value: "Super Bad, Pts. 1 & 2 by James Brown", data: "2096" },
{ value: "Super Beat Sports Big Baoz Battle by Steve Pardo", data: "2097" },
{ value: "Super Freak by Rick James", data: "2098" },
{ value: "Superbeast by Rob Zombie", data: "2099" },
{ value: "Super-Charger Heaven by White Zombie", data: "2100" },
{ value: "Superman by R.E.M.", data: "2101" },
{ value: "Superposition by Young the Giant", data: "2102" },
{ value: "Supersonic by Pearl Jam", data: "2103" },
{ value: "Supersonic (Live) by Oasis", data: "2104" },
{ value: "Superstition by Stevie Wonder", data: "2105" },
{ value: "Superunknown by Soundgarden", data: "2106" },
{ value: "Supreme Girl by The Sterns", data: "2107" },
{ value: "Surfing with the Alien by Joe Satriani", data: "2108" },
{ value: "Surrender (Live) by Cheap Trick", data: "2109" },
{ value: "Survive by The Warning", data: "2110" },
{ value: "Susie Q by Creedence Clearwater Revival", data: "2111" },
{ value: "Suspicious Minds by Elvis Presley", data: "2112" },
{ value: "Swamped by Lacuna Coil", data: "2113" },
{ value: "Sweater Weather by Parks", data: "2114" },
{ value: "Sweater Weather by The Neighbourhood", data: "2115" },
{ value: "Sweet Emotion by Aerosmith", data: "2116" },
{ value: "Sweet Home Alabama (Live) by Lynyrd Skynyrd", data: "2117" },
{ value: "Sweet Leaf by Black Sabbath", data: "2118" },
{ value: "Sweet Talk by Dear and the Headlights", data: "2119" },
{ value: "Sweetness by Jimmy Eat World", data: "2120" },
{ value: "Sweetness and Light by Lush", data: "2121" },
{ value: "Swing by Trace Adkins", data: "2122" },
{ value: "Swing, Swing by All-American Rejects", data: "2123" },
{ value: "Symphony of Destruction by Megadeth", data: "2124" },
{ value: "Synchronicity II by The Police", data: "2125" },
{ value: "Synthesized by Symbion Project", data: "2126" },
{ value: "T.N.T. (Live) by AC/DC", data: "2127" },
{ value: "Tainted Love by Soft Cell", data: "2128" },
{ value: "Take Back the City by Snow Patrol", data: "2129" },
{ value: "Take It on the Run by REO Speedwagon", data: "2130" },
{ value: "Take Me Out by Franz Ferdinand", data: "2131" },
{ value: "Take Me To Church by Hozier", data: "2132" },
{ value: "Take Me to the River by Talking Heads", data: "2133" },
{ value: "Take No Prisoners by Megadeth", data: "2134" },
{ value: "Take on Me by a-ha", data: "2135" },
{ value: "Take the Money and Run by Steve Miller Band", data: "2136" },
{ value: "Takin' Care Of Business by Bachman-Turner Overdrive", data: "2137" },
{ value: "Talk Dirty to Me by Poison", data: "2138" },
{ value: "Tame by Pixies", data: "2139" },
{ value: "Tangled Up in Blue by Bob Dylan", data: "2140" },
{ value: "Tastes Like Kevin Bacon by iwrestledabearonce", data: "2141" },
{ value: "Tears Don't Fall by Bullet For My Valentine", data: "2142" },
{ value: "Ted, Just Admit It... by Jane's Addiction", data: "2143" },
{ value: "Teen Age Riot by Sonic Youth", data: "2144" },
{ value: "Teen Angst (What the World Needs Now) by Cracker", data: "2145" },
{ value: "Teenage Lobotomy by Ramones", data: "2146" },
{ value: "Teenagers by My Chemical Romance", data: "2147" },
{ value: "Tell Her No by The Zombies", data: "2148" },
{ value: "Tell Me by Stevie Ray Vaughan and Double Trouble", data: "2149" },
{ value: "Tell Me Baby by Red Hot Chili Peppers", data: "2150" },
{ value: "Tell Me Something Good by Rufus (featuring Chaka Khan)", data: "2151" },
{ value: "Tempted by Squeeze", data: "2152" },
{ value: "Ten Speed (Of God's Blood & Burial) by Coheed and Cambria", data: "2153" },
{ value: "Tenement Funster by Queen", data: "2154" },
{ value: "Tennessee Flat Top Box by Johnny Cash", data: "2155" },
{ value: "Terrible Lie by Nine Inch Nails", data: "2156" },
{ value: "Territorial Pissings by Nirvana", data: "2157" },
{ value: "Testify by Rage Against the Machine", data: "2158" },
{ value: "Testify by Stevie Ray Vaughan and Double Trouble", data: "2159" },
{ value: "Texas Flood by Stevie Ray Vaughan and Double Trouble", data: "2160" },
{ value: "Tha Shiznit by Snoop Dogg", data: "2161" },
{ value: "Thank God For Girls by Weezer", data: "2162" },
{ value: "Thank You Boys by Jane's Addiction", data: "2163" },
{ value: "That Don't Impress Me Much by Shania Twain", data: "2164" },
{ value: "That Smell by Lynyrd Skynyrd", data: "2165" },
{ value: "That's How Country Boys Roll by Billy Currington", data: "2166" },
{ value: "That's How I Escaped My Certain Fate by Mission of Burma", data: "2167" },
{ value: "That's My Kind Of Night by Luke Bryan", data: "2168" },
{ value: "That's tha Homie by Snoop Dogg", data: "2169" },
{ value: "That's What You Get by Paramore", data: "2170" },
{ value: "That's When I Reach for My Revolver by Mission of Burma", data: "2171" },
{ value: "The Adventure by Angels & Airwaves", data: "2172" },
{ value: "The Adventures of Rain Dance Maggie by Red Hot Chili Peppers", data: "2173" },
{ value: "The Animal by Disturbed", data: "2174" },
{ value: "The Anthem by Good Charlotte", data: "2175" },
{ value: "The Arms of Sorrow by Killswitch Engage", data: "2176" },
{ value: "The Attitude Song by Steve Vai", data: "2177" },
{ value: "The Ballad of Ira Hayes by Johnny Cash", data: "2178" },
{ value: "The Banishment by Prong", data: "2179" },
{ value: "The Beautiful People by Marilyn Manson", data: "2180" },
{ value: "The Best Day Ever by SpongeBob SquarePants", data: "2181" },
{ value: "The Bitch Is Back by Elton John", data: "2182" },
{ value: "The Boys Are Back in Town (Live) by Thin Lizzy", data: "2183" },
{ value: "The Broken by Coheed and Cambria", data: "2184" },
{ value: "The Camera Eye by Rush", data: "2185" },
{ value: "The Card Cheat by The Clash", data: "2186" },
{ value: "The Clairvoyant by Iron Maiden", data: "2187" },
{ value: "The Climb by No Doubt", data: "2188" },
{ value: "The Collector by Nine Inch Nails", data: "2189" },
{ value: "The Coma Machine by Between the Buried and Me", data: "2190" },
{ value: "The Con by Tegan and Sara", data: "2191" },
{ value: "The Conjuring by Megadeth", data: "2192" },
{ value: "The Crow & the Butterfly by Shinedown", data: "2193" },
{ value: "The Crystal Ship by The Doors", data: "2194" },
{ value: "The Day I Tried to Live by Soundgarden", data: "2195" },
{ value: "The Devil In I by Slipknot", data: "2196" },
{ value: "The Diary of Jane by Breaking Benjamin", data: "2197" },
{ value: "The Dope Show by Marilyn Manson", data: "2198" },
{ value: "The Downfall of Us All by A Day to Remember", data: "2199" },
{ value: "The Edge of Glory by Lady Gaga", data: "2200" },
{ value: "The End by Pearl Jam", data: "2201" },
{ value: "The End of Heartache by Killswitch Engage", data: "2202" },
{ value: "The Entertainer by Billy Joel", data: "2203" },
{ value: "The Feast and the Famine by Foo Fighters", data: "2204" },
{ value: "The Feeling by Kutless", data: "2205" },
{ value: "The Final Countdown by Europe", data: "2206" },
{ value: "The Fixer by Pearl Jam", data: "2207" },
{ value: "The Flood by Escape the Fate", data: "2208" },
{ value: "The Funeral by Band of Horses", data: "2209" },
{ value: "The Gambler by Kenny Rogers", data: "2210" },
{ value: "The Game by Disturbed", data: "2211" },
{ value: "The Good Left Undone by Rise Against", data: "2212" },
{ value: "The Good Life by Three Days Grace", data: "2213" },
{ value: "The Great Escape by Boys Like Girls", data: "2214" },
{ value: "The Great Satan by Ministry", data: "2215" },
{ value: "The Great Southern Trendkill by Pantera", data: "2216" },
{ value: "The Greatest by Sia ft. Kendrick Lamar", data: "2217" },
{ value: "The Greatest Man That Ever Lived by Weezer", data: "2218" },
{ value: "The Greeting Song by Red Hot Chili Peppers", data: "2219" },
{ value: "The Gun Show by In This Moment", data: "2220" },
{ value: "The Guns of Brixton by The Clash", data: "2221" },
{ value: "The Hand That Feeds by Nine Inch Nails", data: "2222" },
{ value: "The Hardest Button to Button by The White Stripes", data: "2223" },
{ value: "The Heart From Your Hate by Trivium", data: "2224" },
{ value: "The Heart of Rock & Roll by Huey Lewis and the News", data: "2225" },
{ value: "The Heist by DnA's Evolution", data: "2226" },
{ value: "The Hellion/Electric Eye by Judas Priest", data: "2227" },
{ value: "The Hills by The Weeknd", data: "2228" },
{ value: "The Hockey Theme by Neil Peart", data: "2229" },
{ value: "The Hungry Wolf by X", data: "2230" },
{ value: "The Impression That I Get by The Mighty Mighty Bosstones", data: "2231" },
{ value: "The Jack (Live) by AC/DC", data: "2232" },
{ value: "The Joker by Steve Miller Band", data: "2233" },
{ value: "The Kids Aren't Alright by The Offspring", data: "2234" },
{ value: "The Kill by 30 Seconds to Mars", data: "2235" },
{ value: "The Killing Jar by Siouxsie and The Banshees", data: "2236" },
{ value: "The Killing Moon by Echo & The Bunnymen", data: "2237" },
{ value: "The Leaving Song, Pt. II by AFI", data: "2238" },
{ value: "The Loco-Motion by Grand Funk Railroad", data: "2239" },
{ value: "The Look by Roxette", data: "2240" },
{ value: "The Mephistopheles of Los Angeles by Marilyn Manson", data: "2241" },
{ value: "The Metal by Tenacious D", data: "2242" },
{ value: "The Middle by Jimmy Eat World", data: "2243" },
{ value: "The Miracle (Of Joey Ramone) by U2", data: "2244" },
{ value: "The Most Beautiful Girl (In the Room) by Flight of the Conchords", data: "2245" },
{ value: "The Night the Lights Went Out in Georgia by Reba McEntire", data: "2246" },
{ value: "The Number of the Beast by Iron Maiden", data: "2247" },
{ value: "The Number of the Beast (Original Version) by Iron Maiden", data: "2248" },
{ value: "The One I Love by R.E.M.", data: "2249" },
{ value: "The Only Exception by Paramore", data: "2250" },
{ value: "The Only Time by Nine Inch Nails", data: "2251" },
{ value: "The Party Song by Blink-182", data: "2252" },
{ value: "The Passenger by Iggy Pop", data: "2253" },
{ value: "The Perfect Crime #2 by The Decemberists", data: "2254" },
{ value: "The Perfect Drug by Nine Inch Nails", data: "2255" },
{ value: "The Power of Equality by Red Hot Chili Peppers", data: "2256" },
{ value: "The Power of Love by Huey Lewis and the News", data: "2257" },
{ value: "The Pretender by Foo Fighters", data: "2258" },
{ value: "The Prisoner by Iron Maiden", data: "2259" },
{ value: "The Rage (Live) by Judas Priest", data: "2260" },
{ value: "The Reason by Hoobastank", data: "2261" },
{ value: "The Red by Chevelle", data: "2262" },
{ value: "The Reflex by Duran Duran", data: "2263" },
{ value: "The Right Profile by The Clash", data: "2264" },
{ value: "The Righteous and the Wicked by Red Hot Chili Peppers", data: "2265" },
{ value: "The Rock Show by Blink-182", data: "2266" },
{ value: "The Running Free by Coheed and Cambria", data: "2267" },
{ value: "The Scientist by Coldplay", data: "2268" },
{ value: "The Seeker by The Who", data: "2269" },
{ value: "The Serpentine Offering by Dimmu Borgir", data: "2270" },
{ value: "The Show Must Go On by Queen", data: "2271" },
{ value: "The Sign by Ace of Base", data: "2272" },
{ value: "The Sound Of Silence by Disturbed", data: "2273" },
{ value: "The Sounds of Silence by Simon & Garfunkel", data: "2274" },
{ value: "The Spirit of Radio (Live) by Rush", data: "2275" },
{ value: "The Stage by Avenged Sevenfold", data: "2276" },
{ value: "The Static Age by Green Day", data: "2277" },
{ value: "The Stranger by Billy Joel", data: "2278" },
{ value: "The Stroke by Billy Squier", data: "2279" },
{ value: "The Taste of Ink by The Used", data: "2280" },
{ value: "The Thrill Is Gone by B.B. King", data: "2281" },
{ value: "The Time Is Wrong by Tickle Me Pink", data: "2282" },
{ value: "The Touch by Stan Bush", data: "2283" },
{ value: "The Trees (Vault Edition) by Rush", data: "2284" },
{ value: "The Triumph From RWBY by Jeff Williams ft. Casey Lee Williams", data: "2285" },
{ value: "The Trooper by Iron Maiden", data: "2286" },
{ value: "The Underground in America by Pantera", data: "2287" },
{ value: "The Vengeful One by Disturbed", data: "2288" },
{ value: "The Wagon by Dinosaur Jr.", data: "2289" },
{ value: "The Waiting (Live) by Tom Petty & The Heartbreakers", data: "2290" },
{ value: "The Warrior by Scandal", data: "2291" },
{ value: "The Way That It Shows by Richard Thompson", data: "2292" },
{ value: "The Way You Used to Do by Queens of the Stone Age", data: "2293" },
{ value: "The Weight (Live) by The Band", data: "2294" },
{ value: "The Who Super Bowl S-mashup by The Who", data: "2295" },
{ value: "The Wicker Man by Iron Maiden", data: "2296" },
{ value: "The Wind by Zac Brown Band", data: "2297" },
{ value: "The Wind Cries Mary by The Jimi Hendrix Experience", data: "2298" },
{ value: "The Wolf by Mumford & Sons", data: "2299" },
{ value: "Them Belly Full (But We Hungry) by Bob Marley and the Wailers", data: "2300" },
{ value: "Them Bones by Alice In Chains", data: "2301" },
{ value: "There Goes My Gun by Pixies", data: "2302" },
{ value: "There Was a Time by Guns N' Roses", data: "2303" },
{ value: "There's No Other Way by Blur", data: "2304" },
{ value: "There's Nothing Holdin' Me Back by Shawn Mendes", data: "2305" },
{ value: "These Days by Foo Fighters", data: "2306" },
{ value: "These Days by R.E.M.", data: "2307" },
{ value: "These Hands by Bent Knee", data: "2308" },
{ value: "They Say by Scars on Broadway", data: "2309" },
{ value: "They're Red Hot by Red Hot Chili Peppers", data: "2310" },
{ value: "Thieves by Ministry", data: "2311" },
{ value: "Thinking Emoji by Barely March", data: "2312" },
{ value: "Third Floor Story by The Mother Hips", data: "2313" },
{ value: "This Afternoon by Nickelback", data: "2314" },
{ value: "This Ain't a Scene, It's an Arms Race by Fall Out Boy", data: "2315" },
{ value: "This Bastard's Life by Swingin' Utters", data: "2316" },
{ value: "This Calling by All That Remains", data: "2317" },
{ value: "This Charming Man by The Smiths", data: "2318" },
{ value: "This I Love by Guns N' Roses", data: "2319" },
{ value: "This Is a Call by Foo Fighters", data: "2320" },
{ value: "This Is Exile by Whitechapel", data: "2321" },
{ value: "This Is How We Do It by Montell Jordan", data: "2322" },
{ value: "This Is It by Staind", data: "2323" },
{ value: "This Is Thirteen by Anvil", data: "2324" },
{ value: "This Is War by 30 Seconds to Mars", data: "2325" },
{ value: "This Love by Maroon 5", data: "2326" },
{ value: "This Means War by Nickelback", data: "2327" },
{ value: "This One's for the Girls by Martina McBride", data: "2328" },
{ value: "This Will Be The Day by Jeff Williams ft. Casey Lee Williams", data: "2329" },
{ value: "Thnks fr th Mmrs by Fall Out Boy", data: "2330" },
{ value: "Those In Glass Houses by Of Mice & Men", data: "2331" },
{ value: "Thrash Unreal by Against Me!", data: "2332" },
{ value: "Thrasher by Evile", data: "2333" },
{ value: "Three Little Birds by Bob Marley and the Wailers", data: "2334" },
{ value: "Three Lives by Octavision", data: "2335" },
{ value: "Throne by Bring Me The Horizon", data: "2336" },
{ value: "Through Being Cool by Devo", data: "2337" },
{ value: "Through Glass by Stone Sour", data: "2338" },
{ value: "Through the Fire and Flames by DragonForce", data: "2339" },
{ value: "Throwing Stones by The Grateful Dead", data: "2340" },
{ value: "Thug Love by Dance for the Dying", data: "2341" },
{ value: "Thunder by Boys Like Girls", data: "2342" },
{ value: "Thunder by Imagine Dragons", data: "2343" },
{ value: "Thunder & Lightning by Motörhead", data: "2344" },
{ value: "Thunder Kiss '65 by White Zombie", data: "2345" },
{ value: "Thunderbirds Are Go! by Busted", data: "2346" },
{ value: "Thunderstruck (Live) by AC/DC", data: "2347" },
{ value: "Tick Tick Boom by The Hives", data: "2348" },
{ value: "Tie You Down by Shaimus", data: "2349" },
{ value: "Tie Your Mother Down by Queen", data: "2350" },
{ value: "Tighten Up by The Black Keys", data: "2351" },
{ value: "Time After Time by Cyndi Lauper", data: "2352" },
{ value: "Time Bomb by Rancid", data: "2353" },
{ value: "Time Bomb (Live) by Old 97's", data: "2354" },
{ value: "Time For Change by Mötley Crüe", data: "2355" },
{ value: "Time Is Running Out by Papa Roach", data: "2356" },
{ value: "Time to Say Goodbye by Jeff Williams ft. Casey Lee Williams", data: "2357" },
{ value: "Time We Had by The Mother Hips", data: "2358" },
{ value: "Times Like These by Foo Fighters", data: "2359" },
{ value: "Time-Sick Son of a Grizzly Bear by The Mother Hips", data: "2360" },
{ value: "Timmy & the Lords of the Underworld by Timmy & the Lords of the Underworld", data: "2361" },
{ value: "To Be With You by Mr. Big", data: "2362" },
{ value: "To My Romeo by Spirit Kid", data: "2363" },
{ value: "Today by Smashing Pumpkins", data: "2364" },
{ value: "Tom Sawyer by Rush", data: "2365" },
{ value: "Tom Sawyer (Original Version) by Rush", data: "2366" },
{ value: "Tomorrow by Silverchair", data: "2367" },
{ value: "Tongue Tied by Grouplove", data: "2368" },
{ value: "Tonight I'm Gonna Rock You Tonight by Spinal Tap", data: "2369" },
{ value: "Tonight Tonight by Hot Chelle Rae", data: "2370" },
{ value: "Too Much Time on My Hands by Styx", data: "2371" },
{ value: "Torn by Natalie Imbruglia", data: "2372" },
{ value: "Torn In Two by Breaking Benjamin", data: "2373" },
{ value: "Tornado of Souls by Megadeth", data: "2374" },
{ value: "Total Eclipse of the Heart by Bonnie Tyler", data: "2375" },
{ value: "Touch Me by The Doors", data: "2376" },
{ value: "Touch of Grey by The Grateful Dead", data: "2377" },
{ value: "Tourniquet by Breaking Benjamin", data: "2378" },
{ value: "Town Called Malice by The Jam", data: "2379" },
{ value: "Toxicity by System of a Down", data: "2380" },
{ value: "Toys in the Attic by Aerosmith", data: "2381" },
{ value: "Tragedy by Bee Gees", data: "2382" },
{ value: "Tragic Kingdom by No Doubt", data: "2383" },
{ value: "Train in Vain (Stand by Me) by The Clash", data: "2384" },
{ value: "Train Kept A Rollin' by Aerosmith", data: "2385" },
{ value: "Trainwreck 1979 by Death From Above 1979", data: "2386" },
{ value: "Transmaniacon MC by Blue Öyster Cult", data: "2387" },
{ value: "Trash Candy by Tijuana Sweetheart", data: "2388" },
{ value: "Travelin' Band by Creedence Clearwater Revival", data: "2389" },
{ value: "Treasure by Bruno Mars", data: "2390" },
{ value: "Treat Me Like Your Mother by The Dead Weather", data: "2391" },
{ value: "Treat You Better by Shawn Mendes", data: "2392" },
{ value: "Tribute by Tenacious D", data: "2393" },
{ value: "Trippin' on a Hole in a Paper Heart by Stone Temple Pilots", data: "2394" },
{ value: "Trouble Comes Running by Spoon", data: "2395" },
{ value: "Troublemaker by Weezer", data: "2396" },
{ value: "Truckin' by The Grateful Dead", data: "2397" },
{ value: "True Confessional by Party Bois", data: "2398" },
{ value: "True Confessions by Blondfire", data: "2399" },
{ value: "Trust by Megadeth", data: "2400" },
{ value: "Truth Hits Everybody by The Police", data: "2401" },
{ value: "Tubthumping by Chumbawamba", data: "2402" },
{ value: "Tuesday's Gone by Lynyrd Skynyrd", data: "2403" },
{ value: "Turn It Around by Lucius", data: "2404" },
{ value: "Turning Japanese by The Vapors", data: "2405" },
{ value: "Tutto è Possibile by Finley", data: "2406" },
{ value: "TWANG by George Strait", data: "2407" },
{ value: "Tweezer by Phish", data: "2408" },
{ value: "Twilight Of The Thunder God by Amon Amarth", data: "2409" },
{ value: "Two Princes by Spin Doctors", data: "2410" },
{ value: "Two Tickets to Paradise by Eddie Money", data: "2411" },
{ value: "Two Weeks by All That Remains", data: "2412" },
{ value: "Tyler by Toadies", data: "2413" },
{ value: "Typical by Mute Math", data: "2414" },
{ value: "U Suck by Just Kait", data: "2415" },
{ value: "U.S. Blues by The Grateful Dead", data: "2416" },
{ value: "Uma Thurman by Fall Out Boy", data: "2417" },
{ value: "Unbelievable by EMF", data: "2418" },
{ value: "Unchained by Van Halen", data: "2419" },
{ value: "Uncle John's Band by The Grateful Dead", data: "2420" },
{ value: "Uncomfortable by Halestorm", data: "2421" },
{ value: "Uncontrollable Urge by Devo", data: "2422" },
{ value: "Undefeated by Def Leppard", data: "2423" },
{ value: "Under Cover of Darkness by The Strokes", data: "2424" },
{ value: "Under My Wheels (Live) by Alice Cooper", data: "2425" },
{ value: "Under Pressure by Queen", data: "2426" },
{ value: "Under the Bridge by Red Hot Chili Peppers", data: "2427" },
{ value: "Underneath It All by No Doubt", data: "2428" },
{ value: "Undone - The Sweater Song by Weezer", data: "2429" },
{ value: "Unheavenly Creatures by Coheed and Cambria", data: "2430" },
{ value: "Unholy Confessions by Avenged Sevenfold", data: "2431" },
{ value: "United (Live) by Judas Priest", data: "2432" },
{ value: "Unskinny Bop by Poison", data: "2433" },
{ value: "Unthought Known by Pearl Jam", data: "2434" },
{ value: "Until the End by Breaking Benjamin", data: "2435" },
{ value: "Unwell by Matchbox Twenty", data: "2436" },
{ value: "Unwritten by Natasha Bedingfield", data: "2437" },
{ value: "Up All Night by Blink-182", data: "2438" },
{ value: "Up Around the Bend by Creedence Clearwater Revival", data: "2439" },
{ value: "Up from the Skies by The Jimi Hendrix Experience", data: "2440" },
{ value: "Up in Arms by Foo Fighters", data: "2441" },
{ value: "Up the Beach by Jane's Addiction", data: "2442" },
{ value: "Uptown Funk by Mark Ronson ft. Bruno Mars", data: "2443" },
{ value: "Uptown Girl by Billy Joel", data: "2444" },
{ value: "Urgent by Foreigner", data: "2445" },
{ value: "Use It by The New Pornographers", data: "2446" },
{ value: "Use Me by Hinder", data: "2447" },
{ value: "Use Somebody by Kings Of Leon", data: "2448" },
{ value: "Valerie by The Zutons", data: "2449" },
{ value: "Valleys of Neptune by Jimi Hendrix", data: "2450" },
{ value: "Vasoline by Stone Temple Pilots", data: "2451" },
{ value: "V-Bomb by Dark Wheels", data: "2452" },
{ value: "Vengeance Is Mine by Alice Cooper", data: "2453" },
{ value: "Verdamp Lang Her by BAP", data: "2454" },
{ value: "Vertigo by U2", data: "2455" },
{ value: "Vinyl by Fly By Midnight", data: "2456" },
{ value: "Violent Shiver by Benjamin Booker", data: "2457" },
{ value: "Visions by Abnormality", data: "2458" },
{ value: "Vital Signs by Rush", data: "2459" },
{ value: "Viva la Resistance by Hypernova", data: "2460" },
{ value: "Viva la Vida by Coldplay", data: "2461" },
{ value: "Voices by Disturbed", data: "2462" },
{ value: "Volcano by Jimmy Buffett", data: "2463" },
{ value: "Voodoo Child (Slight Return) (Live) by Jimi Hendrix", data: "2464" },
{ value: "Wagon Wheel by Darius Rucker", data: "2465" },
{ value: "Wait and Bleed by Slipknot", data: "2466" },
{ value: "Wait Until Tomorrow by The Jimi Hendrix Experience", data: "2467" },
{ value: "Waiting for a Girl Like You by Foreigner", data: "2468" },
{ value: "Waiting for the End by Linkin Park", data: "2469" },
{ value: "Waiting in Vain by Bob Marley and the Wailers", data: "2470" },
{ value: "Wake Me Up by Avicii", data: "2471" },
{ value: "Wake Me Up When September Ends by Green Day", data: "2472" },
{ value: "Wake Up Call by Maroon 5", data: "2473" },
{ value: "Wake Up Dead by Megadeth", data: "2474" },
{ value: "Waking the Demon by Bullet For My Valentine", data: "2475" },
{ value: "Walk by Foo Fighters", data: "2476" },
{ value: "Walk by Pantera", data: "2477" },
{ value: "Walk Away by James Gang", data: "2478" },
{ value: "Walk Like an Egyptian by The Bangles", data: "2479" },
{ value: "Walk of Life by Dire Straits", data: "2480" },
{ value: "Walk This Way by Aerosmith", data: "2481" },
{ value: "Walking After You by Foo Fighters", data: "2482" },
{ value: "Walking on Sunshine by Katrina and the Waves", data: "2483" },
{ value: "Walking on the Moon by The Police", data: "2484" },
{ value: "Walking on the Sun by Smash Mouth", data: "2485" },
{ value: "Want To Want Me by Jason Derulo", data: "2486" },
{ value: "Wanted Dead or Alive by Bon Jovi", data: "2487" },
{ value: "War Nerve by Pantera", data: "2488" },
{ value: "War Pigs by Black Sabbath", data: "2489" },
{ value: "War Zone by Rob Zombie", data: "2490" },
{ value: "Warmer Than Hell by Spinal Tap", data: "2491" },
{ value: "Warning by Green Day", data: "2492" },
{ value: "Warrior by Disturbed", data: "2493" },
{ value: "Warriors of Time by Black Tide", data: "2494" },
{ value: "Waste A Moment by Kings Of Leon", data: "2495" },
{ value: "Wasted Again by Turbonegro", data: "2496" },
{ value: "Wasted Years by Iron Maiden", data: "2497" },
{ value: "Wave of Mutilation by Pixies", data: "2498" },
{ value: "We Are Family by Sister Sledge", data: "2499" },
{ value: "We Are the Champions by Queen", data: "2500" },
{ value: "We Are Young by Fun. ft. Janelle Monáe", data: "2501" },
{ value: "We Belong by Pat Benatar", data: "2502" },
{ value: "We Built This City by Starship", data: "2503" },
{ value: "We Care a Lot by Faith No More", data: "2504" },
{ value: "We Didn't Start the Fire by Billy Joel", data: "2505" },
{ value: "We Die Young by Alice In Chains", data: "2506" },
{ value: "We Got the Beat by Go-Go's", data: "2507" },
{ value: "We Weren't Born to Follow by Bon Jovi", data: "2508" },
{ value: "We Will Rock You by Queen", data: "2509" },
{ value: "Weapon of Choice by Black Rebel Motorcycle Club", data: "2510" },
{ value: "Weight of the World by Evanescence", data: "2511" },
{ value: "Weightless by All Time Low", data: "2512" },
{ value: "Weird Science by Oingo Boingo", data: "2513" },
{ value: "Welcome Home by Coheed and Cambria", data: "2514" },
{ value: "Welcome to Paradise by Green Day", data: "2515" },
{ value: "Welcome to the Black Parade by My Chemical Romance", data: "2516" },
{ value: "Welcome to the Family by Avenged Sevenfold", data: "2517" },
{ value: "Welcome to the Neighborhood by Libyans", data: "2518" },
{ value: "Well Thought Out Twinkles by Silversun Pickups", data: "2519" },
{ value: "We're an American Band by Grand Funk Railroad", data: "2520" },
{ value: "We're Not Gonna Take It by Twisted Sister", data: "2521" },
{ value: "Werewolves of London by Warren Zevon", data: "2522" },
{ value: "What a Horrible Night to Have a Curse by The Black Dahlia Murder", data: "2523" },
{ value: "What About Love? by Heart", data: "2524" },
{ value: "What Do You Mean? by Justin Bieber", data: "2525" },
{ value: "What I Got by Sublime", data: "2526" },
{ value: "What I Like About You by The Romantics", data: "2527" },
{ value: "What If I Was Nothing by All That Remains", data: "2528" },
{ value: "What I've Done by Linkin Park", data: "2529" },
{ value: "What Makes You Beautiful by One Direction", data: "2530" },
{ value: "What The Hell by Avril Lavigne", data: "2531" },
{ value: "What Was I Thinkin' by Dierks Bentley", data: "2532" },
{ value: "What You Need by INXS", data: "2533" },
{ value: "What You Want by Evanescence", data: "2534" },
{ value: "What's It Feel Like to Be a Ghost? by Taking Back Sunday", data: "2535" },
{ value: "What's My Age Again? by Blink-182", data: "2536" },
{ value: "What's the Frequency, Kenneth? by R.E.M.", data: "2537" },
{ value: "What's Up? by 4 Non Blondes", data: "2538" },
{ value: "What's Your Favorite Dinosaur? by The Main Drag", data: "2539" },
{ value: "What's Your Name? by Lynyrd Skynyrd", data: "2540" },
{ value: "Whatsername by Green Day", data: "2541" },
{ value: "Wheels by Foo Fighters", data: "2542" },
{ value: "When I Come Around by Green Day", data: "2543" },
{ value: "When I Get Home You're So Dead by Mayday Parade", data: "2544" },
{ value: "When I'm Gone by 3 Doors Down", data: "2545" },
{ value: "When Legends Rise by Godsmack", data: "2546" },
{ value: "When The Curtain Falls by Greta Van Fleet", data: "2547" },
{ value: "When the Seasons Change by Five Finger Death Punch", data: "2548" },
{ value: "When You Were Young by The Killers", data: "2549" },
{ value: "When You're Young by 3 Doors Down", data: "2550" },
{ value: "Where Is My Mind? by Pixies", data: "2551" },
{ value: "Where the Streets Have No Name by U2", data: "2552" },
{ value: "Where'd You Go? by The Mighty Mighty Bosstones", data: "2553" },
{ value: "Where's Gary? by SpongeBob SquarePants", data: "2554" },
{ value: "Whip It by Devo", data: "2555" },
{ value: "White Falcon Fuzz by The Mother Hips", data: "2556" },
{ value: "White Rabbit by Jefferson Airplane", data: "2557" },
{ value: "White Unicorn by Wolfmother", data: "2558" },
{ value: "White Wedding (Part 1) by Billy Idol", data: "2559" },
{ value: "Who Am I (What's My Name)? by Snoop Dogg", data: "2560" },
{ value: "Who Are You by The Who", data: "2561" },
{ value: "Who Knew by P!nk", data: "2562" },
{ value: "Who Says You Can't Go Home by Bon Jovi", data: "2563" },
{ value: "Whole Lotta Rosie (Live) by AC/DC", data: "2564" },
{ value: "Who'll Stop the Rain by Creedence Clearwater Revival", data: "2565" },
{ value: "Who's Going Home with You Tonight? by Trapt", data: "2566" },
{ value: "Who's Your Daddy? by Toby Keith", data: "2567" },
{ value: "Who's Your Lover by Nightmare Air", data: "2568" },
{ value: "Why Can't We Be Friends by Smash Mouth", data: "2569" },
{ value: "Why Do You Love Me? by Garbage", data: "2570" },
{ value: "Why Go by Pearl Jam", data: "2571" },
{ value: "Wicked Garden by Stone Temple Pilots", data: "2572" },
{ value: "Wilson (Live) by Phish", data: "2573" },
{ value: "Wind Me Up by Ghost Hounds", data: "2574" },
{ value: "Wind Up by Foo Fighters", data: "2575" },
{ value: "Wings of a Butterfly by HIM", data: "2576" },
{ value: "Wish You Were Here by Incubus", data: "2577" },
{ value: "Witch Hunt (Part III of Fear) by Rush", data: "2578" },
{ value: "Without You by Mötley Crüe", data: "2579" },
{ value: "Wolf Like Me by TV on the Radio", data: "2580" },
{ value: "Woman by Wolfmother", data: "2581" },
{ value: "Women by Jamey Johnson", data: "2582" },
{ value: "Wonderwall by Oasis", data: "2583" },
{ value: "Won't Get Fooled Again by The Who", data: "2584" },
{ value: "Won't Go Home Without You by Maroon 5", data: "2585" },
{ value: "Word Forward by Foo Fighters", data: "2586" },
{ value: "Word Up! by KoRn", data: "2587" },
{ value: "Working for the Weekend by Loverboy", data: "2588" },
{ value: "Working Man by Rush", data: "2589" },
{ value: "Working Man (Vault Edition) by Rush", data: "2590" },
{ value: "World Go 'Round by No Doubt", data: "2591" },
{ value: "World Turning by Fleetwood Mac", data: "2592" },
{ value: "Would You Go With Me by Josh Turner", data: "2593" },
{ value: "Would You Still Be There by Of Mice & Men", data: "2594" },
{ value: "Would? by Alice In Chains", data: "2595" },
{ value: "Wrecking Machine by Permaband", data: "2596" },
{ value: "Writing on the Walls by Underoath", data: "2597" },
{ value: "Wrong 'Em Boyo by The Clash", data: "2598" },
{ value: "Wrong Side Of Heaven by Five Finger Death Punch", data: "2599" },
{ value: "Wrong Way by Sublime", data: "2600" },
{ value: "Yellow by Coldplay", data: "2601" },
{ value: "Yerbatero by Juanes", data: "2602" },
{ value: "Yomp by thenewno2", data: "2603" },
{ value: "Yoshimi Battles the Pink Robots Pt. 1 by The Flaming Lips", data: "2604" },
{ value: "You & Me by The Hunna", data: "2605" },
{ value: "You Can Do It by No Doubt", data: "2606" },
{ value: "You Don't Have To Be Old To Be Wise (Live) by Judas Priest", data: "2607" },
{ value: "You Don't Know What Love Is (You Just Do as You're Told) by The White Stripes", data: "2608" },
{ value: "You Give Love a Bad Name by Bon Jovi", data: "2609" },
{ value: "You Got It by Roy Orbison", data: "2610" },
{ value: "You Got Me Floatin' by The Jimi Hendrix Experience", data: "2611" },
{ value: "You Know You're Right by Nirvana", data: "2612" },
{ value: "You Make Loving Fun by Fleetwood Mac", data: "2613" },
{ value: "You Make Me Feel... by Cobra Starship (ft. Sabi)", data: "2614" },
{ value: "You Make My Dreams by Hall & Oates", data: "2615" },
{ value: "You May Be Right by Billy Joel", data: "2616" },
{ value: "You Only Live Once by Suicide Silence", data: "2617" },
{ value: "You Oughta Know by Alanis Morissette", data: "2618" },
{ value: "You Shook Me All Night Long (Live) by AC/DC", data: "2619" },
{ value: "You Should Be Dancing by Bee Gees", data: "2620" },
{ value: "Young by Hollywood Undead", data: "2621" },
{ value: "Young Americans by David Bowie", data: "2622" },
{ value: "Young Blood by Saint Raymond", data: "2623" },
{ value: "Young Man Blues (Live at Leeds) by The Who", data: "2624" },
{ value: "Youngblood by 5 Seconds of Summer", data: "2625" },
{ value: "Younger Bums by Big Dipper", data: "2626" },
{ value: "Your Betrayal by Bullet For My Valentine", data: "2627" },
{ value: "Your Decision by Alice In Chains", data: "2628" },
{ value: "Your Love by The Outfield", data: "2629" },
{ value: "Your Touch by The Black Keys", data: "2630" },
{ value: "You're All I've Got Tonight by The Cars", data: "2631" },
{ value: "You're Gonna Hear from Me by Night Ranger", data: "2632" },
{ value: "You're My Best Friend by Queen", data: "2633" },
{ value: "You're No Rock N' Roll Fun by Sleater-Kinney", data: "2634" },
{ value: "Youth of the Nation by P.O.D.", data: "2635" },
{ value: "You've Got Another Thing Comin' by Judas Priest", data: "2636" },
{ value: "YYZ by Rush", data: "2637" },
{ value: "Zero by Smashing Pumpkins", data: "2638" },
{ value: "Ziggy Stardust by David Bowie", data: "2639" },
{ value: "Zombie by The Cranberries", data: "2640" },
];

var vocalPaths = [
{ path: "4/s1, 4/s1", notes: "1:x, 2:x" },
{ path: "2/, 4/, 2/sk1", notes: "" },
{ path: "2/DOD-ESF, 4/sk1-ESF, 2/sk1", notes: "" },
{ path: "3/sk3, 3/sk1-ESF, 3/sk2-ESF", notes: "" },
{ path: "2/sk1ESP, 2/sk1ESF, 2/sk4", notes: "" },
{ path: "2/, 2/AB", notes: "" },
{ path: "2/p2Se, 3/p1Sx!", notes: "1P:e436, 2:x" },
{ path: "4/sk2, 2/, 2/sk1", notes: "" },
{ path: "AI", notes: "" },
{ path: "4/sk1, 3/", notes: "" },
{ path: "2/, 2/sk1, 2/, 2/", notes: "" },
{ path: "2/, 2/, 3/s1, 2/T", notes: "1:x?, 2:M, 3:x, 4:M" },
{ path: "2/BOD, 3/, 4/", notes: "" },
{ path: "2/, 2/sk1, 2/BOD", notes: "" },
{ path: "2/sk1, 3/AT", notes: "" },
{ path: "2/sk1, 2/, 2/sk1", notes: "" },
{ path: "2/PB, 2/sk2, 2/, 2/", notes: "" },
{ path: "3/, 3/T", notes: "1:x, 2:M!" },
{ path: "2/, 2/BOD, 2/! EwO", notes: "" },
{ path: "3/, 3/, 2/AT", notes: "" },
{ path: "2/, 4/, 2/BOD", notes: "" },
{ path: "2/p1w1Se, 3/p1w1Se, 2/!, 2/p3w1Se", notes: "1M:e176, 2:x, 3P:+200/996!, 4M:u264!" },
{ path: "3/, 2/s1, 3/", notes: "1:e452, 2:e592, 3:u340" },
{ path: "2/sk3-ESF, 3/sk1-ESF, 4/sk1-ESF", notes: "" },
{ path: "3/T, 3/, 4/Tp1Sx, 2/Sx, 4/S", notes: "1:x, 2:x, 3P:e516, 4P:u200p, 5M:+360" },
{ path: "2/s1, 2/p1w1S, 2/p2S", notes: "1:x, 2M:e420, 3P:u288" },
{ path: "4/, 2/S, 2/", notes: "1M:u216, 2:e732, 3:812" },
{ path: "3/T", notes: "1:x" },
{ path: "4/RS, 2/3p-ESF", notes: "" },
{ path: "2/, 2/sk2, 3/FRS, 2/BOD, 2/sk1-ESF", notes: "" },
{ path: "2/, 2/ESF, 2/5p-ESF-FRS, 2/", notes: "" },
{ path: "3/, 2/", notes: "1:M!!, 2:x" },
{ path: "2/, 4/", notes: "1:x, 2M:904" },
{ path: "3/", notes: "" },
{ path: "2/, 2/p1Se, 2/s2p2Sx", notes: "1M:e904!, 2:x, 3P:u140!!" },
{ path: "2/, 2/p1Se", notes: "1P:u780, 2:??" },
{ path: "AI", notes: "1:x, 2:x, 3:x" },
{ path: "2/BOD, 3/sk7ESP, 2/", notes: "" },
{ path: "2/, 2/FRS, 2/sk2, 2/sk4-ESF", notes: "" },
{ path: "2/sk3, 2/sk2-RS, 2/BOD-EwO", notes: "" },
{ path: "4/s1, (2/! OR 2/s6)", notes: "1:+680, 2:x" },
{ path: "2/Se, 3/s1p1", notes: "1M:e768!!, 2P:+146!!" },
{ path: "2/, 4/, 4/ESF", notes: "" },
{ path: "3/", notes: "" },
{ path: "2/sk2, 4/ EwO", notes: "" },
{ path: "4/BOD, 4/sk2", notes: "" },
{ path: "2/sk2, 3/sk1, 2/, 2/, 3/sk3", notes: "" },
{ path: "2/, 3/B, 3/", notes: "1:M!, 2P:e440, 3:x" },
{ path: "AI", notes: "1M:e348, 2P:e484, 3M:e608" },
{ path: "4/BOD, 2/BOD", notes: "" },
{ path: "2/S, 3/, 3/, 2/, 2/", notes: "1:x, 2:x, 3P:e708, 4M:+404, 5:M" },
{ path: "2/, 2/BOD, 2/sk2, 3/", notes: "" },
{ path: "3/D, 2/s3", notes: "1:e572/672!!, 2:u504!!/604!!" },
{ path: "2/sk2, 2/sk1, 2/sk1", notes: "" },
{ path: "2/Tp1, 2/, 3/", notes: "1:x, 2:+48!!, 3:x" },
{ path: "3/, 4/AT-sk1-ESF, 2/sk1", notes: "" },
{ path: "2/, 3/S, 2/p1S, 2/p1S, 2/", notes: "1:e800, 2:x, 3:u012, 4:-156, 5:x" },
{ path: "3/BOD, 4/, 2/BOD", notes: "" },
{ path: "2/, 2/sk2", notes: "" },
{ path: "2/s2, 2/s2, 3/s1, 2/T", notes: "" },
{ path: "4/sk1, 3/sk3-ESF", notes: "" },
{ path: "2/sk1, 2/AT, 2/", notes: "" },
{ path: "4/T", notes: "1M:e244!" },
{ path: "3/s1, 3/", notes: "1M:u188, 2:x" },
{ path: "2/sk1, 2/sk1, 4/", notes: "" },
{ path: "2/, 2/, 2/B", notes: "1:M, 2:M, 3:x" },
{ path: "2/Se, 3/s1, 3/s2", notes: "1P:u948!!, 2P:e232!, 3P:e552!!" },
{ path: "2/sk1-ESF, 2/BOD, 2/sk1-ESF, 2/BOD, 3/", notes: "" },
{ path: "2/s1, 2/S, 3/s1", notes: "1P:412, 2M:+2000, 3P:832" },
{ path: "2/1p-ESF, 2/1p-ESF, 3/1p-ESF", notes: "" },
{ path: "2/, 2/p2Sx, 2/p1Se, 2/p1S", notes: "1:+124!!, 2:M, 3M:+436, 4P:e828" },
{ path: "3/, 3/p1S", notes: "1:M!, 2P:u376!" },
{ path: "3/p1, 3/Se, 3/p1", notes: "1M:e208, 2M:e800!, 3:M!" },
{ path: "2/, 3/s2", notes: "1:x, 2:u300!" },
{ path: "4/, 4/T, 3/", notes: "1:M, 2:x, 3:e732" },
{ path: "2/!, 3/sk1, 3/sk1", notes: "" },
{ path: "2/sk4, 2/sk3, 2/sk2-ESF, 2/sk4-1p-ESF", notes: "" },
{ path: "2/s1, 3/, 2/s1", notes: "1M:e900, 2M:u744, 3M:e676" },
{ path: "4/", notes: "" },
{ path: "2/Sx!, 3/S, 2/, 2/", notes: "1:x, 2:x, 3:x, 4:x" },
{ path: "NO PART", notes: "" },
{ path: "2/, 2/!, 2/sk1", notes: "" },
{ path: "2/s1, 2/, 2/, 2/, 2/E, 2/", notes: "" },
{ path: "4/s2, 2/", notes: "1M:660!, 2M:+68!!" },
{ path: "2/S, 3/SE!, 2/T, 2/p3S", notes: "1M:e760, 2:x, 3M:236, 4M:e888" },
{ path: "4/p3S18, 2/", notes: "1:u296, 2:x" },
{ path: "2/, 2/, 2/s1, 2/s6", notes: "1:x, 2M:u428, 3:e716!!, 4:x" },
{ path: "3/D, 3/S, 2/S", notes: "1M:u940, 2:M!, 3P:u692" },
{ path: "2/ESP, 2/BOD, 2/sk1", notes: "" },
{ path: "3/sk1ESF, 3/, 2/sk16ESP", notes: "" },
{ path: "3/sk1, 3/sk1, 2/", notes: "" },
{ path: "2/BOD, 3/BOD", notes: "" },
{ path: "4/, 2/", notes: "" },
{ path: "3/sk2-ESF, 2/, 2/sk1-ESF, 2/sk1", notes: "" },
{ path: "3/, 2/AT", notes: "" },
{ path: "3/BOD, 3/BOD, 2/sk1, 2/", notes: "" },
{ path: "4/s1, 5/B", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/sk2-RS, 2/BOD, 2/, 2/, 2/RS, 2/", notes: "" },
{ path: "2/sk1, 2/sk1, 2/sk1, 2/, 3/, 2/", notes: "" },
{ path: "4 EwO", notes: "" },
{ path: "3/sk1, 4/ 3/sk1", notes: "" },
{ path: "3/s2, 3/s1, 2/", notes: "1P:+488!, 2:x, 3P:e912!" },
{ path: "4/p2S, 3/S, 2/s2p1Sx63", notes: "1:u312/e396, 2P:u660/u772, 3P:e960" },
{ path: "3/E!!, 3/B", notes: "1:x, 2:x" },
{ path: "4/, 4/sk1, 2/BOD", notes: "" },
{ path: "2/p2Sx, 2/Dx, 3/T", notes: "1:e294!, 2:e680!, 3:u684!" },
{ path: "2/, 2/!!!, 3/sk1", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/BOD, 3/sk2-ESF", notes: "" },
{ path: "2/sk1, 2/sk1-ESF, 4/sk2", notes: "" },
{ path: "3/B, 2/E4t, 3/, 2/", notes: "1P:e856, 2:x, 3P:e664, 4M:+300" },
{ path: "3/SxE, 2/s1, 2/", notes: "1:x, 2:u116, 3:u516" },
{ path: "5/sk1", notes: "" },
{ path: "2/Sx!, 2/p3S, 2/S, 2/p2w1S", notes: "1P:u796, 2P:e520, 3M:e900, 4P:e616" },
{ path: "4/sk1, 2/, 2/sk1", notes: "" },
{ path: "3/p1, 2/T, 2/", notes: "1:M, 2:x, 3:x" },
{ path: "2/sk3, 2/ESF, 3/", notes: "" },
{ path: "4/, 3/, 2/p1Sx", notes: "1M:e572, 2P:e956, 3S:S10, 3S2M:e676" },
{ path: "2/, 3/E3T, 3/s1", notes: "1P:e60!!, 2:x, 3:x" },
{ path: "2/B, 2/TS, 3/", notes: "1P:e516, 2M:u+344, 3:x" },
{ path: "2/ESP, 2/sk1, 2/", notes: "" },
{ path: "2/sk1, 2/, 2/", notes: "" },
{ path: "2/sk1, 2/, 4/", notes: "" },
{ path: "2/, 3/, 3/sk2, 4/", notes: "" },
{ path: "2/sk1-ESF, 2/sk4-ESF", notes: "" },
{ path: "2/, 2/s1, 2/, 2/", notes: "1:x, 2M:+272!!, 3:x, 4:x" },
{ path: "3/, 2/, 3/sk1", notes: "" },
{ path: "3/E½, 2/p1, 2/p1S, 2/, 2/B, 2x3/, 2/S, 2/, 3/p1", notes: "1:x, 2:F, 3M:u340, 4M:u448, 5M:e784, 6:x, 7M:u824, 8:x, 9P:u+300!, 10P:e+200!, 11P:u+600!" },
{ path: "3/, 2/T, 2/p1E!, 2/s1", notes: "1:e732, 2:u156, 3:x, 4:u920" },
{ path: "3/, 3/sk1, 3/sk1, 3/sk1", notes: "" },
{ path: "2/sk1, 2/, 2/BOD, 2/ESF", notes: "" },
{ path: "2/!, 3/sk1-1p-ESF, 2/FRS, 2/sk3-ES1F*", notes: "" },
{ path: "3/p1S, 2/p1S, 2/", notes: "1:x, 2:x, 3P:u988" },
{ path: "2/sk3-ESF, 2/sk3-ESF, EwO", notes: "" },
{ path: "2/Se, 2/, 3/s2", notes: "1:x, 2P:u408/u552, 3P:u008" },
{ path: "3/E2, 2/", notes: "" },
{ path: "4/p1w1Se, 2/Se", notes: "1M:-100/F, 2P:u848" },
{ path: "4/AS, 4/", notes: "" },
{ path: "3/w2Sx, 2/Sx, 2/p1Sx, 2/Se", notes: "1M:e448, 2:u812, 3:u144, 3M:e196" },
{ path: "3/sk2, 3/, EwO", notes: "" },
{ path: "2/BOD, 3/, 3/BOD", notes: "" },
{ path: "3/s1E*, 2/T, 2/Dx", notes: "1:x, 2P:e572, 3M:u252, *7.4sec after last phrase." },
{ path: "2/sk1-FRS, 4/sk1, 2/sk2", notes: "" },
{ path: "3/S", notes: "1:x" },
{ path: "3/FRS, 2/ [FRS", notes: "" },
{ path: "3/, 2/sk1, 3/sk1, 3/", notes: "" },
{ path: "3/BOD, 3/FRS, 2/, 3/sk2-ESF", notes: "" },
{ path: "3/sk1, 2/AT, 2/sk3", notes: "" },
{ path: "3/AS, 3/, 4/ESF, 2/", notes: "" },
{ path: "2/D, 3/", notes: "1P:u040!, 2:M!" },
{ path: "3/E3T, 5AI, 3/", notes: "1:x, 2P:u308!, 3M:+704, 4M:+412, 5:x, 6M:e168?, 7:F" },
{ path: "2/, 4/s1", notes: "1:x, 2M:u884!" },
{ path: "2/, 2/, 2/p3, 2/B, 2/", notes: "1:x, 2:x, 3:x, 4M:e800!, 5P:+96!" },
{ path: "5/E!, 2/*", notes: "1:x, 2:x, *OD chain" },
{ path: "2/p1, 3/", notes: "1M:e868, 2M:u448" },
{ path: "2/TSe, 2/T, 2/De, 2/T, 2/p2Se", notes: "1:e380, 2:u380, 3:u300, 4:x, 5:x" },
{ path: "2/p1, 2/", notes: "1:x, 2M:e576" },
{ path: "3/, 2/s1, 2/, 2/", notes: "1P:u344!, 2P:e242!, 3:F, 4:x" },
{ path: "4/, 2/, 2/, 3/FRS, 3/", notes: "" },
{ path: "4/, 3/", notes: "1M:e716 2:e180" },
{ path: "2/, 3/, 2/ESF, 2/sk3", notes: "" },
{ path: "2/ESF, 3/ESF-RS, 2/ESF, 2/3p-ES", notes: "" },
{ path: "2/DOD-ESF, 2/sk1-1p-ESF, 2/sk3-ESF", notes: "" },
{ path: "2/s1S, 4/, 2/, 2/", notes: "" },
{ path: "2/BOD, 3/, 2/AS", notes: "" },
{ path: "2/sk3-ESF, 2/AT-BOD, 2/sk5_ESF", notes: "" },
{ path: "3/BOD, 3/sk1", notes: "" },
{ path: "3/, 3/, 4/sk1-ESF, 2/DOD-ESF", notes: "" },
{ path: "4/s1, 3/De, 4/p1Se", notes: "1M:u508!, 2:M, 3:x" },
{ path: "3/, 2/", notes: "1:M, 2:x" },
{ path: "3/sk2-ESF, 2/sk3-ES1F", notes: "" },
{ path: "3/, 3/sk1", notes: "" },
{ path: "3/p2, 2/S, 2/S", notes: "1P:u592, 2:M, 3:x" },
{ path: "3/p1, 2/p1S, 2/p2", notes: "1M:e396, 2M:u040, 3M:e012" },
{ path: "3/SxE, 2/E, 2/B", notes: "1:x, 2:x, 3M:e824" },
{ path: "2/BOD, 2/sk1", notes: "" },
{ path: "2/2p-ESF, 2/sk1", notes: "" },
{ path: "2/BOD, 2/AT", notes: "" },
{ path: "AI", notes: "" },
{ path: "4/sk1, 2/p1-sk1-ESF, 2/sk4", notes: "" },
{ path: "2/, 2/s1, 2/, 2/, 3/s1", notes: "1M:u984!, 2P:e536, 3M:-128, 4:M, 5:x" },
{ path: "3/sk1, 2/, 3/sk2", notes: "" },
{ path: "2/B, 2/B, 2/, 2/s1, 3/", notes: "1P:e904!, 2P:u796!, 3P:+800, 4M:-4, 5:x" },
{ path: "2/s1, 2/", notes: "1:x, 2:x" },
{ path: "3/, 2/", notes: "1P:660!, 2:x" },
{ path: "3/s1, 3/, 4/E, 3/Se", notes: "1P:u428, 2P:u284, 4:M!" },
{ path: "3/sk4-ESF, 3/sk1-ESF, 3/BOD", notes: "" },
{ path: "3/s2, 2/, 4/", notes: "1:e944, 2:x, 3:+200" },
{ path: "3/, 3/Sx, 2/T, 2/p1", notes: "1:x, 2P:u780!, 3M:u496!, 4:x" },
{ path: "2/T, 2/p1, 2/p2E2, 2/p1", notes: "1:x, 2M:u508!, 3:x, 4M:e528!" },
{ path: "2/sk1, 3/sk1-ESF, 4/", notes: "" },
{ path: "3/, 3/, 4/AS", notes: "" },
{ path: "2/, 2/, 3/sk5-ESF", notes: "" },
{ path: "2/, 3/, 2/, 3/", notes: "1P:u680/864, 2:x, 3P:u864/e040, 4P:e000!!" },
{ path: "2/S, 2/S, 2/, 3/p2S", notes: "1M:e296, 2M:e412/e676!!, 3:x, 4:e+92" },
{ path: "2/Sx, 2/Tp1S, 2/", notes: "1P:u440, 2M:-320, 3:x" },
{ path: "3/p1Sx!, 2/", notes: "1M:u640, 2M:u880" },
{ path: "2/sk1-ESF, 3/sk3-ESF", notes: "" },
{ path: "2/, 2/, 4/, 2/, 2/", notes: "1P:+160, 2P:e308, 3:F!, 4M:+212!, 5M:+600!" },
{ path: "4/, 2/sk4, 3/", notes: "" },
{ path: "3/sk2ESF, 2/FRS, 4/", notes: "" },
{ path: "AI", notes: "1M:u232!, 2:x" },
{ path: "4/sk2, 3/", notes: "" },
{ path: "3/sk2, 2/sk1-ESF, 2/sk1-ESF, 2/, 4/sk1-ESF, 2/", notes: "" },
{ path: "2/DOD-ESF, 2/sk3-ESF", notes: "" },
{ path: "2/, 2/sk2, 2/sk1", notes: "" },
{ path: "2/S, 3/w2S", notes: "1M:e716, 2M:e780" },
{ path: "2/, 2/sk1, 2/BOD", notes: "" },
{ path: "2/E, 3/", notes: "" },
{ path: "2/, 2/, 2/, 2/, 4/", notes: "" },
{ path: "2/, 2/sk2-FRS, 3/sk1, 2/", notes: "" },
{ path: "3/, 4/", notes: "" },
{ path: "2/p2Se, 2/De, 3/, 2/", notes: "1M:u236!, 2M:e576!, 3P:e204, 4M:u496!" },
{ path: "3/BOD, 2/BOD, 2/DOD-ESF", notes: "" },
{ path: "3/s3, 3/E2t, 2/T", notes: "1:x, 2:x, 3:e900" },
{ path: "3/p3Sx5, 2/p1Sx15E, 3/Sx10", notes: "1P:u644/u028, 2P:e364, 3P:u616" },
{ path: "4/sk4-ESF", notes: "" },
{ path: "2/DOD-ESF, 2/", notes: "" },
{ path: "4/BOD, 2/sk6", notes: "" },
{ path: "2x3, 3/B, 2x2", notes: "1:x, 2:x, 3:x, 4P:e708, 5:x, 6:x" },
{ path: "3/, 3/-ESP, 2/", notes: "" },
{ path: "4/T, 2/p1, 2/p3", notes: "1:x, 2:x, 3:x" },
{ path: "4/, 4/", notes: "" },
{ path: "3/, 2/Tp1, 2/s1", notes: "1P:e300, 2:x, 3P:e500" },
{ path: "2/p2SE, 3/, 2/Se", notes: "1:x, 2:x, 3M:u088!" },
{ path: "4/sk1-ESF*, 2/sk1, 3/", notes: "" },
{ path: "2/, 2/sk1, 2/sk1", notes: "" },
{ path: "2/s1, 3/, 2/B, 2/s1", notes: "" },
{ path: "2/s2, 2/s3, 2/p3", notes: "1M:u956, 2M:e600, 3:x" },
{ path: "3/Tp1, 2/p2", notes: "1P:e240!!, 2P:e540" },
{ path: "4/, 2/!, 2/", notes: "" },
{ path: "2/!, 2/, 2/D", notes: "1:M, 2:M, 3M:u444" },
{ path: "2/, 3/AT sk/1-ESF, 2/", notes: "" },
{ path: "2/T, 2/T", notes: "1P:e256, 2P:u700" },
{ path: "3/s1, 2/s1, 2/p2", notes: "1:x, 2M:u364, 3P:u552!" },
{ path: "4/T", notes: "1?:e540" },
{ path: "4/", notes: "1:x" },
{ path: "2/, 2/B", notes: "1:x, 2:x" },
{ path: "2/, 2/S, 2/S, 2/, 3/S, 3/", notes: "1M:e856, 2P:e336, 3:M, 4P:e768, 5:M!, 6:x" },
{ path: "4/Se", notes: "1:x" },
{ path: "2/, 2/p1", notes: "1:x, 2M:e560" },
{ path: "3/s1, 2/s4", notes: "1P:+160!!, 2M:+4!!" },
{ path: "2/S, 2/B, 3/p1S", notes: "1:x, 2M:e716, 3:M" },
{ path: "T, 3/Tp1", notes: "1:x, 2:x" },
{ path: "3/E3T, 3/E, 4/, 4/s1", notes: "1:, 2:x, 3:x?, 4M:u260" },
{ path: "2/s1, 2/, 2/T, 2/s2", notes: "1M:u692, 2M:e232, 3M:u440, 4P:u968" },
{ path: "2/, 2/, 2/BOD, 2/, 2/BOD", notes: "" },
{ path: "4/AS, 3/", notes: "" },
{ path: "4/", notes: "" },
{ path: "2/, 2/, 3/s1", notes: "1M:u480!, 2M:e992/u096!, 3P:e660!" },
{ path: "3/S, 2/p2E, 2/", notes: "1M:u056!, 2:x, 3P:u248!" },
{ path: "5/s1", notes: "1:F" },
{ path: "2/SxE!, 2/, 2/, 2/w2Sx20", notes: "1:x, 2P:e620, 3:M, 4P:u440" },
{ path: "2/, 3/sk1", notes: "" },
{ path: "4/, 2/", notes: "1P:e428!, 2P:e772!" },
{ path: "2/, 2/sk1, 2/!", notes: "" },
{ path: "2/p1S, 4/", notes: "1?:e016/e024, 2:M" },
{ path: "2/, 2/AS, 3/", notes: "" },
{ path: "2/, 3/, 3/", notes: "1P:e524/492, 2P:u120, 3P:e+168" },
{ path: "2/B, 2/, 3/s1", notes: "1P:e860!, 2P:e832!!, 3P:u408!" },
{ path: "2/, 2/p1Sx25, 3/p2S", notes: "1:x, 2:u000/u960, 3M:e232" },
{ path: "4/sk1, 3/sk3", notes: "" },
{ path: "2/p2, 3/p5*", notes: "*Bobobo..." },
{ path: "2/sk1-ES, 2/sk4-ESF, 2/", notes: "" },
{ path: "2/Se, 2/p1Se (vs 2/p3S2), 2/p2, 2/p1S", notes: "1M:e792, 2P:e464, 3M:e692, 4P:u308" },
{ path: "3/p2S, 2/s1", notes: "" },
{ path: "4/sk1, 3/", notes: "" },
{ path: "2/s1, 2/Ts1, 2/T", notes: "1M:u288/388, 2M:e+480, 3M:+440/e144/332" },
{ path: "2/S, 2/B, 2/D", notes: "1P:e520, 2M:+100!, 3:x" },
{ path: "2/!, 2/", notes: "1:M, 2:M" },
{ path: "2/sk1, 2/", notes: "" },
{ path: "2/sk2-ESF, 2/1p-ESF, 2/sk4-ESF-FRS, 2/sk4-ESF [FRS", notes: "" },
{ path: "3/RS, 2/, 3/", notes: "" },
{ path: "2/, 3/", notes: "1:x, 2:x" },
{ path: "2/p1, 2/s1p2, 2/s2, 2/", notes: "1P:+500!!, 2P:+800!!, 3P:+500!, 4P:+1000!!" },
{ path: "2/, 4/, 2/BOD", notes: "" },
{ path: "2/, 2/AT-sk1-ESF, 2/", notes: "" },
{ path: "3/TS, 3/Tp1S", notes: "1M:u472!, 2M:e396" },
{ path: "3/s1, 2/B", notes: "" },
{ path: "3/D, 3/, 3/", notes: "1:x, 2M:u916!, 3:x" },
{ path: "3/sk4-ESF", notes: "" },
{ path: "4/, 2/, 2/sk1-ESF", notes: "" },
{ path: "4/ESF, 3/sk2-ESF", notes: "" },
{ path: "4/p2, 2/, 4/", notes: "1:x, 2M:e940, 3M:u248" },
{ path: "2/, 2/BOD, 4/sk1", notes: "" },
{ path: "2/, 2/B, 2/", notes: "1:x, 2:x, 3:x" },
{ path: "2/, 2/sk1, 4/sk2-AS, 2/sk1-ESF", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "2/, 2/E3t, 4/", notes: "1P:e708, 2:x, 3:x" },
{ path: "5/, 3/", notes: "1:x, 2M:e932!" },
{ path: "2/sk1, 2/, 2/sk1-ES1F", notes: "" },
{ path: "3/sk2-ESF, 2/sk2, 3/", notes: "" },
{ path: "3/S, 2/p3", notes: "1M:u496!" },
{ path: "3/BOD", notes: "" },
{ path: "2/ESF, 3/ESF, 3/DOD-ESF", notes: "" },
{ path: "2/sk1-ESF, 2/sk1-ESF, 2/sk1-ESF, 2/sk3-ESF", notes: "" },
{ path: "3/, 2/BOD, 2/!, 3/, 2/", notes: "" },
{ path: "2/, 4/p1", notes: "1M:e508!" },
{ path: "2/sk1, 3/sk5", notes: "" },
{ path: "2/sk1, 2/sk2-ESF, 3/DOD-ESF", notes: "" },
{ path: "3/sk1-ESF, 2-AS", notes: "" },
{ path: "2/, 2/sk1, 2/", notes: "" },
{ path: "4/BOD, 2/sk2", notes: "" },
{ path: "3/SE!, 2/s4", notes: "1:x, 2P:+3160!" },
{ path: "2/, 2/, 4/", notes: "1P:u148, 2P:e540, 3P:u524" },
{ path: "2/sk1-1p-ESF, 3/DOD-ESF", notes: "" },
{ path: "3/DOD-ESF, 4/", notes: "" },
{ path: "2/sk3ESF, 2/sk1ESF, 2/sk1ESF, 3/, 2/sk1ESF", notes: "" },
{ path: "2/, 2/p1S, 3/p1Sx15", notes: "1M:e564!, 2P:u104, 3P:e500/u960" },
{ path: "2/sk1, 2/sk1-ESF, 3/ESF", notes: "" },
{ path: "2/Se, 2/B, 2/", notes: "1:x, 2:x, 3P:e372" },
{ path: "2/, 2/, 3/s1", notes: "1:x, 2:x, 3:x" },
{ path: "2/p1, 2/B, 2/B", notes: "1:+48!!, 2:x, 3:x" },
{ path: "2/, 3/BOD", notes: "" },
{ path: "2/, 2/, 2/, 2/s1", notes: "1M:u820, 2M:u740, 3M:u284, 4M:236" },
{ path: "2/s2, 3/B", notes: "1M:+80!!, 2M:u148!" },
{ path: "2/sk2, 3/, 3/sk2-ESF, 2/sk3-ESF, 2/sk3-ESF", notes: "" },
{ path: "3/sk1, 2/, 3/", notes: "" },
{ path: "2/sk1, 2/, 3/, 2/", notes: "" },
{ path: "3/, 2/, 2/BOD", notes: "" },
{ path: "3/sk1, 4/", notes: "" },
{ path: "3/s3, 2/", notes: "1P:u432, 2P:u472" },
{ path: "4/sk1-ESF, 3/sk3-ESF", notes: "" },
{ path: "2/p1S, 2/p1S, 2/S", notes: "1P:u0160, 2P:e996/F?, 3P:-92?" },
{ path: "3/, 2/E, 3/", notes: "" },
{ path: "AI", notes: "1:x, 2:+72!!" },
{ path: "2/s4, 2/s1, 2/", notes: "1M:e484!, 2P:e900!!, 3:x" },
{ path: "AI", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "4/, 2/, 2/", notes: "1:x, 2P:u028, 3:x" },
{ path: "2/ 2/sk3 2/sk3-ESF", notes: "" },
{ path: "2/, 3/s2, 2/", notes: "1P:e370!, 2P:e470/+300p!, 3:x" },
{ path: "2/1p-ESF, 3/1p-ESF, 4/1p-ESF, 2/", notes: "" },
{ path: "3/Sx, 3/Se", notes: "1:u332!, 2:M" },
{ path: "3/, 2/ EwO", notes: "" },
{ path: "3/, 4/AS, 2/", notes: "" },
{ path: "3/s1, 2/s2, 2/", notes: "1:x, 2M:e784!!, 3:M" },
{ path: "2/, 2/p1s2Sx, 2/, 2/Dx15", notes: "1:x, 2P:e780, 3M:u032, 4P:e432/u+36" },
{ path: "4/sk1, 3/sk1", notes: "" },
{ path: "3/sk3-ESF, 3/1p-ES1F, 2/", notes: "" },
{ path: "3/, 2/p3S, 2/TS", notes: "1P:e260, 2P:u172, 3:x" },
{ path: "2/!, 2/s2, 2/!, 4/", notes: "1:x, 2M:e784!, 3P:e796!, 4:x" },
{ path: "3/, 3/, 2/s2", notes: "1P:u000/944, 2P:u944, 3M:+520/e392" },
{ path: "3/B, 2/, 2/T, 2/", notes: "1M:u844!, 2:x, 3P:u188, 4P:+300" },
{ path: "2/p2Sx, 3/Sx, 3/p2Sx", notes: "1:e732, 2:u468, 3:e644/e744p" },
{ path: "2/ESF, 2/ESF, 3/ESF", notes: "" },
{ path: "2/sk1, 2/, 2/", notes: "" },
{ path: "4/s1, 3/T", notes: "1P:e696, 2P:e468" },
{ path: "AI", notes: "" },
{ path: "2/p1w2Sx!, 2/p1w2Sx!, 2/p2Sx, 2/p1w2Sx", notes: "1:M, 2M:u540, 3M:e076, 4M:u782" },
{ path: "2/s2, 3/S, 2/TS", notes: "1M:e600!, 2:x, 3:x" },
{ path: "3/, 2/sk2-ESF", notes: "" },
{ path: "AI, AI, 2/s1, AI", notes: "1M:e172, 2P:u684/780, 3M:e-400, 4M:u892" },
{ path: "2/, 2/p1Se, 3/, 3/Se", notes: "1P:e232?, 2M:+320!, 3P:u+212?, 4:M!" },
{ path: "2/, 2/, 3/", notes: "" },
{ path: "4/s2, 2/", notes: "1:+260!!, 2:x" },
{ path: "2/, 3/sk1, 3/ EwO", notes: "" },
{ path: "2/, 3/sk1, 2/, 2/", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "2/p4S, 2/p3Sx, 2/p3S, 2/p8", notes: "1:x, 2:x, 3:x, 4M:u024" },
{ path: "4/, 3/, 2/B", notes: "1:u340, 2:M!, 3:x" },
{ path: "4/p1, 3/", notes: "1P:u216!, 2:+28" },
{ path: "2/!, 3/p2, 4/", notes: "1P:140/200!!, 2P:e316!" },
{ path: "4/", notes: "1:M" },
{ path: "3/p1S, 2/, 3/E, 2/p1S, 2/S, 2/D", notes: "1:e284, 2:?, 3:?, 4:?, 5:?, 6:?" },
{ path: "2/, 2/", notes: "" },
{ path: "3/, 4/, 2/, 3/", notes: "" },
{ path: "2/S, 3/, 3/TSe, 3/s1", notes: "1:x, 2P:e728, 3M:u-84, 4P:u320" },
{ path: "2/p1S, 3/p2S, 2/p5S, 2/p1S", notes: "1M:e552, 2:x, 3M:u376, 4M:e012" },
{ path: "3/s1, 2/p1Se, 2/", notes: "1:x, 2:F, 3:F" },
{ path: "2/p1Se, 2/!, 2/, 2/p2, 2/p1Se, 3/Se", notes: "1P:e484, 2:x, 3:M!, 4P:u096, 5P:e096, 6P:e980" },
{ path: "2/s3, 2/, 3/, 3/", notes: "1M:u364, 2M:+304, 3P:e808, 4:x" },
{ path: "4/, 3/!", notes: "1:F, 2P:u996!" },
{ path: "3/D, 2/D, 3/p2S", notes: "1:x, 2M:e388, 3M:720" },
{ path: "2/sk1, 2/, 2/, 2/sk2", notes: "" },
{ path: "4/, 3/, 3/BOD", notes: "" },
{ path: "2/, 2/p1S, 2/s1 vs s2", notes: "1M:e528!, 2:F!, 3P?:e800/948!!" },
{ path: "2/B", notes: "1:x" },
{ path: "3/, 2/sk1, 2/, 2/sk1", notes: "" },
{ path: "3/, 2/B, 2/T", notes: "1P:4, 2P:u544, 3:x" },
{ path: "2/Ts1, 2/s1, 3/,", notes: "1P:e504, 2P:e940, 3:x" },
{ path: "4/s2, 2/B, 2/s1", notes: "1P:e572, 2P:u400, 3:x" },
{ path: "AI, EwO", notes: "" },
{ path: "4/, 3/AT, 3/", notes: "" },
{ path: "2/sk2-ESF, 2/", notes: "" },
{ path: "3/s2", notes: "1M:u728" },
{ path: "2/AB-sk2, 2/sk1-1p-ES, 2/1p-ES1", notes: "" },
{ path: "2/, 2/, 2/S, 3/, 2/", notes: "1P:e696, 2P:e292, 3P:u944, 4:x, 5M:-464" },
{ path: "3/sk1, 2/sk4, 2sk4-ESF", notes: "" },
{ path: "2/sk2-ESF, 2/AT-sk1-ESF, 2/ESF", notes: "" },
{ path: "3/, 2/, 3/s4, 2/w2Sx", notes: "1M:e760, 2P:+24!!, 3M:+2104!!, 4M:u-104" },
{ path: "3/BOD", notes: "" },
{ path: "2/S, 2/E!, 2/S, 2/S, 2/p3S", notes: "1:e788, 2:x, 3M:+156, 4:-664, 5:x" },
{ path: "2/B, 2/", notes: "1:x, 2:x" },
{ path: "3/sk1, 2/sk2, 2/FRS, 2/sk2", notes: "" },
{ path: "4/E, 2/TE, 2/!", notes: "1:x, 2:x, 3:x" },
{ path: "2/s1Sx, 2/E!, 3/, 2/", notes: "1P:u768!, 2:x, 3M:e280!, 4:x" },
{ path: "2/BOD, 2/BOD, 2/", notes: "" },
{ path: "2/sk1, 3/, 2/sk3", notes: "" },
{ path: "3/BOD", notes: "" },
{ path: "3/, 4/sk1, EwO", notes: "" },
{ path: "AI", notes: "1:x, 2M:u376!, 3:x" },
{ path: "2/sk1, 2/sk1", notes: "" },
{ path: "3/, 4/", notes: "" },
{ path: "2/, 2/, 3/", notes: "1P:e828, 2:M, 3M:-196!" },
{ path: "AI", notes: "1M:e232" },
{ path: "3/, 2/sk1-ESP, 2/DOD-ES1F", notes: "" },
{ path: "3/, 2/!", notes: "1:x, 2M:e964!!" },
{ path: "2/s1, 3/, 2/", notes: "" },
{ path: "2/, 2/B, 3/", notes: "" },
{ path: "3/sk1, 2/, 2/, 2/", notes: "" },
{ path: "2/, 4/B", notes: "1M:u240, 2:x" },
{ path: "2/, 3/s1, 3/T", notes: "1M:u896, 2:M!, 3:x" },
{ path: "2/w1Sx, 2/p1S, 2/", notes: "1M:e640!, 2P:u416, 3M:e+424!" },
{ path: "AI", notes: "" },
{ path: "2/sk1, 2/, 2/, 2/", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/sk1-ESF, 4/AT-AS", notes: "" },
{ path: "2/, 3/, 4/", notes: "1:x, 2M:e148, 3M:u652" },
{ path: "2/, 2/BOD, 2/BOD", notes: "" },
{ path: "2/sk1-2p-ESF, 3/ [1st act difficult ESF]", notes: "" },
{ path: "2/, 2/, 2/B", notes: "1:x, 2P:+40!!, 3:F" },
{ path: "2/, 2/B, 2/B, 2/s1, 3/s1", notes: "1:x, 2M:u032!, 3M:e108!, 4:x, 5M:u292!" },
{ path: "2/, 2/!, 3/", notes: "" },
{ path: "2/s2, 3/", notes: "1:x, 2:x" },
{ path: "3/Sx, 2/B, 4/", notes: "1:x, 2:M, 3:x" },
{ path: "2/, 3/, 4/s2", notes: "1P:e800!, 2M:+516, 3:x" },
{ path: "All Immediate (AI)", notes: "" },
{ path: "2/S, 3/p2S, 2/S", notes: "1M:e736!, 2M:u420, 3M:u808" },
{ path: "2/p1S, 3/p2S", notes: "" },
{ path: "2/, 2/s1, 2/, 2/s1, 3/", notes: "1M:u324, 2M:u724/BT, 3M:u064, 4P:u244/BT, 5P:u+520" },
{ path: "3/, 2/ESF, 2/sk2-E", notes: "" },
{ path: "AI", notes: "" },
{ path: "3/ESF, 2/sk1-ESF, 2/, 3/sk3-ES, 2/ESF, 2/sk9-ESF", notes: "" },
{ path: "2/ , 4/, 2/sk1 EWO", notes: "" },
{ path: "4/sk1, 4/BOD, 3/, 2/sk1", notes: "" },
{ path: "AI", notes: "1:+156!!" },
{ path: "2/!, 2/B, 2/, 2/B, 2/", notes: "1M:u880!, 2M:u728, 3M:e564!, 4M:e512, 5:+150" },
{ path: "2/s2, AI", notes: "1P:e380/472, 2P:u968/980, 3M:e388, 4P:e576!!, 5M:u560, 6P:u424, 7P:e516!" },
{ path: "2/, 2/s1, 2/, 2/TS", notes: "1:x, 2:x, 3:x, 4M:??" },
{ path: "AI", notes: "1:F!" },
{ path: "2/s1, 2/, 2/s1, 2/T, 2/s1, 2/", notes: "1M:u552, 2:x, 3M:u256, 4:x, 5P:u240/260, 6P:u556" },
{ path: "3/, 4/T", notes: "1:+?!!, 2:x" },
{ path: "2/sk2 2/sk3 2/", notes: "" },
{ path: "3/sk5, 2/sk10-ESF", notes: "" },
{ path: "3/, 3/, 2/", notes: "1:x, 2:x, 3:x" },
{ path: "4/sk7-FRS, 2/! [FRS", notes: "" },
{ path: "2/, 2/p2, 3/", notes: "1M:e768!, 2:M!, 3M:u248!" },
{ path: "2/, 2/BOD, 4/", notes: "" },
{ path: "3/DOD-ESF, 2/BOD, 2/sk1", notes: "" },
{ path: "3/sk1ESF, 2/sk1", notes: "" },
{ path: "3/, 4/FRS, 2/sk5-ESF", notes: "" },
{ path: "2/, 2/sk2", notes: "" },
{ path: "3/s2, 3/", notes: "1:F!, 2P:e928" },
{ path: "2/FRS, 2/BOD", notes: "" },
{ path: "2/, 4/", notes: "1M:u096!, 2P:u232" },
{ path: "4/sk2, 2/sk1, 2/ESP", notes: "" },
{ path: "3/sk1-ESF, 3/sk2-ESF", notes: "" },
{ path: "2/S, 2/Sx70, 2/S, 3/S", notes: "1P:u200, 2P:e300/e708, 3M:+4, 4M:+12" },
{ path: "3/Ts1, 3/", notes: "1P:e708/e912, 2:??" },
{ path: "2/p1S, 2/p1S, 3/p3S", notes: "1:x, 2:x, 3:x" },
{ path: "3/, 3/B, 3/ ", notes: "1M:e884!, 2:M!, 3M:u712" },
{ path: "2/sk1 3/", notes: "" },
{ path: "4/S, 3/p1S", notes: "1P:e776!, 2:F" },
{ path: "2/, 2/s1, 2/s2", notes: "1:x, 2:x, 3M:e520" },
{ path: "4/AT-sk1, 2/sk1", notes: "" },
{ path: "2/s1, 2/, 2/B, 2/", notes: "1P:340!, 2M:+304!, 3P:+244!!" },
{ path: "3/, 2/s2, 2/, 3/", notes: "" },
{ path: "4/s1, 4/", notes: "1:M!, 2:x" },
{ path: "2/sk1, 2/sk2, 2/sk1", notes: "" },
{ path: "3/p1, 3/p1, 2/, 2/B", notes: "1M:u700, 2M:u724, 3M:u092, 4P:e604" },
{ path: "2x3, 3/, 2/p3", notes: "1M:e968, 2:x, 3M:e024, 4:x, 5:x" },
{ path: "4/p2Sx!, 2/s1", notes: "1P:u840/+360, 2M:u+68" },
{ path: "2/sk3-ESF, 2/DOD-ESF, 3/sk2 EwO", notes: "" },
{ path: "2/p1S, 2/p1S, 2/p3S", notes: "1M:u328!, 2M:e680!, 3:x" },
{ path: "2/DOD-ES1F, 3/DOD-ES1F, Ew3O", notes: "" },
{ path: "2/, 2/BOD, 2/, 2/", notes: "" },
{ path: "4/AT, 4/", notes: "" },
{ path: "All Immediate (AI)", notes: "" },
{ path: "2/s3, 2/T, 2/s1", notes: "1M:u016!, 2M:e824!, 3M:e548?" },
{ path: "2/p2S, 3/, 2/p1w5S", notes: "1M:e632, 2:x, 3P:u820" },
{ path: "2/BOD, 2/, 2/sk1", notes: "" },
{ path: "2/, 2/BOD, 2/", notes: "" },
{ path: "3/sk1-ESF", notes: "" },
{ path: "2/, 2/BOD, 2/sk1-ESF", notes: "" },
{ path: "2/BOD, 2/sk1, 2/sk1-ES", notes: "" },
{ path: "3/s2, 3/", notes: "1M:u272, 2:x" },
{ path: "2/BOD, 2/sk1, 2/", notes: "" },
{ path: "3/, 2/, 2/p2", notes: "1:x, 2:x 3:+192!!" },
{ path: "3/, 2/, 2/!!, 4/", notes: "1P:e828, 2P:e842!, 3M:u596, 4M:u980" },
{ path: "4/, 2/", notes: "" },
{ path: "2/De, 2/s2", notes: "1M:u608, 2P:e548!" },
{ path: "3/sk1-ESF, 2/, 2/", notes: "" },
{ path: "2/s1S, 2/S, 2/s2Se", notes: "1M:e224!, 2:x, 3:x" },
{ path: "4/, 2/s1, 2/p2Se", notes: "1M:e808!, 2M:u848!, 3M:e984!" },
{ path: "4/, 2/B", notes: "1:M, 2M:e628!" },
{ path: "2/s1, 4/, 2/s2, 2/s1", notes: "1P:+480!!, 2:x, 3P:e892, 4:x" },
{ path: "3/p2SxE!, 2/, 4/", notes: "1:x, 2M:e744!, 3P:u020" },
{ path: "2/, 2/!, 2/sk1-1p-ESF, 3/sk1", notes: "" },
{ path: "2/s1", notes: "1:+400!!?" },
{ path: "2/B, 3/, 3/", notes: "1:x, 2M:u292!, 3M:u636" },
{ path: "2/, 2/s1, 2/s2, 2/s1", notes: "" },
{ path: "3/s1, 3/, 2/", notes: "" },
{ path: "2/sk1, 2/sk1", notes: "" },
{ path: "2/FRS, 3/sk2, 2/FRS, 2/sk2, 2/, 2/, 2/, 3/sk1", notes: "" },
{ path: "2/p1, 2/T", notes: "1:e132!!, 2M:e820!" },
{ path: "3/, 3/, 2/p4Se", notes: "1P:e792, 2P:u128, 3:x" },
{ path: "2/AT-sk1, 2/!", notes: "" },
{ path: "2/s1, 2/s1, 2/s1", notes: "1P:e188, 2P:e252/344, 3P:+32" },
{ path: "4/T, 4/T, 2/s1", notes: "1P:u364!, 2M:e300!, 3M:e688!" },
{ path: "3/sk1, 2/", notes: "" },
{ path: "2/Dx, 3/p1", notes: "1P:e956, 2P:e688" },
{ path: "3/sk4-ESF, 2/sk1-1p-ESF, 2/sk1-1p-ES1F", notes: "" },
{ path: "4/BOD, 2/", notes: "" },
{ path: "4/ EwO", notes: "" },
{ path: "2/S, 2/p2, 3/, 3/S", notes: "1M:u700, 2:M, 3P:e120!, 4M:e976" },
{ path: "3/s2, 2/s1, 2/, 2/s2S", notes: "" },
{ path: "2/Dx, 3/Sx", notes: "1M:u104, 2:x" },
{ path: "2/Se, 2/p1Se, 2/p1", notes: "1P:e664, 2:M, 3:x" },
{ path: "2/!, 2/, 4/, 2/", notes: "1M:u592, 2P:e444, 3P:e984, 4:x" },
{ path: "2/, 4/s1, 2/B", notes: "1M:e672, 2:x, 3:M" },
{ path: "AI", notes: "" },
{ path: "3/, 3/B, 3/S, 2/B, 2/p2", notes: "1P:e764, 2:600, 3:M, 4:x, 5:x" },
{ path: "4/, 2/TE4t, 2/s1, 3/", notes: "1:M!, 2:x, 3P:u096, 4:x" },
{ path: "4/, 4/BOD, 3/BOD", notes: "" },
{ path: "3/D, 4/T, 3/", notes: "1M:e752/844, 2M:e288, 3P:e720" },
{ path: "2/Se, 3/p1S, 2/!", notes: "1:M, 2:u272, 3:x" },
{ path: "2/BOD, 3/BOD, 3/sk2", notes: "" },
{ path: "3/sk1-ESF, 2/BOD, 2/sk1", notes: "" },
{ path: "2/p2Sx, 2/B, 3/", notes: "1M:u196, 2P:e648, 3:x" },
{ path: "3/, 2/s3, 2/s2", notes: "1:x, 2P:e180!, 3P:e372!" },
{ path: "2/, 4/, 2/sk2-ESF", notes: "" },
{ path: "3/, 2/BOD, 2/sk1", notes: "" },
{ path: "2/D, 2/, 2/S, 4/", notes: "1M:u428, 2:x, 3M?:e332, 4:x" },
{ path: "2/sk1, 3/, 2/sk1", notes: "" },
{ path: "2/, 2/sk1-FRS, 2/", notes: "" },
{ path: "4/, 2/, 4/", notes: "" },
{ path: "3/, 2/s1p4S", notes: "" },
{ path: "3/, 2/s2, 2/", notes: "1:x, 2M:e968, 3:F" },
{ path: "4/p1w2S", notes: "1M:u260" },
{ path: "3/sk1-ESF, 2/sk1-ESF, 2/sk2-ESF, 2/", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/s2p1Sx30, 3/B", notes: "1P:e820!/M!, 2P:+150!!" },
{ path: "2/, 2/, 2/sk1-ESF, 2/sk2", notes: "" },
{ path: "2/p1Se, 2/Se, 2/, 2/Se", notes: "1:M, 2M:e996, 3M:e512" },
{ path: "2/ ,2/, 3/ESF, 2sk1", notes: "" },
{ path: "3/BOD, 4/ES", notes: "" },
{ path: "2/S, 2/S, 2/T", notes: "" },
{ path: "4/p1, 3/B, 3/s1", notes: "1:x, 2P:e916!, 3M:e292" },
{ path: "2/, 2/, 2/BOD EwO", notes: "" },
{ path: "3/, 2/sk2-ESF, 3/", notes: "" },
{ path: "3/, 3/, 3/s1, 2/s1S, 2/", notes: "1P:u116, 2P:u560, 3P:e288/e512, 4:x, 5:x" },
{ path: "2/BOD", notes: "" },
{ path: "2/BOD, 2/, 2/sk2-ESF, 2/sk3-ESF", notes: "" },
{ path: "2/p1Sx, 2/, 2/!", notes: "1P:u552!, 3P:u748!!" },
{ path: "4/, 3/BOD", notes: "" },
{ path: "2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "4/AT, 3/sk2-ESF", notes: "" },
{ path: "3/sk2, 4/AT", notes: "" },
{ path: "2/, 2/FRS, 2/BOD, 2/AB, 2/sk7", notes: "" },
{ path: "3/sk2-ESF, 2/sk2, 2/ESF", notes: "" },
{ path: "3/, 2/TTw2S, 3/, 2/E2, 2/", notes: "1M:u716, 2:e788, 3:e488, 4:x, 5:x" },
{ path: "2/DOD-sk1-ESP, 2/sk2, 2/sk1-ESF", notes: "" },
{ path: "2/sk1, 2/sk1, 2/sk1, 2/", notes: "" },
{ path: "4/FRS, 2/sk1", notes: "" },
{ path: "(2/!E!, 2/) OR (3/p2w2Sx), 2/B, 2/p3", notes: "1:x, 2M:e988!, 3:M!" },
{ path: "2/p2w2Se, 2/w2Se, 2/Sx", notes: "1P:e288/428, 2M:+300, 3P:u-248" },
{ path: "2/BOD, 3/sk3ESF", notes: "" },
{ path: "2/sk2, 3/sk2, 2/sk1", notes: "" },
{ path: "2/sk1, 3/sk3-ESF, 2/sk1-ESF", notes: "" },
{ path: "4/, 3/", notes: "1M:u276!, 2M:u508" },
{ path: "2/BOD, 2/sk1, 2/", notes: "" },
{ path: "2/sk1-ESP, 2/BOD, 2/sk2-ESF, 2/sk2-ESF", notes: "" },
{ path: "3/, 4/, 3/", notes: "" },
{ path: "2/sk1-ESF, 3/, 3/sk2-ESF", notes: "" },
{ path: "2/S, 4/S", notes: "1:x, 2M:e668!" },
{ path: "2/, 3/D, 4/", notes: "1:+56!!, 2M:e372, 3M:u784" },
{ path: "2/, 4/sk2ESF", notes: "" },
{ path: "2/sk3-1p-ESF, 2/, 2/sk1-ESF, 2/", notes: "" },
{ path: "3/p3, 2/", notes: "1P:e380, 2:x" },
{ path: "2/p3S, 2/, 2/p1S, 3/", notes: "1M:e132!, 2:x, 3P:u964!, 4:M!" },
{ path: "AI", notes: "" },
{ path: "4/", notes: "1M?:u488" },
{ path: "2/, 2/, 2/sk1, 2/, 2/", notes: "" },
{ path: "2/B, 2/, 3/s2", notes: "1:x, 2:x, 3:+16!!" },
{ path: "2/, 4/s1", notes: "1M:e028!!, 2M:+96/-400AT" },
{ path: "2/p1, 3/p1Sx, 2/p2", notes: "1:x, 2:x, 3M:e792" },
{ path: "3/B, (2/B, 3/B) OR (PK, 2/, 2/B)", notes: "1P:e912, 2:u-100, 3:x OR 1P:e860, 2:+24, 3:M" },
{ path: "3/sk1-ESF, 2/", notes: "" },
{ path: "3/, 2/, 2/sk1, 3/sk5", notes: "" },
{ path: "2/, 3/, 2/BOD, 2/", notes: "" },
{ path: "3/sk4-ESF, 3/sk2-ESF, 2/sk1, 2/sk1", notes: "" },
{ path: "2/, 3/, 2/", notes: "1:x, 2P:e560!, 3:x" },
{ path: "3/, 2/sk1, EwO", notes: "" },
{ path: "2/, 2/B, 4/", notes: "1P:u268, 2P:e612, 3P:u664" },
{ path: "2/B, 3/", notes: "1:M!, 2:M!" },
{ path: "2/D, 3/Dw3Sx!", notes: "1P:u432!!, 2:x" },
{ path: "2/, 3/, 2/w1D70", notes: "1:x, 2P:u403, 3P:e632/F" },
{ path: "2/B, 3/B", notes: "1M:e368, 2P:e436!!" },
{ path: "2/, 2/s1, 2/, 2/D, 2/, 3/", notes: "1:u500, 2:e192, 3M:u420, 4:x, 5:e508" },
{ path: "2/, 3/B, 2/", notes: "1P:e056, 2:M, 3:x" },
{ path: "3/, 2/", notes: "1:x, 2:x" },
{ path: "2/D, 2/p2S, 3/, 2/", notes: "1M:u540, 2M:u040, 3M:u892, 4:x" },
{ path: "4/S, 2/p3Sx??", notes: "" },
{ path: "2/s3, AI", notes: "1:M!, 2:x, 3:+140!!, 4P:172" },
{ path: "2/sk1, 2/sk1, 2/sk2-ESF", notes: "" },
{ path: "3/, 3/sk1, 4/", notes: "" },
{ path: "4/ESF, 4/", notes: "" },
{ path: "4/, 4/", notes: "" },
{ path: "2/, 4/s1, 2/s3", notes: "" },
{ path: "3/, 4/E, 2/", notes: "1:x, 2:x, 3P:+64" },
{ path: "2/p2Sx, 2/, 2/p2Sx", notes: "1P:e524, 2:x, 3P:e052" },
{ path: "2/T, 2/, 2/s1, 3/", notes: "1:x, 2:F!, 3P:e452, 4P:u004" },
{ path: "2/p1Se, 2/Se, 2/p2, 3/p3Se", notes: "1M:u244, 2M:u644, 3:x, 4M:e480" },
{ path: "2/sk2-ESF, 2/FRS, 3/", notes: "" },
{ path: "2/s3, 2/", notes: "1:216!!" },
{ path: "2/sk1, 3/sk1, 3/sk2", notes: "" },
{ path: "2/sk2-ESF, 2/DOD-ESF, 2/DOD-ESF", notes: "" },
{ path: "3/B, 3/B", notes: "1:+32!, 2:x" },
{ path: "2/DOD-FRS, 3/, 4/sk1, 4/", notes: "" },
{ path: "3/p2, 2/p2*", notes: "1P:u572!, 2P:e+732, *Stop singing for broken phrase." },
{ path: "2/, 2/E1t, 4/T, 3/", notes: "" },
{ path: "3/sk2, 2/, 2/2p-ESF OR 2/2p-ESF, 2/, 2/, 2/2p-ESF", notes: "" },
{ path: "3/, 2/Sx, 2/Sx, 2/Sx", notes: "1M:u304, 2M:u216!, 3M:u868!, 4M:u460!" },
{ path: "5/, 3/s1", notes: "1M:e432/568, 2P:e828/976" },
{ path: "3/, 2/sk1", notes: "" },
{ path: "2/, 2/p1, 2/SE½, 2/B", notes: "1P:e744, 2:x, 3:x, 4P:u576" },
{ path: "3/p1S, 3/p1S, 2/", notes: "1M:e832!, 2:x, 3:x" },
{ path: "3/sk1-ESF, 2-1p-ESF, 2/sk1-2p-ESF, 2/sk2-1p-ESF", notes: "" },
{ path: "4/, 3/sk2-ESF, 3/", notes: "" },
{ path: "2/p1Se, 3/T, 3/", notes: "1M:e424!, 2:x, 3:x" },
{ path: "3/sk2-ESF, 2/sk1", notes: "" },
{ path: "4/TSx", notes: "1:F!" },
{ path: "3/sk1, 2/sk2", notes: "" },
{ path: "4/T, 2/S, 2/", notes: "1:x, 2M:u624, 3:x" },
{ path: "2/E2t, 2/, 3/B", notes: "1:x, 2M:u924, 3M:u168" },
{ path: "3/, 2/, 2/B", notes: "1:x, 2M?:u464, 3:x" },
{ path: "2/s2, 2/, 4/p2Sx, 2/s1", notes: "1M:e748!!, 2P:+84!!, 3M:e700, 4P:+512!!" },
{ path: "2/p2E*, 2/S, 2/p1, 2/T, 2/p2S", notes: "1E:*8s past phrase line, 2P:e204, 3P:e216, 4M:772/e868/u064" },
{ path: "3/sk1, 3/sk2", notes: "" },
{ path: "4/FRS, 2/BOD, 2/", notes: "" },
{ path: "2/p2, 2/TSx, 3/p1, 2/p1", notes: "1:F!, 2:F!, 3:x, 4M:u232!!" },
{ path: "2/, 3/", notes: "1:x, 2P:e348" },
{ path: "4/s2, 2/w2SxE!, 2/p1Sx, 2/p3", notes: "1:u412/612, 2:x, 3:+280/+720, 4:x" },
{ path: "2/s1, 2/, 2/s1", notes: "1:x, 2:x, 3P:u056" },
{ path: "3/p1Sx!, 3/", notes: "1M:u488, 2P:e316" },
{ path: "2/sk1, 2/ESP, 2/sk3ESF", notes: "" },
{ path: "3/s1, 4/s1", notes: "1M:e916, 2P:u092/u236" },
{ path: "3/, 2/", notes: "1:F!, 2:F!" },
{ path: "3/Sx50, 2/E1, 2/p1, 2/B", notes: "1P:e044/e740, 2:x, 3:M?" },
{ path: "3/, 2/BOD", notes: "" },
{ path: "3/DOD-ESF, 2/sk1-1p-ESF, 2/sk1-ESF", notes: "" },
{ path: "3/BOD, 2/sk1-FRS, 2/, 2/sk1-ESF [FRS when words hit left side of OD bar]", notes: "" },
{ path: "2/E¼, 3/E, 3/, 3/s1", notes: "1:x, 2:x, 3:x, 4:x" },
{ path: "3/sk2, 2/BOD, 4/sk1", notes: "" },
{ path: "3/sk4 2/ 2/sk1-ESF 3/sk3 2/ 3/sk1-ESF 2/", notes: "" },
{ path: "3/p1, 2/B, 2/B", notes: "1:x, 2:x, 3:x" },
{ path: "3/, 4/AT", notes: "" },
{ path: "2/p1Se, 2/T, 2/p1", notes: "1M:e604, 2:x, 3P:e652!!" },
{ path: "2/, 2/Se, 2/Se, 2/B", notes: "1M:100, 2P:e+740, 3M:-524|316, 4:x" },
{ path: "2/sk3-FRS, 3/sk3-ESF, 2/sk1-1p-ESF", notes: "" },
{ path: "2/, 2/BOD, 2/BOD, 2/", notes: "" },
{ path: "2/s3, 2/s3S, 2/s3p1Sx", notes: "" },
{ path: "2/SeE!, 3/Se", notes: "1:x, 2:x" },
{ path: "3/sk1, 2/AT, 2/", notes: "" },
{ path: "3/, 4/", notes: "" },
{ path: "4/2p-ESF, 2/sk1-1p-ESF, EwO", notes: "" },
{ path: "2/S, 2/Sx, 3/S", notes: "1P:e204!!, 2M:+824, 3M:u-56" },
{ path: "3/p1", notes: "1M:e044!!" },
{ path: "2/s2, 2/, 2/s1", notes: "1:u336/548, 2P:e260, 3:x" },
{ path: "2/sk3-ESF, 2/sk1, 2/sk4-FRS, 2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "4/, 3/s1, 3/s1", notes: "1M:e600, 2P:e900, 3M:+700" },
{ path: "4/, 2/, 4/sk2-ESF, 2/DOD-ESF, 2/, 2/", notes: "" },
{ path: "3/sk1, 4/sk1, 2/", notes: "" },
{ path: "2/sk1, 3/, 4/sk1", notes: "" },
{ path: "3/s1, 2/s1, 2/s2p1", notes: "1:x, 2M:e848, 3:M" },
{ path: "3/, 4/", notes: "" },
{ path: "2/, 2/B, 2/B, 2/s3", notes: "1:x, 2:e304!, 3:M, 4:x" },
{ path: "4/sk1", notes: "" },
{ path: "2/, 2/sk1, 3/sk2", notes: "" },
{ path: "3/, 2/", notes: "" },
{ path: "2/, 2/, 3/", notes: "" },
{ path: "2/E!, 3/, 2/!!, 4/", notes: "1:x, 2M:e836, 3P:e976!!, 4:x" },
{ path: "4/Se, 3/T, 2/", notes: "1P:u692, 2P:u664, 3:x" },
{ path: "3/, 3/, 2/", notes: "1M:e396, 2:M!, 3M:e780!!" },
{ path: "2/, 2/s1, 2/B, 2/s2", notes: "1:e012!!, 2M:e332/344!, 4P:e800/812" },
{ path: "2/sk1, 2/, 2/", notes: "" },
{ path: "4/, 3/", notes: "1M:+496!!, 2M:u248/744!" },
{ path: "2/p1, 2/, 2/p1, 2/p1", notes: "1P:e524, 2P:u260, 3M:e372, 4P:u900" },
{ path: "2/, 2/sk1, 3/sk3", notes: "" },
{ path: "2/S, 2/S, 2/S, 2/S", notes: "1:M, 2:M, 3:M, 4:M" },
{ path: "2/p1, 2/B, 2/B, 4/p1", notes: "1M:e860, 2P:e180, 3P:u840, 4P:u640/e100" },
{ path: "2/s1, 3/p2Sx!, 2/", notes: "1M:e572/e692!, 2M:u340!, 3:x" },
{ path: "2/, 2/BOD", notes: "" },
{ path: "2/sk1, 2/sk1, 2/sk3", notes: "" },
{ path: "2/, 4/, 2/", notes: "" },
{ path: "2/p1S, 2/p2Sx, 2/p1S", notes: "" },
{ path: "2/, 2/p7Se, 2/De", notes: "1M:u772, 2M:u680-'Now dig this!', 3M:u928!" },
{ path: "2/, 3/Tp1", notes: "1M:u420, 2:x" },
{ path: "2/sk2, 2/sk1, 2/AT-FRS, 3/sk1", notes: "" },
{ path: "2/DOD-ESF, 3/sk1-ESF", notes: "" },
{ path: "2/sk4-ESF, 2/sk3-ESF, 2/, 2/sk1-ESF", notes: "" },
{ path: "3/De, 2/B", notes: "1:x, 2:M!" },
{ path: "3/, 2/2p-ES, 2/sk1-2p-ESF", notes: "" },
{ path: "3/sk1, 2/sk2", notes: "" },
{ path: "2/, 2/, 4/", notes: "1P:+188!!, 2P:+512!, 3P:u424!" },
{ path: "2/sk1, 3/", notes: "" },
{ path: "4/p1, 2/", notes: "1:x, 2:x" },
{ path: "2/, 2/sk1, 2/DOD-ESF", notes: "" },
{ path: "2/, 3/, 3/, 4/s1", notes: "" },
{ path: "2/B, 2/, 2/, 2/s3", notes: "1:M!!, 2:M!, 3M:e648!, 4:M!" },
{ path: "5/T, 6/T!", notes: "1:x, 2M:u076!" },
{ path: "2/p1S, 2/p1S", notes: "1M:e352!, 2P:u612!" },
{ path: "4/s1, 2/, 2/s2", notes: "1:x, 2:x, 3P:+124!" },
{ path: "2/sk1-ESF, 2/sk1-1p-ESF, 2/DOD-ESF, 2/DOD-ESF, 2/sk1-1p-ESF", notes: "" },
{ path: "2/!, 2/s1E, 3/", notes: "1P:u172, 2:x, 3P:e312!" },
{ path: "3/sk2, 2/sk1-ESF", notes: "" },
{ path: "3/p1S, 4/p1", notes: "1M:e640, 2M:u380!" },
{ path: "2/Dx, 2/s1S, 2/s3", notes: "1M:u068, 2M:u408, 3P:e776" },
{ path: "4/, 2/sk2", notes: "" },
{ path: "2/, 2/B, 2/s2, 4/s1", notes: "1P:+400!!, 2P:u300!, 3P:e052, 4P:u448" },
{ path: "2/, 2/sk3, 4/sk1", notes: "" },
{ path: "2/T, 2/, 3/S", notes: "1:e+48, 2:x, 3:M" },
{ path: "3/T", notes: "1M:u116!" },
{ path: "2/, 2/p3S, 4/", notes: "1:x, 2P:u184, 3P:u740" },
{ path: "2/w2Se, 3/p1w2Se, 3/De", notes: "1M:e392, 2:x, 3M:e508" },
{ path: "2/p3S, 3/, 3/Sx10, 2/p1Sx!", notes: "1:x, 2M:u012, 3:-400, 4:ES(45) e784" },
{ path: "2/p1S, 4/", notes: "1MP:u684/944, 2:x" },
{ path: "3/sk1, 2/sk1, 2/", notes: "" },
{ path: "2/B, 3/, 4/, 3/", notes: "1M:u356, 2P:e968, 3M:e404, 4:x" },
{ path: "3/, 3/s1, 3/s1", notes: "1M:e808, 2M:u772, 3P:u240" },
{ path: "3/p1Sx, 2/Dx, 2/", notes: "" },
{ path: "2/AB, 3/AT", notes: "" },
{ path: "2/D, 2/D, 2/s1, 2/", notes: "1M:216, 2M:252, 3:x, 4P:568" },
{ path: "2/, 3/ES", notes: "" },
{ path: "3/, 2/", notes: "1M:u428, 2P:688!!" },
{ path: "2/sk1, 2/, 3/BOD", notes: "" },
{ path: "3/, 2/, 3/sk1-ESF", notes: "" },
{ path: "2/p1, 2/p4", notes: "1:x, 2P:u084" },
{ path: "NO PART", notes: "" },
{ path: "3/TSe, 3/TS, 2/D, 2/S, 2/p2Sx", notes: "1P:u952!, 2P:u644, 3M:e124, 4M:e184, 5M:e240" },
{ path: "2/sk1-FRS, 2/ESF, 4/, 3/", notes: "" },
{ path: "3/sk1, 4/sk2", notes: "" },
{ path: "3/sk1, 2/BOD", notes: "" },
{ path: "3/s2, 2/s4", notes: "1:M, 2:M" },
{ path: "2/Se, 3/p2Se, 2/p3", notes: "1:x, 2:x, 3:x" },
{ path: "2/, 3/, 2/", notes: "1M:e344!!, 2M:460!!, 3M:u104!!" },
{ path: "Free Ride", notes: "" },
{ path: "2/sk3-ESF, 2/sk3-ESF, 2/sk1-ES1", notes: "" },
{ path: "3/, 2/sk1-EW", notes: "" },
{ path: "3/T, 2/p1Se", notes: "1:M!, 2:M" },
{ path: "3/AT-ES2F, 3/AT-sk5-ESF", notes: "" },
{ path: "2/B, 2/, 3/", notes: "1:u260, 2:e024, 3:e568" },
{ path: "2/sk2-ESF, 3/sk1-ESF", notes: "" },
{ path: "2/sk1, 3/, 2/, 2/!", notes: "" },
{ path: "2/T", notes: "1:x" },
{ path: "3/, 2/, 3/", notes: "" },
{ path: "3/", notes: "" },
{ path: "3/DOD-ESF, 3/sk2-ESF", notes: "" },
{ path: "2/p1E3t, 2/S, 4/", notes: "1:x, 2:x, 3:M" },
{ path: "3/, 2/, 2/s2", notes: "" },
{ path: "2/, 3/, 2/sk9-ESF", notes: "" },
{ path: "2/sk1, 3/", notes: "" },
{ path: "2/, 2/sk2-ESF", notes: "" },
{ path: "3/, 2/BOD, 2/AT-sk1", notes: "" },
{ path: "2/B, 3/p1E*, 3/B", notes: "1:x, 2:x, 3P:u288 **Difficult: Half second after 'Get clean!' phrase dissappears OR when freestyle change goes off screen." },
{ path: "2/p1w3Sx, 3/", notes: "1:x, 2:x" },
{ path: "2/s1, 2/, 2/T", notes: "1:x, 2:x, 3M:e200!" },
{ path: "2/, 2/Sx, 2/p3S, 3/", notes: "1:x, 2P:e800, 3P:u104, 4:x" },
{ path: "2/, 3/", notes: "" },
{ path: "2/p1, 2/p1S, 2/D", notes: "1P:e360!!, 2P:e600!, 3M:u264" },
{ path: "2/sk1, 3/, 2/sk2", notes: "" },
{ path: "2/, 4/p1Se, 2/p1, 2/T, 3/p1, 2/p1", notes: "1M:e196/412, 2:M, 3:-900!, 4P:-100!, 5M:u+600, 6:x" },
{ path: "2/Se, 3/S, 2/s1", notes: "1M:u968, 2P:e908, 3M:u364" },
{ path: "2/, 2/sk1, 4/sk2[/color]", notes: "" },
{ path: "2/p1E3, 2/, 3/Tp1, 2/B, 3/p3", notes: "1:x, 2M:e464, 3M:e796!, 4:x, 5P:u312" },
{ path: "2/p4Se, 2/Se, 3/Se", notes: "1P:e232, 2P:u340, 3P:e964" },
{ path: "PLEASE SUBMIT A PATH", notes: "" },
{ path: "AI", notes: "1:u140!, 2:+20!!" },
{ path: "2/B, 2/, 2/TSeE, 4/S", notes: "1M:u164, 2M:u668, 3:x, 4M:u080" },
{ path: "2/BOD, 2/sk3, 2/sk1", notes: "" },
{ path: "2/, 3/, 3/", notes: "" },
{ path: "2/s1, 2/!, 2/B, 2/!", notes: "1P:u028, 2:x, 3:x, 4:x" },
{ path: "2/B, 3/T, 2/", notes: "1M:u304, 2:x, 3:x" },
{ path: "2/sk2-ESF, 2/DOD-ESF", notes: "" },
{ path: "2/ESF, 2/DOD-ESF, 3/sk1-ESF, 2/DOD-ESF", notes: "" },
{ path: "2/p2S, 3/T, 3/", notes: "1M:u552, 2P:e628, 3:x" },
{ path: "2/, 2/B, 2/Sx, 3/p1S", notes: "1M:u096, 2P:~u150, 3:(5%)e708/e384, 4:e700p" },
{ path: "2/D, 2/p1S, 2/p1S, 2/p3S", notes: "1M:e020, 2M:+300, 3M:e584, 4M:+300" },
{ path: "2/s1, 2/B, 3/s1", notes: "1:F, 2:F, 3:x" },
{ path: "3/B, 2/Tp2, 3/p2S", notes: "1P:u360, 2P:u596, 3:x" },
{ path: "2/Tp2S, 2/TS, 2/s1, 2/T", notes: "1:x, 2M:u044, 3P:u972/e036, 4:x" },
{ path: "3/, 2/, 4/B", notes: "1P:u568, 2:M, 3:x" },
{ path: "AI", notes: "1:M!, 2:+428!!" },
{ path: "2/s2, 3/p1S, 2/T", notes: "1M:e172, 2P:u668" },
{ path: "2/p1, 2/p1, 2/, 3/B", notes: "1P:u272, 2P:e572, 3:x, 4P:u068!" },
{ path: "3/s1, 3/", notes: "1:F, 2M:e156" },
{ path: "2/, 3/sk1, 2/sk1", notes: "" },
{ path: "2/, 2/s1, 2/s1, 2/, 4/s2, 2/", notes: "1:M!, 2M:e100!, 3:M, 4:x, 4:e180/e500!!, 6:x" },
{ path: "2/, 2/DODF, 2/DODF", notes: "" },
{ path: "2/, 2/B, 2/p2, 2/p1", notes: "1:x, 2:x, 3:x, 4:x" },
{ path: "2/, 3/Ts1, 2/", notes: "1P:e440, 2:M, 3P:+80!!" },
{ path: "AI", notes: "1:x 2M:e604!, 3M:e968!" },
{ path: "2/p2Se, 2/p4, 2/p1S15", notes: "1M:u272, 2:x, 3S1:e772, 3S2M:+672" },
{ path: "2/E1½, 2/, 3/, 3/", notes: "1:x, 2P:e616, 3M:+4, 4:x" },
{ path: "3/, 2/s1, AI", notes: "1:F, 2P:u384, 3:F, 4M:+92!" },
{ path: "3/, 4/, 4/", notes: "" },
{ path: "5/sk2-ESF, 3", notes: "" },
{ path: "4/sk1, 3/sk10-ESF", notes: "" },
{ path: "2/S, 4/S", notes: "1M:u808!, 2M:e456!" },
{ path: "3/, 3/", notes: "" },
{ path: "3/s3, 2/TTs3S, 2/S, 2/", notes: "" },
{ path: "4/p1, 4/", notes: "1:+64!!, 2M:e712!" },
{ path: "AI", notes: "" },
{ path: "2/BOD, 3/AB-ESF, 3/", notes: "" },
{ path: "5/B, 2/s2Se", notes: "1:+492!!, 2:x" },
{ path: "2/2p-ESF, 2/1p-ESF, 3/Sk1 2p-ESF", notes: "" },
{ path: "3/B, 2/T, 2/B, 2/T, 2/p1, 4/", notes: "1M:e776, 2P:u024, 3:x, 4M:e764, 5M:e904, 6M:u204" },
{ path: "AI", notes: "1:e112!!, 2:x" },
{ path: "2/, 2/sk1-FRS, 2/sk1-FRS, 2/, 3/sk5, 2/sk1 FRS=~40 beats", notes: "" },
{ path: "2/, 2/De, 2/s2, 2/B", notes: "1M:u504!, 2M:e676, 3M:u940!, 4:x" },
{ path: "3/, 2/, 2/s4", notes: "e916, e932, e100" },
{ path: "3/, 2/sk4", notes: "" },
{ path: "3/, 3/sk3-ESF, 2/sk3-ESF", notes: "" },
{ path: "3/DOD-ESP, EwO", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "4/sk2, 2/", notes: "" },
{ path: "2/sk1-ESF, 4/AT", notes: "" },
{ path: "3/, 4/", notes: "1M:e272!, 2P:e376!!" },
{ path: "4/p2S, 2/B", notes: "1P:792, 2:x" },
{ path: "2/B, 3/, 2/", notes: "1M:u312, 2M:u032, 3:x" },
{ path: "2/B", notes: "1M:u660" },
{ path: "2/, 2/S|26, 3/s1, 2/, 2/", notes: "1P:e476, 2:u564/x!, 3P:6940, 4P:3272, 5P:6032" },
{ path: "2/sk2, 3/", notes: "" },
{ path: "2/S, 3/S", notes: "1:M, 2:x" },
{ path: "2/sk2-ESF, 2/DOD-ESF", notes: "" },
{ path: "3/BOD, 2/BOD", notes: "" },
{ path: "2/sk1, 4/sk2, 3/", notes: "" },
{ path: "2/, 2/BOD, 2/", notes: "" },
{ path: "2/DOD-ESF, 3/sk2-ESF", notes: "" },
{ path: "4/s1, 3/s1", notes: "1:M, 2:+824/u824" },
{ path: "2/p1, 3/, 2/p4", notes: "1M:e608, 2:u704!!, 3:e148" },
{ path: "AI", notes: "No squeezes." },
{ path: "2/s1, 2/, 2/Tp2", notes: "1P:+4!!, 2M:+384, 3P:u420" },
{ path: "2/p2S, 2/p2S, 3/TS, 2/p2S", notes: "1:F!, 2M:e112/328, 3M:e180!!/396, 4P:5564!/6112" },
{ path: "2/T, 2/Tp1S, 2/, 3/B", notes: "1:+412!!, 2M:+556, 3:x, 4P:u504!" },
{ path: "3/s2", notes: "1:M" },
{ path: "3/BOD, 2/, 4/BOD, 2/", notes: "" },
{ path: "2/s1E?, 2/T, 3/", notes: "" },
{ path: "3/, 4/, 2/AT-sk2-ESF* [Very difficult ESF]", notes: "" },
{ path: "AI (2nd act is quick!)", notes: "1:x, 2M:u868, 3:x" },
{ path: "3/sk2, 3/BOD, 3/sk2-2p-ESF", notes: "" },
{ path: "2/sk1, 2/, 2/, 2/sk3", notes: "" },
{ path: "AI", notes: "1P:e380!!" },
{ path: "2/AS, 4/", notes: "" },
{ path: "3/sk1-RS, 2/sk1-FRS, 2/sk3", notes: "" },
{ path: "4/s2, 3/", notes: "1M:e572, 2P:u184" },
{ path: "2/, 3/T, 2/Sx", notes: "1P:e308, 2:x, 3M:e808!" },
{ path: "2/s1, 2/s1, 3/p4Se", notes: "1:x, 2P:+76!!, 3M:u+68" },
{ path: "2/sk1ESF, 2/DOD-ESF", notes: "" },
{ path: "2/sk2ESF, 2/, 2/sk1ESF, 2/sk1ESF", notes: "" },
{ path: "2/BOD, 3/, 2/BOD, 2/sk1", notes: "" },
{ path: "3/, 3/, 2/sk4-ESF", notes: "" },
{ path: "3/B, 3/", notes: "1M:e744!, 2P:u776!!" },
{ path: "3/S, 2/p1S, 2/S, 3/p2S", notes: "1M:e200, 2M:e844!, 3M:u604!, 4M:u304!" },
{ path: "2/!, 2/S, 3/s1", notes: "1:+220!!, 2M:+384, 3:M!" },
{ path: "2/sk3-ES, 2/sk10-ESF", notes: "" },
{ path: "2/BOD, 3/, 2/BOD", notes: "" },
{ path: "3/, 2/p1Se", notes: "1:M, 2M:e760" },
{ path: "2/BOD, 2/sk1, 2/sk3", notes: "" },
{ path: "2/, 3/sk1, 3/, 2/sk3", notes: "" },
{ path: "2/sk3-ESF, 2/sk1, 2/sk3-ESF, 3/sk1-ESF, 2/", notes: "" },
{ path: "2/!!, 2/, 3/, 2/", notes: "" },
{ path: "2/, 2/Sx, 2/E!, 2/p2Se", notes: "1P:e112, 2P:u624, 4M:e-56" },
{ path: "3/p2, 2/Se, 2/", notes: "1:M, 2:x, 3M:-4" },
{ path: "3/s1, 2/B, 3/", notes: "1:x, 2:x, 3M:u852!" },
{ path: "2/S, 2/, 2/s2", notes: "1M:e444, 2M:e968!, 3P:e356" },
{ path: "2/, 2/S, 2/p1S", notes: "1:x, 2M:u284, 3P:u212" },
{ path: "3/2p-ESF, 3/sk3", notes: "" },
{ path: "3/FRS, 3/AT, EwO", notes: "" },
{ path: "2/, 3/, 3/, 2/", notes: "" },
{ path: "2/sk1ESF, 3/sk1ESF, 2/DOD-ESF", notes: "" },
{ path: "2/B, 2/, 2/", notes: "1:x, 2M:e324, 3P:u800" },
{ path: "4/, 2/s3", notes: "1:x, 2P:e608/760" },
{ path: "2/, 2/p1, 3/, 2/p1, 2/B", notes: "1:x, 2:x, 3:M, 4:x, 5:x" },
{ path: "2/, 2/sk1, 3/, 2/sk2-ESF", notes: "" },
{ path: "2/AS, 2/, 2/ESF, 3/BOD", notes: "" },
{ path: "4/s1E, 2/B", notes: "1:x, 2:x" },
{ path: "2/BOD, 2/", notes: "" },
{ path: "3/S, 2/D", notes: "1P:e296, 2P:u608" },
{ path: "3/sk1, 3/, 2/", notes: "" },
{ path: "2/, 2/!, 3/", notes: "" },
{ path: "2/, 2/AT, 2/BOD, 3/EwO", notes: "" },
{ path: "2/, 2/p2S, 4/S", notes: "1:x, 2M:u644, 3:M" },
{ path: "2/sk1, 2/sk2-ESF, 2/", notes: "" },
{ path: "2/, 3/sk1, 2/sk3-ES, 3/sk1, 2/sk4-ESF, 2/", notes: "" },
{ path: "3/sk1, 3/", notes: "" },
{ path: "2/, 2/, 2/sk1", notes: "" },
{ path: "2/, 3/", notes: "1:+48!!, 2:x" },
{ path: "2/De, 2/p5w3S25", notes: "1M:u596, 2:e296/M!!" },
{ path: "3/E2t, 2/p1S, 2/Dx", notes: "1:x, 2M:u596, 3:M!" },
{ path: "4/ 3/BOD", notes: "" },
{ path: "2/, 2/, 3/AT-sk1", notes: "" },
{ path: "4/p4, 3/p3, 3/", notes: "1P:e196!, 2:x, 3:x" },
{ path: "3/sk1, 3/sk4, 2/", notes: "" },
{ path: "4/, 2/, 2/BOD", notes: "" },
{ path: "2/p2, 2/p2, 3/p2", notes: "1M:u908!, 2:x, 3M:e332!" },
{ path: "3/E½, 2/, 5/s3", notes: "1:x, 2M:u192, 3M?:e336!" },
{ path: "3/sk2, 3/sk2-ESF*", notes: "" },
{ path: "3/BOD, 2/AS", notes: "" },
{ path: "2/p1S, 2/S, 3/S, 2/p1S, 2/p2S", notes: "1M:e772!, 2:x, 3M:e732, 4M:u352, 5:x" },
{ path: "3/sk4", notes: "" },
{ path: "3/BOD, 4/sk2", notes: "" },
{ path: "2/, 3/, 3/", notes: "" },
{ path: "2/BOD, 3/", notes: "" },
{ path: "4/, 4/", notes: "" },
{ path: "3/sk1, 2/sk4, 2/AT", notes: "" },
{ path: "2/B, 2/Tp2, 2/", notes: "1F:u068, 2:x, 3F:u728!" },
{ path: "2/ESF, 3/, 2/sk4", notes: "" },
{ path: "2/s1, 2/s1, 2/, 3/", notes: "1:+4!!, 2M:u+372, 3:x, 4:M" },
{ path: "4/ESF, 4/FRS, 2/sk1 [FRS", notes: "" },
{ path: "2/, 3/p1S, 2/p1S, 3/p1Sx20", notes: "1P:7512, 2M:-1248, 3P:-460, 4P:e272/F" },
{ path: "3/B, 3/p1Sx", notes: "1:x, 2P:u772" },
{ path: "2/p2, 2/p1, 3/", notes: "1:x, 2P:e364, 3P:e748" },
{ path: "2/, 2/AT, 4/, 2-ESF", notes: "" },
{ path: "2/sk3, 2/", notes: "" },
{ path: "3/p1S, 2/w2Sx5, 2/, 2/p1, 2/, 3/p4", notes: "1:X, 2:848/u496, 3:x, 4:e060, 5:x, 6:x" },
{ path: "2/!, 2/s4E!, 2/s1, 2/s4", notes: "1M:e460, 2:x, 3:M, 4P:u028!" },
{ path: "2/p2, 3/p1, 2/Sx49", notes: "1P:e832, 2P:e084!, 3:e148" },
{ path: "2/D, 2/, 2/, 2/p2S", notes: "1P:u244, 2:x, 3:x, 4:x" },
{ path: "2/, 3/, 3/, 2/T, 2/", notes: "1M:u868!, 2M:u340, 3M:u868!, 4P:e148, 5P:u232" },
{ path: "2/p1, 2/S, 3/B", notes: "1P:e728, 2M:u420, 3:x" },
{ path: "4/, 2/AT, 2/sk2", notes: "" },
{ path: "3/", notes: "1M:e176!" },
{ path: "3/s1, 3/s1", notes: "1M:e008, 2:x" },
{ path: "4/, 2/T", notes: "1P:e364!!, 2P:u148" },
{ path: "3/, 2/sk1, 2/", notes: "" },
{ path: "2/DOD-ESF, 2/sk1-ESF, 3/", notes: "" },
{ path: "2/, 2/p1S, 2/s1E!, 2/S", notes: "" },
{ path: "3/s1E1t, 3/D, 2/B", notes: "" },
{ path: "2/p3, 3/p1, 3/p6", notes: "1M:e948, 2:x, 3:x" },
{ path: "2/Sx, 2/Sx, 3/Sx", notes: "1P:e960/u088!, 2M:u936, 3M:u564" },
{ path: "2/sk3-ESF, 2/sk6-ESF", notes: "" },
{ path: "2/, 3/, 4/", notes: "1:x, 2M:u164, 3M:u964" },
{ path: "4/, 2/p1Se, 3/Dw1", notes: "1:x, 2M:e636, 3P:u096" },
{ path: "3/, 2/!, 2/!, 2/", notes: "1:x, 2M:e400, 3P:u256!, 4:x" },
{ path: "4/, 2/!, 3/, 2/p1S", notes: "1M:u348, 2M:e680, 3P:e600, 4:x" },
{ path: "2/p2S, 2/p1S, 4/p1, 4/, 3/s1, 2/, 2/!", notes: "1M:e508, 2M:e944, 3:x, 4M::u512, 5M:e220, 6:M, 7:x" },
{ path: "3/, 2/sk1-2p-ESF, 2/sk2-ESF", notes: "" },
{ path: "4/, 3/D", notes: "" },
{ path: "4/, 2/ESF", notes: "" },
{ path: "4/T", notes: "1:M!" },
{ path: "2/B, 2/S, 2/s2", notes: "1P:e972/u058, 2P:e136, 3P:e232" },
{ path: "2/sk1, 3/sk1-ESF, 3/sk1-ESF", notes: "" },
{ path: "2/p2, 2/p1S, 2/T, 2/p3", notes: "1M:u824, 2P:e620, 3M:-352, 4P:u304/u504" },
{ path: "3/, 3/p3", notes: "1:x, 2:x" },
{ path: "2/Se, 2/S40, 2/B, 2/p1Se", notes: "1:x, 2P: e428/+548u600/972, 3M:-172!, 4M:-188" },
{ path: "4/, 2/sk3, 2/sk1-1p-ESF", notes: "" },
{ path: "4/, 4/p3", notes: "1:x, 2:x" },
{ path: "4/AT EwO", notes: "" },
{ path: "2/sk1, 4/, 2/", notes: "" },
{ path: "2/DOD-ESF, 2/sk5-ESF", notes: "" },
{ path: "3/, 3/, 3/sk1", notes: "" },
{ path: "4/, 2/B", notes: "1:x, 2:x" },
{ path: "2/DOD-ESF 2/sk1-ESF, 2/sk3-ESF", notes: "" },
{ path: "2/sk3-ES*, 2/sk3 * sing the first oh", notes: "" },
{ path: "2/, 2/sk1-ESF, 2/AT", notes: "" },
{ path: "2/s1, 3/, 2/s2, 2/T", notes: "1M:u412, 2:M!, 3M:e680!, 4:M" },
{ path: "3/, 4/", notes: "" },
{ path: "2/S, 3/, 2/s1, 2/s1", notes: "1M:u288, 2:M, 3P:u012, 4:x" },
{ path: "2/p1S, 3/p3S", notes: "1M:u052!, 2M:u436?" },
{ path: "2/, 2/, 2/, 3/B, 2/", notes: "1P:e204/340!, 2M:-208, 3M:u388, 4:e052!, 5:x" },
{ path: "2/B, 3/, 2/, 2/p4", notes: "1:u708/u836, 2:8512, 3:u512/700p, 4:+280" },
{ path: "2/, 2/, 2/p1S", notes: "1:x, 2P:u608, 3:x" },
{ path: "4/s2p2Sx, 2/!, 2/", notes: "1:u580, 2:x, 3:x" },
{ path: "3/T", notes: "1P:u264!" },
{ path: "4/", notes: "1:M" },
{ path: "2/Sx, 2/B, 2/Tp1Se", notes: "1:M/u324, 2M?:u108, 3:x" },
{ path: "3/, 3/, 2/sk2-ESF", notes: "" },
{ path: "2/BOD, 2/, 2/sk1-ESF", notes: "" },
{ path: "3/, 3/p2E3t, 2/", notes: "1:x, 2:x, 3:M!" },
{ path: "3/p1S, 2/Sx", notes: "1M:u136!, 2M:u228" },
{ path: "3/, 2/", notes: "1:e044!!, 2M:e024" },
{ path: "2/, 2/, 2/sk2", notes: "" },
{ path: "2/, 2/s1, 4/", notes: "1:x, 2:+72!!, 3:x" },
{ path: "2/, 3/p1Sx!, [2/Dx! or 3/s1]", notes: "1:x, 2:?, 3:+300/x" },
{ path: "2/B, 2/, 2/", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "2/BOD, 3/, 2/, 2/", notes: "" },
{ path: "3/DOD-ESF, 4/sk2-ESF", notes: "" },
{ path: "3/p1Se, 4/", notes: "1M:e224, 2:x" },
{ path: "3/, 2/, 2/sk1", notes: "" },
{ path: "2/DOD-sk1-ESP, 2/sk2-ESP, 2/sk7-ESP", notes: "" },
{ path: "2/, 2/, 4/EwO", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/, 2/, 4/sk1", notes: "" },
{ path: "3/s1, 2/w1S, 2/", notes: "1M:u840, 2P:e396, 3P:u328" },
{ path: "2/, 3/AT", notes: "" },
{ path: "3/, 3/B, 5/p1", notes: "1:x, 2M:e184, 3:x" },
{ path: "3/p1Se, 3/, 2/p1", notes: "1M:u084!, 2M:e044!, 3:x" },
{ path: "2/, 4/AT-sk1", notes: "" },
{ path: "2/DOD-ESF, 2/1p-ESF", notes: "" },
{ path: "2/s2, 4/", notes: "1:x, 2:F" },
{ path: "3/sk5-ESF, 4/BOD, 3/8p-ESF", notes: "" },
{ path: "2/, 3/De, 2/w3S20", notes: "1P:e096!!, 2M:u+524, 3P:e712/e464" },
{ path: "3/s1, 3/s1", notes: "1M:e776!, 2M:u552" },
{ path: "3/D, 2/s2", notes: "1P:u312, 2M:+100!!" },
{ path: "2/, 3/B, 2/p3", notes: "1M:e892!, 2M:u704!, 3P:u748" },
{ path: "3/, 3/", notes: "" },
{ path: "4/p1E!!, 2/T", notes: "1:x, 2M:e784!" },
{ path: "2/sk3, 3/sk4, 2/sk9", notes: "" },
{ path: "3/, 2/, 2/sk3-ESF, 3/sk1", notes: "" },
{ path: "4/E, 2/B", notes: "1:x, 2:x" },
{ path: "3/, 2/, 2/", notes: "1M:e920!, 2P:u488, 3P:u644" },
{ path: "2/, 2/p2S, 3/S", notes: "" },
{ path: "3/, 2/T, 4/s1, 2/", notes: "1M:u728, 2M:u300!, 3:M!, 4P:u596" },
{ path: "3/p1Se, 3/", notes: "1:M, 2M:e768!" },
{ path: "4/sk1, 2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "3/, 2/sk3, 4/sk2-ESF", notes: "" },
{ path: "2/!, 2/!, 2/T, 2/", notes: "1M:e052, 2M:u420, 3P:e932, 4:x" },
{ path: "4/, 2/p1Sx", notes: "1P:692, 2P:168" },
{ path: "2/B, 3/, 3/s1", notes: "1P:e956, 2M:+480!, 3:x" },
{ path: "3/p2Sx, 2/p1S, 2/, 2/p2w1Sx", notes: "1:M, 2M:e928!, 3:M, 4:M" },
{ path: "3/D, 3/", notes: "1P:u508/u604, 2M:e-12!" },
{ path: "3/p1Sx, 2/p4S, 2/w3Sx", notes: "1M:u780, 2P:e280, 3:x" },
{ path: "3/, 2/, 2/B, 3/s2", notes: "1M:e252!!, 2:+60!!, 3P:u988, 4:x" },
{ path: "2/sk1-AS, 2/DOD-ESF, 3/, 4/", notes: "" },
{ path: "2/sk1, 2/sk5-AS, 2/sk2", notes: "" },
{ path: "2/p1, 2/p1", notes: "1:x, 2:x" },
{ path: "2/, 4/, 2/", notes: "1M:e652!, 2M:u+44!, 3:+164!!" },
{ path: "4/sk4", notes: "" },
{ path: "2/, 2/s2, 2/Ts1", notes: "1P:u904, 2P:??, 3P:e224" },
{ path: "2/D, 2/B, 2/B, 2/, 2/p2S", notes: "1M:u744, 2M:u028!, 3P:u172!, 4P:+200!!, 5P:-40" },
{ path: "2/, 2/, 2/ESF, 2/sk9-ESF", notes: "" },
{ path: "3/sk3, 3/sk1", notes: "" },
{ path: "2/, 2/, 2/, 2/s2", notes: "1M:e932, 2M:u788, 3P:u004, 4:x" },
{ path: "3/Sx50, 2/p2", notes: "1S:e008, 2M:+384/e392" },
{ path: "3/S, 2/p1, 2/p1, 3/Sx", notes: "1M:u348, 2P:e552, 3M:+196, 4:x" },
{ path: "3/, 3/, 2/B", notes: "1:x, 2:x, 3:F" },
{ path: "2/, 2/E1t, 2/, 3/p1w2Sx10", notes: "1M:e256!, 2:x, 3P:e356!!, 4P:u872/-176" },
{ path: "2/ESP, 2/BOD, 3/", notes: "" },
{ path: "2/, 4/p1", notes: "1P:+1000!, 2:x" },
{ path: "3/T, 2/p1Sx35, 2/", notes: "1M:e548, 2:u080/e972, 3P:+324!!" },
{ path: "(2/s1 OR 3/s1)*, 2/p2S, 2/s1p1S", notes: "1+84!!, 2M:+492, 3:M, *2/s1 is very hard to chain!" },
{ path: "2/s1, 4/Tp1Sx33", notes: "1:x, 2:e660/u716" },
{ path: "2/Se*, 2/p1Se, 2/Se", notes: "1M:u808, 2M:e108!!, 3M:u140! *Vocal engine glitches on the talky most times. Gives x984." },
{ path: "AI", notes: "" },
{ path: "3/p1Sx, 3/p2w1Sx", notes: "1M:e916!, 2:x" },
{ path: "2/ESF, 2/ESF, 2/sk3-ESF", notes: "" },
{ path: "2/ESF, 2/1p-ESF, 2/", notes: "" },
{ path: "2/, 2/sk2, 2/, 3/sk4", notes: "" },
{ path: "4/, 3/", notes: "1P:u628, 2:x" },
{ path: "2/Sx, 3/s1", notes: "1M:e700/796, 2:M" },
{ path: "3/BOD, 3/, 3/sk3-ESF", notes: "" },
{ path: "2/T, 2/!", notes: "1:M, 2:+256!!" },
{ path: "2/S, 2/p3, 3/p3", notes: "" },
{ path: "2/, 2/DOD-ESF", notes: "" },
{ path: "2/, 2/TSE!, 2/", notes: "1:x, 2:x, 3:x" },
{ path: "3/, 2/", notes: "1:x, 2M:e504" },
{ path: "2/, 2/sk1, 2/, 2/BOD", notes: "" },
{ path: "2/BOD, 3/, 2/", notes: "" },
{ path: "2/BOD, 2/BOD, 2/sk1", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/s2, 2/s3, 2/T", notes: "1:M, 2M:u224!, 3P:u024" },
{ path: "AI", notes: "" },
{ path: "2/sk2-ESF, 2/sk2-ESF, 2/sk1-ESF, 2/", notes: "" },
{ path: "4/ESF, 4/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "2!, 2/sk1, AI", notes: "" },
{ path: "2/B, 4/", notes: "1:+176!!, 2:x" },
{ path: "3/Se, 2/Se, 2/Se, 2/Se", notes: "1P:u796, 2P:e340, 3P:u940, 4P:u488" },
{ path: "2/BOD, 3/sk2", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "3/sk1, 2/sk1", notes: "" },
{ path: "4/E, 4/", notes: "1:x, 2P:e144!" },
{ path: "2/D, 2/D, 2/p1S, 2/D", notes: "1M:u236!, 2M:u980!, 3P:+12!, 4?:e-88" },
{ path: "2/, 2/p1, 2/", notes: "1P:e128, 2P:e448, 3P:u580" },
{ path: "3/, 2/, 2/, 2/", notes: "" },
{ path: "3/, 3/, 3/s2", notes: "" },
{ path: "2/DOD-ESF, 2/sk1-ESF, 3/", notes: "" },
{ path: "3/, 3/sk1", notes: "" },
{ path: "4/", notes: "" },
{ path: "3/p2S, 2/p2", notes: "1M:e316, 2M:e840" },
{ path: "2/S, 3/S, 3/w1S20", notes: "1M:e308, 2:x, 3:u508/u292" },
{ path: "3/B, 2/p2w2Sx24, 3/S", notes: "1M:u300, 2:e356, 3:x" },
{ path: "2/ESF, 2/DOD-ESF, 3/, 3/AS", notes: "" },
{ path: "2/, 2/p2, 3/, 2/, 2/", notes: "1M:u640?!, 2M:e896?!, 3M:-40!, 4M:e444?!, 5:M" },
{ path: "2/, 2/BOD, 2/ EwO", notes: "" },
{ path: "3/, 2/p1", notes: "1:x, 2:x" },
{ path: "3/, 3/sk2, 3/sk1", notes: "" },
{ path: "4/, 2/s1", notes: "1M:e404!, 2P:e888" },
{ path: "3/, 3/, 2/", notes: "1P:e644/500!, 2M:e888/748, 3:u104!!" },
{ path: "2/p1, 3/Sx", notes: "1:x, 2:M!" },
{ path: "2/sk3-ESF, 3/, 2/sk2-ESF", notes: "" },
{ path: "2/, 2/s2S", notes: "" },
{ path: "4/p3S", notes: "1P:e220!" },
{ path: "3/p1, 2/, 2/B", notes: "1M:e300!, 2:x, 3M:u096!" },
{ path: "3/E½, 3/, 3/", notes: "1:x, 2P:e844!!, 3:x" },
{ path: "2/AB-FRS, 4/sk1-1p-ESF", notes: "" },
{ path: "2/B, 2/p1, 2/", notes: "1M:u984, 3P:u456!!" },
{ path: "4/, 3/", notes: "1P:u076, 2P:u700" },
{ path: "4/sk1, 2/sk2, 2/sk1-AS, 3/sk2", notes: "" },
{ path: "3/, 3/TT", notes: "1P:e896, 2P:e672" },
{ path: "2/, 3/, 4/FRS, 2/", notes: "" },
{ path: "AI", notes: "" },
{ path: "PLEASE SUBMIT A PATH", notes: "" },
{ path: "2/sk1-AS, 3/", notes: "" },
{ path: "2/sk2, 3/sk1-ESF, 2/", notes: "" },
{ path: "4/sk1", notes: "" },
{ path: "3/, 2/", notes: "" },
{ path: "2/S, 3/, 2/, 3/s1, 2/s1", notes: "1M:u264!, 2P:u332!, 3P:u340!!, 4P:e792!, 5P:e836!!" },
{ path: "2/ 3/FRS, 3/", notes: "" },
{ path: "2/sk1, 3/", notes: "" },
{ path: "3/s1, 2/", notes: "1:x, 2P:u116/232" },
{ path: "2/B, 3/s3", notes: "" },
{ path: "4/, 4/sk1-ESF", notes: "" },
{ path: "3/s1SE*, 2/, 2/", notes: "1:x, 2:x, 3:e872, *As hip hip goes off screen to the left." },
{ path: "4/, 2/BOD, EwO", notes: "" },
{ path: "2/, 2/, 3/E3t, 2/T", notes: "1M:u060!, 2:x, 3:x, 4:x" },
{ path: "3/DOD-ES1F, 2/sk2-ES1F-E, 2/sk4-ES1F", notes: "" },
{ path: "3/, 2/s1", notes: "" },
{ path: "2/, 2/sk1, 2/, 2/ES1F", notes: "" },
{ path: "2/sk3-ESF, 2/AT-sk2-ESF, 2/sk5-ESF", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "3/sk1-ESF", notes: "" },
{ path: "2/s1, 2/s1, 3/s1", notes: "1M:e568!, 2P:e984, 3M:+260!" },
{ path: "3/, 4/BOD, 3/", notes: "" },
{ path: "2/sk2-ESF, 2/sk2-ESF, 3/ESF", notes: "" },
{ path: "2/p1, 4/", notes: "1:x, 2:x" },
{ path: "2/p2E¾, 2/, 3/B", notes: "1:x, 2:x, 3M:u604!" },
{ path: "2/, 2/p1, 3/p1, 2/p1, [break], 2/, 2/p2", notes: "1M:e672, 2M:e764, 3M:e264, 4:x, 5:x, 6P:e084" },
{ path: "4/, 2/s1, 4/s1", notes: "" },
{ path: "3/FRS, 2/sk2-ESF, 2/ESF, 2 [FRS", notes: "" },
{ path: "2/, 2/sk1-ESF, 2/sk1-ESF, 3/", notes: "" },
{ path: "2/, 2/sk3-ESP, 2/sk1-ESF, 2/sk1, 2/sk1", notes: "" },
{ path: "2/Dx, 3/s1", notes: "1:x, 2P:e512" },
{ path: "2/sk1-ESF, 2/, 3/", notes: "" },
{ path: "3/, 2/, 2/p2S, 2/, 2/S, 2/B", notes: "1M:e988, 2M:e480, 3P:e800, 4P:e964, 5P:u044, 6P:e400" },
{ path: "2/sk1-ESF, 2/sk2-ESF, 2/sk4-ESF", notes: "" },
{ path: "2/sk1-FRS, 2/sk1-FRS, 2/AT-FRS, 2/sk2, 2/sk1-ESF EwO", notes: "" },
{ path: "3/Sx, 3/, 2/p1Sx, 3/p4Sx", notes: "1M:u360, 2:M, 3:M, 4P:e520/e840" },
{ path: "2/sk3, 3/BOD", notes: "" },
{ path: "2/s3, 2/", notes: "1M:u220!!, 2:x" },
{ path: "NO PART", notes: "" },
{ path: "2/s2, 3/, 2/B", notes: "1P:+296!, 2M:+444, 3P:+448 (u188p)" },
{ path: "4/sk1-FRS, 2/FRS, 2/", notes: "" },
{ path: "2/s2, 3/s4, 3/", notes: "1:x, 2M:e720, 3:F" },
{ path: "4/sk2-ESP, 3/BOD, 2/sk3-ESF", notes: "" },
{ path: "3/, 2/p1, 2/s2, 3/, 4/s1, 2/s1, 2/TS, 4/Tp4", notes: "1:F!, 2P:u400!, 3:x, 4P:e928!, 5M:u660, 6:x, 7M:-36, 8:x" },
{ path: "3/, 3/sk3, 4/sk2", notes: "" },
{ path: "2/ES, 2/sk1-ESF, 2/sk2-ESF, 2/sk2-ESF", notes: "" },
{ path: "3/p2S, 4/p2", notes: "1P:u296, 2P:u984!" },
{ path: "2/B. 2/T, 2/", notes: "1:x, 2:x, 3:+280" },
{ path: "2/, 2/sk1, 2/BOD", notes: "" },
{ path: "3/, 2/B, 2/, 3/Ts1", notes: "1P:e716, 2:x, 3:F, 4P:+160/u024p" },
{ path: "3/D, 2/D, 2/p3S", notes: "1:x, 2P:u444, 3:M!" },
{ path: "3/ESF, 2/A2T", notes: "" },
{ path: "2/, 2/Se, 3/p1Se", notes: "1P:e100!!, 2M:e596, 3M:e884" },
{ path: "3/, 2/, 2/AT-sk1, 2/sk", notes: "" },
{ path: "2/, 4/B", notes: "1:x, 2P:e420" },
{ path: "2/sk2, 2/, 2/sk2", notes: "" },
{ path: "2/sk1-ESF, 2/sk1, 4/, 3/sk1-ESF", notes: "" },
{ path: "2/sk1, 4/sk2, 2/sk4", notes: "" },
{ path: "2/, 3/Tp2Sx", notes: "1M:e240!, 2M:e412" },
{ path: "2/sk1, 4/sk1, 3/", notes: "" },
{ path: "3/B, 2/T, 2/, 2/p3", notes: "1M:e428, 2M:e192!!, 3:e400!!, 4:x" },
{ path: "4/B, 2/p1, 2/", notes: "1M:u076, 2:x, 3M:e764" },
{ path: "2/, 2/, 2/B, 2/", notes: "1:x, 2:e664, 3:u020, 4:M" },
{ path: "3/B, 2/, 2/", notes: "1:M, 2:x, 3:x" },
{ path: "3/sk4ESF, 2/sk5-ESF", notes: "" },
{ path: "2/BOD, 2/DOD-ESF, 2/", notes: "" },
{ path: "3/s1, 3/s1", notes: "1P:+128!!, 2P:e584!" },
{ path: "3/s1, 2/p1S", notes: "1:x, 2M:e704!!" },
{ path: "2/DOD-ESF, 3/sk2, 3/,", notes: "" },
{ path: "2/sk1, 2/sk1, 2/, 2/sk1, 2/sk1", notes: "" },
{ path: "2/!!, 2/sk1, 2/", notes: "" },
{ path: "4/B, 4/s1", notes: "1:F, 2P:+96!!" },
{ path: "2/!, 3/B, 2/p1Se, 2/p2Se", notes: "1M:e192!, 2P:e160, 3P:u724, 4:??" },
{ path: "2/p1, 3/, 2/p1, 2/p2", notes: "1:x, 2:x, 3:x, 4:+100" },
{ path: "3/, 3/", notes: "1:M, 2:x" },
{ path: "3/p2S, 2/D, 2/p1S, 2/S", notes: "1:?, 2:?, 3:?, 4:?" },
{ path: "3/s2, 3/B", notes: "1:F, 2:x" },
{ path: "4/, 2/, 2/s3", notes: "1M:u980!, 2P:u552, 3:x?" },
{ path: "3/sk1, 4/sk2", notes: "" },
{ path: "3/p2SE!, 3/p3", notes: "1:x, 2:x" },
{ path: "2/DT-FRS, 2/RS, 2/AT, 2/AT, 4/AT [FRS", notes: "" },
{ path: "4/, 3/p1, 2/", notes: "1M:e632!, 2M:u936!" },
{ path: "2/sk1, 2/, 3/BOD", notes: "" },
{ path: "PLEASE SUBMIT A PATH", notes: "" },
{ path: "3/, 2/, 2/p2Se", notes: "1:x, 2P:e124!!, 3P:e916" },
{ path: "2/, 3/s6*, 2/B", notes: "1:x, 2M:u212, 3M:e916 *After 4th talky phrase." },
{ path: "2/sk1, 3/sk4, 2/sk3-ESF", notes: "" },
{ path: "4/B", notes: "1:x" },
{ path: "2/sk1, 2/, 2/, 2/", notes: "" },
{ path: "2/, 3/sk1-ESP", notes: "" },
{ path: "3/s1, 2/DeE!, 2/T, 4/", notes: "1:x, 2:x, 3:x, 4:M!" },
{ path: "3/, 4/sk1 EwO", notes: "" },
{ path: "2/s1, 2/De, 2/!, 2/p6*", notes: "1:x, 2M:e484!, 3:x, 4:F!, *'Well well.'" },
{ path: "3/, 2/p2, 4/p2, 4/p1", notes: "1P:u360, 2:x, 3P:e052, 4P:e924" },
{ path: "2/Dx, 2/B", notes: "1:e480, 2:x" },
{ path: "3/sk3, 2/", notes: "" },
{ path: "3/, 2/sk1, 2/", notes: "" },
{ path: "3/, 4/, 2/!", notes: "1M:e596, 2M:u292!, 3P:e896!!" },
{ path: "2/, 2/, 2/s2-ESF, 2/", notes: "" },
{ path: "3/AT-AS, 2/ or, due to a tough AS, 3/AT-FS, 2/sk1", notes: "" },
{ path: "3/B, 3/", notes: "1P:u084, 2:x" },
{ path: "2/, 3/AS", notes: "" },
{ path: "3/, 3/s1", notes: "1P:u848, 2:x" },
{ path: "2/, 2/, 3/, 4/", notes: "" },
{ path: "2/s1, 2/B, 2/s1", notes: "1M:u764, 2M:u528, 3:x" },
{ path: "3/FRS, 2/sk3", notes: "" },
{ path: "4/, 3/sk3", notes: "" },
{ path: "3/, 2/BOD, 3/", notes: "" },
{ path: "3/ES1F, 3/ESF", notes: "" },
{ path: "2/, 2/!, 2/Dw2S10, 2/", notes: "1:x, 2M:e624!, 3P:u004/u148m:x, 4M:-172" },
{ path: "2/!, 4/, 2/!, 2/E, 3/p1", notes: "1:x, 2:F!, 3M:240, 4:x, 5:F!" },
{ path: "4/, 2/, 2/sk4", notes: "" },
{ path: "3/p2S", notes: "1M:e504!" },
{ path: "3/, 2/, 2/T", notes: "1P:e352/e448, 2:x, 3:x" },
{ path: "2/, 3/, 2/p2, 2/, 3/", notes: "1:x, 2P:u196, 3P:u980, 4:x, 5P:e660" },
{ path: "3/BOD, 2/, 2/BOD", notes: "" },
{ path: "2/, 4/", notes: "" },
{ path: "2/Se, 2/Se, 3/, 2/p1Se", notes: "1M:u652!, 2:F, 3:F, 4:u532?" },
{ path: "2/s1, 2/De, 3/", notes: "1:x, 2:x, 3:x" },
{ path: "2/s1, 2/, 3/p1w3Sx10", notes: "1:M, 2M:e116, 3:u700/e824" },
{ path: "4/, 4/, 2/", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "3/p2Sx, 2/, 3/, 2/p1", notes: "1P:u996, 2:x, 3P:e992, 4P:u588" },
{ path: "3/, 2/sk2", notes: "" },
{ path: "3/sk2, 3/, 2/", notes: "" },
{ path: "2/, 3/, 2/", notes: "" },
{ path: "4/, 2/, 2/s1", notes: "1P:u276!, 2:x, 3P:u584!" },
{ path: "3/sk1, 3/, 2/sk1", notes: "" },
{ path: "2/, 2/p1S", notes: "" },
{ path: "2/, 2!/E!, 2/, 2/p1", notes: "1:x, 2:x, 3:x, 4:x" },
{ path: "3/p1, 3/p1, 2/p1", notes: "1:x, 2:x, 3P:u420" },
{ path: "3/D, 4/B", notes: "1P:e944!, 2P:u916!" },
{ path: "4/, 2/p1S", notes: "1P:e864!, 2:M!" },
{ path: "2/s3, 3/T, 2/", notes: "1P:u340/412" },
{ path: "2/s1, 3/, 2/ EwO", notes: "1:e952 ,2:e208 ,3:e776" },
{ path: "2/AB-sk2, 2/AB-ESF, 2/AB-sk1, 2/AB-ESF, 2/AB-ESF", notes: "" },
{ path: "3/, 4/p5, 2/p1", notes: "1:M!, 2:M, 3:M!" },
{ path: "4/, 2/", notes: "" },
{ path: "3/sk3-ESF, 2/BOD", notes: "" },
{ path: "All Immediate (AI)", notes: "" },
{ path: "3/, 2/p1, 2/", notes: "1M:e580, 2M:u032" },
{ path: "2/, 2/s1, 3/s1", notes: "1:F, 2P:+124!!, 3P:u052/+136/260?" },
{ path: "2/s2, 3/, 2/B, 2/s2", notes: "1M:e232!, 2M:e792!!, 3M:u156, 4:x" },
{ path: "2/DOD-ESF, 2/sk1, 3/sk2", notes: "" },
{ path: "4/, 3/T, 2/s2", notes: "1P:u992!, 2P:e056!, 3P:e956!" },
{ path: "2/p1, 3/, 2/, 2/s1", notes: "1P:e708, 2M:u192, 3P:u488, 4P:e254" },
{ path: "2/BOD, 2/BOD, 2/sk1", notes: "" },
{ path: "2/, 4/, 2/", notes: "1:+92!!, 2M:e300, 3M:e144" },
{ path: "2/, 2/sk1-ESF, 2/sk1, 2/sk1 or 2/, 2/sk2, 2/sk1, 2/sk1", notes: "" },
{ path: "2/, 2/sk1, 2/AT, EwO", notes: "" },
{ path: "3/p1E1, 3/p2, 2/p1", notes: "1:x, 2M:u084!, 3:x" },
{ path: "2/BOD, 4/, 3/AB", notes: "" },
{ path: "2/, 3/s1", notes: "1:e792, 2:u:928" },
{ path: "3/sk1, 2/DOD-ESP, 2/BOD, 2/!", notes: "" },
{ path: "5/s2, 4/", notes: "1M:u360!, 2M:e076" },
{ path: "2/Tp1, 2/p1, 2/, 2/s1", notes: "1M:u692!, 2:M, 3M:e304!, 4:x" },
{ path: "2/, 2/DOD-ESF", notes: "" },
{ path: "3/, 3/, 2/", notes: "" },
{ path: "3/s1, 2/, 3/s2S", notes: "1:e080, 2:x(may squeeze), 3:x" },
{ path: "2/p1, 2/, 2/, 3/p1", notes: "1:+1284!!, 2M:+80, 3M:+308, 4M:u720" },
{ path: "2/, 2/, 3/p1Se", notes: "1M:e584, 2M:e696, 3:x" },
{ path: "2/sk1-ESF", notes: "" },
{ path: "4/, 4/", notes: "1M:e972, 2:x" },
{ path: "2/, 3/, 2/sk1, 2/", notes: "" },
{ path: "4/sk3, 4/sk5", notes: "" },
{ path: "2/BOD, 2/sk1-ESF, 2/sk1-ESF, 2/", notes: "" },
{ path: "5/, 4/", notes: "" },
{ path: "2/B, 3/E!, 3/S", notes: "1P:e012, 2:x, 3M:e872" },
{ path: "3/s1, 2/, 3/s1p2S", notes: "1P:e200, 2:F, 3P:e612/u000p" },
{ path: "2/S, 2/S, 2/p2E!Se, 3/S", notes: "1M:u824!, 2M:e964, e724" },
{ path: "3/, 3/Sx50!", notes: "1P:e800!, 2P:e600/e200" },
{ path: "3/, 2/p2S, 2/Sx35, 2/p1", notes: "1M:u236, 2M:u324, 3:e500/F, 4P:u100" },
{ path: "3/, 2/D, 2/D", notes: "1:x, 2M:e880, 3M:u760 (860)" },
{ path: "2/ESF, 2/ESF, 3/sk4, 2/sk1, 3/sk2", notes: "" },
{ path: "2/, 3/, 2/, 2/", notes: "" },
{ path: "2/s1, 2/", notes: "1P:+44!!, 2:x" },
{ path: "3/sk1, 4/, 3/sk2", notes: "" },
{ path: "3/, 4/, 2/p1, 2/p1S", notes: "1M:e000, 2M:e192, 3P:u024, 4M:e224" },
{ path: "2/S, 3/p1Se", notes: "1P:e636, 2:M" },
{ path: "2/BOD, 4/sk2", notes: "" },
{ path: "3/AS, 2/sk1, 2/sk3", notes: "" },
{ path: "2/sk2-ESF, 4/sk2-ESF", notes: "" },
{ path: "2/S, 2/S, 3/TS", notes: "1P:e660, 2M:-444, 3:x" },
{ path: "AI", notes: "1M:e792, 2:x, 3M:e608" },
{ path: "3/TT, 2/, 2/p1S", notes: "1M:e432!, 2:M!, 3M:u212" },
{ path: "2/s1, 2/s2, 2/s1S10", notes: "1:x, 2:e140, 3:u536/e-200" },
{ path: "2/, 3/, 4/AS", notes: "" },
{ path: "2/, 2/TE, 2/, 2/Sx", notes: "1:x, 2:x, 3M:u300, 4:x" },
{ path: "3/p2S, 4/p1S", notes: "1:x, 2:x" },
{ path: "3/s1, 2/p1Sx50 (2/BOD for casual run)", notes: "1:u936 2:u824/e824 or(e656)" },
{ path: "3/, 3/p1, 2/", notes: "1M:e368, 2:x, 3:x" },
{ path: "3/, 3/", notes: "" },
{ path: "2/s1, 2/T", notes: "1P:e656!, 2:x" },
{ path: "2/sk1, 3/sk2", notes: "" },
{ path: "4/p2Se, 3/S", notes: "1:x, 2M:e488" },
{ path: "2/p, 2/, 2/S, 3/, 3/", notes: "1P:e944, 2P:e712, 3P:e012, 4P:e628, 5P:u180" },
{ path: "2/DOD-ESF, 2/, 3/BOD, 2/BOD", notes: "" },
{ path: "3/sk3, 3/sk1, 3/", notes: "" },
{ path: "4/, 2/", notes: "" },
{ path: "3/B, 3/T", notes: "1M:e984, 2:x" },
{ path: "2/S, 2/S, 2/TS", notes: "1M:e452, 2M:u460, 3:x" },
{ path: "3/s1, 4/s2, 3/T", notes: "1M:e416!, 2:x, 3M:u468" },
{ path: "2/p2Se, 2/p2Se, 2/", notes: "1P:u720, 2M:u528, 3P:u036" },
{ path: "2/ESF, 2/sk1, 2/sk1-1p-ESF", notes: "" },
{ path: "2/!, 2/T, 2/p1", notes: "1M:u652, 2P:e452, 3P:e992" },
{ path: "3/S", notes: "1M:e004!" },
{ path: "2/2p-ESF-AS, 3/sk1-AS", notes: "" },
{ path: "3/, 2/p2", notes: "1M:u624, 2:x" },
{ path: "2/ESF, 2/DOD-ESF, 3/, 2/DOD-ESF", notes: "" },
{ path: "3/s1, 4/, 4/Dx, 2/", notes: "1M:u920, 2:x, 3:x, 4:x" },
{ path: "4/, *4/T", notes: "1M:e128!, 2:x, *OD chain is random." },
{ path: "3/Sx, 3/p1", notes: "1M:u160, 2:u276!!" },
{ path: "3/, 3/", notes: "" },
{ path: "2/p1Se, 3/p1Se, 2/p1Se, 2/p1Se", notes: "1M:e020!, 2:x, 3P:u-100, 4P:u136" },
{ path: "3/DOD-ESF", notes: "" },
{ path: "4/sk1, 3/sk1-ESF", notes: "" },
{ path: "4/, 3/, 3/,", notes: "" },
{ path: "4/, 3/, 4/T", notes: "1:x, 2M:u392!, 3:x" },
{ path: "3/ESF, 2/, 2/, 2/sk9-ES", notes: "" },
{ path: "3/, 4/", notes: "" },
{ path: "2/TSe", notes: "1P:u204!!" },
{ path: "4/sk3, 2/", notes: "" },
{ path: "4/sk1, 3/sk1", notes: "" },
{ path: "AI", notes: "No squeezes." },
{ path: "2/s1, 4/s1, 3/", notes: "1:x, 2:x, 3M:580" },
{ path: "2/, 2/s2S, 4/s1S, 2/s1S", notes: "" },
{ path: "2/sk2, 3/AS", notes: "" },
{ path: "3/sk1, 3/sk1-ESF, 3/", notes: "" },
{ path: "2/sk1, 2/sk2-ESF, 2/BOD", notes: "" },
{ path: "3/Sx, 2/S ", notes: "1:e256 2:u840" },
{ path: "2/sk1, 2/sk1, 2/, 3/sk1-ESF [Tough ESF]", notes: "" },
{ path: "5/s1, 2/, 3/", notes: "1P:e716, 2P:e064, 3:F!" },
{ path: "2/s1, 2/, 4/", notes: "1M:136, 2M:688, 3P:u552" },
{ path: "2/, 2/S, 3/", notes: "1M:e568, 2:u780, 3:x" },
{ path: "4/S, 2/", notes: "1P:u512/592, 2M:e484/564" },
{ path: "3/B, 4/s3", notes: "1M:u476!!, 2M:u688" },
{ path: "2/Sx, 4/T", notes: "1:x, 2M:u400" },
{ path: "2/, 2/Se, 3/S, 2/s5", notes: "1M:u152!, 2M:e576!, 3P:u664, 4P:e648?" },
{ path: "3/, 2/sk3, 2/", notes: "" },
{ path: "2/sk1, 3/, 2/ EwO", notes: "" },
{ path: "3/, 2/sk1, 2/sk3", notes: "" },
{ path: "2/, 3/, 2/sk1", notes: "" },
{ path: "2/, 2/s3", notes: "1M:e628!, 2:x" },
{ path: "2/s1, 2/T, 2/Se", notes: "1:x, 2:x, 3:x" },
{ path: "2/s2, 2/, 3/", notes: "1P:e640!, 2M:e452, 3M:e808" },
{ path: "PLEASE SUBMIT A PATH", notes: "" },
{ path: "2/, 2/s1, 2/p1Sx, 2/p1w1Sx", notes: "1M:u532, 2M:e816, 3:u900, 4:e476" },
{ path: "2/p2S, 4/Sx20", notes: "1:u396, 2P:e248/F" },
{ path: "2/s2, 2/, 2/TTSe", notes: "1M:e704!, 2P:e088, 3P:e380/e720" },
{ path: "3/Ts1, 3/, 2/T", notes: "" },
{ path: "4/AT-AS", notes: "" },
{ path: "2/, 2/, 2/sk1, 2/PB, 2/sk4", notes: "" },
{ path: "2/S, 3/p1S, 3/", notes: "1P:u764!, 2P:u328!, 3:x" },
{ path: "3/, 4/s1", notes: "1:x, 2:852" },
{ path: "2/B, 2/B, 2/p3w1Sx", notes: "1:x, 2:x, 3M:u168" },
{ path: "2/DOD-ESP, 2/sk1-ESP, 2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "3/AT-sk1-ESF", notes: "" },
{ path: "3/FRS, 2/ EwO", notes: "" },
{ path: "3/, 2/", notes: "1M:u296!, 2M:e960!" },
{ path: "3/B", notes: "1P:u048!" },
{ path: "NO PART", notes: "" },
{ path: "3!/p2", notes: "1:x" },
{ path: "2/s1, 3/p4S", notes: "1M:e716, 2M:u224!" },
{ path: "3/p2S, 2/p2S, 2/TT", notes: "1P:e716!, 2M:+76, 3:x" },
{ path: "2/!, 3/, 4/", notes: "" },
{ path: "AI", notes: "1M:e272, 2:x" },
{ path: "2/De, 4/, 2/", notes: "1M:u092, 2:x, 3M:e056" },
{ path: "3E*, 4/p1", notes: "1:x, 2M:e816! *¾ in between Ready/Set (2/1) countdown / freestyle change." },
{ path: "4/s3, 4/p3Se", notes: "1P:u712, 2:x" },
{ path: "3/ES EwO", notes: "" },
{ path: "2/ES1F, 2/sk2-ESF, 2/ES1F, 2/sk5-ES1F, 2/ESF", notes: "" },
{ path: "2/T, 2/Tp1", notes: "1P:e480!, 2:M" },
{ path: "4/BOD", notes: "" },
{ path: "2/, 3/, 3/sk2-AS", notes: "" },
{ path: "4/ESF, 3/", notes: "" },
{ path: "5/, 3/D, 3/TE, 2/, 3/s2", notes: "1M:u240!, 2M:u424!, 3:x, 4:x, 5:x?" },
{ path: "2/s1, 4/", notes: "1:x, 2:x" },
{ path: "2/, 3/AT-sk1-ESF, 3/", notes: "" },
{ path: "2/sk1, 2/sk1", notes: "" },
{ path: "2/p2, 4/", notes: "1M:u648!, 2M:u608!" },
{ path: "2/, 2/p1, 2/S, 2/p2S", notes: "1M:u160, 2M:u960, 3P:u372, 4M:u864" },
{ path: "2/, 2/, 2/sk1-ESF", notes: "" },
{ path: "2/s1, 3/p2SeE, 2/Se", notes: "1:+344!!, 2:x, 3M:+296" },
{ path: "4/", notes: "1M:u148" },
{ path: "AI", notes: "1P:e108!!, 2:e172!!" },
{ path: "3/DOD-ESF, 3/sk5", notes: "" },
{ path: "3/s1, 2/", notes: "1M:e576, 2:x" },
{ path: "2/B, 2/B, 2/", notes: "1M:e748, 2M:u352, 3M:u664!!" },
{ path: " 4/B, 3/p2S(60)", notes: "1:x ,2:u440/x" },
{ path: "4/, 2/, 2/", notes: "1:e348!!, 2:x, 3:F!" },
{ path: "4/sk2, 3/3p-ESF", notes: "" },
{ path: "2/D, 2/s1, 2/, 2/s1", notes: "1M:u048!, 2P:u212!!, 3:x, 4:+368" },
{ path: "2/S, 3/S", notes: "1:x, 2M:u436!" },
{ path: "2/p1S, 3/TS, 2/, 2/p1S, 2/s1", notes: "" },
{ path: "2/ESF, 2/, 2/", notes: "" },
{ path: "2/sk1, 2/sk1-ESF, 2/", notes: "" },
{ path: "3/, 3/, 2/, 3/", notes: "1M:e744, 2M:e340, 3:x, 4M:e720!" },
{ path: "4/S, 3/p1S 2/FRS, 2/sk1-ESF, 2/ESF, 2/sk3-ESF ", notes: "1M:e904, 2:x" },
{ path: "2/, 4/T, 2/", notes: "1P:+240!!, 2M:+u496!, 3:x" },
{ path: "4/s1, 4/s3", notes: "1M:e780!, 2:M" },
{ path: "2/, 3/B, 2/p1S, 2/s2, 2/!", notes: "1:M, 2:x, 3:u976, 4:e488, 5:e920" },
{ path: "2/s2, 3/, 3/s2", notes: "" },
{ path: "4/, 4/", notes: "" },
{ path: "4/p1Sx, 3/", notes: "1:F, 2M:e708!" },
{ path: "2/w1Sx, 3/w1S, 2/p2S, 3/Sx20", notes: "1:+220, 2M:u+284, 3M:e+156, 4M:u628/M" },
{ path: "2/, 2/, 3/s1", notes: "1P:e232, 2:x, 3:x" },
{ path: "5/TE1, 2/T", notes: "" },
{ path: "4/, 4/, 2/T", notes: "1P:e836, 2M:+428/u264, 3P:e556" },
{ path: "3/, 2/sk5-FRS, 2/, 2/sk4", notes: "" },
{ path: "3/Se, 3/p1SE!!, 2/p2Se", notes: "1M:e224, 2:x, 3M:u004" },
{ path: "2/, 2/, 2/sk1, 2/, 2/", notes: "" },
{ path: "2/sk1, 2/sk1, 2/", notes: "" },
{ path: "4/, 2/B, 3/, 3/", notes: "1P:e576, 2:x, 3P:e804, 4:x" },
{ path: "2/ESF, 3/ESF, 3/", notes: "" },
{ path: "2/, 3/, 3/", notes: "" },
{ path: "2/B, 3/B, 2/", notes: "1M:e308, 2P:e168" },
{ path: "2/, 4/s1, 2/, 2/", notes: "1M:e468, 2P:e428, 3P:u024, 4P:e252" },
{ path: "2/Dx, 2/p2Sx", notes: "1:x, 2:x" },
{ path: "2/, 2/p1S, 2/", notes: "1:x, 2M:444, 3:x" },
{ path: "2/, 2/ESF, 2/", notes: "" },
{ path: "3/sk1, 2/, 3/sk1, 2/sk2", notes: "" },
{ path: "3/BOD 2/DOD-ES", notes: "" },
{ path: "2/, 2/T", notes: "1M:e876!, 2P:e844" },
{ path: "3/DOD-ESF, 2/ESF", notes: "" },
{ path: "2/p2S, 3/, 3/B, 3/s2", notes: "1M:u436, 2P:u436, 3:M, 4P:u552" },
{ path: "2/E!, 3/, 3/", notes: "" },
{ path: "3/A2B, 3/sk3-1p-ESF", notes: "" },
{ path: "2/p2S, 2/, 2/p2, 3/s1", notes: "1M:u400, 2P:e620!!, 3M:+704, 4M:e356" },
{ path: "3/BOD, 4/FRS, 2/sk1-ESF", notes: "" },
{ path: "2/p2, 2/, 2/T, 3/Se", notes: "1:x, 2M:u548, 3M:u816, 4:x" },
{ path: "4/, 3/sk1", notes: "" },
{ path: "2/ESF, 2/2p-ESF, 2/sk1-1p-ESF", notes: "" },
{ path: "2/sk1-ESF, 2/DOD-ESF, 2/sk1, 2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "4/E4T, 4/B, 2/B", notes: "1:x, 2:F, 3:e384/396" },
{ path: "3/D, 5/Tp1", notes: "1:u480, 2:x" },
{ path: "4/B, 2/p2S", notes: "1M:u124!, 2:x" },
{ path: "2/, 2/sk1-ESF, 3/", notes: "" },
{ path: "2/s2, 2/T", notes: "1:+112!!, 2:x" },
{ path: "2/p2, 3/Se, 4/", notes: "1P:e532, 2M:u960/x, 3:x" },
{ path: "2/, 4/T, 2/p1S", notes: "1:x, 2:x, 3M:u612" },
{ path: "2/, 2/, 2/p1, 2/", notes: "1P:e440, 2:x, 3P:u916, 4M:u452" },
{ path: "3/, 2/, 2/sk3, 3/sk1", notes: "" },
{ path: "3/s3, 2/!, 2/", notes: "1P:e760, 2P:e300, 3:M!" },
{ path: "2/, 2/p2Se, 3/", notes: "1:x, 2M:u072, 3M:u828" },
{ path: "4/, 3/", notes: "1:x, 2:F!" },
{ path: "2/, 2/sk1, 2/sk2", notes: "" },
{ path: "3/s2, 4/s1", notes: "1:e012, 2:x" },
{ path: "4/sk1, 2/", notes: "" },
{ path: "3/sk1, 4/sk1", notes: "" },
{ path: "2/ESP, 4/sk1ESP, 4/BOD", notes: "" },
{ path: "2/p1, 2/, 2/, 2/, 2/p2", notes: "1:M, 2:x, 3:M, 4P:e484, 5:x" },
{ path: "4/sk2-ES1F, 3/sk1-ES1F EwO", notes: "" },
{ path: "2/B, 2/s2, 2/, 2/s1", notes: "1:x, 2:+172!!, 3:x, 4:x" },
{ path: "2/, 4/, 2/B", notes: "1:x, 2:x, 3:x" },
{ path: "4/BOD, 2/sk2, 3/", notes: "" },
{ path: "2/, 3/B, 2/, 2/", notes: "1:x, 2:u036, 3:x, 4:e984/996" },
{ path: "2/!, 3/, 2/Se", notes: "1:e896, 2:e408, 3:u540" },
{ path: "2/, 3/BOD, 3/, 2/1p-ESF", notes: "" },
{ path: "2/, 2/BOD, 2/FRS, 2/sk6 [FRS", notes: "" },
{ path: "2/, 2/, 2/sk2", notes: "" },
{ path: "3/p2Se, 3/S", notes: "1:x, 2:+88!!" },
{ path: "2/BOD, 2/, 3/sk3", notes: "" },
{ path: "3/DOD-ESF, 3/sk5-ESF, 2/sk2", notes: "" },
{ path: "2/p2S, 2/p2S, 2/p2S", notes: "1:x ,2:x ,3:e836" },
{ path: "2/p3S, 3/p1S, 2/E!, 2/", notes: "1:e288, 2:e484, 3:x, 4:x" },
{ path: "2/s1, 3/S, 4/", notes: "1:x, 2M:u468!, 3:x" },
{ path: "3/sk2-1p-ESF, 3/", notes: "" },
{ path: "N/A", notes: "" },
{ path: "3/, 2/sk1", notes: "" },
{ path: "3/B, 3/, 2/B", notes: "1M:u568, 2M:u732!, 3M:e020!" },
{ path: "2/sk6, 2/, 3/sk1, 3/, 2/!", notes: "" },
{ path: "2/, 3/s1, 2/s2", notes: "1:x, 2:+324!!, 3:e640!" },
{ path: "2/sk1, 3/, 2/!", notes: "" },
{ path: "3/, 2/FRS, 2/sk2-ESF", notes: "" },
{ path: "2/p1S, 4/p1E, 2/, 3/", notes: "1:u480, 2:x, 3:+440/u748, 4:u156/u600" },
{ path: "3/E4t, 3/, 2/", notes: "1:x, 2:+360, 3:M" },
{ path: "2/p1, 2/p1, 3/, 2/T", notes: "1:x, 2:x, 3:M!, 4:x" },
{ path: "2/, 2/, 2/sk1", notes: "" },
{ path: "2/sk2, 2/sk1, 2/sk1, 2/, 2/", notes: "" },
{ path: "3/, 4/B, 2/p5", notes: "1:u412, 2:x, 3:M" },
{ path: "2/s2, 3/s2, 2/", notes: "1:132!, 2M:504, 3:808" },
{ path: "3/p2, 2/B, 2/D", notes: "1M:e292, 2P:u052, 3M:u576" },
{ path: "3/p2SE!, 3/p2, 2/p1", notes: "1:x, 2:x, 3P:u768" },
{ path: "NO PART", notes: "" },
{ path: "4/, 2/p1w2S, 2/, 2/", notes: "1P:u880, 2M:e676, 3:x, 4:e800!" },
{ path: "2/, 2/p1S, 2/S", notes: "1:x, 2M:e396!, 3P:e000/164" },
{ path: "2/ESF, 2/sk2, 3/ESF, 2/sk5-ESF", notes: "" },
{ path: "2/, 2/sk1-ESF, 2/BOD", notes: "" },
{ path: "2/, 4/, 3/", notes: "1M:e624!, 2P:e828!, 3:M" },
{ path: "2/BOD, 2/sk1-ESF, 2/PB", notes: "" },
{ path: "2/sk2-FRS, 2/, EwO", notes: "" },
{ path: "2/, 3/, 3/", notes: "1P:u676!, 2P:u008, 3P:e924!" },
{ path: "2/sk4, 4/DOD-ESF, 2/", notes: "" },
{ path: "2/E1½, 2/p1S", notes: "1:x, 2M:e608" },
{ path: "2/, 2/B, 3/", notes: "1:x, 2P:e212!, 3:x" },
{ path: "2/s1, 2/T, 2/s2", notes: "1:x, 2:x, 3:x" },
{ path: "2/sk1-AS-ESP, 2/sk1-ESP, 2/sk3-ESP", notes: "" },
{ path: "2/, 2/p2, 3/p2", notes: "1:x, 2P:u640!, 3:x" },
{ path: "2/p1, 2/p2, 2/B", notes: "1M:e496, 2M:e360, 3:540" },
{ path: "2/s2, AI", notes: "" },
{ path: "2/T, 2/T", notes: "1M:+504!!, 2:x" },
{ path: "3/, 2/T*, 3/s1", notes: "1P:e792, 2P:e480, 3:x" },
{ path: "3/s1, 2/Se, 2/p1Se", notes: "1:M, 2M:u792, 3P:u188" },
{ path: "3/sk1, 2/sk5, 3/AB-ESF", notes: "" },
{ path: "3/sk1, 4/sk2, 2/", notes: "" },
{ path: "3/BOD, 4/BOD", notes: "" },
{ path: "4/p1Sx, 3/p1w1Sx", notes: "1:x, 2:M" },
{ path: "2/DOD-ESF, 4/ESF", notes: "" },
{ path: "3/, 2/D", notes: "1M:u016!, 2M:-420" },
{ path: "4/, 3/, 3/ESF", notes: "" },
{ path: "4/sk4-ESF, 2/BOD EwO", notes: "" },
{ path: "4/, 2/sk2", notes: "" },
{ path: "3/T, 2/", notes: "1:e864, 2:M" },
{ path: "5/", notes: "1M:u168" },
{ path: "AI", notes: "" },
{ path: "2/sk1-ESF, 2/sk2-ESF, 2/sk3-ESF, 2/sk4-ESF", notes: "" },
{ path: "2/sk2-AS, 3/sk1, 2/", notes: "" },
{ path: "2/sk1, 2/BOD-BBFRS, 2/sk4-ESF", notes: "" },
{ path: "3/, 2/B", notes: "1M:u300, 2:+24!" },
{ path: "2/p2, 4/p1S", notes: "1:u284, 2:u176" },
{ path: "3/sk1, AI", notes: "" },
{ path: "2/BOD, 2/BOD, 3/sk1", notes: "" },
{ path: "2/p1Se, 2/p1Se, 2/S", notes: "1M:e684, 2M:u068, 3M:u420" },
{ path: "2/BOD", notes: "" },
{ path: "2/BOD, 4/", notes: "" },
{ path: "2/s1, 2/s2", notes: "" },
{ path: "2/p1, 2/S, 2/p1", notes: "1:+88!!, 2:x, 3:x" },
{ path: "3/, 3/sk1", notes: "" },
{ path: "4/sk1, 2/sk2, 4/", notes: "" },
{ path: "3/D, 2/!", notes: "1M:u684, 2P:+68!!" },
{ path: "2/, 3/De", notes: "1:x, 2M:e660" },
{ path: "2/S, 2/!E2t, 2/p1, 2/p3w2S", notes: "1P:e412!, 2:x, 3M:e704, 4P:e272" },
{ path: "3/, 2/p1, 2/B, 3/p1w1Sx", notes: "1P:u272, 2:+200!!, 3:u900, 4M:+900" },
{ path: "2/p2S, 2/D, 3/S, 2/D, 2/p1S", notes: "1M:u816, 2M:e156, 3M:e720, 4M:u000, 5P:u536" },
{ path: "2/, 2/Se, 2/p2Se, 2/p1Sx12", notes: "1P:e388, 2P:e724, 3P:u824, 4:e964/x" },
{ path: "3/S, 4/, 4/", notes: "1:e728/840, 2:x, 3:+20!!" },
{ path: "2/BOD", notes: "" },
{ path: "2/sk2-ESP, 2/sk1, 3/sk1-ESF", notes: "" },
{ path: "2/sk4, 4/sk1", notes: "" },
{ path: "2/, 3/sk1-AS, 3/", notes: "" },
{ path: "2/sk2-ESF, 2/sk1, 2/sk3", notes: "" },
{ path: "3/s1, 2/p1Se", notes: "1M:e772!, 2:M!!" },
{ path: "2/Dx5, 2/p1S, 2/, 2/s1p2w1Se", notes: "1:u800/-364, 2P:u784!, 3M:+140, 4:+800!" },
{ path: "4/, 3/, 3/s1", notes: "1:x, 2M:u304, 3M:+472" },
{ path: "AI", notes: "1:x, 2:x" },
{ path: "4/, 2/sk1, 2/, 2/sk4-ESF", notes: "" },
{ path: "2/sk1-ESF, 2/sk1-RS, 2/ESF, 2/", notes: "" },
{ path: "2/, 3/Dx, 2/, 2/p1", notes: "1M:e996, 2P:u950, 3:e950, 4:u500" },
{ path: "2/B, 3/", notes: "1P:e436, 2M:-328!" },
{ path: "3/sk1-ESF 2/ 2/BOD", notes: "" },
{ path: "3/SE1t, 3/Tp2S", notes: "1:x, 2:M" },
{ path: "2/, 2/sk1, 2/", notes: "" },
{ path: "3/s1, 3/s2, 3/", notes: "1:e416, 2:x, 3:x" },
{ path: "AI", notes: "" },
{ path: "3/, 3/, 2/, 5/", notes: "1:e564!, 2:x, 3:+100!!, 4:x" },
{ path: "3/BOD", notes: "" },
{ path: "3/p2, 4/", notes: "1:x, 2:x" },
{ path: "AI", notes: "" },
{ path: "2/s1, 2/, 3/, 2/p1Se", notes: "1M:e536, 2M:u640, 3P:e828, 4M:e108" },
{ path: "2/sk1-ESF, 3/sk1-ESF, 2/sk1", notes: "" },
{ path: "3/B, 2/B", notes: "1M:e872, 2M:e512!" },
{ path: "or, EwO", notes: "" },
{ path: "3/sk1, 2/sk2, 2/sk1, 2/sk1-ESP", notes: "" },
{ path: "2/, 2/, 2/s1, 3/B", notes: "" },
{ path: "3/, 4/T, 2/p4", notes: "1P:e316!!, 2P:+40!!, 3M:+460" },
{ path: "2/, 2/p2, 2/, 3/S", notes: "1M:e872!, 2M:e296!, 3:e456!, 4:M!" },
{ path: "2/s2, 2/s2, 2/s1, 4/s2", notes: "1M:e332!, 2:M, 3M:u812!, 4:x" },
{ path: "2/, 2/Se, 2/B, 2/Ts2", notes: "1M:e664!, 2P:u704, 3M:u028!, 4P:e308" },
{ path: "2/sk4, 2/sk1", notes: "" },
{ path: "4/, 3/B ", notes: "1M:u728, 2M:e444!" },
{ path: "2/S, 2/p1S, 3/S", notes: "1M:e428, 2M:e824, 3:x" },
{ path: "2/p1S, 2/TS, 2/", notes: "1M:e400, 2M:e908, 3M:u816!" },
{ path: "2/s1, 2/p2Se, 2/B, 2/", notes: "1:x, 2M:u004, 3:x, 4:x" },
{ path: "3/, 2/Sx!, 2/, 2/Sx", notes: "1:x, 2:x, 3:x, 4M:-32" },
{ path: "2/, 2/B, 3/s3E1¾, 2/B", notes: "1M:+340/344!!, 2M:+1008!, 3:x, 4M:+1120" },
{ path: "2/, 2/, 4/s1", notes: "1:x, 2:u144, 3:e248" },
{ path: "2/B, 2/D, 3/p1S", notes: "" },
{ path: "2/p1, 2/p1S, 2/TE½, 2/p1S", notes: "1P:e100!!, 2:M, 3:x, 4M:-100!!" },
{ path: "3/p2, 2/p2, 2/", notes: "1M:u552, 2P:u560/736p, 3:+200!!" },
{ path: "2/S, 3/TS, 3/w1S", notes: "1P:u932, 2P:u336, 3M:e312" },
{ path: "2/, 2/s1, 2/D", notes: "1M:e240!!, 2:M, 3?:e720!" },
{ path: "3/s1E*, 2/", notes: "1:x, 2:M, *Right before 6th freestyle change." },
{ path: "2/!, 3/B, 3/B, 2/p3", notes: "1M:e860, 2:M, 3P:u244, 4P:e248" },
{ path: "2/!, 2/s2, 4/", notes: "1:e186, 2:+400, 3:-256" },
{ path: "4/BOD, 2/sk1-ESF, 2/", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/, 5/p3, 3/, 2/p1S, 2/p1SE, 3/S, 3/, 2/p1, 2/", notes: "1:M, 2M:e656, 3M:e112, 4M:u144, 5:x, 6M:u696!, 7:M, 8M:e764!, 9:x" },
{ path: "4/B, 2/s1 2/!, 2/B, 2/!", notes: "1M:u288!, 2:x" },
{ path: "AI", notes: "1:x, 2P:u636" },
{ path: "3/", notes: "" },
{ path: "3/, 2/", notes: "1:x, 2:x" },
{ path: "2/D, 2/s3, 4/s1, 3/", notes: "" },
{ path: "4/, 2/ES1F, 2/", notes: "" },
{ path: "2/T, 3/Tp2Sx!, 3/p2Sx15!", notes: "1M:+72!!, 2M:F/e200, 3P:u168/x" },
{ path: "2/p3Sx, 2/, 2/, 2/Sx, 2/Tp3", notes: "1M:e448, 2:F, 3:+100, 4M:e492, 5M:u756" },
{ path: "2/, 2/, 3/", notes: "1M:u176?, 2:x, 3:x" },
{ path: "4/, 3/Ts1, 3/Ts1", notes: "1:e284, 2:e968, 3:u868" },
{ path: "2/p2Sx!, 2/, 3/Ts1, 2/", notes: "1M:e864!, 2:x, 3P:u784/828p, 4:x" },
{ path: "2/, 3/, 2/, EwO", notes: "" },
{ path: "4/T", notes: "" },
{ path: "2/sk1, 3/, 2/BOD", notes: "" },
{ path: "2/S, 2/Tp1S", notes: "1M:e752, 2M:u412" },
{ path: "3/p4E4t, 2/!!", notes: "" },
{ path: "2/, 3/, 2/AS, 2/", notes: "" },
{ path: "2/, 2/, 2/, 2/, 2/, 2/B", notes: "1:x, 2:e312, e428:, 4:e704, 5:u884(more here), 6:x" },
{ path: "3/, 2/, 2/sk1-ESP", notes: "" },
{ path: "3/DOD-ESF, 4/sk2", notes: "" },
{ path: "2/s1, 2/T, 2/", notes: "1:x, 2:F, 3:x" },
{ path: "3/, 3/, 2/", notes: "" },
{ path: "2/p1, 2/, 2/p1, 2/p2", notes: "1:M, 2:M, 3P:e496!, 4:x" },
{ path: "3/Dx, 2/TS, 2/p3S", notes: "1M:u508, 2M:e020, 3:x" },
{ path: "2/s4, 3/s2, 2/B", notes: "" },
{ path: "2/B, 2/p2, 2/TE⅓, 2/s2", notes: "1P:e252!, 2P:e340!, 3:x, 4P:u644" },
{ path: "2/BOD, 2/sk2-ESF, 2/sk3-ESF", notes: "" },
{ path: "3/AT-sk1", notes: "" },
{ path: "AI", notes: "1:M!, 2M:488" },
{ path: "AI", notes: "1:x, 2M:u648!" },
{ path: "4/p2S, 2/, 2/", notes: "1:F, 2:F, 3M:u012" },
{ path: "2/DOD-ESF, 3/FRS, 2/sk3", notes: "" },
{ path: "2/sk1, 2/sk2, 2/sk1", notes: "" },
{ path: "2/B, 2/B, 2/B", notes: "1M:e628, 2P:u728!, 3M:-420" },
{ path: "AI", notes: "1M:+200!!, 2M:+u188!" },
{ path: "2/p1, 2/Dx!, 3/p1S, 2/p1Sx, 2/p1, 2/p3", notes: "1M:e680!, 2:M, 3M:+196, 4P:u020, 5P:+400, 6P:+184" },
{ path: "2/p1, 2/, 2/", notes: "1P:u248, 2:x, 3:x" },
{ path: "2/, 2/sk2-ESF, 3/sk1-ES1F, 2/sk2", notes: "" },
{ path: "2/B, 3/, 2/De", notes: "1M:u788, 2M:u672!, 3M:u932!" },
{ path: "3/s1, 3/, 3/", notes: "1P:+140!, 2M:u888, 3M:u124" },
{ path: "2/p1, 2/, 2/, 3/p1", notes: "1M:u196!, 2P:u256!, 3P:u596!, 4:x" },
{ path: "2/sk1-ESF, 3/sk3-ESF, 3/", notes: "" },
{ path: "4/", notes: "1M:u424!" },
{ path: "2/, 4/sk2, 3/", notes: "" },
{ path: "4/, 2/", notes: "1P:e924, 2:x" },
{ path: "3/AT-sk1-RS-ESF, 3/", notes: "" },
{ path: "2/BOD, 2/, 3/sk1", notes: "" },
{ path: "2/sk2, 4/sk1, 3/", notes: "" },
{ path: "2/, 2/S, 2/S", notes: "1P:u040, 2M:u292, 3M:u952" },
{ path: "3/s1, 4/", notes: "1M:e492!, 2:M" },
{ path: "3/, 3/, 3/", notes: "1M:u516, 2P:u060!, 3P:e440!" },
{ path: "2/s1, 2/, 2/s1, 3/s2", notes: "1P:e780, 2P:u588, 3:x, 4P:e204" },
{ path: "2/BOD, 2/sk1, 2/AT EWO", notes: "" },
{ path: "2/, 3/Sx, 3/p3S", notes: "1P:u772, 2M:u988, 3:M" },
{ path: "2/, 3/S, 4/w1S, 2/p1", notes: "1M:u740, 2P:e364, 3M:u240, 4M:u328" },
{ path: "3/, 3/p1, 2/p2, 2/", notes: "1M:u912, 2:e268, 3M:e304, 4P:e456" },
{ path: "2/B, 4/s1", notes: "" },
{ path: "2/s1, 3/B", notes: "1:244!!, 2P:456!!" },
{ path: "4/sk1, 2/sk1, 2/sk1", notes: "" },
{ path: "2/sk1-ES, 3/DOD-ESF", notes: "" },
{ path: "4/Se", notes: "1:x" },
{ path: "4/B, 3/, 2/", notes: "1:x, 2P:e200!, 3M:+428" },
{ path: "2/Dx!, 3/, 2/p2", notes: "1:M/u476, 2:M, 3:x" },
{ path: "4/s1S, 4/, 2/S", notes: "" },
{ path: "3/s3, 2/s2, 3/, 2/s1", notes: "1P:e820, 2:F, 3:x, 4:x" },
{ path: "3/, 2/s1, 2/, 3/, 3/", notes: "1M:e716!, 2:x, 3P:u576!!, 4M:+336!, 5M:u+188!" },
{ path: "2/, 3/AT, 2/AT", notes: "" },
{ path: "3/sk2-FRS, 3/BOD, EwO [FRS", notes: "" },
{ path: "2/D, 2/p1S, 2/", notes: "1M:u284, 2P:e656, 3:x" },
{ path: "4/, 4/", notes: "1M:e744, 2:x" },
{ path: "2/Se, 2/p1, 2/p2S, 2/", notes: "1M:u768!, 2P:e640!, 3:F!, 4:x" },
{ path: "2/, 2/, 2/sk2-ESP, 3/sk2", notes: "" },
{ path: "5/s1", notes: "1:M" },
{ path: "2/D, 4/!, 2/TS, 2/", notes: "1P:u852!, 2:F, 3P:e796, 4M:u840" },
{ path: "4/sk4-ESF, 2/sk1", notes: "" },
{ path: "2/, 2/sk2, 2/sk4-ESF, 3/sk3-ESF", notes: "" },
{ path: "3/sk2, 4/, 3/", notes: "" },
{ path: "2/B, 2/B", notes: "1M:e868!" },
{ path: "(4/) OR (2/p2S40, 2/S), 2/B, 2/w2Sx", notes: "(1:x) OR (1S1:u400, 1S2:u840, 2:e024), 3:x, 4M:u+784" },
{ path: "4/, 3/, 2/", notes: "1:x, 2:x, 3M:e472" },
{ path: "2/s2, 2/B, 2/, 3/B", notes: "1M:u076!, 2M:u620?, 3M:u152?, 4:x" },
{ path: "2/S, 2/S, 2/", notes: "1M:u696!, 2M:u316!, 3:x" },
{ path: "2/s1, 2/s2", notes: "1M:u712, 2M:e852" },
{ path: "4/, 4/, 3/", notes: "1:x, 2:+92!!, 3:x?" },
{ path: "2/, 3/, 2/, 2/", notes: "1:x, 2:x, 3:x, 4:+160" },
{ path: "2/, 4/B, 3/", notes: "1:x, 2:x, 3M:+568!" },
{ path: "4/p2S", notes: "1:M" },
{ path: "2/sk2, 3/sk2, 4/ESF", notes: "" },
{ path: "3/, 2/Se, 3/", notes: "1P:u980!, 2P:e-100!, 3?:+700!!" },
{ path: "2/S, 3/Tw2Se, 2/D", notes: "1P:u048!!, 2M:u632, 3P:u580" },
{ path: "2/B, 3/p1", notes: "1M:u948, 2M:u912" },
{ path: "2/p1, 3/B", notes: "1:F!!, 2M:u984!" },
{ path: "2/, 2/, 2/B", notes: "1:M, 2:M!, 3M:e012" },
{ path: "AI", notes: "1:x, 2:x, 3P:e312!!" },
{ path: "3/, 3/ EWO", notes: "" },
{ path: "4/p2S, 3/", notes: "1P:+256!, 2:x" },
{ path: "2/, 3/E3t, 3/", notes: "" },
{ path: "3/BOD, 2/sk1", notes: "" },
{ path: "3/p1SE!, 2/Tp2S", notes: "1:x 2M:u240?" },
{ path: "2/sk1, 3/, 2/", notes: "" },
{ path: "2/!, 2/, 3/", notes: "1:F, 2:F, 3:x" },
{ path: "AI", notes: "" },
{ path: "2/, 2/B, 3/, 3/B", notes: "1:x, 2:F, 3:x, 4M:e916" },
{ path: "2/D, 2/, 2/!", notes: "1M:u280!, 2:x, 3:x" },
{ path: "2/sk3-ESF, 2/, 2/sk1", notes: "" },
{ path: "3/, 2/B", notes: "1:x, 2:M" },
{ path: "4/T, 3/", notes: "" },
{ path: "2/, 3/Tp1", notes: "1P:+300, 2P:u284" },
{ path: "3/sk1, 2/sk2, 2/sk5", notes: "" },
{ path: "2/, 3/sk1, 4/sk1", notes: "" },
{ path: "2/sk1, 3/sk1, 3/", notes: "" },
{ path: "3/, 2/p1Sx, 3/, (2/ or 3/s1)", notes: "1P:u772, 2:M, 3P:u112, 4:M" },
{ path: "3/s3, 2/p1, 2/!, 2/B, 2/", notes: "1:u844!!, 2:F, 3:u400!!, 4:e536!!, 5:x" },
{ path: "2/sk2, 3/sk2, 4/", notes: "" },
{ path: "3/AS, 2/!, 2/sk1-ESF, 2/sk1", notes: "" },
{ path: "3/, 3/p1Se", notes: "1:x, 2M:u756!" },
{ path: "2/sk2-ESF, 2/RS, 2/,, 3/sk3 OR 2/sk2-ESF, 2/RS!, 2/, 2/AT-FRS, 2/RS!, 2/sk3", notes: "" },
{ path: "3/DOD-ESF, 2/sk1-ESF, 2/", notes: "" },
{ path: "3/, 2/TSe, 2/p1, 2/p1", notes: "1P:e756, 2M:-152, 3P:e488, 4P:e916" },
{ path: "2/DOD-ESF, 2/BOD, 2/1P-ESF", notes: "" },
{ path: "4/sk1, 3/sk1", notes: "" },
{ path: "2/S, 3/s2, 2/S", notes: "1M:e896!, 2P:u256!!, 3M:u+844" },
{ path: "3/B, 2/E2, 3/T", notes: "1:M!!, 2:x, 3:u792" },
{ path: "3/B, 2/!, 2/", notes: "1:x, 2:x, 3P:u344" },
{ path: "3/sk2-RS-ESF, 4/sk2, 2/sk2, EwO", notes: "" },
{ path: "2/D, 2/", notes: "1M:e740!, 2:M" },
{ path: "2/, 3/sk1, 3/sk1", notes: "" },
{ path: "2/, 2/, 2/Se", notes: "1:+484!!, 2:x, 3:x" },
{ path: "2/, 3/, 2/, 2/", notes: "" },
{ path: "3/Se, 3/Se", notes: "1:u296/500, 2:e264?" },
{ path: "3/s2, 2/, 2/p1Se", notes: "1:x, 2:x, 3P:u364!" },
{ path: "2/sk1-ESF, 2/AT-FRS, 2/sk1-1p-ESF", notes: "" },
{ path: "2/BOD, 3/, 3/sk1", notes: "" },
{ path: "2/, 2/, 4/sk8-ESF", notes: "" },
{ path: "3/p1, 3/", notes: "1P:+12!!, 2P:u444" },
{ path: "3/, 3/p1S, 2/B", notes: "1:F, 2:F, 3P:e356!" },
{ path: "2/, 2/, 4/s1", notes: "1:x, 2:+100!, 3:x" },
{ path: "2/, 2/, 3/p2", notes: "1:x, 2:x, 3P:e628" },
{ path: "2/, 2/sk1-ESF-FRS, 2/, 2/sk1-ESF", notes: "" },
{ path: "4/sk1, 3/ewo ", notes: "1:u536, 2:M" },
{ path: "3/, 2/sk3-ESF", notes: "" },
{ path: "4|2T|3", notes: "1:e628|2:e012|3:u048" },
{ path: "3/Dx04, 3/s1", notes: "1:u816/x, 2:M!" },
{ path: "AI", notes: "1:e384, 2:+100!!, 3:x, 4:u512" },
{ path: "2/sk1, 3/, 2/", notes: "" },
{ path: "2/ESF, 2/FRS, 2/sk6-AS, 3/sk2, 2/", notes: "" },
{ path: "2/BOD, 2/BOD, 3/", notes: "" },
{ path: "3/, 2/, 2/", notes: "" },
{ path: "3/, 2/", notes: "" },
{ path: "4/FRS, 2/s2, 2/", notes: "" },
{ path: "3/, 2/s2, 2/s3", notes: "1:x, 2M:e620!, 3:x" },
{ path: "2/, 3/s2", notes: "1:+236!!, 2:+68!!" },
{ path: "2/, 2/B, 2/, 3/T, 3/", notes: "1M:e800, 2P:u388, 3:M, 4P:u912, 5M:-200" },
{ path: "2/B, 2/, 3/", notes: "" },
{ path: "2/sk1ESF, 2/, 2/ESF, 3/", notes: "" },
{ path: "3/, 2/, 3/, 2/ESF", notes: "" },
{ path: "2/sk2, 2/sk1, 2/AT-sk1, 2/sk1", notes: "" },
{ path: "3/Se, 3/Se", notes: "1:x, 2:x" },
{ path: "3E/w1Sx35, 3/s1", notes: "1:e524/F, 2:-170" },
{ path: "2/, 2/, 2/p3S, 2/w1Se, 2/p1S, 4/p1", notes: "1P:e964, 2:x, 3M:u252, 4:x, 5:x, 6P:e276" },
{ path: "2/E, 4/", notes: "1:x, 2P:e972!" },
{ path: "2/s2S, 2/, 3/", notes: "" },
{ path: "2/, 2/s1, 4/T, 4/", notes: "1:x, 2:x, 3P:u228, 4:u300!!" },
{ path: "3/sk1-ESF, 2/, 2/", notes: "" },
{ path: "3/, 3/sk1", notes: "" },
{ path: "3/, 2/, 2/", notes: "" },
{ path: "2/, 3/, 3/T", notes: "1M:e568, 2M:u132!, 3M:u068!" },
{ path: "3/, 3/p1D, 3/B, 2/p2", notes: "1:M, 2:M, 3:M, 4P:e168" },
{ path: "2s2|3|2s2", notes: "1:u564|2:e040|3:u324" },
{ path: "3AI, 2/S, 2/, 2/s2", notes: "1:+420!!, 2P:+440!, 3P:e212!, 4P:u980!, 5M:+76" },
{ path: "2/, 2/s1, 3/E2t, 2/", notes: "1M:u580!!, 2:x, 3:x, 4:x" },
{ path: "3/sk4-ESF, 4/sk1-ESF", notes: "" },
{ path: "2/sk2-ESF, 2/sk1-ESP, 2/sk2-ESF", notes: "" },
{ path: "2/, 2/, 3/, 2/", notes: "1P:e200, 2P:u500, 3:x, 4:x" },
{ path: "2/s1, 4/p2Sx20", notes: "1M:e232!!, 2P:u464/x" },
{ path: "4/, 4/s1, 2/T, 3/, 4/", notes: "1P:e240/+200, 2P:u068/+100, 3P:u584, 4:M, 5M:e408/x" },
{ path: "2/p2Se, 2/Se, 2/Se, 2/Se", notes: "1P:e248, 2M:e-104, 3:x, 4P:+392/+500?/e236" },
{ path: "2/sk2, 3/, 2/sk1", notes: "" },
{ path: "2/sk1, 2/", notes: "" },
{ path: "2/, 2/sk2ESF, 2/AT-BOD, 2/sk2", notes: "" },
{ path: "2/B, 2/p1Se, 3/p5Se", notes: "1M:u396!, 2M:e560!, 3M:u908!" },
{ path: "2sk1, 3/ESF", notes: "" },
{ path: "2/, 4/BOD, 3/AB", notes: "" },
{ path: "2S|2p3S|2p3S|2w2S", notes: "1:e500|2:e880|3:+548|4:+668" },
{ path: "2/, 2/, 2/DOD-ESF, 2/sk1-ESP", notes: "" },
{ path: "3/AS, 2/AT", notes: "" },
{ path: "3/p2Se, 2/, 3/s1", notes: "1:x, 2P:u852, 3M:-332" },
{ path: "3/sk1, 2/, 2/sk2", notes: "" },
{ path: "2/, 3/, 2/s1, 3/s1", notes: "1:x, 2M:u176, 3:x, 4P:u540!" },
{ path: "3/, 3/, 2/s1", notes: "1M:e580, 2M:e292, 3M:e936" },
{ path: "2|3p2|2|2", notes: "1:+148|3:+292" },
{ path: "2/, 2/, 3/AS", notes: "" },
{ path: "3/, 3/s1", notes: "1M:e600!, 2:M" },
{ path: "2/s1, 2/s1, 2/p1S, 2/p1S", notes: "1M:u140, 2M:e732, 3M:e120, 4M:u540" },
{ path: "4/, 4/", notes: "1:M!, 2:M!" },
{ path: "2/, 3/, 3/s1", notes: "1M:u920, 2:M, 3P:e264!" },
{ path: "2/, 3/p1, 2/s1", notes: "1:x, 2P:e076, 3M:+344" },
{ path: "3/p1S, 2/S, 2/p2S", notes: "1M:e160!, 2M:e460, 3M:u492" },
{ path: "2/Se, 3/D, 2/De, 2/B", notes: "1M:u996!!, 2:x, 3P:968/096!!, 4M:e-256" },
{ path: "3/, 3/p2, 4/p1", notes: "1:M, 2:x, 3M:u400!" },
{ path: "2/p1Se, 2/S, 2/Se, 2/S", notes: "1M:e232, 2M:e840/892!, 3M:u588/640, 4:x" },
{ path: "2/1p-ESF, 2/sk1-ESF, 2/sk2-ESF", notes: "" },
{ path: "3|4", notes: "1:F|2:u348" },
{ path: "4/Dx*", notes: "1?:+100!!, *OD chain is rng." },
{ path: "3/, 2/, 3/sk3", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "2/B, 2/, 3/D", notes: "1:x, 2M:e420!, 3P:e732!!" },
{ path: "3/, 2/, 2/sk3-ESF", notes: "" },
{ path: "2/s2, 4/s1, 4/s1", notes: "1:e048, 2:u244, 3:u876" },
{ path: "3/, 2/sk1, 3/sk1, 2/sk1", notes: "" },
{ path: "2/, 2/B", notes: "1:x, 2M:u664!" },
{ path: "2/p2, 2/!, 2/, 3/p2", notes: "1P:820!!, 2:x, 3:x, 4:x" },
{ path: "2/, 2/s1, 3/T, 2/", notes: "1M:56!!, 2M:u+588, 3:x, 4:x" },
{ path: "2/, 3/, 3/", notes: "1P:u044/080!, 2P:e728!, 3:M" },
{ path: "3/sk1, 4/, 2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "3/sk1-EW, 3/AT-EW, 2/BOD-EW", notes: "" },
{ path: "2/p2S, 2/p3", notes: "1:x, 2P:e992" },
{ path: "2/!, 2/, 2/!, 3/sk1", notes: "" },
{ path: "2/p2, 3/, 2/p2, 2/, 3/", notes: "1P:316!, 2P:680!, 3:x, 4:x, 5:x, 6:x" },
{ path: "2S|2|2p1S", notes: "1:u352/400|3:e076" },
{ path: "4/S, 3/", notes: "1P:u720, 2M:u152" },
{ path: "4/s1, 3/B", notes: "1:M, 2:+44!!" },
{ path: "2E|4", notes: "2:e372|E:5.75s after phrase." },
{ path: "3/s2, 2/s2", notes: "1P:u300, 2P:e800" },
{ path: "2/, 2/, 3/Tp1", notes: "1P:u400, 2:x, 3P:u132" },
{ path: "2/s2, 5/", notes: "1:M, 2:x" },
{ path: "4/s1, 2/", notes: "1M:+40!!, 2:+412!" },
{ path: "4/, 3/AB, 3/", notes: "" },
{ path: "2/sk2-ES1P, 3/sk1-ESF, 2/DOD-ES1P", notes: "" },
{ path: "2/sk2-ESF, 3/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "2/p1w1Sx, 2/TSx25, 2/", notes: "1:M, 2:u452/e908, 3:x" },
{ path: "3/, 2/B", notes: "1:M!, 2:e556!" },
{ path: "NO PART", notes: "" },
{ path: "2/, 2/sk1, 4/", notes: "" },
{ path: "4/, 2/BOD", notes: "" },
{ path: "2/sk1-ESF, 2/ESF, 3/sk3-ESF, 2/sk2", notes: "" },
{ path: "2/, 3/", notes: "" },
{ path: "2/, 2/B, 2/, 2/s1", notes: "1:e396!, 2:e776!, 3:e868!!, 4:x" },
{ path: "3/, 3/, 2/T, 3/s1", notes: "1:+204!!, 2M:u+124, 3:M, 4P:+92" },
{ path: "2/ESF, 2/ESF", notes: "" },
{ path: "2/, 4/", notes: "1M:e852!, 2:F!" },
{ path: "2p1S|2p1S10|2p1S10|2S", notes: "1:u216/412|2:e524|e032|+100T|3:e824/u416|4:+120" },
{ path: "3/, 3/, 2/s2", notes: "1P:u652!, 2P:+376!!, 3:x" },
{ path: "2/, 4/, 3/, 2/!, 2/B", notes: "1:M, 2:M, 3P:e520, 4:x, 5P:u180" },
{ path: "2/D, 2/TS", notes: "1:x, 2:x" },
{ path: "2/E, 2/p1, 2/p1, 3/T", notes: "1:x, 2P:u884, 3M:+220, 4P:e464" },
{ path: "4/, 4/, 3/sk2", notes: "" },
{ path: "4/E3t, 2/", notes: "1:x, 2:x" },
{ path: "3/, 2/BOD", notes: "" },
{ path: "4/Tw1S, 2/p1S, 3/, 2/Se", notes: "1:+64!!, 2P:e340, 3P:e716, 4M:u424" },
{ path: "4/Ts1, 2/", notes: "1:+216!!, 2:x?" },
{ path: "3/, 2/ EwO", notes: "" },
{ path: "3/, 2/s1, 3/s1", notes: "" },
{ path: "3/, 3/, 2/sk2-AS", notes: "" },
{ path: "4/s1, 4/s1", notes: "1P:u460, 2P:e680" },
{ path: "2/, 2/, 3/p2S, 3/TT", notes: "1M:u308, 2M:e292, 3M:u592, 4P:e904" },
{ path: "2/p1E3t, 2/S, 2/p1E3t, 2/S, 3/, 2/S", notes: "1:x, 2P:u652, 3:x, 4P:e332, 5P:e800, 6:x" },
{ path: "2/, 2/, 3/p2S, 3/TT", notes: "1:x, 2M:e768!, 3M:e376!, 4P:u816" },
{ path: "3/sk1, 2/sk1, 2/sk1", notes: "" },
{ path: "3/, 2/, 2/", notes: "1P:e916!, 2M:+100, 3:x" },
{ path: "4/E!, 2/", notes: "1:x, 2P:u976" },
{ path: "??", notes: "" },
{ path: "2/, 2/, 3/BOD", notes: "" },
{ path: "2/sk2, 3/sk1, 4/sk1", notes: "" },
{ path: "3/DOD-ESF, 2/sk6-ESF", notes: "" },
{ path: "2/!, 3/sk1, 3/sk1", notes: "" },
{ path: "4/, 4/, 2/", notes: "1:M, 2M:u940, 3:e128!!" },
{ path: "3B|2|2|4", notes: "2:+12|3:u128|4:e092" },
{ path: "3/, 3/s3, 2/, 2/", notes: "1M:u760!, 2M:e436, 3P:e848!!, 4:F!" },
{ path: "2/sk1, 2/, 2/sk3-ESP, 2/sk1", notes: "" },
{ path: "3/, 3/, 3/", notes: "" },
{ path: "3/sk1, 2/sk2,", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "4/s1S, 3/s2", notes: "" },
{ path: "2/, 2/, 3/s1, 3/, 4/s1", notes: "1:x, 2:x, 3:F, 4P:u156, 5P:e884" },
{ path: "2/sk2, 2/AT, EwO", notes: "" },
{ path: "2/p1S, 2/p1", notes: "1M:u504, 2:x" },
{ path: "3/p2S, 3/S", notes: "1:M!, 2P:e356" },
{ path: "2/S, 2/, 2/De", notes: "1P:e376!, 2P:e816!, 3M:e952" },
{ path: "2/, 2/S, 2/B", notes: "1:e904, 2:u700, 3:e668" },
{ path: "3/p1S, 2/S, 2/p4", notes: "1P:u384, 2P:e208, 3P:u272" },
{ path: "2/sk1, 3/, 3/AS, 2/", notes: "" },
{ path: "3/, 2/, 2/", notes: "1:x, 2M:e060, 3M:e160" },
{ path: "2/, 2/B, 2/Dx", notes: "1M:u424, 2M:e116, 3:M!" },
{ path: "4/BOD, 2/", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "3/sk2-ESF, 2/, 2/", notes: "" },
{ path: "2/, 2/, 4/T", notes: "1P:e684, 2P:e908, 3M:u984" },
{ path: "2/, 3/s1, 2/s1", notes: "" },
{ path: "4/, 3/s1", notes: "1P:e572, 2P:e168" },
{ path: "2/p2S, 2/s1, 2/S, 2/S", notes: "1:e568, 2:e448, 3:u520, 4:u872" },
{ path: "2/p2S, 3/", notes: "1:e232, 2:u860" },
{ path: "2/, 2/, 2/p3S", notes: "1:x, 2P:e520/564, 3M:+232" },
{ path: "2/, 4/s1", notes: "1:x, 2:x" },
{ path: "2/S, 2/, 2/SE, 2/p1Sx!", notes: "1P:u660!, 2P:e716!, 3:x, 4:u200?" },
{ path: "2/B, 3/s1, 2/p2S, 3/", notes: "" },
{ path: "2/D, 3/S, 2/s1", notes: "1:e716, 2:e224, 3:M!" },
{ path: "3/FRS, 3/, 4/sk1", notes: "" },
{ path: "2/sk2, 2/sk1, 2/sk1, 2/sk2, 2/, 2/", notes: "" },
{ path: "2/B, 2/Sx10, 4/S", notes: "1P:e876, 2P:984, 2:e292/M, 3:M" },
{ path: "2/, 3/, 3/, 2/", notes: "" },
{ path: "3/DOS-ESF, 4/, 2/sk4-ESF, 2/sk1-ESF", notes: "" },
{ path: "3/s1, 2/p2S", notes: "1:x, 2P:e268" },
{ path: "2/, 3/, 3/BOD", notes: "" },
{ path: "AI", notes: "" },
{ path: "4/FRS, 2/, 2/ FRS = 12 beats", notes: "" },
{ path: "3/p4", notes: "1:x" },
{ path: "3/sk1, 2/sk2, 2/sk2 or 3/sk1, 2/sk3, EwO", notes: "" },
{ path: "2/, 2/, 2/sk3-ESF", notes: "" },
{ path: "4/s1, 2/", notes: "1:M, 2:x" },
{ path: "3/, 2/sk2-ESF", notes: "" },
{ path: "5/sk1ESP, 3/FRS, 2/", notes: "" },
{ path: "2/sk5 FRS, 2/sk3, 4/ATAS", notes: "" },
{ path: "2/, 3/, 3/", notes: "" },
{ path: "2/w1S, 2/E!, 2/B, 2/p1S", notes: "1M:e700, 2:x, 3P:e400!, 4P:u004" },
{ path: "2/sk2-ESF, 2/, 2/sk1-ESF", notes: "" },
{ path: "2/, 3/, 2/S, 2/T, 2/p1S", notes: "1:x, 2P:e948, 3P:e148, 4P:u032, 5P:u012" },
{ path: "4/AT, 3/", notes: "" },
{ path: "2/S, 3/S, 2/TS, 2/S, 2/p2", notes: "1M:e340, 2P:e016, 3P:u596, 4:u900?, 5M:u728" },
{ path: "2/E1, 2/p1S, 2/S, 3/S, 3/, 2/p1Sx45, 2/p1S", notes: "1:x, 2:x, 3P:u200, 4:x, 5P:e152, 6P:u260, 7M:-220" },
{ path: "3/sk2-ESF, 3/sk2-ESF", notes: "" },
{ path: "2/p2E, 2/Tp3, 2/Se", notes: "1:x, 2M:u768, 3P:u592!!/684" },
{ path: "2/B, 2/w1S45, 2/D", notes: "1M:e652!, 2:e880/u488, 3M:u472" },
{ path: "2|2B|2|2|2p1", notes: "2:e720|4:u200|5:u712" },
{ path: "2|2Dw2|2", notes: "1:F|2:x|3:F" },
{ path: "2/sk2, 2/ESF, 2/sk1, 3/", notes: "" },
{ path: "2/w1S, 2/Tw1S, 3/p1Se", notes: "1?:u792, 2?:u600, 3:x" },
{ path: "2/, 4/p1Se, 2/Sx26, 3/De, 3/", notes: "1:M, 2M:e384, 3:u384/u568, 4:x, 5M:e076" },
{ path: "4/AT, 2/, 3/sk4", notes: "" },
{ path: "2/sk1-ESF, 2/sk1-ESF, 2/ESF, 2/", notes: "" },
{ path: "2/p2S, 2/p2Se", notes: "1M:e060!, 2:x" },
{ path: "2/, 2/S, 2/Tp1", notes: "1:, 2:e476, 3:u016" },
{ path: "3/sk1, 2/BOD, EwO", notes: "" },
{ path: "3/w1Sx, 2/p1w1Sx15, 2/w1Sx!", notes: "1:M, 2:u300/u664, 3:u908" },
{ path: "2/p1S, 2/Se, 2/S", notes: "1:x, 2M:u784, 3P:u192" },
{ path: "3/Ts1, 2/", notes: "1M:u880?, 2:x" },
{ path: "3/sk1-ESF*, 3/FRS, 3/BOD * Difficult ESF", notes: "" },
{ path: "3/p1, 3/B, 2/E*, 2/Sx, 2/Sx", notes: "1:x, 2M:e276!!, 3:x, 4:M, 5:+408, *6th freestyle change fades off screen." },
{ path: "2|2|2S", notes: "3:e780/808" },
{ path: "3/s1, 3/", notes: "1:u204, 2:u464" },
{ path: "4/, 2/, 3/S", notes: "1M:e836!, 2:x, 3:x" },
{ path: "2/s1, 2/s1, 3/B", notes: "1M:e592, 2M:u100, 3:x?" },
{ path: "2/ATsk1-ESF, 2/AT-FRS, 2/sk1ESF", notes: "" },
{ path: "PLEASE SUBMIT A PATH", notes: "" },
{ path: "2s1|2Tp1S", notes: "1:u576" },
{ path: "4/BOD, 3/BOD", notes: "" },
{ path: "3B|2p1|2", notes: "1:+12|2:+384" },
{ path: "3/, 2/, 2/B, 2/B", notes: "1:x, 2:x, 3:u052, 4:+200!!" },
{ path: "2/D, 2/, 2/p1", notes: "1M:e520, 2:x, 3M:e892" },
{ path: "2/, 3/, 2/sk1-ESF", notes: "" },
{ path: "2/, 2/ESF, 2/AT, 2/sk3-1p-ESF", notes: "" },
{ path: "3/, 3/, 2/s1", notes: "1:x, 2:x, 3:x" },
{ path: "4/sk1, 2/ESF, 3/sk1", notes: "" },
{ path: "AI", notes: "1:M" },
{ path: "4/s1, 2/", notes: "1:F, 2P:+80!!" },
{ path: "3/sk1-ESF, 2/sk2, 2/", notes: "" },
{ path: "2/, 3/, 2/s2, 2/B, 2/B, 2/B, 2/, 2/", notes: "1P:e712, 2M:u988, 3P:e360, 4P:e808, 5P:e184, 6M:u400, 7P:e600, 8M:9996!" },
{ path: "2/BOD, 2/BOD, 2/sk9", notes: "" },
{ path: "3/AS, 3/sk", notes: "" },
{ path: "2B|2D|2D", notes: "1:u124 (u416)|2:u800 (e024)|3:e228" },
{ path: "3/sk1-ESF, 3/sk3-ESF", notes: "" },
{ path: "3/ES, 2/, 2/ES", notes: "" },
{ path: "3/s1p1S, 3/T", notes: "1?:e328/356/384?, 2:M" },
{ path: "4/EWO", notes: "" },
{ path: "3/p1, 3/p2S", notes: "1P:u116, 2:M!" },
{ path: "3/, 2/, 4/T, 2/", notes: "1M:e660, 2:x, 3:x, 4P:e652!!" },
{ path: "2/, 2/s1, 2/B, 3/", notes: "1:x, 2P:u436, 3:M, 4P:e312" },
{ path: "4/AS, 3/FRS, 3/sk1 or 4/sk1, 3/FRS, 3/sk1 if you can't hit the REALLY tough AS", notes: "" },
{ path: "3/, 4/, 3/sk1", notes: "" },
{ path: "3/, 2/, 2/T, 2/s1, 4/, 2/", notes: "1P:u628, 2:x, 3:x, 4P:e064, 5P:u092, 6P:u464/u848p" },
{ path: "2/s2, 2/Sx, 3/s2", notes: "1P:e868/992, 2M:e336, 3P:e960" },
{ path: "3/, 4/sk1", notes: "" },
{ path: "3/S, 2/, 2/", notes: "1M:e392, 2P:u188, 3P:u124" },
{ path: "4/s1S, 3/", notes: "" },
{ path: "2|4E1|4s1", notes: "1:u864" },
{ path: "3/sk1-FRS, 2/sk1, 2/, 2/BOD [FRS", notes: "" },
{ path: "2/s1S, 2/!!, 3/s3", notes: "1M:u608!, 2P:+100, 3:x" },
{ path: "4T|2T|3T", notes: "1:e60|2:u080" },
{ path: "2/BOD, 3/sk1-1p-ESF, 2/ESF", notes: "" },
{ path: "2|3|2|3", notes: "1:+172|2:+444/+524|3:+164|4:+372/e164" },
{ path: "2/B, 3/Se, 2/p2S, 2/", notes: "1P:e588!!, 2P:u348/660!!, 3:F, 4:x" },
{ path: "2/s1, 2/s2, 2/", notes: "1:+104!!, 2P:e824!?, 3P:u240!!" },
{ path: "2/s1, 3/, 2/p3S", notes: "1P:e948, 2P:u696, 3M:e-180" },
{ path: "2/!, 2/, 2/B", notes: "1P:e680, 2P:u680, 3M:u312" },
{ path: "3/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "2/, 2/B, 2/, 2/", notes: "1P:u024!, 2P:u580!, 3:x, 4:x" },
{ path: "3/Tp1, 2/TS", notes: "1:x, 2M:u972" },
{ path: "2/sk4, 3/sk1-ESF, 2/", notes: "" },
{ path: "2/sk1-ES, 2/DOD-ES, 2/sk1-ES, 2/sk1-ES", notes: "" },
{ path: "3/p1S, 2/p1, 2/Se", notes: "1M:u200, 2:x, 3M:-96" },
{ path: "2/s1, 4/", notes: "1M:e480, 2:x" },
{ path: "3/, 4/, 2/", notes: "" },
{ path: "2/Se, 2/De", notes: "1M:e032, 2:x" },
{ path: "3/", notes: "1:x" },
{ path: "2/s2, 2/, 2/", notes: "1:u128, 2:e604, 3:u888" },
{ path: "2/, 2/E½, 2/, 2/, 3/s2", notes: "1:M, 2:x, 3:x, 4M:u428, 5P:e596" },
{ path: "2/, 3/S", notes: "1:x, 2:e144" },
{ path: "3/, 2/sk1, 2/sk1-ESF", notes: "" },
{ path: "2/s4S, 2/, 2/s1, 2/", notes: "" },
{ path: "2/s2, 2/s2, 2/s7S", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/sk5-ESF, 3/sk5-ESF, 3/sk4-ESF", notes: "" },
{ path: "2/p2, 2/, 2/p1", notes: "1M:e844!, 2P:u244!, 3:x" },
{ path: "2/, 2/sk2, 2/sk3-FRS, 2/sk2", notes: "" },
{ path: "2|2|2p1", notes: "1:+104" },
{ path: "3/, 2/BOD", notes: "" },
{ path: "3/p1S, 3/p1S, 2/, 2/", notes: "1:M, 2:M, 3:x, 4:+112?" },
{ path: "NO PART", notes: "" },
{ path: "2/sk1, 3/, 3/, EwO", notes: "" },
{ path: "2/!, 2/", notes: "1P:u832, 2M:u360" },
{ path: "2/Dx, 2/Dx, 3/", notes: "1:M, 2:M, 3P:e792" },
{ path: "2/sk1, 3/sk1, 2/sk1, 2/BOD", notes: "" },
{ path: "4/, 3/sk1", notes: "" },
{ path: "3/DOD-ESF, 2/ES1F", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "3/s1, 3/T", notes: "1M:e180!!, 2P:u092!!" },
{ path: "3/, 3/B, 2/Se, 2/p3, 2/p3s1", notes: "1P:u144, 2P:e008, 3P:e976, 4P:u400, 5P:e652" },
{ path: "2/DOD-ESF, 3/sk3-ESF, 2/sk2-ESF, 3/ESP", notes: "" },
{ path: "2p2S|3TS", notes: "1:e878?|2:-304" },
{ path: "3/T, 4/", notes: "1P:u044, 2P:u268" },
{ path: "2w2S/55|3S|2S|2p2S", notes: "1:u768|2:+60|3:+124" },
{ path: "4/p2Sx, 2/B, 2/s1p4*", notes: "1M:u352!!, 2:x, 3M:u508!, *Skip 2 non-talky phrases." },
{ path: "2/!, 2/sk1, 2/sk2", notes: "" },
{ path: "2/, 4/sk1", notes: "" },
{ path: "2/sk1, 3/ESF, 3/, 2/sk4-ESF-RS, 2/sk2", notes: "" },
{ path: "2/sk1, 2/sk1-ESF*", notes: "" },
{ path: "2/sk3, 3/sk2", notes: "" },
{ path: "2/sk1-ES, 3/, 2/PB", notes: "" },
{ path: "3/sk1, 2/sk1 EwO", notes: "" },
{ path: "2/s1, 2/s1, 3/, 2/", notes: "1:x, 2:F!!, 3:+12!!, 4:+72!!" },
{ path: "2/T, 3/p1, 3/", notes: "1M:e504, 2M:e204, 3:x" },
{ path: "4/sk2, 4/BOD", notes: "" },
{ path: "2/, 2/p2, 2/Tp3S", notes: "1M:e612!!, 2P:u164!!, 3M:u428" },
{ path: "3/sk3, 3/", notes: "" },
{ path: "2/DOD-ESF, 3/sk1-ESF, 3/sk1, 2/BOD", notes: "" },
{ path: "AI", notes: "1M:e600!, 2P:e788!" },
{ path: "2/, 2/Se, 2/B", notes: "1:u144!!, 2M:e772, 3:x" },
{ path: "3/, 3/sk5, 2/", notes: "" },
{ path: "4/sk1, 3/sk1", notes: "" },
{ path: "4, 2/p1", notes: "1:x!!, 2M:u100" },
{ path: "2/, 3/s1, 2/s1, 2/s1", notes: "1:M, 2:x, 3M:e436, 4M:e888" },
{ path: "3/, 2/", notes: "" },
{ path: "5/, 2/B", notes: "1:e232, 2:x?" },
{ path: "2/!, 2/Se, 2/!, 2/p2", notes: "1:x, 2P:u632, 3:x, 4:x" },
{ path: "4/sk2-ESF, 3/sk1", notes: "" },
{ path: "3/S", notes: "1M:e764" },
{ path: "6/p1S, 3/s1", notes: "1:u376, 2:u812" },
{ path: "3/sk1, 2/sk1", notes: "" },
{ path: "2/T, 2/, 3/T", notes: "1M:e796, 2M:u492, 3:e616" },
{ path: "2/, 2/B, 3/, 2/", notes: "1M:u300! 2M:e408! 3M:u212! 4M:u820!" },
{ path: "3/, 2/, 3/p1, 2/s1", notes: "1:x, 2M:u768/M, 3M?:u080/u380, 4P:u860/e316" },
{ path: "2/, 2/S, 2/B, 3/s1", notes: "1:x, 2M:u120!, 3M:u192, 4M:u440" },
{ path: "2/B, 2/S, 3/p1", notes: "1:M, 2:x, 3:x" },
{ path: "4/, 2/, 2/", notes: "1P:e268, 2P:e956, 3:x" },
{ path: "4/, 4/", notes: "1:e112!!, 2:M!" },
{ path: "3/sk2-ESF, 2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "2/!, 3/sk2, 4/ESF*", notes: "" },
{ path: "2/s1, 2/Tp1Sx, 3/T", notes: "1:x, 2:e556, 3:+100" },
{ path: "5/B", notes: "1M:u832" },
{ path: "2/De, 3/De, 2/p1", notes: "1M:u112, 2P:u268, 3P:u188" },
{ path: "2/sk1-ESF, 3/sk3-ESF, 2/AT", notes: "" },
{ path: "2/S, 2/S, 3/Tp2S", notes: "1M:u344, 2M:e584, 3M:u724" },
{ path: "2/sk1-ESF, 2/sk1, 4/sk1", notes: "" },
{ path: "2/sk2, 3/sk4, 2/sk3", notes: "" },
{ path: "2|3|2", notes: "1:F|2:e432/e476|3:e512" },
{ path: "2/, 3/, 2/", notes: "" },
{ path: "2/, 2/D, 2/", notes: "1M:+68, 2M:u880, 3:e016!!" },
{ path: "2/B, 2/s1, 2/E?, 2/s3", notes: "" },
{ path: "2/sk2-2p-ESF, 2/sk1, 3/AT-sk1, 2/sk2, 2/", notes: "" },
{ path: "2/, 3/sk1, 2/, 2/BOD", notes: "" },
{ path: "2/AT-sk1-ESF, 2/DOD-ESF", notes: "" },
{ path: "2/T, 2/B, 2/B", notes: "1P:u852, 2:x, 3:x" },
{ path: "2|3B", notes: "1:F|2:u480" },
{ path: "2/sk1, 2/!, 3/sk1", notes: "" },
{ path: "3/BE3, 2/s1, 2/s1", notes: "1:x, 2M:e544, 3M:e612" },
{ path: "3/, 3/, 2/", notes: "1M:e332!, 2M:e008!" },
{ path: "4/p2, 2/, 2/p4Se", notes: "1P:e288!, 2M:e812, 3M:u188" },
{ path: "2/BOD, 2/sk1", notes: "" },
{ path: "2/p1, 4/p3S", notes: "1P:e256, 2:x" },
{ path: "2/sk2, 2/, 2/sk2, 2/sk3", notes: "" },
{ path: "3/, 3/, 3/DOD-ESF", notes: "" },
{ path: "2/BOD, 2/sk1, 2/!", notes: "" },
{ path: "2/p1, 4/", notes: "1:M, 2:x" },
{ path: "6/, 2/, 2/", notes: "" },
{ path: "3/, 2/B, 2/", notes: "1P:u260!, 2:F!!, 3P:+150!!" },
{ path: "4/sk1, 2/", notes: "" },
{ path: "2/!, 3/B, 2/s2, 2/, 2/", notes: "1:x, 2:x, 3:F!!, 4M:+288!!, 5M:+624" },
{ path: "2/, 2/, 2/, 2/p1, 2/, 2/p2", notes: "1:x, 2M:u968, 3:x, 4P:e172!, 5:x, 6P:e308!" },
{ path: "2/s1, 3/, 3/", notes: "1:e700, 2:x, 3:u188" },
{ path: "2/s1, 3/w1S, 3/p2S, 2/", notes: "1:e816, 2:u692, 3:e632, 4:x" },
{ path: "2/sk1-ESF, 3/BOD, 2/", notes: "" },
{ path: "2/sk3, 3/, 2/", notes: "" },
{ path: "3/s1, 2/s2", notes: "1M:e456, 2:x" },
{ path: "PLEASE SUBMIT A PATH", notes: "" },
{ path: "3p3|2T|3", notes: "1:u416|2:u816|3:+100" },
{ path: "2/!E2t, 2/s1, 3/", notes: "1:x, 2:x, 3:F" },
{ path: "2/T, 2/B, 2/", notes: "1M:u344!, 2:x, 3:x" },
{ path: "2/sk4-ESF, 2/sk2, 2/ESF, 2/sk2", notes: "" },
{ path: "2/sk1, 2/sk2, 2/", notes: "" },
{ path: "2/, 2/, 2/B, 2/p1Sx15", notes: "1:x, 2:x, 3M:e764, 3:e244/F" },
{ path: "2/, 3/, 2/B, 3/s3", notes: "1P:e948!, 2:F!, 3P:e648, 4P:e124!" },
{ path: "3/FRS, 2/", notes: "" },
{ path: "2/S, 2/S, 2/S, 2/w3Se, 2/p1w2S", notes: "1M:e148, 2:x, 3M:u148, 4M:e060, 5M:e368" },
{ path: "NO PART", notes: "" },
{ path: "2/Se, 2/p2Se, 3/", notes: "1:x, 2M:e444!, 3M:e144!" },
{ path: "3/, 3/E, 2/", notes: "1P:e756!, 2:x, 3:x" },
{ path: "3/ESF, 2/", notes: "" },
{ path: "3/sk1, 2/", notes: "" },
{ path: "2/D, 2/", notes: "" },
{ path: "3/, 3/", notes: "1:x, 2:x" },
{ path: "2/, 4/", notes: "" },
{ path: "3/S, 2/p1w1Sx40, 2/s1", notes: "1M:e244, 2:e628/F, 3:x" },
{ path: "2/B, 3/Se, 4/", notes: "1M:e676, 2M:u340, 3M:e096" },
{ path: "2/E!, 2/, 3/T", notes: "1:x, 2M:e432, 3P:e992" },
{ path: "NO PART", notes: "" },
{ path: "3/sk2ESF, 3/BOD", notes: "" },
{ path: "2/p1Sx, 3/, 2/p1Sx, 2/, 3/Tw2Sx", notes: "1M:e236, 2M:u436, 3M:u600, 4P:u704, 5M:u396" },
{ path: "2/Sx, 2/p2Sx", notes: "1:u284, 2:u476" },
{ path: "4/p1, 2/p1w2S, 2/p3w2S", notes: "1:x,, 2:u692, 3:u544" },
{ path: "4/,2/", notes: "" },
{ path: "4/, 3/p1", notes: "1:e744, 2:x" },
{ path: "2/, 3/, 2/p4Se", notes: "1M:e480, 2:M!, 3M:u016" },
{ path: "2/T, 2/T", notes: "1P:+200!!, 2M:+472!" },
{ path: "3/, 2/p3Sx52, 3/p1", notes: "1:x, 2:u760/-348, 3M:e+120" },
{ path: "3/Ts2, 2/TTs2E2, 4/Ts1", notes: "1:x, 2:x, 3P:u864" },
{ path: "3/E, 2/, 2/", notes: "" },
{ path: "3/sk3-ESF, 2/!, 3/, EwO", notes: "" },
{ path: "2/BOD, 2/BOD", notes: "" },
{ path: "2/, 2/, 3/sk1", notes: "" },
{ path: "AI", notes: "1M:u992, 2:x, 3:M, 4:M!" },
{ path: "2/, 2/B, 4/p1", notes: "1M:e256, 2P:e632, 3P:u476" },
{ path: "2/, 2/Se, 2/p2Se, 3/p2, 2/", notes: "1:x, 2M:u864, 3:x, 4M:e424, 5:x" },
{ path: "4/p2Sx, 2/p1S35, 2/", notes: "1P:u388!, 2S:e024!, 3P:u012!!" },
{ path: "2/BOD-SI, 4/SI, 2/ESx-SIF", notes: "e592, e508, ES(24) u536 / x" },
{ path: "2/S, 2/D, 2/S", notes: "1P:e644, 2M:u-144, 3M:+300" },
{ path: "2/sk1, 2/sk1-ESF, 4/sk1, 2/sk1-ESF 4/BOD", notes: "" },
{ path: "2/, 2/sk2-FRS, 2/PB", notes: "" },
{ path: "3/T, 4/", notes: "1P:?!, 2:x" },
{ path: "2/, 2/ESF, 4/sk1", notes: "" },
{ path: "2/s1, 2/p1Sx10, 2/s1, 2/Sx10, 2/p1S", notes: "1M:e324, 2P:u832/M, 3:x, 4P:u324/M, 5M:-40" },
{ path: "2/T, 2/p2, 2/p1Sx", notes: "1P:e796, 2P:u152!, 3M:e+292" },
{ path: "2/D, 3/", notes: "1:F!, 2:F" },
{ path: "3/Sx, 4/", notes: "1:x, 2:x" },
{ path: "3/B, 2/B, 2/Dx20", notes: "1M:u652!, 2M:e700!, 3P:u700" },
{ path: "2/sk5-ESF, 2/sk3-ESF, 2/sk1-ESF", notes: "" },
{ path: "4/DOD-ESF, 3/sk1-ESF", notes: "" },
{ path: "3/1P-RS!, 3²/BOD-SIF!, 2/1P-ES-SI", notes: "e476, e860, u124" },
{ path: "3/, 4/BOD", notes: "" },
{ path: "4/, 3/TSe", notes: "1M:e364!, 2M:u224?" },
{ path: "2/, 4/, 3/sk1-ESF, 3/, 3/sk4-ESF", notes: "" },
{ path: "3/E¼, 6AI, 2/s1", notes: "1:x, 2P:u604/736, 3:x, 4:F, 5:x, 6:F!, 7:F, 8:x" },
{ path: "2/sk3, 2/sk1, 2/", notes: "" },
{ path: "4/FRS, 3/", notes: "" },
{ path: "3/, 2/, 2/", notes: "" },
{ path: "2/, 2/p2", notes: "1:x?, 2:+180!!" },
{ path: "2/BOD, 3/BOD", notes: "" },
{ path: "2/RS, 2/ESF, 2/RS, 2/1p-ESF, 3/ESF", notes: "" },
{ path: "3/sk3-ES 2/ES", notes: "" },
{ path: "2/BOD, 2/, 2/sk1, 2/, 3/", notes: "" },
{ path: "2/, 2/, 2/, 2/AT, 3/sk1", notes: "" },
{ path: "3/T", notes: "1P:u012" },
{ path: "4/ESF, 2/", notes: "" },
{ path: "2/sk1, 3/sk2-ES1F, 4/sk1-ESF", notes: "" },
{ path: "4/B", notes: "1:M" },
{ path: "2/, 4/, 3/", notes: "1:x, 2:F, 3:F" },
{ path: "NO PART", notes: "" },
{ path: "2/B, 2/B", notes: "1M:e456, 2M:e844" },
{ path: "4/, 3/", notes: "" },
{ path: "2/sk1-ESF, 2/sk1-ESF, 2/3p-ESF", notes: "" },
{ path: "AI", notes: "" },
{ path: "4/p1S, 2/, 3/, 2/", notes: "1P:u700!!, 2:x, 3:F, 4:x" },
{ path: "2/S, 2/, 2/2T, 2/s3", notes: "1:M, 2:e340!, 3:e616!!, 4:u344!" },
{ path: "PLEASE SUBMIT A PATH", notes: "" },
{ path: "3/sk1, 2/sk1", notes: "" },
{ path: "3/BOD, 2/sk1, 2/", notes: "" },
{ path: "4/, 4/A, 3/, 4/DOD-ESF", notes: "" },
{ path: "2/!, 2/, 2/, 3/w1S45, 2/", notes: "1M:e460, 2M:u128!, 3:x, 4S:u336, 4P:u824" },
{ path: "3/sk1, 3/AT, 2/", notes: "" },
{ path: "3/AT, 4/", notes: "" },
{ path: "2/, 2/, 3/Se, 3/", notes: "1:e504, 2:x, 3:e688, 4:e040" },
{ path: "2/FRS, 2/, 3/, 2/!", notes: "" },
{ path: "3/sk1, 2/sk1-1p-ESF, EwO", notes: "" },
{ path: "3/p1S, 3/p1", notes: "1:x, 2:x" },
{ path: "NO PART", notes: "" },
{ path: "2/BOD, 2/, 2/BOD", notes: "" },
{ path: "2/sk2-ESF, 2/sk5-ESF, 2/sk1-ESF, 2/sk7-ESF, 2/sk4-ESF", notes: "" },
{ path: "3/Dx, 2/p1w3Sx30, 2/s1", notes: "1M:e884!, 2P:u684, 3M:+324!!" },
{ path: "3/, 2/s1", notes: "" },
{ path: "3/ 2/, 2/sk5-ESF", notes: "" },
{ path: "4/, 3/AT, 2/sk3", notes: "" },
{ path: "2/sk2-3p-AS-ESF, 3/, 2/sk1-3p-ESF", notes: "" },
{ path: "2/, 3/T, 2/, 2/", notes: "1P:e580, 2P:e096?, 3P:e740, 4:x" },
{ path: "2/. 2/sk2, 2/AT", notes: "" },
{ path: "2/p1E4t, 3/, 4/S", notes: "1:x, 2P:e100, 3P:u056" },
{ path: "2/B, 2/!, 2/s2, 2/p1Se, 2/s1", notes: "1P:e224, 2:x, 3P:e024, 4:x, 5P:e656" },
{ path: "2/sk1-ESF, 2/, 2/ESF, 4/", notes: "" },
{ path: "2/B, 2/, 3/B, 2/", notes: "1P:1820!, 2:x, 3:M, 4M:e-176" },
{ path: "2/B, 2/p1, 2/s2", notes: "1:+272!!, 2:x, 3:x" },
{ path: "AI", notes: "1:M, 2:M, 3M:u564!, 4:x, 5:x" },
{ path: "2/BOD, 2/BOD, 2/sk1", notes: "" },
{ path: "3/S", notes: "1:M" },
{ path: "2/, 2/Dx40, 3/, 2/S", notes: "1M:e808, 2P:u224/e432, 3P:e486, 4P:e356" },
{ path: "3/p1Se, 2/p1S, 3/p1, 3/TS", notes: "1M:e512!, 2M:u492!, 3M:u540!, 4:M!" },
{ path: "3/sk1-1p-ESF, 4/", notes: "" },
{ path: "2/S, 3/p1S, 2/", notes: "1M:e828, 2M:u292!, 3P:u948" },
{ path: "2/AS, 2/!, 4/", notes: "" },
{ path: "2/DOD-ESF, 4/DOD-ESF, 3/sk1ESF", notes: "" },
{ path: "3/sk2-ES1F, 2/DOD-ES1F [2nd Act Difficult ESF)", notes: "" },
{ path: "2/BOD, 2/sk3-ESF, 2/sk1-ESF EwO", notes: "" },
{ path: "2/p2Sx, 2/S, 3/s1", notes: "1M:e088, 2:M, 3M:e532" },
{ path: "2/!, 2s1/, 2/p1, 2/D", notes: "1M:u056, 2P:u488!!, 3P:u112 4:x" },
{ path: "2/s1, 2/s1, 2/s1", notes: "1P:e828, 2P:e092/u660, 3:M!" },
{ path: "3/, 3/p3", notes: "1:+52!!, 2M:+260!" },
{ path: "3/, 3/", notes: "" },
{ path: "3/sk4, 3/BOD, 2/sk2", notes: "" },
{ path: "2/, 2/s3S, 2/", notes: "" },
{ path: "4/s2, 3/s3, 3/", notes: "1P:e136, 2P:u080, 3P:u016" },
{ path: "2/s2, 4/, 2/", notes: "1:x, 2:x, 3:x" },
{ path: "4/ 3/", notes: "" },
{ path: "4/, 4/", notes: "" },
{ path: "2/4p-ESF, 2/PB, 2/sk2-8p-ESF", notes: "" },
{ path: "2/sk3-ESF, 3/sk2-ESF", notes: "" },
{ path: "3/sk3, EwO", notes: "" },
{ path: "2/sk1-1p-ES2F, 3/DOD-ES1F, 2/sk1-ES2F", notes: "" },
{ path: "3/, 2/p1S, 3/D, 2/", notes: "1:u124, 2:u468, 3:??, 4:u608" },
{ path: "3/ESF, 2/ES2F, 2/AT-BOD", notes: "" },
{ path: "3/, 2/B, 2/", notes: "" },
{ path: "2/sk6-ESF, 2/sk1-ESF, 2/sk1-ESF", notes: "" },
{ path: "3/S, 2/!, 3/p4Se", notes: "1M:u612!, 2P:u760!!, 3M:e+568!" },
{ path: "3/, 3/T", notes: "1M:e748!, 2:x" },
{ path: "2/sk2-ESF, 2/1p-ESF, 2/, 2/sk1", notes: "" },
{ path: "3/, 3/sk2ESF EwO", notes: "" },
{ path: "2/T", notes: "1:x" },
{ path: "2/, 2/s1, 3/T, 3/s2", notes: "1:+92!!, 2:x, 3:x, 4P:u872" },
{ path: "3/DOD-ESF, 4/BOD", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "2/sk2, 2/, 2/sk3", notes: "" },
{ path: "2/!, 3/, 2/, 2/Tp2", notes: "1M:e412, 2P:e928, 3P:u396p, 4M:e444" },
{ path: "2/B, 2/, 2/p1Se, 2/p1Se", notes: "1M:u496, 2M:u056, 3:x, 4:x" },
{ path: "2/Se, 2/p2Se, 2/p1", notes: "1M:e544, 2M:u064, 3M:e612" },
{ path: "4/TEt1, 4/T", notes: "1:x, 2:x" },
{ path: "2/w2Sx25, 2/, 2/w2Sx30", notes: "1P:e960/u530, 2:x, 3P:e600/e330" },
{ path: "3/sk1-FRS-ESF, 4/sk1-FRS-ESF, 2/FRS, 2/sk1-ES1F", notes: "" },
{ path: "3/Se, 3/Se, 2/p1, 3/Se", notes: "1M:e252, 2M:u880, 3M:e056/e120, 4M:e212/e274m" },
{ path: "2/sk1-ESF, 3/sk1-ESF, 3/", notes: "" },
{ path: "2/sk2-ES1F, 2/, 3/", notes: "" },
{ path: "3/, 2/, 3/", notes: "1M:u488!, 2M:u680!, 3M:u316!" },
{ path: "2/p1, 2/T, 4/, 2/", notes: "1:x, 2:x, 3:x, 4P:e000" },
{ path: "2/B, 2/p2", notes: "1M:e824, 2:x" },
{ path: "2/, 3/B, 3/B", notes: "1M:e184!, 2M:e320!, 3P:u392" },
{ path: "2/D, 2/Dx, 3/p3", notes: "1P:u900, 2P:e852, 3P:e268" },
{ path: "2/s1, 2/s3", notes: "1:x, 2P:e500/u104" },
{ path: "3/, 3/s3, 2/s3", notes: "1:724, 2:860, 3:x" },
{ path: "2/s2E1, 3/Dw1, 3/Dw1", notes: "1:x, 2:u864, 3:x" },
{ path: "2/!, 2/Dw1, 2/T, 2/p2S", notes: "1M:u452, 2:x, 3M::e124, 4P:e388" },
{ path: "4/p3Sx", notes: "1M:e096" },
{ path: "3/sk4-ESF, 3/sk2", notes: "" },
{ path: "4/sk1-ESF, 2/sk3/ESP", notes: "" },
{ path: "AI", notes: "1M:780!, 2:M, 3:M" },
{ path: "2/, 2/, 2/p1, 3/, 2/s2", notes: "1:x, 2:x, 3P:e192, 4:x, 5:x" },
{ path: "4/sk1-FRS, 4/", notes: "" },
{ path: "4/, 2/D, 3/B, 2/p1", notes: "1:F, 2M:e924!, 3M:e100!, 4M:480" },
{ path: "5/, 2/, 3/ EwO", notes: "" },
{ path: "2/p2Se, 2/, 2/TS, 2/", notes: "1M:e744, 2P:u300!, 3M:e044, 4:x" },
{ path: "2/p3, 4/, 2/, 3/", notes: "1M:e812, 2P:u496, 3:x, 4P:u500" },
{ path: "2/Se, 2/!, 2/D, 2/S, 2/!", notes: "1M:e672!, 2M:e904!, 3M:u764, 4P:u948!, 5:x" },
{ path: "2/E1, 2/s1", notes: "1:x, 2:x" },
{ path: "2/sk1, 2/, 2/sk1", notes: "" },
{ path: "2/, 4/", notes: "" },
{ path: "2/, 2/, 2/p1Se, 2/s1, 3/", notes: "1:x, 2P:u424, 3P:5004, 4:x, 5P:3404" },
{ path: "2/, 2/, 2/sk1, 2/sk5-ESF", notes: "" },
{ path: "4/, 3/", notes: "" },
{ path: "4/, 4/s4", notes: "1P:580!, 2:x" },
{ path: "2/3p-ESF, 2/!, 2/BOD, 2/!", notes: "" },
{ path: "2/!, 2/sk1-1p-ESF, 2/BOD", notes: "" },
{ path: "2/De, 2/Se", notes: "1:F, 2:x" },
{ path: "2/sk2, 3/sk1, 2/BOD", notes: "" },
{ path: "3/sk3-ESF, 3/sk1-ESF", notes: "" },
{ path: "2/, 2/D", notes: "1:x?, 2M:u384" },
{ path: "3/s2, 2/s1", notes: "1:x, 2M:u064" },
{ path: "2/s2, 2/, 2/s4", notes: "1M:e348!, 2:F!, 3P:u696" },
{ path: "AI", notes: "1:M, 2:M, 3M:e404!" },
{ path: "4/s1, 2/, 4/Sx!", notes: "1P:u032, 2:x, 3:M" },
{ path: "3/sk1, 2/sk1, 3/", notes: "" },
{ path: "3/, 4/sk3-ESF", notes: "" },
{ path: "2/p1S, 2/S, 2/D, 2/", notes: "1P:u008, 2:x, 3M:e808, 4:x" },
{ path: "4/, 3/EwO", notes: "" },
{ path: "2/, 2/, 2/s1", notes: "1M:e760, 2M:u772, 3M:u992!" },
{ path: "2/, 2/, 2/FRS, 2/sk2", notes: "" },
{ path: "2/, 2/B, 2/B", notes: "1P:e772!, 2P:u456!, 3:x" },
{ path: "2/, 3/", notes: "1P:e656!!, 2P:+1016!" },
{ path: "3/FRS?, 3/, 5/T", notes: "" },
{ path: "4/p1, 2/B", notes: "1P:e604, 2P:e088" },
{ path: "4/, 2/, 2/", notes: "" },
{ path: "3/, 4/", notes: "" },
{ path: "2/sk1, 3/, 2/, 3/", notes: "" },
{ path: "2/, 3/AT-sk1-ESF, 2/", notes: "" },
{ path: "3/p1S, 2/!, 2/p2S", notes: "1M:e176, 2M:e668!, 3M:e428!!" },
{ path: "2/, 4/sk1-AS, 2/sk2", notes: "" },
{ path: "3/s2, 2/s2, 2/", notes: "1M:u696, 2M:u232, 3:x" },
{ path: "2/D, 2/p1SE½, 2/S, 2/p2S", notes: "1:x, 2:x, 3:x, 4:x" },
{ path: "2/, 2/Ts1, 2/, 2/s1, 2/TSx, 2/s2, 2/, 2/s1, 3/", notes: "1P:e032!, 2M:-292, 3:x, 4M:u092!, 5M:-512, 6:x, 7:x, 8P:u432, 9:x" },
{ path: "2/BOD, 2/sk1, 3/, 2/sk3-ESF", notes: "" },
{ path: "2/sk1, 2/AT-FRS, 2/", notes: "" },
{ path: "3/", notes: "1M:u612" },
{ path: "3/p2, 3/B", notes: "1M:e428, 2M:e844" },
{ path: "3/, 3/BOD, 2/sk3", notes: "" },
{ path: "2/S, 3/B", notes: "1P:u488/e200m, 2P:e388" },
{ path: "3/BOD", notes: "" },
{ path: "5/, 4/FRS, 3/AS", notes: "" },
{ path: "5/A2T-AS", notes: "" },
{ path: "2/, 3/, 2/, 2/sk1", notes: "" },
{ path: "2/p1S, 2/S, 2/S, 2/S", notes: "1:M, 2M:e752, 3:M, 4:x" },
{ path: "2/, 2/sk1, 2/sk4, 3/1p-ESF", notes: "" },
{ path: "2/!, 3/B, 2/B", notes: "1M:e172, 2M:e152!, 3P:e308/324" },
{ path: "3/sk1-ES, 3/ EwO", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/sk2, 2/sk1-FRS, 2/sk1-ESF, 2/sk2, 4/sk1-ESF", notes: "" },
{ path: "4/", notes: "1:e420" },
{ path: "2/, 2/, 3/", notes: "" },
{ path: "2/, 2/, 2/sk1, 2/, 2/", notes: "" },
{ path: "2/p1S, 3/S, 2/, 3/S", notes: "1P:e444, 2P:e856, 3P:u576, 4:x" },
{ path: "2|4", notes: "2:u900" },
{ path: "3/, 2/T, 2/", notes: "1M:+28?, 2P:u696, 3P:u604!" },
{ path: "2/sk2-ESF, 2/sk2-ESF", notes: "" },
{ path: "2/, 2/AS, 4/", notes: "" },
{ path: "3/s1E, 2/Ts1, 2/T, 2/p1", notes: "1:x, 2P:u436!, 3P:e600!, 4:x" },
{ path: "2/s1-SI, 3/s1-SI, 2/A2B-SF", notes: "u960, e420, x" },
{ path: "3/, 2/E!, 2/S, 2/p1", notes: "1:+220!!, 2:x, 3M:u496, 4P:x" },
{ path: "4/, 2/sk2, 2/", notes: "" },
{ path: "3/AB, 2/, EwO", notes: "" },
{ path: "2/sk1-AS, 2/RS, 4/sk1-ESF", notes: "" },
{ path: "2/sk2-ESF, 2/sk1-ESF, 3/", notes: "" },
{ path: "4/BOD", notes: "" },
{ path: "2/sk2-ESF, 3/sk2, 2/sk1, 2/sk1", notes: "" },
{ path: "4/, 3/B", notes: "1:x, 2:M" },
{ path: "AI/", notes: "" },
{ path: "??", notes: "" },
{ path: "2/sk1-ESF, 2/sk1, 2/, 2/, 2/BOD", notes: "" },
{ path: "4|2|2", notes: "1:u336" },
{ path: "2/sk1-ESF, 2/sk4-ESF", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "AI", notes: "" },
{ path: "2/sk1, 3/, 3/", notes: "" },
{ path: "3/sk3-ESF, 2/FRS, 2/, 2/", notes: "" },
{ path: "4/s1, 2/Tp2S, 2/", notes: "1M:e796, 2P:e516!, 3P:+500/u360!" },
{ path: "2/, 2/s1E, 2/, - 2/s1, 2/B, 2/s5", notes: "1:x, 2:x, 3P:u680/844, 4:x, 5M:+456, 6:M" },
{ path: "AI", notes: "1:x, 2M:u380!, 3:x" },
{ path: "4/s2, 2/, 3/", notes: "1:F, 2:F, 3P:u556" },
{ path: "3/p1S, 2/, 2/s1", notes: "1:x, 2M:u504!, 3M:u972" },
{ path: "4/BOD, EwO", notes: "" },
{ path: "2E|4", notes: "2:e732" },
{ path: "3/, 3/sk1", notes: "" },
{ path: "2/, 2/p3, 2/, 2/, 4/", notes: "1:x, 2M:u108, 3:x, 4M:u348!, 5:x" },
{ path: "3|4", notes: "1:e404|2:F" },
{ path: "3/, 4/EwO", notes: "" },
{ path: "3/2P-SF!, 2/ES[15]-SF!, 3/", notes: "x, u324 / e420" },
{ path: "2/sk2-ESF, 2/DOD-ESF, 2/ESF", notes: "" },
{ path: "2/sk1-ESF, 2/, 2/DOD-ESF, 2/, 2/", notes: "" },
{ path: "2/, 2/, 3/", notes: "1:u900, 2M:+32, 3:e084!!" },
{ path: "AI", notes: "" },
{ path: "2/sk3-ESF, 2/sk3, 2/sk2-ESF", notes: "" },
{ path: "3/D, 2/p1S, 2/!", notes: "1:e292, 2:e792, 3:u496" },
{ path: "3/T, 4/T", notes: "" },
{ path: "2/, 2/B, 3/p1", notes: "1:x, 2:x, 3:x" },
{ path: "3/sk1-ESF, 3/, 2/", notes: "" },
{ path: "2/sk1, 2/sk2, 2/", notes: "" },
{ path: "2/, 2/!, 2/s1, 2/s1", notes: "1P:e480!, 2M:-340, 3M:+668" },
{ path: "3/p2, 2/p2S", notes: "1:x, 2P:u216" },
{ path: "4/AT-SIF!", notes: "e012" },
{ path: "3/B, 2/!, 2/p3", notes: "1:x, 2P:u308/u588, 2:x, 3M:u+400" },
{ path: "3/, 2/TE*, 2/B", notes: "1:+172!!, 2:x, 3:F *Before 4th freestyle chord change." },
{ path: "2/s1E, 2/, 2/s1ET2, 2/", notes: "1:x, 2:x, 3:x, 4:x" },
{ path: "3/sk1, 2/sk1", notes: "" },
{ path: "4/, 2/s2", notes: "" },
{ path: "2/BOD, 2/sk1", notes: "" },
{ path: "3/ESF, 4/BOD EwO", notes: "" },
{ path: "3/p1S, 3/p1S", notes: "1:x, 2:x" },
{ path: "2/, 2/sk1, 3/FRS, 2/sk1-ESF", notes: "" },
{ path: "2/s1, 2/, 2/s1", notes: "1:x, 2M:e956!, 3:x" },
{ path: "3/s2, 3/, 2/s1, 2/!", notes: "1M:e828, 2:M!, 3M:u864!, 4P:e280!!" },
{ path: "2/B, 2/, 4/B, 2/, 2/s3", notes: "1P:e920!, 2:M, 3:x, 4:x, 5:x" },
{ path: "2/B, 2/", notes: "1:x, 2:x" },
{ path: "3/, 3/sk1, 3/sk1, 2/sk1", notes: "" },
{ path: "3/E, 4/ 2/", notes: "" },
{ path: "2/, 2/sk1-AS, 3/sk1", notes: "" },
{ path: "3/FRS, 3/AT-sk1", notes: "" },
{ path: "2/s1, 3/p1E½, 2/p4w3Sx", notes: "1:+64!!, 2:x, 3:x" },
{ path: "2/Se, 2/Se, 2/Se, 2/, 2/", notes: "1M:u096, 2M:e168, 3M:u240, 4M:e948, 5M:e652" },
{ path: "3/, 3/, 2/Tp1w3S10, 2/s1, 3/", notes: "1M:u172, 2M:F!, 3S:e200/Mu400, 4P:u104, 5:x" },
{ path: "2/p1Se, 2/E!, 2/S, 2/Se, 2/", notes: "1:u076, 3P:u252, 4M:e804" },
{ path: "4/T, 4/Ts2", notes: "1:x, 2:e300" },
{ path: "3/BOD, 3/BOD", notes: "" },
{ path: "3/, 3/D", notes: "1P:+124!!, 2M:+116" },
{ path: "3/s3, 2/", notes: "1P:5900!, 2:x" },
{ path: "2/p1Sx5!, 3/", notes: "1P:u800/+476, 2:x" },
{ path: "2/, 2/ESF, 2/DOD-ESF", notes: "" },
{ path: "2/, 2/, 2/sk8", notes: "" },
{ path: "3/, 3/ESP", notes: "" },
{ path: "2/p2, 3/p1, 2/", notes: "1P:e174/e208p/e260m!!, 2M:+692!, 3:x" },
{ path: "2/BOD, 3/, 2/sk1", notes: "" },
{ path: "2/, 2/sk1, 3/sk2", notes: "" },
{ path: "3/, 4/, 3/S", notes: "1P:+648!, 2:x, 3M:e300" },
{ path: "2/De, 4/, 2/De, 3/Se", notes: "1:u152, 2:u624!, 3:e820, 4:e032" },
{ path: "2p1S|2E|2D|3s3p1S", notes: "1:e512|3:u-12|4:e584" },
{ path: "3/, 2/sk1, 3/, 2/sk5-ESF", notes: "" },
{ path: "3/, 2/B, 3/s3", notes: "1P:e904, 2P:e580, 3P:u540" },
{ path: "3|2B|3", notes: "1:+12|2:+64|3:240" },
{ path: "AI", notes: "" },
{ path: "2/p1Se, 4/p1S", notes: "1:M, 2:x" },
{ path: "3/s1, 2/s1, 2/p1S", notes: "1:x, 2M:e108!, 3P:u508" },
{ path: "4/AB, 2/sk1, 3/", notes: "" },
{ path: "2/!, 3/, 2/", notes: "" },
{ path: "2/, 2/sk2, 2/", notes: "" },
{ path: "3/s1", notes: "1M:e020" },
{ path: "3/ES-SF, 2²/", notes: "u468" },
{ path: "2|3B|4p1S", notes: "1:e212|2:u552|3:uF" },
{ path: "2/sk1-ESF, 2/sk2-ESF, 2/sk1-ESF", notes: "" },
{ path: "2/B, 3/B, 3/B", notes: "1:u204, 2:e632/808, 3:u436" },
{ path: "2/BOD, 2/BOD", notes: "" },
{ path: "2/, 3/, 3/ESF, 2/sk1-ES", notes: "" },
{ path: "3/sk1, 3/, 2/", notes: "" },
{ path: "2/, 4/BOD", notes: "" },
{ path: "2/, 2/T, 4/s1", notes: "" },
{ path: "2/AT, 2/AT, 2/2p-ESF", notes: "" },
{ path: "2/p1S, 2/p1S, 3/p2S", notes: "1P:e216, 2P:e748, 3M:e708" },
{ path: "3/, 2/, 2/sk2, 2/sk3", notes: "" },
{ path: "4/, 2/B", notes: "1M:u824, 2M:e956!" },
{ path: "3/, 2/p1, 2/p1S, 2/D", notes: "1M:u092/136!, 2P:u216!, 3:x, 4:x" },
{ path: "2s2S|3s2S|2s2S|2S", notes: "1:e544|2:x|3:u356|4:u220" },
{ path: "4/BOD, 2/sk1", notes: "" },
{ path: "3/sk3, 2/sk2", notes: "" },
{ path: "2/p1Se, 2/Se, 2/p1S", notes: "1M:u132, 2:u692/764, 3?:e872" },
{ path: "2/AS, 2/AS, 2/sk2", notes: "" },
{ path: "3/sk2, 3/BOD, 3/sk1-ESF, 3/sk4-1p-ESF", notes: "" },
{ path: "3/s1, 4/", notes: "1M:u204!, 2P:u088!" },
{ path: "4/, 4/B", notes: "1:M!, 2M:+996!" },
{ path: "2/E!, 2/s1, 2/", notes: "1:x, 2:M, 3:e432/436" },
{ path: "3ES›SF|3", notes: "e740" },
{ path: "3/, 2/sk1, 3/1P-ESF", notes: "" },
{ path: "2/, 3/AB-1p-ESF, 3/", notes: "" },
{ path: "4/ESF, 3/sk2", notes: "" },
{ path: "2/De, 3/S", notes: "1M:e168, 2:e252/292!!" },
{ path: "4/, 4/", notes: "1M:e792, 2:e848/884" },
{ path: "AI", notes: "No squeezes." },
{ path: "3/, 2/p1", notes: "1P:e024, 2P:u016" },
{ path: "2/, 3/DOD-ESF", notes: "" },
{ path: "AI", notes: "" },
{ path: "3/", notes: "" },
{ path: "2/p2S, 2/S, 3p/1S, 4/B", notes: "1:u588, 2:e416/e712!!, 3:e416/!!u200, 4:F" },
{ path: "2/p3E!, 2/p1SE!, 2/p1, 2/", notes: "1:x, 2:x, 3M:e220!, 4:x" },
{ path: "2/ES-SI, 2/1P-ES-SIF, 2/2P-ES-SIF, 2/1P-ES-SIF", notes: "u664, -400, -64, +688" },
{ path: "4/sk1-ES, 3/sk2-ES, 2/sk1", notes: "" },
{ path: "4/sk2, 2/, 2/sk1-ESP, 2/sk1", notes: "" },
{ path: "2/B, 2/p1Se, 2/p2Se, 2/", notes: "1:x, 2P:u612, 3:M, 4M:u640!" },
{ path: "2/s1, 2/, 2/s3", notes: "1P:e772!, 2:x, 3P:e360!" },
{ path: "2/, 2/DOD-ES, 3/", notes: "" },
{ path: "3/, 3/s1", notes: "1P:u908/996, 2P:u732" },
{ path: "2/s1, 4/s3, 2", notes: "1:M, 2:M, 3:M" },
{ path: "3/, 2/sk6-ES, 2/sk1", notes: "" },
{ path: "2/sk2-ESF, 2/sk2-ESF, 2/sk3-ESF, 3/", notes: "" },
{ path: "2/p1S, 3/, 2/Se, 2/", notes: "1:F|2P:e960|3:e800?|4:F" },
{ path: "3atsf|3a2tsf", notes: "x, e704" },
{ path: "4/E,2/s1", notes: "1:x, 2:x" },
{ path: "3/, 2/, 2/s1, 2/", notes: "1M:+68!!, 2:F!!" },
{ path: "2/, 2/, 4/, 4/B", notes: "1P:u888, 2:x, 3P:e980, 4:F" },
{ path: "2|2E|4", notes: "1:e164|3:+788" },
{ path: "4/sk1, 4/ EwO", notes: "" },
{ path: "3/, 3/, 2/s2S", notes: "1M:u436!, 2:F, 3M:e164!" },
{ path: "2/sk2, 2/FRS, 3/, 2/", notes: "" },
{ path: "2/, 2/sk1-ESF", notes: "" },
{ path: "2/, 3/AT, 2/BOD", notes: "" },
{ path: "4/, 2/s1", notes: "1M:u204!, 2:F" },
{ path: "3/sk1-ESF, 2/sk1, 2/sk6-ES", notes: "" },
{ path: "2/Se, 2/p1Se, 2/De", notes: "1:x, 2:x, 3:x" },
{ path: "2/S, 2/p1, 2/D", notes: "1P:56/84, 2P:e526, 3P:e320" },
{ path: "3/sk2-FRS, 2/BOD, 3/sk2-ESF [FRS", notes: "" },
{ path: "2|2s1|2s2|2s2", notes: "2:u028|3:+472" },
{ path: "2/BOD-SI, 2/2P-SI, 2/", notes: "e412 (764), e732 (u280)" },
{ path: "2/, 2/sk2, 3/", notes: "" },
{ path: "3/T", notes: "1:x" },
{ path: "2/, 3/, 2/s1", notes: "1M:e152!!, 2M:e520!!, 3:x" },
{ path: "2/, 4/s2S, 3/s2", notes: "" },
{ path: "3/s1S, 4/s1SE?, 2/s5S", notes: "" },
{ path: "2S|2|2p1", notes: "1:e904|2:u288|3:e772" },
{ path: "5/AT-AS", notes: "" },
{ path: "2/S, 3/, 3/S", notes: "1:x, 2:F, 3:x" },
{ path: "3/2P2W-ESx-SF, 2!/AT", notes: "u464" },
{ path: "2/sk1, 2/sk1, 3/AB-FRS, 2/sk4", notes: "" },
{ path: "3/S, 2/Dx, 3/", notes: "1:x, 2:x, 3M:e188" },
{ path: "2/, 2/s2, 4/", notes: "1M:372, 2M:964!?, 3P:+200!!" },
{ path: "2/, 2/, 4/", notes: "1P:e200!, 2P:+132!!" },
{ path: "2/Se, 2/p1S, 2/Se, 2/p1Sx45, 2/B", notes: "1M:e128, 2M:u556, 3M:u684, 4P:u804, 5M:e324" },
{ path: "2/p1Se, 2/p1Se, 2/p2S", notes: "1M:e440, 2M:e948, 3:x" },
{ path: "2/BOD, 2/sk4, 3/sk2-ESF", notes: "" },
{ path: "2/, 2/, 3/", notes: "1P:+172!!, 2:x, 3P:+52!!" },
{ path: "AI", notes: "" },
{ path: "3/sk2, 4/", notes: "" },
{ path: "3/sk1, 3/sk1 FwO", notes: "" },
{ path: "3/, 3/sk3", notes: "" },
{ path: "3/, 2/S, 3/s2", notes: "1P:+160!!, 2P:+e020, 3P:e880" },
{ path: "2/, 3/BOD, 2/AT", notes: "" },
{ path: "2/, 2/, 2/sk3, 3/sk2", notes: "" },
{ path: "4AI, 2/s2", notes: "2P:u508" },
{ path: "4/B", notes: "1:512!" },
{ path: "2/, 2/Dx, 2/, 2/p1S, 2/p2w2S, 2/", notes: "1P:u+192, 2:x, 3M:+e396, 4M:e072, 5M:e040, 6:F" },
{ path: "3|2p1", notes: "1:u572" },
{ path: "2/, 2/D, 3/, 2/", notes: "1M:e368!, 2M:e776, 3:x, 4:F" },
{ path: "3/, 2/AT-sk1-ESF, 2/sk6-ESF", notes: "" },
{ path: "2/sk3-ESF, 2/, 2/sk1-ESF, 2/, 4/BOD, 2/DOD-ESF", notes: "" },
{ path: "2/sk1, 2/BOD, 3/, 2/", notes: "" },
{ path: "3/, 2/p3Sx5, 2/, 4/", notes: "1:x, 2S:u700/e064, 3:x, 4M:+644!" },
{ path: "2/s1, 2/s2", notes: "1:x, 2M:e620" },
{ path: "2/p1E3t, 3/B, 2/", notes: "1:x, 2:F, 3:e688" },
{ path: "4/sk1, 3/, 3/", notes: "" },
{ path: "3/s1", notes: "1P:u708!" },
{ path: "4/FRS, 2/", notes: "" },
{ path: "4/sk1 FRS, 2/", notes: "" },
{ path: "2/sk1-ESF, 2/sk2-ESF, 3/sk2", notes: "" },
{ path: "2/Dx, 2/S, 2/D, 3/S, 2/", notes: "1:x, 2P:e114, 3P:e404, 4P:u404, 5:F" },
{ path: "4|3|3", notes: "1:u880|2:F|3:u952" },
{ path: "3/, 3/sk1", notes: "" },
{ path: "4/s1, 4/, 2/", notes: "1P:e080/e224, 2P:u724/740/F?" },
{ path: "3|4B", notes: "1:F|2:u612" },
{ path: "4/, 2/p1, 3/", notes: "1:F, 2M:u436, 3:x" },
{ path: "3/BOD, 2/sk1, 3/sk1", notes: "" },
{ path: "2|2p3S|3", notes: "1:x|2:x|3:F" },
{ path: "2/BOD, 3/sk4", notes: "" },
{ path: "2/, 2/Se, 2/p4Se", notes: "1:x, 2M:e572, 3:x" },
{ path: "3/, 2/s1", notes: "1M:e912, 2:u280" },
{ path: "2/, 2/!, 2/s2, 2/p4S", notes: "1:x, 2:x, 3M:e884, 4:x" },
{ path: "3/sk2-ESF 3/BOD 2/ESF", notes: "" },
{ path: "2/s1, 3/Se, 2/Se", notes: "1:M, 2M:u268!, 3P:e260" },
{ path: "2/sk1-ESF, 3/, 2/!", notes: "" },
{ path: "2/, 2/, 2/sk3", notes: "" },
{ path: "3/D, 2/", notes: "1M:e680!, 2P:720!!" },
{ path: "3/DOD-ESF, 4/", notes: "" },
{ path: "2/, 2/DOD-ES2F, 2/BOD, 3/1p-ESF, 2/", notes: "" },
{ path: "3/sk2, 4/sk1, 2/sk3", notes: "" },
{ path: "2/sk2, 2/, 2/BOD", notes: "" },
{ path: "3/BOD, 2/DOD-ESF, 3/", notes: "" },
{ path: "2/sk2-ESF, 2/AB-sk1, 2/sk1", notes: "" },
{ path: "3/, 4/B", notes: "1:x, 2:M" },
{ path: "2/, 2/sk1ESF, 2/BOD, 2/sk2ESF", notes: "" },
{ path: "3/, 2/S, 2/, 2/p1S", notes: "1M:e620!!, 2M:u632, 3M:e236!!, 4M:u540" },
{ path: "2s1|3s1", notes: "1:F|2:272/316/368" },
{ path: "3/1P, 2/2P-SIFe", notes: "x" },
{ path: "4/p1*", notes: "1:x, *OD chain" },
{ path: "2/BOD, 2/sk1-FRS, 3/AT-AS", notes: "" },
{ path: "2/ 2/sk1 2/sk2", notes: "" },
{ path: "2/, 3/, 4/", notes: "" },
{ path: "4/sk2-ESF*, 3/", notes: "" },
{ path: "4/B", notes: "1M:u148!" },
{ path: "2/Sx25, 2/p1Se, 2/Se, 2/", notes: "1:e032:-80, 2M:u-264, 3M:+832" },
{ path: "2/, 3/, 2/, 3/T 2/", notes: "" },
{ path: "3/B, 3/, 2/s2", notes: "1M:e968!, 2:x, 3M:e304!" },
{ path: "2/s1, 2/p3S, 2/", notes: "" },
{ path: "3/, 2/sk2, 2/", notes: "" },
{ path: "2/, 2/B, 2/B, 2/", notes: "1P:u796, 2M:+648!, 3M:+220, 4:x" },
{ path: "3/TE*, 4/", notes: "1:x, 2:M, *When you see the timer show 'Get Ready!', act when the 2nd oncoming freestyle change hits the halfway point on the OD bar. Very complicated early FRS/E." },
{ path: "3/, 4/, 2/sk7ESF", notes: "" },
{ path: "2/p2, 3/p1Se", notes: "1:x, 2M:u584!" },
{ path: "3/s1, 3/", notes: "1M:e400, 2:x" },
{ path: "2/S, 2/, 2/!", notes: "1M:980, 2M:236, 3P:u968" },
{ path: "2/, 2/BOD, 2/", notes: "" },
{ path: "2/BOD, 3/BOD, 2/sk2", notes: "" },
{ path: "2/, 3/sk3, 4/sk4-ESF", notes: "" },
{ path: "2/, 2/B, 3/, 3/p1", notes: "1:F!, 2:e816(-184)!, 3:x, 4:+372!" },
{ path: "2/sk2-ESF, 2/sk3, 2/, 2/sk1", notes: "" },
{ path: "2/PB, 3/ESF, 3/sk1, 2/", notes: "" },
{ path: "2/FRS(¼)!, 2/BOD-SIF!!, 2/2P-SIF!!, 2/SI!, 2/BOD-SI!", notes: "-80 (x), x, +536, e736" },
{ path: "2/B, 2/p3", notes: "1P:+124!!, 2:x" },
{ path: "3/, 2/, 3/sk1", notes: "" },
{ path: "2/DOD-ESF, 2/sk1-1p-ESF-FRS, 2/", notes: "" },
{ path: "3/s1, 3/s1, 2/, 3/s1", notes: "1:x, 2P:e880/900!!, 3P:??, 4:F!" },
{ path: "3/, 3/sk2-ESF", notes: "" },
{ path: "2/B, 4/, 3/Dx, 2/", notes: "1P:+116!!, 2P:+48!!, 3P:e200!!, 4:x" },
{ path: "2p1Ë1|2p2|2", notes: "3:+328" },
{ path: "3/sk4 EwO", notes: "" },
{ path: "2/p1Se, 2/p1, 2/p2Se", notes: "1M:e660, 2:x, 3:x" },
{ path: "4/, 2/BOD, 2/ES, 2/sk1", notes: "" },
{ path: "3/AS, 4/", notes: "" },
{ path: "3/, 3/", notes: "" },
{ path: "3/ESF, 2/BOD", notes: "" },
{ path: "2/s2, 2/, 2/T", notes: "1M:e256!, 2:F, 3:x" },
{ path: "2/sk1-ESF, 2/sk1-ESF, 2/AT-sk1-ESF", notes: "" },
{ path: "2/sk1, 2/, 3/AB, 2/sk1", notes: "" },
{ path: "2/, 2/BOD", notes: "" },
{ path: "3/BOD", notes: "" },
{ path: "2/, 2/, 2/, 4/", notes: "" },
{ path: "2/, 4/s1, 4/, 2/B", notes: "1:x, 2:x, 3M:796, 4:x" },
{ path: "4/ESP-70, 3/DOD-ESP-70", notes: "" },
{ path: "3/, 2/!, 3/sk3-1p-ESF", notes: "" },
{ path: "2/p1Se, 3/Se", notes: "1M:e416, 2M:u872" },
{ path: "2/B, 2/p2, 3/p2", notes: "1P:e588!!, 2:x, 3P:e624!!" },
{ path: "4/sk1, 2/AT-FRS, 2/", notes: "" },
{ path: "2!/E!, 2/B, 2/!, 2/", notes: "1:x, 2M:u448!, 3:x, 4:x" },
{ path: "2/, 2/, 4/, 2/p1", notes: "1:x, 2:x, 3:F, 4M:u400" },
{ path: "3/, 2/sk1", notes: "" },
{ path: "2/SIFe, 2/2P-SI, 2/1P-SI!!", notes: "u600, u976, e056" },
{ path: "2/, 3/, 2/", notes: "" },
{ path: "2/!, 2/B, 2/s2", notes: "1:x, 2:M, 2:x" },
{ path: "2/B, 2/p3S, 2/p2S", notes: "1M:e504!, 2:x, 3:F!" },
{ path: "2/sk3-ESF, 2/sk4, 2/sk3-ESF", notes: "" },
{ path: "2/sk1-ESF, 2/DOD-ESF, 2/", notes: "" },
{ path: "2/, 2/AT, 2!/, 3/sk1", notes: "" },
{ path: "4|2s1p1w2S|2s1p1S", notes: "3:u332" },
{ path: "2/sk1, 2/sk1, 3/", notes: "" },
{ path: "4/sk1-FRS, 2/!, 2/sk4-ESF", notes: "" },
{ path: "3/sk1-AS, 3/BOD, 2/", notes: "" },
{ path: "2/S, 2/p1, 3/S", notes: "1M:e296, 2M:u856, 3:F!" },
{ path: "2/, 2/AT-FRS, 2/, 2/ [FRS", notes: "" },
{ path: "2/2P-SIF, 3/, 3/SI, 2/ESe", notes: "e680, u480" },
{ path: "3, 4/SE, 2/", notes: "1:x, 2:x, 3:x" },
{ path: "4/AT-sk4", notes: "" },
{ path: "3/S, 3/s1", notes: "1P:e708, 2M:e080" },
{ path: "3p2S|2p2S|2", notes: "1:e204|2:464|3:e164" },
{ path: "2/, 2/sk1-ESF, 3/sk4-ESF", notes: "" },
{ path: "4/2p-ESF", notes: "" },
{ path: "3/, 3/", notes: "1:F, 2M:u008" },
{ path: "3/, 2/, 4/sk2-ESF", notes: "" },
{ path: "2/Dx, 2/p1S, 2/S, 2/s1", notes: "1:x, 2:+172!!, 3M:e+32, 4:x" },
{ path: "2/, 2/SIF, 2/FRS(0), 4/", notes: "u360" },
{ path: "3/, 4/", notes: "" },
{ path: "2/E¼, 2/S, 2/D25, 3/S, 2/p2S", notes: "1:x, 2:F!, 3:u072/e-44, 4P:e900, 5:F" },
{ path: "2/1P-FES-SIF, 4/ES-SI, 2/1P-SI", notes: "e844, u868, e204" },
{ path: "3p4S|2p2S|2p1S|2", notes: "1:u664|2:F|3:F|4:F" },
{ path: "AI", notes: "1:x, 2M:u008, 3:x" },
{ path: "2|2p1S|3E|2p1S|4S", notes: "1:u540|2:e024|4:u900|5:u768" },
{ path: "3/SIFe, (2/1P3W-FESx!-SIF |OR| 2/2W-FESe-SI!), 2/DOD-FESe-SI", notes: "u064, (-800) e300, (-700) u616" },
{ path: "2/, 3/TE4t, 2/p1, 2/T", notes: "1:x, 2:x, 3M:u468, 4M:u044" },
{ path: "2/, 2/p2S, 2/p1SE½, 2/", notes: "1M:u484, 2M:e368, 4:u964!/e020" },
{ path: "2/sk1-ESF, 2/, 2/BOD", notes: "" },
{ path: "2/, 3/B, 3/B", notes: "1M:u980, 2M:u960, 3M:u948" },
{ path: "2/sk1, 3/", notes: "" },
{ path: "2/s1, 2/s2, 3/p1Sx25", notes: "1:e128, 2:336, 3:u428" },
{ path: "2/, 2/sk1", notes: "" },
{ path: "2/sk2, 2/sk3, 2/sk2, 2/", notes: "" },
{ path: "4/2W-ESe-SIF", notes: "e000" },
{ path: "3/B, 2/", notes: "1:x, 2P:e208/e280" },
{ path: "AI", notes: "" },
{ path: "4/sk2-1p-ESF, 3/sk3-FRS, 2/sk2-1p-ESF", notes: "" },
{ path: "5/B, 4/, 2/p1S, 2/p2S", notes: "1P:e764, 2F:e724/820, 3F:u916/e028, 5?:u244" },
{ path: "NO PART", notes: "" },
{ path: "3/, 2/, 3/, 2/B", notes: "1:F, 2M:u660, 3M:e560, 4M:u180" },
{ path: "2/s1, 2/s1, 2/s2", notes: "1:x, 2:x, 3P:u272!" },
{ path: "5/", notes: "1:x" },
];

var drumPaths = [
{ path: "1-0-1-1-AI", notes: "" },
{ path: "0-2-0-1-0", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "1-0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(8)-2-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-0-2-0in-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "0(6)-1", notes: "Squeezes Available" },
{ path: "0-0-0-0-2-0-1", notes: "Squeezes Available | Old Rank 1 unobtainable" },
{ path: "1-0-0-1-1-0-0-0-3-0-0-0-1", notes: "Squeezes Available" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "1-0(5)-1-0-0-0sqout-0(5)-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "1-0(5)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "4-0-1", notes: "Squeezes Available | Uni-fail path scores more" },
{ path: "AI", notes: "Ends with OD" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2-AI", notes: "Squeeze Available" },
{ path: "0-2-2-AI", notes: "Squeezes Available | Ends with OD" },
{ path: "0-0-0-0-1-AI", notes: "Skip the start of chorus 2 | Squeezes Available" },
{ path: "AI", notes: "Squeeze 2nd act" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "5-AI", notes: "Squeeze Available" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-0-1-0", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "2-0-1-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0(5)-1-0-0-0-1", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available (Extremely hard)" },
{ path: "0-0-3-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-3-AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(8)-1-0", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-0-1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Ends with OD | Squeezes Available (hard)" },
{ path: "0(5)-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-3-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-1-0-0-0-0-1", notes: "Squeezes Available" },
{ path: "0-0-2-AI", notes: "" },
{ path: "2-0-0-0-0-1-0", notes: "" },
{ path: "2-0-1-0", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "1-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-2-0", notes: "Squeezes Available" },
{ path: "AI ", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0out-1-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0out-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-2-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-3-AI", notes: "" },
{ path: "0-0-0-2-AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-0-0-1-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0out-0", notes: "" },
{ path: "0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-0-1-0", notes: "" },
{ path: "0-1-2out-AI", notes: "Squeezes Available" },
{ path: "0(6)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0(6)-1", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "Squeezes Available" },
{ path: "1-0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "3-0-0-0-2-0", notes: "" },
{ path: "0-3-0", notes: "Squeeze Available" },
{ path: "1-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(5)-3", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-0-0-0-0out-1-AI", notes: "" },
{ path: "AI", notes: "Ends with OD | Uni-fail may score more" },
{ path: "", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available| Uni-fail path scores more" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(7)-1", notes: "Squeeze Available" },
{ path: "0-0-1-0-3-0", notes: "Squeezes Available" },
{ path: "1-1", notes: "Ends with OD" },
{ path: "1out-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-2-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-0", notes: "" },
{ path: "0-0-2", notes: "Squeezes Available" },
{ path: "0(5)-2-AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-1", notes: "" },
{ path: "3-2-AI", notes: "Squeezes Available" },
{ path: "0-0-1-0-1", notes: "Squeezes Available" },
{ path: "0-0-0-2", notes: "" },
{ path: "1-1-AI", notes: "Squeezes Available" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(6)-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-2-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available | Uni-fail may score more" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0-0-1-1", notes: "Squeezes Available" },
{ path: "1-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "0(6)-0in", notes: "0in requires squeeze | Squeezes Available" },
{ path: "0-0-0-1-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-1in-1", notes: "Squeezes Available | Uni-fail path scores more" },
{ path: "0-0-0-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeeze Act 1" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "0(5)-2-0", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-0-1", notes: "Squeeze Available" },
{ path: "0-0-0-1-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-5-0-0-1", notes: "" },
{ path: "1-0(5)-1", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Uni-fail may score more" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeeze Available last act" },
{ path: "AI or 0-0-1-AI", notes: "0-0-1-AI better if squeezed" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-2-1", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "0(9)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-4-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-2-2", notes: "" },
{ path: "", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-1-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "2-AI", notes: "Squeezes Available | Fill score discrepancy?" },
{ path: "AI", notes: "" },
{ path: "0-1", notes: "Squeeze Available act 1" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Ends with OD" },
{ path: "0-0-0-0-2", notes: "" },
{ path: "0(7)-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(5)-2-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-0-3in-1", notes: "Squeezes Available | Uni-fail path scores more" },
{ path: "AI", notes: "" },
{ path: "Reg AI | Pro: 0-3-0", notes: "Uni-fail path scores more" },
{ path: "AI", notes: "" },
{ path: "1-0-0out-0", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-0(5)-1", notes: "Squeezes Available" },
{ path: "", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-3", notes: "Uni-fail path will score more" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available | Ends with OD" },
{ path: "0-0-1-1", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-3", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-1-0", notes: "" },
{ path: "0-0-0-3", notes: "" },
{ path: "1-0-0-1-AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1", notes: "Squeeze Available" },
{ path: "1-0-1", notes: "Ends with OD" },
{ path: "AI", notes: "" },
{ path: "0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0-0-1", notes: "" },
{ path: "0-2-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-0-0-3-0", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "0-2-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available (Extremely hard)" },
{ path: "0-1-0-0-0-3-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-2-AI", notes: "Squeeze Available 1st act" },
{ path: "0out-AI", notes: "" },
{ path: "1-AI", notes: "You will overfill" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "Squeezes Available" },
{ path: "1-0-0-0-1-1-0", notes: "" },
{ path: "Reg:AI | Pro:0-0-1-1-AI", notes: "" },
{ path: "1-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-2-0(5)-1", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "1-0(6)-1-1-0", notes: "Squeezes Available" },
{ path: "0-0-0-0out-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available last chorus" },
{ path: "AI", notes: "Unison fail path will score more" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2out-0-1", notes: "Hit OD after act 1 early" },
{ path: "AI", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-2-0", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-1-0", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-0-1", notes: "" },
{ path: "4-0-0-0-0-2-3-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-0-0-2", notes: "Squeezes Available (Extremely hard)" },
{ path: "0-2-3", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available | Uni-fail may score more" },
{ path: "0-2-0", notes: "" },
{ path: "0-0-0out-0-2", notes: "Squeezes Available" },
{ path: "1-0-1-0-0-0-1", notes: "Squeezes Available" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "1-0out-AI", notes: "" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-4out-0", notes: "Hit next OD early after skip 4" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-2-0", notes: "Squeezes Available" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "Squeezes Available" },
{ path: "0-1-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available | Possible uni miss" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "" },
{ path: "0-1-0-2", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "0-0-1-AI", notes: "Squeeze Available" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "1-0-1-0-1", notes: "Squeezes Available" },
{ path: "1-0-1-1-1", notes: "Squeezes Available" },
{ path: "0(11)-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-5-0", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "2-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-0-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "4-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "Reg: 1-AI | Pro: 1-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeeze 2nd act" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-1-0-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-1-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze during drum solo" },
{ path: "0(5)-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "0-0-1-1", notes: "Squeezes Available" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Ends with OD" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Unison fail path may score more" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-2out-AI", notes: "Hit 1st OD after skip 2 early" },
{ path: "AI", notes: "" },
{ path: "0(8)-1", notes: "" },
{ path: "0-0-0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-1", notes: "Uni-Fail path may score more" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2out-AI", notes: "" },
{ path: "1-0-0-0-1", notes: "" },
{ path: "0-2-0", notes: "" },
{ path: "0-0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze unison after 2nd act" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-2-0-1-0", notes: "Squeezes Available" },
{ path: "0-0-0-3-AI", notes: "Squeezes Available" },
{ path: "1-0out-0-0-0-1-0", notes: "Squeeze Available" },
{ path: "0-2-0-0-0-2", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "2-2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "Unison fail path will score more" },
{ path: "1-AI", notes: "" },
{ path: "0-0-0-0-1-2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1-0", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "0out-0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0-2-2", notes: "Squeeze last act" },
{ path: "1-1-1-0", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "0-0-1-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-4-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-0", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-0-1", notes: "Squeezes Available | Uni-fail may score more" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-1-0-1-AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(6)-1", notes: "Squeezes Available (hard)" },
{ path: "1-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-1", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-3-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "Reg: 1-AI | Pro: 1-0-0-3-0", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-2-2-0", notes: "" },
{ path: "1-0-0-0-0-1", notes: "" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "1-0-1", notes: "Squeeze 2nd act" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0(5)-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "Reg: 0(11)-1 | Pro: 0-1-0(8)-1", notes: "Squeezes Available" },
{ path: "3-AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "3-0-1-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(7)-2", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(5)-2", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0out-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-2-0in-0", notes: "" },
{ path: "AI", notes: "Squeeze Available | Uni-Fail may score more" },
{ path: "1-0-1", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available (hard)" },
{ path: "0(5)-1", notes: "Squeeze Available" },
{ path: "0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-2-0-1", notes: "Squeezes Available" },
{ path: "0-1-0-1", notes: "" },
{ path: "0-0-3", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-2", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Fill spot causes score disparity | Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI(5)", notes: "" },
{ path: "AI - Reg | 0-0-0-2 - Pro", notes: "" },
{ path: "0-0-0-2-0", notes: "Squeezes Available" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "Uni-fail path scores more" },
{ path: "0-1-AI", notes: "" },
{ path: "1-1-0-1-AI", notes: "Squeezes Available" },
{ path: "1-0-1-2-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-0", notes: "" },
{ path: "2-AI", notes: "Squeeze Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available | Fill disparity causes score difference" },
{ path: "0-0out-0", notes: "" },
{ path: "0-0-1-0", notes: "Squeezes Available (hard)" },
{ path: "1-0-1-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-3-1", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "Squeezes Available" },
{ path: "0-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Unison fail path will score more" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-1-0", notes: "Ends with OD" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "0-0-2-AI", notes: "" },
{ path: "3-AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "0-1-0(6)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-3-0", notes: "" },
{ path: "0-0-0-1-0-1", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "0-0-0-2-2", notes: "Squeeze during drum solo" },
{ path: "0-0-0-1-0", notes: "Squeezes Available" },
{ path: "1-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-0-0-0-1-1", notes: "Squeeze Available" },
{ path: "0-0-0-0-2-AI", notes: "Squeezes Available" },
{ path: "3-0-0-2-0", notes: "" },
{ path: "0-1-1-AI", notes: "Squeezes Available | Uni-fail may score more" },
{ path: "0-2-AI", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "Squeeze after drum solo 1" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "", notes: "" },
{ path: "0-0out-2-0", notes: "" },
{ path: "0(9)-1-AI", notes: "Squeezes Available" },
{ path: "0-5-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-2-AI", notes: "Squeeze Available" },
{ path: "0-0-0-1-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available | Ends with OD" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "Reg: 0-0-0-1 | Pro: 1-0-1", notes: "Pro will Overfill | Uni-fail path scores more" },
{ path: "0-0-0-1-0-3-3-0-0-0-2", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0out-AI", notes: "" },
{ path: "0-0-1-0-0-1", notes: "Squeezes Available" },
{ path: "0(6)-1", notes: "" },
{ path: "Reg: 0-0-1 | Pro: 1-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available (hard)" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0out-0-0-0-0out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "0-0-2-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze last act" },
{ path: "AI", notes: "Squeeze last act" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "2-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeeze - either hard or online unison lag" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "4-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0out-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "Reg: 0-0-1-0-0 | Pro: 0-0-2-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0-1", notes: "" },
{ path: "1-0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "NO PART", notes: "" },
{ path: "0out-0-0-0-0-0out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-2-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "Ends with OD" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-1-1-0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-0-0-0-0-1", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-2", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0out-0", notes: "Squeezes Available" },
{ path: "0out-0-2-0", notes: "" },
{ path: "0(7)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(6)-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Uni Fail path may score more" },
{ path: "0-0-2-AI", notes: "Ends with OD | Uni-fail path scores more" },
{ path: "0-1-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-0-0-2-AI", notes: "" },
{ path: "0out-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-4-0-1", notes: "Squeeze Available" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-0-0-1", notes: "" },
{ path: "1-0(9)-1", notes: "Squeezes Available" },
{ path: "", notes: "" },
{ path: "0-0-2-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "Reg: 0-0-1-1-0-1 | Pro: 1-1-1-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Nice fills HMX" },
{ path: "", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available | Old Rank 1 unobtainable" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0(6)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "0(9)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1out-AI", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0-0-0-2-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze 1st act" },
{ path: "1-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(6)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "" },
{ path: "1-0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "Ends with OD | Squeeze Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-0(13)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-2-0out-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-3", notes: "End with OD" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0-1-AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "0-0-0-0-2", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(7)-0out-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-3-1-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0out-AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "3-1", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeeze 1st act" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0(6)-1", notes: "" },
{ path: "0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available (Near Frame-Perfect)" },
{ path: "AI", notes: "" },
{ path: "0-1", notes: "Squeeze 1st act" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(6)-1", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0out-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-3-AI", notes: "" },
{ path: "1-0-0-0-1-AI", notes: "Squeeze Available" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "3-AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Ends with OD | Uni-fail path may score more" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "4-1", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Ends with OD | Uni-fail path scores more" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "0-0-0-0-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-0-1-0", notes: "" },
{ path: "0-0-0in-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-0-1-1-0-0", notes: "" },
{ path: "1-0-1-1-AI", notes: "" },
{ path: "0out-0-0-3", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1out-2-4-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-AI", notes: "" },
{ path: "0-2-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-0-0-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(7)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1out-1-0", notes: "Squeezes Available" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "0-0-2-0-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available | Fill spots differ for some" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0out-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0(14)-2-AI", notes: "Skip chorus before toms | Squeezes Available" },
{ path: "0-0-0-2", notes: "Squeezes Available" },
{ path: "1-0-1-0-1-AI", notes: "Squeezes Available" },
{ path: "0(3)-2-AI", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "3-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "5", notes: "" },
{ path: "1-0-0-2", notes: "" },
{ path: "0(11)-1-1", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-3", notes: "" },
{ path: "0-0out-AI", notes: "Squeeze Available" },
{ path: "0-1-0-0-0", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-0-2-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-2-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "0-0-3-1", notes: "" },
{ path: "0-0-0-1", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "Reg: 0-0-1-1 | Pro: 1-1-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "3-1-3-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze first act" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-2-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-2-1", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-0", notes: "Squeezes Available (Extremely hard)" },
{ path: "3-1-0", notes: "" },
{ path: "0-0-0-0-2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0-0-1", notes: "" },
{ path: "2-0-1-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-1", notes: "Squeezes Available" },
{ path: "0-4-3-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1out-0 or 0-0out-AI (hard Sqout) ", notes: "0-0out difficult adds 1600 or so" },
{ path: "0-0-1-0-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(7)-1-0(7)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "NO PART", notes: "" },
{ path: "1-2-AI", notes: "Squeezes Available | Old Rank 1 unobtainable" },
{ path: "1-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(6)-1-AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-1-2-1", notes: "Squeezes Available | Uni-fail path scores more" },
{ path: "0(6)-1", notes: "" },
{ path: "1-0-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(6)-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-2out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-3-3", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0-0-0-0-1-1", notes: "Squeezes Available" },
{ path: "0(8)-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0-3-1", notes: "Unison fail path will score more" },
{ path: "1-0-1", notes: "" },
{ path: "0-0-0-1-0-0-1-AI", notes: "" },
{ path: "1-0-0-0-1-0", notes: "1 after D solo | Squeezes Available" },
{ path: "0-1-0-1-1-1", notes: "Squeezes Available" },
{ path: "0-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-2-0", notes: "Squeezes Available. 1st act easy, 6th act hard" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-3-0", notes: "" },
{ path: "0-1-1", notes: "" },
{ path: "0out-0", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-0-0-1", notes: "Squeeze First Act" },
{ path: "0-0-0-0-1", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-1", notes: "" },
{ path: "0(5)-4", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Inconsist fills cause score disparity" },
{ path: "0-0-3-0-0", notes: "" },
{ path: "0-2-1-0", notes: "" },
{ path: "0-1-2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-2-3", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-2", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-0-1-0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-1-3", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0out-0-0-0out-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-1out-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-2-0-1-AI", notes: "Squeezes Available" },
{ path: "1-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available (Near Frame-Perfect)" },
{ path: "AI", notes: "" },
{ path: "0-0-1-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0in-AI", notes: "Squeezes Available | Must squeeze red for path" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-2-0-0-0-1", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "NO PART", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0out-0", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0(10)-3", notes: "" },
{ path: "", notes: "" },
{ path: "1-AI", notes: "Squeeze Available" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(9)-2-1-1-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-3-0", notes: "" },
{ path: "0-1-0-0-0-2", notes: "Squeezes Available last act" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0out-1", notes: "" },
{ path: "0-3", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "0(5)-4", notes: "" },
{ path: "0-0-0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeeze Act 1" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "8-AI", notes: "Yes, skip 8 | Squeeze Available" },
{ path: "1-0-1", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-2-0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-0-1", notes: "Squeezes Available" },
{ path: "0(5)-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "0-0-0-3-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0-1-0-1-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-4-0", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "I believe fill spot cause score disparity" },
{ path: "0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available (hard)" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "NO PART", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-0-2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "3-1-0", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeeze Available" },
{ path: "0-0-0-0-3-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1out-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-1-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-0-1-AI", notes: "" },
{ path: "2-0-1-AI", notes: "Squeezes Available" },
{ path: "1-0-2-AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "2-AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "0(6)-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "3-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-2-0", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "2-0-1", notes: "" },
{ path: "0(5)-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-1", notes: "Squeezes Available (hard)" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-1-AI", notes: "" },
{ path: "0-0-2-1-AI", notes: "" },
{ path: "2-0", notes: "Squeeze Available" },
{ path: "0(8)-1", notes: "Squeezes Available" },
{ path: "0(5)-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-0-0-0out-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-0-1-0", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available | Uni-fail may score more | Ends with OD" },
{ path: "0(7)-2-0", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-1", notes: "Fill glitch or uni fail causes score disparity" },
{ path: "0-0-1-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-0-0-0-1-0", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0(6)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-1-AI | hard Sq out path: 0out-0-1-AI", notes: "Squeeze out is incredibly difficult" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available | Uni-fail path scores more" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "0-0-0-0-2-0", notes: "" },
{ path: "1-2-AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "0-0-0-0-0out-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(7)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-3-AI", notes: "Squeezes Available" },
{ path: "NO PART", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2-0-1-2-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "Reg: AI | Pro: 0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "2-1-1", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "0out-0-1", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "Squeeze Available" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "2out-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2-0-1-0", notes: "Squeeze Available | Uni-fail path scores more" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0(9)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0out-AI", notes: "" },
{ path: "0-0in-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "2-0in-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "Reg: 0-0-1-AI | Pro: 0-0-2-0", notes: "Squeezes Available" },
{ path: "0-0-1-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0in-0-2-0out-0out-0", notes: "Squeezes Available | 0in is squeeze if miss continue the same" },
{ path: "AI)", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-3", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "0-0-2-0", notes: "Squeezes Available" },
{ path: "0-0-0-0-2-0-0-1-0-0-1", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "0-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0out-2", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(4)-1-0", notes: "Skip Chorus 2 | Squeezes Available" },
{ path: "0-0-2-0-2-AI", notes: "Squeeze Available" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "1-0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-1-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0out-AI", notes: "Squeezes Available" },
{ path: "0-0-0out-AI", notes: "Squeezes Available (check)" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-3-0", notes: "Different fills may cause score disparity" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0-1", notes: "" },
{ path: "1-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "2-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "Squeeze last act" },
{ path: "5-2", notes: "" },
{ path: "0-0-0-2-0", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeeze Available" },
{ path: "0-0-2-0", notes: "" },
{ path: "AI", notes: "Unison fail path will score more | Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-1-0-2-0", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available | Unifail will score more" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-0-0-1", notes: "Squeeze Available" },
{ path: "0-1-0-2-0-0-3", notes: "Squeezes Available" },
{ path: "0(8)-2", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-2", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0(5)-1", notes: "Squeeze Available" },
{ path: "0(5)-1-0", notes: "Squeezes Available" },
{ path: "0-0-0-0out-AI", notes: "" },
{ path: "", notes: "" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "0(5)-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-0", notes: "Squeeze drum solo" },
{ path: "0-0-1-3", notes: "" },
{ path: "0-0-2", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Odd scores from fill spots | Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-1", notes: "Squeeze Available" },
{ path: "Reg: 1-0-0-4 | Pro: 1-1-3", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-0-0out-AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "5-AI", notes: "" },
{ path: "0-1-0-0-0-1", notes: "" },
{ path: "0-0-0-0out-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-4-1-0", notes: "" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "2-AI", notes: "Squeeze Available | Uni-Fail may score more" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeeze Available (hard)" },
{ path: "0-0-0-0-2", notes: "Squeeze Available" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0-0-0-1", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "AI", notes: "Score discrepancy due to fill spots" },
{ path: "0(5)-2-0", notes: "" },
{ path: "0-0-0-0-1-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-5-0", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeeze Available" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "0-1-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-0(5)-2", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2-0-0-0-0-1-0-2", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0-0-1-0", notes: "" },
{ path: "0(4)-1-2", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0out-0(6)-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-1-0-0out-AI", notes: "Squeeze out Drum solo 2" },
{ path: "0-0-1-0-0-0-1-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-1-1", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1-AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "Squeezes Available" },
{ path: "Reg: 1-1-0-1-0 | Pro: 2-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "0-2-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-1-3-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-0-0-0-0-1", notes: "Squeezes Available" },
{ path: "2-0-0-0-0-1", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0(8)-1", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "Reg: 0-1-AI | Pro: 0-1-1-AI", notes: "Squeeze on Pro" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0-1-0-0-2", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "0-1-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-0-0out-0", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeeze Available" },
{ path: "0-1-0-1", notes: "Squeezes Available" },
{ path: "1-0-0-1", notes: "Squeeze Available" },
{ path: "0(5)-1-3", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "2-0(9)-2", notes: "Squeezes Available" },
{ path: "0-2-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-2", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "0(6)-0out-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-1-AI", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0(10)-2-AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "0(5)-2-0", notes: "Squeezes Available" },
{ path: "0-0-0-0-2", notes: "Squeeze Available" },
{ path: "0(5)-1", notes: "Squeezes Available (very hard)" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0-0-0-0out-0", notes: "" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-0-1-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "1-0-3", notes: "" },
{ path: "0(5)-1", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "4-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "Reg: 0-1-AI | Pro: AI", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-1-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "0-1-0-0-0-3-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-2-AI", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-1", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "0-3", notes: "" },
{ path: "Reg: 0-0-0-1-0 | Pro: 0-1-1-0", notes: "Squeezes Available" },
{ path: "1-0-1-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-1-0", notes: "Squeezes Available" },
{ path: "3-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-2-3", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-2-0", notes: "Squeezes Available" },
{ path: "0-1-1-0", notes: "" },
{ path: "0(5)-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-2-0-0-1", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0(8)-1-0", notes: "" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "0(3)-1-AI", notes: "" },
{ path: "1-2-0-0-0-1", notes: "" },
{ path: "0-2-0-0out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(7)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-3-0", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0-1-0-2", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "2-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-1-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI(2)", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-1-0-0-3", notes: "" },
{ path: "0(3)-1-AI", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "0-1-2-0", notes: "Squeezes Available" },
{ path: "0-1-0-3", notes: "" },
{ path: "0-0-0-3-AI", notes: "" },
{ path: "1-1-0", notes: "" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "Reg: 1out-0-0-1-AI | Pro: 1out-1-AI", notes: "Squeezes Available" },
{ path: "0-1-0(6)-1", notes: "Squeezes Available" },
{ path: "0(6)-2-3", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0-1", notes: "Squeeze 1st act" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Ends with OD" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0(5)-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-2-AI", notes: "" },
{ path: "0-1-0", notes: "Squeezes Available" },
{ path: "0(6)-1-0", notes: "" },
{ path: "0-3-0out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(11)-1", notes: "" },
{ path: "0(3)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(12)-1-AI", notes: "Squeezes Available" },
{ path: "0out-0-0-0-1", notes: "" },
{ path: "0-0out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "Uni-fail path may score more" },
{ path: "1-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available (Hard)" },
{ path: "0-0out-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Ends with OD" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "0-3-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-0-0out-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(7)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(6)-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-0-0-1", notes: "" },
{ path: "0(5)-2", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-0-2-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-2-0-1", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "0-0out-0", notes: "" },
{ path: "Reg: 0-0-0-0-1-AI(3) | Pro: AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "2-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-0-2-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0out-0", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0out-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2-AI", notes: "Squeezes Available (hard)" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "Squeeze on skip 1" },
{ path: "1-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0(13)-1", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0out-0-0-0-1-0-1", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "" },
{ path: "1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "1-0-0-0-1-2-AI", notes: "Squeezes Available" },
{ path: "NO PART", notes: "" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Unison fail path will score more" },
{ path: "AI", notes: "" },
{ path: "0-0-0out-AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "3-1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0-1", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-1-AI", notes: "" },
{ path: "0-0-2-AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0-0-1", notes: "Squeezes Available" },
{ path: "0-0out-0-0-0-1", notes: "Squeezes Available" },
{ path: "3-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "Squeeze Available" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-2", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0out-0-0-1-0-1", notes: "" },
{ path: "0-3-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-1-0-1", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "1-2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-3-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-0-3", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "", notes: "" },
{ path: "1-0-5", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-1", notes: "" },
{ path: "0-1", notes: "" },
{ path: "0-0-0out-1-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(5)-2-0-3", notes: "" },
{ path: "0-0-0-0-1-0", notes: "" },
{ path: "", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1-AI", notes: "" },
{ path: "0-0out-AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0out-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(6)-1", notes: "" },
{ path: "0-0-0-2", notes: "" },
{ path: "0-0-2", notes: "" },
{ path: "0(7)-0out-AI", notes: "Squeezes Available" },
{ path: "0(5)-2-AI", notes: "" },
{ path: "2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "4-0-0-0-1", notes: "Squeezes Available | Ends with OD" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-2", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "2-1-1", notes: "Squeeze Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "" },
{ path: "0(3)-1", notes: "" },
{ path: "AI", notes: "Squeeze Available 2nd act" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-2-AI", notes: "" },
{ path: "0-0-0-0-1-0", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-3-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0out-2-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-0out-0-0-0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-1-0(5)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-1-0(6)-0in-0-0-0-0-2", notes: "Squeezes Available | 0in requires squeeze" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0-0-1-0(7)-1", notes: "Squeezes Available" },
{ path: "0(8)-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze 2nd act" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "" },
{ path: "AI", notes: "Uni-Fail path may score more" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-0", notes: "Squeezes Available 1st act, Y+O very hard" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available | Uni-fail may score more" },
{ path: "AI", notes: "" },
{ path: "0-0-2", notes: "Squeezes Available" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0(9)-1-0", notes: "Squeezes Available" },
{ path: "2-2-AI", notes: "" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-2-0", notes: "" },
{ path: "0-0-0out-1", notes: "" },
{ path: "6-AI", notes: "" },
{ path: "1out-0", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "1-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "", notes: "" },
{ path: "0-0-0-0-1-1", notes: "" },
{ path: "0-0-0-1-0", notes: "Squeezes Available" },
{ path: "0-0-0-1", notes: "Squeezes Available" },
{ path: "0-2-0-1-1-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "0out-0-1-AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "1-0(7)-3", notes: "Squeezes Available" },
{ path: "0-0-1-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "4-2-1-AI", notes: "" },
{ path: "1-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(6)-1", notes: "" },
{ path: "1-0-0-1", notes: "Squeezes Available" },
{ path: "", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-1-AI", notes: "Squeezes Available" },
{ path: "1-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0out-AI", notes: "" },
{ path: "0-1-0-0-1", notes: "" },
{ path: "2-0-2-0", notes: "" },
{ path: "1-2-1-0", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-10", notes: "Yes, skip 10 - You will overfill" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-0-0-0out-AI", notes: "" },
{ path: "0-3-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-2-0out-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-0-1-0-1", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-0out-AI", notes: "" },
{ path: "0-0-0-0-1", notes: "Squeezes Available" },
{ path: "0-0out-AI", notes: "" },
{ path: "0-3-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0-3-0", notes: "Squeeze Available" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-2-0", notes: "" },
{ path: "1-0-0-1", notes: "Squeezes Available" },
{ path: "2-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-0out-AI", notes: "Squeezes Available | Unison fail scores more" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-0out-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "Squeezes Available" },
{ path: "0(6)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-0", notes: "Squeeze Available" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "0-2-0", notes: "" },
{ path: "0-0-0-3", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-1", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "1-2-2", notes: "Uni-fail path may score more" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0out-0out-0-0-1", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "0-0-2-1-2-0", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "Reg: 0-1-AI | Pro: AI", notes: "" },
{ path: "0(7)-1", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-2", notes: "" },
{ path: "0-2-1-AI", notes: "" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-0-0-2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-0", notes: "" },
{ path: "AI | Pro: 1-AI if not able to squeeze", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "1-0-1-AI", notes: "" },
{ path: "0-0-3-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(5)-1", notes: "Squeeze Available" },
{ path: "1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0out-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-3-0", notes: "" },
{ path: "", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-0", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-2-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "Reg: AI | Pro 1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "0-0-0-0-0out-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "" },
{ path: "0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "1-0-1", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "0-0-0-2out-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "2-1-2", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(6)-2-AI", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "0-1-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available (hard)" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0(6)-1-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-1", notes: "Squeezes Available" },
{ path: "1-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "0-3-0", notes: "Squeeze Available" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-1-2-0-0-1-1-1", notes: "" },
{ path: "0-0-0-0-1", notes: "" },
{ path: "0-0-1-0", notes: "" },
{ path: "0-1out-0", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0(12)-1", notes: "Squeezes Available" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-1-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available | Ends with OD" },
{ path: "0-1-AI", notes: "Squeeze Available" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-0-2", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "0-0-0-4out-AI", notes: "" },
{ path: "0-1-AI", notes: "End with OD | Squeezes Available" },
{ path: "0-0-0-0-1-AI", notes: "Squeezes Available" },
{ path: "0-2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-1-1", notes: "" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-3-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-0-0-0-0-1", notes: "" },
{ path: "", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-2-AI", notes: "Squeezes Available" },
{ path: "AI", notes: "Squeezes Available" },
{ path: "3-AI", notes: "Squeeze Available (this is the note extra)" },
{ path: "0-0-0-0-1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "2-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0-0-1-AI", notes: "Fill spots cause score disparity" },
{ path: "0-0-0-1", notes: "" },
{ path: "AI", notes: "" },
{ path: "1-AI", notes: "" },
{ path: "AI", notes: "" },
{ path: "0out-AI", notes: "" },
{ path: "AI", notes: "Squeeze Available" },
{ path: "Reg: AI | Pro: 0(5)-1-0", notes: "Squeezes Available (hard)" },
{ path: "0-2-0-1-0-2-0", notes: "Squeezes Available" },
{ path: "0-0-1", notes: "" },
{ path: "0-0-2", notes: "" },
{ path: "0-0-0-2-AI", notes: "Squeezes Available" },
];

var guitarPaths = [
{ path: "2/8R+1, 1/NN, 1/AI-RS(fill meter and activate), 2/2N, 1+1/NN, 1+1/BOD-RS(before-OD, 1-beat), 2/9Y, 1/AI(fill meter and activate), 1+1/YO, 2/B", notes: "" },
{ path: "1/B-after-Osus, 2/Y-after-Bsus, 2+1/2N-OD, 1+1/5Y, 1+1/GR,", notes: "" },
{ path: "1+1/2G, 1/NN, 2/2Y, 1/2B, 2/NN, 2/2B", notes: "" },
{ path: "2/YO, 1/NN, 3/9RY, 3/YO", notes: "" },
{ path: "1/3N, 3+1/3N, 1/2R-after-Gsus, 2/4N,", notes: "" },
{ path: "2/15R, 2+1/4N, 2/NN, 2/3N, 2/NN, 2/3N, 2/4Y", notes: "" },
{ path: "1/2N, 2+1/GB, 2+1/2BO", notes: "" },
{ path: "2+1/NN, 1+3/OD, 2+1/7B", notes: "" },
{ path: "1/8Y-after-2BO, 1+1/RB, 1/2N (Don't whammy OD in solo), 2/NN-RS*, 3/10G", notes: "*Reverse-Squeeze" },
{ path: "1/G, 1+1/RB, 2+1/4G, 1+1/RB, 1/4G, 3/7G, 2/Osus, 2/3N, 1/2G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/3GY, 2/GY, 3/15YO, 2/11RY, 1/NN, EwO", notes: "" },
{ path: "3+1/9GY-after-2GR, 2/after-Osus", notes: "" },
{ path: "2/2G, 2/4B, 2/6Or, 2/NN, 1/R, 2/4YO, 1+1/5G*", notes: "1/NN if last OD not picked up" },
{ path: "1/4N, 2/2N, 2+1/12B, 1/YB, 2+1/5B, 2/YB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/3GY after 3R, 1/8BO, 2+1/3GY after 3R, 1/R, 2+1/RB after 2R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2OD, 1+1/4BOsus, 1+1/2RB, 2+1/6BOsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/OD ,2/NN, 1/NN, 2/NN, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/7Y, 1/D, 1/3GR, 2/YB, 1/8O, 2/2OD", notes: "" },
{ path: "2/3N, 2/2N-after-GYsus, 1/11GY, 2/16GY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2RY, 2/G, 3/Y, 1/2RB-after-GB-sus, 1/RBO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/GYB-OD, 1+1/4B, 2/RYO, 2/13YO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2/G-after-Bsus, 2+1/2GR", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/9RB, 1/2YO, 3/13RB, 1/NN, 2/RB, 1/4GY", notes: "" },
{ path: "", notes: "" },
{ path: "3+1/3YBO-set, 2+1/R-after-Bsus, 2/3Y, 2/2YBO, 1/N-after-2-Osus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3G-after-break, 2/N, 2/2B, 2/2B, 2/GR, 2/N-1.75sus, 2/N", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/5RO, 2+1/RYB, 1/ 2beats-into-Osus, 2+1/8GYB, 2/O, 2/G, 2+1/2G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3GY, 2+1/6G, 1+1/2YOsus, 2/4GR, 1/N-2.5 beats before*", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2YB, 2/N, 2/RB, 1/B-after-O, 3/3B-2ndSet, 2/Bsus", notes: "" },
{ path: "1+1/2GY-after-3GYsus, 2+2/N-after-3GYsus, 1+1/3GY", notes: "" },
{ path: "", notes: "" },
{ path: "2/D, 1/YO, 2+1/4RY, 1/N, 2+1/3BO, 1+1/BO, 2+1/3RB, 2/2RB-after-4RBsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/2R, 2/2RYO, 1/2RY, 2+1/2RB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2+1/5YB, 2+1/2YB, 3/3YO (or 3/Y for extreme squeeze)", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3+1/OD, 2/2BO", notes: "Score:86,565" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/YOsus, 1+2/B-after-2Or-sus, 2/2N, 1+1/3rd RO-after-4ROsus, 2/B-after-Bsus", notes: "" },
{ path: "2+1/YO-after-6YOsus, 2+2/4Ysus, 2/beat-before-NN(whammy-first-OD-chord), 2/YO-after-2YOsus", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN (+0), 1-2GRB (+0), 2-RYB (+0), 2-GY (+0), 2-GY (+0), 2-GY (+1), 1-4BO (+1), 1-2GYB (+0), 3-2RYB (+0)", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-4GY 1-4GR 3-after 2B 3-2GR 3-3G after 6th triple 1-6GR 2-2GR 2-NN 2-3B 2-2N 2-2RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2GR, 2/28Y, 2/YB, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2-O, 1/Y, 2+1/5R-double-after-Rsus, 1/N-after-Ysus, 2+2/4R-double-after-2Rsus, 1/O, 3/2-O, 1/N-after-6th-sus", notes: "" },
{ path: "2/YO, 1/NN, 1/RYB, 1/NN, 3/NN, 1/OD", notes: "Score:208,800" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-OD, 2-NN, 1-5O after 2B, 1-NN, 1-4BO.", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/YBO, 2+1/4GRY-triple, 2+1/GYB-after-2RYO, 2+1/7RBO, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN 2-6R triple 3-Bdouble 2-NN 1-NN 2-4Gstrum in solo 2-3Ysus 2-OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN 1-NN 2-chords 3-GRsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/G, 3/O, 2+1/NN-after-2B-sus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3+1/YO, 2+1/3Y, 1+1/5G, 1/NN, 2+1/4Or, 2+1/3YB", notes: "" },
{ path: "2+1/2RY, 2+2/RB, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3+1/2Or, 2/NN, 1/2R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+2/BO, 1+1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-2N after 11GR 1-4GR 2-after 3G 2-2Yhopo after 3Rsus 2-2G after 2Bsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2GY, 2/G, 2/2GY, 1/O, 3+1/4RB, 2/9B", notes: "Score:154,075" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN , 2/NN, 1/GR, 2/NN, 2/NN, 2/5B, 1/5R, 2+1/4GY, 1/NN,2+1/2Y-after-B-sus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2B, 2/5YO, 1/7YB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "4-Ysus 1-NN 3-3R in chord section 1-NN 2-2N 2-3Rstrum", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2+1/12RB(RB-after-6RBO), 2/YB, 3+1/4G, 1/NN, 2+1/2R(strum-lane), 2+3/NN, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-10B 3-4B 2-note before 10R 1-NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-ASAP (no whammy +0) 2-NN 2-5Y (+0) 2-ASAP 1-Y (+2)", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/5GR-OD, 2/8RY, 1/D, 1/N, 1/6RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-2GY in fast GY strumming 2-3O 1-2G strum 3-2RYB set 1-5RY after 2YB set 2-GRY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/2RB-after-RBsus, 1/N, 3/YO-after-Osus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/NN, 2/G, 3/3R, 2/NN, 1/8R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/NN, 2+1/5G, 2/GYB*, 2+1/3B, 2/2Y, 2/NN", notes: "*activate a note before for double squeeze!" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-Rsus 1-7BO 2-R after break 2-5th triple O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/YBO, 2/GR, 2+1/GR", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/Y-after-6G-sus, 2/RB, 2/2B, 1+1/Y-after-2G-sus, 2/GB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-2N 2-2N 2-2N 1-2N 2-6G 2-2N", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3-after pause 2-5G 2-after pause 1-R 2-OD 2-NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/RB, 2+1/NN-after-6RO-sus, 2/3RO, 2/3R-in-solo, 2/O-after-3R-strum-note, 1/9Or", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/OD, 1/6RB, 2+1/2YO, 1/2R-after-GY-sus, 2/YO, 2+1/BO, 2+1/YB, 1/NN, 2/GR, 2/NN-after-G-sus, 2+1/2R, 1/5YO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3G, 2/NN after YBsus, 2/4R", notes: "Score:129,045" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/4R, 3/N, 1/2G-after-5set", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/ NN, 2+1/ 1beat into RYBsus, 2+1/ 4th RY, 2+1/YB, 1/ half a beat on RSus, 1/3B after 3YSus, 2/2G after 2RSus, 2/NN after 4YSus", notes: "Score:232,659" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-2N after 4Rsus 2-RY 1-2N 2-RY 1-8RO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/2N, 2/10Or, 2/3GR, 2/2GR, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN-after-6Y-double, 1/NN, 2/7G, 2/4N, 2/G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3+1/last-R-in-2R-set, 2/NN-after-B-sus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-9YB 2-5GY 2-YB 1-OD 1-OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/N, 3/RYB, 2/N, 2/GR, 1/3RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/6Y, 2/4G, 2/YB, 2/5GYB", notes: "Score:248,123" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3R, 2/7R, 2/5G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/5G, 2/G-after-R-sus, 2/GY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/3G after 18O, 2/NN, 2+1/GRB", notes: "Score:200,205" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/NN, 2/NN, 1/B-after-BO, 2/2Y, 2/OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/4G, 1", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/GR, 2/4Or", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+2/1.75-beats-into-RB-sus, 1+1/24Y(Y-after-5G), 1+1/G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/RB, 1/3RBO, 2/RY, 1+1/NN, 1/2R, 3+1/9Y", notes: "" },
{ path: "2/after-27Y, 2/2B, 1/after-Osus, 2/4N, 1/RB, 1/OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/after-YO, 2/after-2O-sus, 1/4OD, 3/YBO, 1/2OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3-after 5G 1-OD 1-NN 1-4R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/NN, 1/RYB, 2/NN, 2/9R, 2/3RO-after-RO-double", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-2Rsus 1-after 9single R 1-2Rsus 1-4O 1-4R 2-3B 2-3Rsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/2RB, 1+1/2nd-Fast-Descending-Riff, 1/NN, 2+1/2Y-after-2RBO, 1/NN, 2/solo, 2+3/B-OD, 2/NN, 1/NN, 2/NN, 2/NN-after-2RYO-sus, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 1/2YO-sus, 2/2RYB, 2/YO-sus, 2/GY, 1/OD, 1/7YO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/NN, 2/GR, 2/R-of-OD, 2/GR, 2/6BY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-after Ysus 2-5R 2-YBsus 2-4Bsus (+0) 1-after Ysus 2-Y 2-YBsus 2-after Ysus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/11Or, 2/7GR, 1/12Or, 1/NN, 2/7GR, 1/7GR, 1/R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/9GRafter-3RBsus, 1/7GR-after-2RBsus, 2/OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/BO, 2/GRY, 1/BO, 2/4Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2Y, 1/O, 1/N", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/4Y, 3/G, 2+1/OD, 1/2G, 1/6B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2RB, 2/2RY, 2/2G-after-GYsus, 1/end-of-2Rsus, 2/2RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/Y, 2/G, 1/after-4Ysus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/GR, 2/11B, 2+1/14R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2GRY, 2/2RYB, 2/16N-after-RYsus, 1/after-4RBsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-7RY, 2-2Yhopo-after-3Bsus, 1-after, 18Y, 1-B, 1-RBO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/6B, 1/AI-end-of-Bsus-in-unison DO NOT whammy Ysus, 2/RY 2/Osus, 3/RYO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-BO, 2-BO, 2-R, 2-BO, 1-6BYsus.", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3-2O 3-after 2RBsus 2-2N", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3GR, 2/14Y, 3/YB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-NN 2-RB 1-2YB 2-G 1-YO 1-after 3Bsus in solo 2-Y after 8G 2-after Rsus in solo", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/N, 2/9RB, 1/N, 2/N, 2/2GB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/RBO, 2/NN, 1/NN, 2+1/4G, 1/GYB", notes: "" },
{ path: "3/7RB, 2/G, 3/3YOsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN 1-2Or 2-NN 1-NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2/4RYB, 2/RYB, 2/5RYB, 1/2GRB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/NN, 3/5RYB, 1/NN, 1/10RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-Gstrum 3-6R after 2Rsus 2-4N in OD 1-4N in OD 2-after 3G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3GYB*, 3/16Y, 3/8GR", notes: "*Difficult +100" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/BO, 2+1/6G, 1+1/YO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "4+1/4R, 1/6GY, 3+1/6RB, 1/6GY, 1/NN, 2+1/NN-after-3R-sus, EwO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/R-after-B-sus, 1+1/OD, 2/6G, 1/5G, 2/16R, 1/4R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 1/GYsus, 2/GRY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2+1/2RB- 3/4ths-into chord,  2+1/7R, 1/8th Y, 3/6Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/RY, 3/3N, 1/3N, 3/16GY, 1/NN, 2/NN-after-GY-sus, 1/2nd-GB-set, 2/RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/Y,  1/4Y", notes: "" },
{ path: "", notes: "" },
{ path: "2/YB, 1/3N, 2+1/NN-after-2YB-sus, 2/3YB, 1+1/NN-after-2GR-sus, 2/2N", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+3/12YB, *1+2+0/ASAP, 2+1/4YB", notes: "Score:266,715 *don't whammy intial act whilst chaining next two ODs but not the last" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 1+1/12R, 2+1/9R, 1/3R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-5RY 2-10B in BO trill 2-NN after 3B in pattern after red anchor", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/OD, 1+1/2OD, 1/NN, 2/after-2Y-sus,2/RYB, 1/2GYB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/AI, 3+1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/2RBO-after-2RBOsus, 1/NN, 2+1/GRY, 2/NN, 1/B, 2+1/6th G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-G, 1-RYO, 2-7RY, 1-YO, 3-6GB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/29YB, 1/OD, 2/BO, 1/8O, 1/RB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2Y-after-6Or, 2/NN, 1+1/2R-after-3RY-sus, 1/2Y-after-3O, 2/GY, 1+1/3O, 2/O, 1/2RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2RY, 2+2/OD, 2/RY*", notes: "*Move a note behind for double squeeze!" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN-after-RY, 2/AI(after-break), 1+1/RY, 1/NN, 1/RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/Y, 2/GY, 1/NN, 2/-2YB-of-OD,1+1/2RBO, 2/10R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/17RY, 1/14GY, 1+1/RYO-of-OD, 1/10GY-AB(after-break), 1+1/14RY-in-second-string-of-RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-2double YBO 2-2Rstrum 2-YOsus 2-GRY 1-2O 2-2.5BARS into 3Rsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/GRB, 1/2GB, 1/14GY, 1/N, 1/2GRB", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/4R, 2/RB, 2+1/GY", notes: "Score:144,052" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2YO, 2+1/3RY, 1+1/YB, 2/NN", notes: "Score:159,071" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/7R, 2+1/4R, 2/NN, 1+1/7R, 1/10B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/GY, 2/10R, 2/6RB, 1/NN, 2/10R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/6RY, 1/NN, 2/NN, 3/4Y, 2/GYB, 3/3YO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
];

var bassPaths = [
{ path: "2+1/10Y, 2/17Y, 2+1/3G, 1+1/NN, 2+1/2G, 2+1/11Y", notes: "" },
{ path: "1+1/11Y, 1/2N, 2/2N, 2+1/4Y, 1+1/3B", notes: "" },
{ path: "2/4Y, 1+1/3Or, 1/NN, 2+1/R, 2/R, 2+1/3B", notes: "" },
{ path: "2/2G, 1+1/3N-OD, 1/G, 2/12B", notes: "" },
{ path: "2+2/OD,1/2N, 2/NN, 2+1/2N, 2/NN", notes: "" },
{ path: "1/tip-of-2Gsus-RS*, 2/3N, 1/NN, 2+1/Y-after-2Ysus, 1/3N, 2+1/4Y, 2/3N", notes: "" },
{ path: "1/4Y, 2/3N, 2+2/R*", notes: "*if you cannot squeeze in the last OD, use 1/NN as next activation." },
{ path: "2+1/2nd-G-string, 1+2/OD,1/2nd-Ystring, 2+2/2Or", notes: "" },
{ path: "1+1/4RY, 1/3N, 2+1/20RB-after-RYsus, 1/10RB, 2/4RB", notes: "" },
{ path: "1/25B(11.5beats-B), 1+1/12Or, 1/4Or, 2+1/7Or, 1/9Or, 1+1/4N-OD, 2+1/B-after-Rstring, 2+1/12Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/3Y-after-2Ysus, 1/3N, 2/Y, 1/O, 1+1/3Ysus, 1+1/Ysus", notes: "" },
{ path: "2/NN, 1/OD, 2/6Y", notes: "" },
{ path: "2/2Y, 2/6R-after-Rsus, 2+1/3Gsus, 2+1/3G, 2/2Ysus", notes: "" },
{ path: "2+1/7B, 2+1/5Or-after-3Ysus, 1/R, 1/half-beat-before-Osus-ends(RS)*, 2/2Y, 2/5Y", notes: "*Reverse Squeeze" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3+2/5R after 3G, 2+2/19R after 3G, 2/18R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2R, 1+1/Y, 1+1/Y, 2+1/G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/R ,2/after-Osus, 1/after-O-sus, 2/NN, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/4B, 1/2N, 2/N, 2/4Y, 1/2B-OD, 1/4OD", notes: "" },
{ path: "1/after-4x2YO, 2/6B, 2/2N-after-6B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2Y, 1/3G, 2/OD, 1/16B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/6Y, 2/4Or, 2/3Or, 2/N", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+2/2R-after-18G, 1/Y-after-15R, 2+1/3RB-after-6R, 2/RY", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/7B, 2/7B-after-2Rsus, 1/NN, 2/B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/6Y, 2/5Y, 1+1/R-after-3Ysets, 1/5N, 3+1/6R-after-3B, 1/6B-after-2ndOsets", notes: "" },
{ path: "", notes: "" },
{ path: "2/G, 1/2B-8th-notes, 1/8R, 2/5R, 2/9Y, 1/B-string", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/OD-N, 2/R, 1/NN, 2+1/ 7R, 2+1/B, 1/NN, 2/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/6Or, 1/D, 2+2/R, 2/4Or", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/R-after-O, 2+1/6Or, 2/2N, 1+1/7Y", notes: "" },
{ path: "", notes: "" },
{ path: "1+2/13G, 1/4Ysus, 2+1/4O, 2/3G-RS*, 1/N, 2/22Y, 2/6Y, 1/2B", notes: "*Activate on the end of the sustain on previous note." },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/4Y, 2+1/10B, 2/NN, 2/16-O, 1/10Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/4-beats-in-2GY, 1/6G, 2+1/4thO, 2/RB, 1/4Y, 2/3rdO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/R-after-2Rsus, 1/4Y, 1/3G, 2/3N, 1/3G, 1+1/8R, 2/5thO", notes: "" },
{ path: "2+1/2Y, 3+1/B-after-4Bsus, 3+1/R-after-3Rsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-OD 1-after Ystrum 2-after Ystrum 3-after 2R BREAK 2-2Bstrum 2-after O 2-after O 2-5R 2-2N after Y 2-2N after 4B 2-4Rsingle (+0) 1-after 5R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/3G, 2+1/2Y-OD, 1/R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/8Y, 1/2Y, 2+1/6G, 1/2R, 3+1/3G, 1/3Y, 1/NN, 2/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-NN, 2-NN, 1-NN, 2-NN, 1-G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN 1-NN 2-6Rtriple 3-Bdouble 2-NN 1-NN 2-last group of notes at end of g solo 2-OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN-after-O-sus, 1/NN, 2/NN-after-O-sus, 1/NN, 2/R, 2/3R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3-set-of-B, 1/6B, 2/2R, 2/B, 1/NN, 1/NN, 1/NN-after-G-sus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/OD, 2/NN, 2+1/4B, 1/O, 3+1/3G, 2/2Or", notes: "" },
{ path: "2/3R-after-2R-sus, 3/5Y-after-Y-sus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/6R-OD, 2/4R, 1/10-O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+5/2N-OD*", notes: "Second note of OD" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN 1-4G after 3R (+0) 2-4G after 3R (+1) 1-after 2sus 2-after break 1-after 2sus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2/NN, 1/B, 2/3R, 2/2B, 1/8B, 2/5B, 1/OD, 1/4B, 2/3R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-G 2-4G 1-2N 2-3Or 1-after Bsus 1-after Gsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/14Y, 1+1/8G, 1/2G, 2/3B, 2/24Y(2Y-strum-lane), 1/B, 3/17R(3.5-beats-into-R-strum-lane), 1+1/2R, 1+1/NN, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/3G, 2+1/3G 2/2G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-22B 1-NN 2-G in OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/Y, 2/NN, 2/7Or, 2/2B, 1/2B, 1/NN, 2/4Or, 1/10B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-3G 1-GY 2-2G after BO 2-2O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/2R, 2/Y, 2/G, 1/G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/4R, 2/3R, 2/3R, 2+1/4Y, 2/4Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/after-5B-sus, 1/4R, 2/NN, 2/2R, 2/3G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2B, 2/4B, 1+1/6B, 1+1/OD, 1+1/9B-after-10R-string, 2/NN, 1+1/OD, 1/5G, 2/13R, 2/NN, 2/9B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-2Rsus 2-2.25beats into NNsus (+0) 1-3N after pause 2-3N", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/OD, 2+1/G, 2/6G-sus, 1/G, 2/G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1-RB 2-NN 1-NN 2-NN 2-2R 2-9YO", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2/AI, 1/O, 2/4B-sus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/2N(RS), 2/AI,  2/7Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/7G, 2/2G, 1/3G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/Y-after-B-sus, 1/6R, 2/4G, 1/12R, 1/NN, 2/3Y-of-chorus, 1/NN", notes: "" },
{ path: "2/NN, 2/NN, 1/OD, 1/R-OD, 1/9Or, 2/9R, 2/8Or", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/3-beats-in-NN, 2/NN, 1/4B-in-OD, 2+1/2B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN (+0) 2-5B 1-NN 1-5Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/G, 1/3Or, 2/B-triple", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-4Or 2-NN 2-4R 2-4Or 2-6Y after O 1-5R 1-2OD 1-OD 2-4Rsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2B-after-6xMultiplier, 1/5G-OD, 1/NN, 2/21R, 2/16Y, 1/NN, 2+2/14R-after-solo, 1/OD, 1/NN, 2/9R, 2/3Y, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/G, 1/NN, 2/2Or, 2+1/NN, 2/NN, 1/NN, 2/5Or", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/5G, 2/6G, 2/2R ,2/G, 2/B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/after-Ysus, 1/4Y-after-Ysus, 2/4R,  2/3Ysus, 1/after-Ysus, 1/after-Ysus, 2/NN, 2/after-Rsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/8R, 2/AI, 1/5R, 2/AI, 1+1/19R, 1+1/R-after-25B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/13G, 2/12G, 1/8Y, 1/RO, 1/Osus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 1/Rstrum, 1/Rstrum", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/4R, 1+1/35R (R-after-R-sus), 1/7Y, 2/9R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2R, 2/5Or, 1/3Y, 2/NN, 1/last-R-of-chorus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2G, 2/2N-after-11R, 1/O, 2/G-after-3B, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/4R, 2/3Or, 2/after-5Rsus, 1/N, 2/5G, 2/14B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "2-G after Rsus, 2-G after Rsus, 2-G, 2-After Bsus, 1-6Bsus.", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-OD 2-after one note pause 2-5Rsus 2-5O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-1st W, 1-2nd set of Y, 2-1st Y, 1-2nd G (chorus G), 1-NN, 2-NN, 2-Trip B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/3B, 3/16Y, 2/6G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1-NN after B 2+2-Rsus 1+1-NN after R 1-NN after Ysus 2-3R after 2nd G set 2+1-2Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-5Y after 2B 2-3B 1-NN 2-NN after 4B 2-Rsus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/3B, 1/9B, 2+1/B, 1/NN, 2/3Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-after 4B strum 1-after Bsus 1-NN 2-5G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 1/NN, 2/B-in-verse, 1/NN, 2/NN, 2/2Or", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/14B, 1/NN, 2/2B-of-2chorus, 1/NN, 1/14Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/OD, 2+1/6G,  2/NN, 1/NN, 2/G-before-OD, 1+1/4R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-12G 3-8B 2-NN 2-NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+2/O, 1/2R, 2+1/O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3+1/3Y, 1/12R, 1/2G, 2/4B, 1+1/OD, 1/NN, 2/B, 2/8Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2/NN, 2+1/16Y, 1/NN, 2/O, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/2ODsus, 2/Bsus, 1/2Gsus, 2/Rsus, 2/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/NN, 2/7Y, 3/2YO, 2/NN, 2/11B, 1/4R, 2/3B, 2/2O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/5Y, 1/NN, 2+1/8Y, 3+1/G, 2/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/AB(after-break), 2/Y, 2/2G-string, 2/8Or, 2/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/7O, 1/NN, 2/4O, 2/NN, 1/2B, 2/5G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/end-of-B-sus, 2+1/4R, 1/4B, 2/O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-NN 1-NN 2-NN 1-after break (+1) 1-2R", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2/4B, 1/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/NN, 2/6R, 2/Ystring, 2/2Y, 2/16Y", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-After Bsus, 2-3N, 2-After Ysus, 2-NN, 2-NN", notes: "1.2K behind first, most likely mainly squeezes" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2-After Rsus (+1)                         2-Double G in the choppy G section after Bsus (+1) 3-NN 1-4Bstrum 2-4Ystrum (+1) 2-Rstrum 1-OD (+1) 2-After pause (+2) 2-After Ysus 2-NN 2-2N 2-2Ostrum 2-3Gstrum (+2)", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2Y, 2/11B, 2/4G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/5G, 2/2Or, 2/R, 2/2Y, 2/NN, 2/2G, 2/2G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/5Y, 2+1/15R, 1/NN, 2/G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "3/5R, 2/NN", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2OD, 1/NN, 2/6R, 2/3Y-after-2R-sus, 1/2B-OD", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/9Y, 1/NN, 2+1/11Y, 1+1/9Y, 1/2Y, 2/4Y, 2/2Or", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2/2G, 1/OD, 1/R-AB(after-break), 1/3G", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "2+1/2G, 3+1/5Y, 1/O", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1+1/2G,  1+1/2N-OD, 1+1/NN-after-7Rsus 2+1/Rsus, 1+1/2B string, 1/1-beat-into-5RSus", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "1/D, 3+1/4B, 2/3B, 1/10B", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "NO PART", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
{ path: "", notes: "" },
];