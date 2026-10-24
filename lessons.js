/* All illustrations are made from editable drawing paths, grouped into teaching steps. */
const E=(x,y,rx,ry=rx)=>`M ${x-rx} ${y} a ${rx} ${ry} 0 1 0 ${rx*2} 0 a ${rx} ${ry} 0 1 0 ${-rx*2} 0`;
const P=(...points)=>points.map((p,i)=>`${i?'L':'M'} ${p[0]} ${p[1]}`).join(' ');
const eyes=(x=150,y=130,gap=25)=>[E(x-gap,y,3,5),E(x+gap,y,3,5)];
const smile=(x=150,y=154)=>`M ${x-15} ${y} Q ${x} ${y+18} ${x+15} ${y}`;
const S=(title,text,...paths)=>({title,text,paths});
const lessons=[];
const L=(name,category,steps)=>lessons.push({id:lessons.length+1,name,category,steps});
L('Little kitten','Animals',[
 S('Round cheeks','Draw a wide U for the cheeks. Leave the top open for the ears.','M 91 123 C 65 165 95 208 150 208 C 205 208 235 165 209 123'),
 S('Two pointy ears','From each end of the U, go up to an ear tip and back down. Join the ears with a gentle curve.','M 91 123 L 92 64 L 128 96 Q 150 88 172 96 L 208 64 L 209 123'),
 S('Hello, little eyes','Draw two small ovals. Leave a little space between them.',...eyes(150,139)),
 S('A tiny nose and smile','Make a little triangle nose, then two curvy smiles.',P([144,158],[156,158],[150,166],[144,158]),'M 150 166 Q 140 183 131 171 M 150 166 Q 160 183 169 171'),
 S('Whiskers, please!','Add three whiskers on each cheek. Give your kitten a name!',P([113,157],[66,147]),P([113,168],[63,168]),P([113,179],[68,191]),P([187,157],[234,147]),P([187,168],[237,168]),P([187,179],[232,191]))]);
L('Floppy bunny','Animals',[
 S('A soft round head','Start with a round oval, a little below the middle.',E(150,177,59,54)),
 S('Long bunny ears','Add two tall, skinny loops above the head.',E(119,84,18,45),E(179,84,18,45)),
 S('Inside the ears','Draw a smaller loop inside each ear.',E(119,86,7,29),E(179,86,7,29)),
 S('A sweet little face','Add two eyes and a tiny oval nose.',...eyes(150,173),E(150,192,6,4)),
 S('Finish with a smile','Draw two small curves under the nose and two whiskers on each cheek. Hop, hop!', 'M 150 196 Q 142 210 134 200 M 150 196 Q 158 210 166 200',P([108,192],[80,185]),P([108,202],[79,206]),P([192,192],[220,185]),P([192,202],[221,206]))]);
L('Happy puppy','Animals',[
 S('Start with the head','Draw a round arch across the top. Below it, draw a U for the cheeks. Leave gaps at the sides.','M 91 113 Q 150 58 209 113','M 94 155 C 102 217 198 217 206 155'),
 S('Floppy ears','Join each side gap with a long hanging loop. The ears sit outside the face.','M 91 113 C 45 87 44 214 79 196 Q 91 184 94 155','M 209 113 C 255 87 256 214 221 196 Q 209 184 206 155'),
 S('Two friendly eyes','Add two small ovals in the middle of the face.',...eyes(150,133)),
 S('Nose and muzzle','Draw a small oval nose, a short line down from it, and a curved smile underneath.',E(150,155,11,7),'M 150 162 L 150 174 M 128 170 Q 150 193 172 170'),
 S('A wiggly tongue','Make a little U under the smile. Keep it inside the face, then add a short line down the tongue.','M 139 182 Q 150 207 161 182',P([150,188],[150,194]))]);
L('Woodland fox','Animals',[
 S('A pointy face','Draw a wide V, with its point near the bottom of your page.',P([76,116],[150,224],[224,116])),
 S('Two tall ears','From the V, draw a pointy ear on each side. Join the inner corners with a soft curve.','M 76 116 L 88 51 L 126 96 Q 150 89 174 96 L 212 51 L 224 116'),
 S('Fluffy cheeks','Draw two curves from the outer corners down toward where the nose will go. Leave room for eyes above them.','M 76 116 Q 115 159 143 199 M 224 116 Q 185 159 157 199'),
 S('Eyes and nose','Add two little eyes and a small oval near the bottom.',...eyes(150,142,32),E(150,199,7,5)),
 S('Little ear details','Put a smaller triangle inside each ear. Your fox is ready for the forest!',P([91,101],[94,74],[110,96],[91,101]),P([190,96],[206,74],[209,101],[190,96]))]);
L('Butterfly friend','Animals',[
 S('A tiny body','Draw one long, skinny oval in the middle.',E(150,159,12,52)),
 S('Big top wings','Start beside the upper body. Draw two big, rounded wings that return beside the middle.','M 138 140 C 98 52 35 67 52 128 Q 70 162 138 159','M 162 140 C 202 52 265 67 248 128 Q 230 162 162 159'),
 S('Little bottom wings','Draw a smaller wing on each side, below the big wings.','M 138 170 C 49 155 67 246 114 211 Q 130 200 140 191','M 162 170 C 251 155 233 246 186 211 Q 170 200 160 191'),
 S('A head and feelers','Draw a circle touching the top of the body. Add two curling antennae.',E(150,92,15),'M 143 79 Q 115 43 117 68 M 157 79 Q 185 43 183 68'),
 S('Decorate the wings','Put one small oval safely inside each wing. Leave space around every oval.',E(94,117,13,18),E(206,117,13,18),E(105,192,8),E(195,192,8))]);
L('Sleepy owl','Animals',[
 S('A round body','Draw a tall U shape for your owl. Leave the top open for the ear tufts.','M 99 104 C 64 145 86 240 150 240 C 214 240 236 145 201 104'),
 S('Big owl eyes','Draw two circles next to each other near the top.',E(123,129,25),E(177,129,25)),
 S('Sleepy eyelids','Draw a curved line inside each eye. Add a triangle beak.','M 108 128 Q 123 143 138 128 M 162 128 Q 177 143 192 128',P([141,158],[159,158],[150,176],[141,158])),
 S('Wings and feathers','Curve a wing down each side. Add three small belly feathers.','M 91 132 Q 126 184 104 211 M 209 132 Q 174 184 196 211',P([131,186],[137,193],[143,186]),P([151,201],[157,208],[163,201]),P([165,181],[171,188],[177,181])),
 S('Little feet and ears','Add two feet below the body. Close the top with two ear points and a curved line between them.',P([120,233],[120,252],[110,252]),P([180,233],[180,252],[190,252]),'M 99 104 L 96 65 L 127 81 Q 150 74 173 81 L 204 65 L 201 104')]);
L('Tiny turtle','Animals',[
 S('A round shell','Draw a wide oval for the shell.',E(140,151,68,54)),
 S('Peekaboo, head!','Draw a little oval touching the right edge of the shell.',E(230,151,22,26)),
 S('Four small flippers','Draw four little loops outside the shell, touching its edge.','M 96 110 Q 76 73 117 100 M 163 100 Q 197 72 187 112 M 91 189 Q 73 229 117 202 M 163 202 Q 197 232 188 189'),
 S('A shell pattern','Draw a six-sided shape in the middle of the shell.',P([112,135],[140,119],[168,135],[168,167],[140,183],[112,167],[112,135])),
 S('A smile and shell lines','Connect each corner to the shell edge. Stop there. Add an eye and a little smile.',P([112,135],[81.11,124]),P([140,119],[140,97]),P([168,135],[198.89,124]),P([168,167],[198.89,178]),P([140,183],[140,205]),P([112,167],[81.11,178]),E(236,143,3), 'M 236 161 Q 245 167 249 158')]);
L('Bubble fish','Animals',[
 S('A fishy oval','Draw a sideways oval for the body.',E(144,155,66,45)),
 S('A triangle tail','Add a triangle on the left side.',P([78,155],[43,122],[43,188],[78,155])),
 S('A fin on top','Draw a little curved triangle on top of the body.','M 124 111 Q 141 71 170 113'),
 S('A face and side fin','Add an eye, a smile and a little triangle fin inside the body.',E(181,143,5),'M 188 165 Q 196 172 203 163',P([139,146],[117,159],[140,171],[139,146])),
 S('Blow some bubbles','Draw three circles getting smaller as they go up.',E(229,120,10),E(244,91,7),E(238,68,4))]);
L('Royal crown','Princesses',[
 S('A curved band','Draw two gentle curves, then join their ends.','M 79 184 Q 150 201 221 184 L 221 207 Q 150 224 79 207 Z'),
 S('Three royal points','Start at the band and zigzag up and down to make three points.',P([79,184],[64,99],[113,139],[150,68],[187,139],[236,99],[221,184])),
 S('Round the tips','Add a little circle at the top of each point.',E(64,94,7),E(150,61,7),E(236,94,7)),
 S('A special jewel','Make a diamond in the middle of the crown.',P([150,137],[166,157],[150,177],[134,157],[150,137])),
 S('Tiny royal gems','Add two smaller jewels. What colors will your crown be?',E(107,165,6),E(193,165,6))]);
L('Little princess','Princesses',[
 S('A smiling face shape','Draw a U for the face. Close the top with a sideways swoop for the fringe.','M 120 88 C 115 148 185 148 180 88 M 120 88 Q 141 106 166 79 Q 174 80 180 88'),
 S('A beautiful dress','Add two short neck lines and a small top. Below it, draw a wide, curved skirt.',P([141,132],[141,140]),P([159,132],[159,140]),P([132,140],[168,140],[176,171],[124,171],[132,140]),'M 124 171 Q 103 206 79 248 Q 150 269 221 248 Q 197 206 176 171'),
 S('Soft flowing hair','Draw the top of the hair above the fringe. Curve the hair down outside each cheek.','M 120 88 Q 118 68 132 67 M 168 67 Q 182 68 180 88 M 120 88 Q 97 110 108 151 M 180 88 Q 203 110 192 151'),
 S('A tiny crown','Between the hair curves, draw a little crown with three points.',P([132,67],[126,40],[143,51],[150,32],[158,51],[174,40],[168,67],[132,67])),
 S('Face and arms','Add two eyes and a smile, then an arm on each side.',...eyes(150,102,11),smile(150,116),P([130,142],[106,170],[99,165]),P([170,142],[194,170],[201,165])),
 S('Make it your own','Add a heart on the dress and two curved skirt lines. Invent a name for your princess!','M 150 200 C 132 184 126 207 150 218 C 174 207 168 184 150 200','M 134 177 Q 126 212 113 244 M 166 177 Q 174 212 187 244')]);
L('Storybook castle','Princesses',[
 S('The castle walls','Draw a big rectangle, leaving room for towers above it.',P([83,144],[217,144],[217,244],[83,244],[83,144])),
 S('Two tall towers','Draw a tall rectangle on each side.',P([49,113],[83,113],[83,244],[49,244],[49,113]),P([217,113],[251,113],[251,244],[217,244],[217,113])),
 S('Pointy rooftops','Add a triangle roof on each tower.',P([42,113],[66,64],[90,113],[42,113]),P([210,113],[234,64],[258,113],[210,113])),
 S('A middle tower','Add a little tower and a triangle above the middle wall.',P([123,144],[123,92],[177,92],[177,144]),P([115,92],[150,42],[185,92],[115,92])),
 S('An arched doorway','Start on the ground line. Draw up, curve over the top, and come down to the ground again. Add a short line in the middle for two doors.','M 130 244 L 130 205 Q 150 173 170 205 L 170 244',P([150,197],[150,243])),
 S('Windows and a flag','Add little windows. Fly a flag from the tallest tower.',E(66,144,6,10),E(234,144,6,10),E(150,118,7,11),P([150,42],[150,17],[179,24],[150,32]))]);
L('Magic wand','Princesses',[
 S('A star’s first points','Near the top, draw the first three lines of a star.',P([150,48],[169,98],[222,100],[181,135])),
 S('Finish your star','Go around the bottom, then connect back to the top.',P([181,135],[194,186],[150,157],[106,186],[119,135],[78,100],[131,98],[150,48])),
 S('A long wand handle','Start on the two lower edges of the star. Draw two straight lines down and join their ends.',P([143,161.61],[143,257],[157,257],[157,161.61])),
 S('Swirly ribbons','Draw two curvy ribbons from the handle. Keep the ribbons below the star.','M 143 210 C 105 185 92 242 58 218 M 157 210 C 195 185 208 242 242 218'),
 S('A sprinkle of magic','Add small sparkles around your wand.',P([59,54],[59,76]),P([48,65],[70,65]),P([237,42],[237,64]),P([226,53],[248,53]),E(248,146,4),E(59,151,4))]);
L('Pumpkin carriage','Princesses',[
 S('A pumpkin shape','Draw a big oval in the middle.',E(150,142,85,58)),
 S('Two round wheels','Draw a support line below the pumpkin. Add two wheels just underneath it, touching the line. Put a small circle inside each wheel.',P([74,200],[226,200]),E(99,225,25),E(201,225,25),E(99,225,8),E(201,225,8)),
 S('A royal doorway','Draw an arch inside the pumpkin. Close its bottom before it reaches the outer edge, then add a tiny round doorknob.','M 127 183 L 127 132 Q 150 104 173 132 L 173 183 Z',E(163,157,3)),
 S('Pumpkin curves','Draw a stripe on each side. Keep the stripes inside the pumpkin.','M 119 88 Q 80 139 119 196 M 181 88 Q 220 139 181 196'),
 S('A curling stem','Draw a curled stem from the top and a leaf beside it.','M 150 84 C 132 58 160 43 170 57 Q 176 68 163 67 M 169 78 Q 192 53 204 71 Q 189 85 169 78')]);
L('Little mermaid','Princesses',[
 S('A little face','Draw a U shape for the cheeks and a swooping fringe across the top.','M 122 74 C 119 119 181 119 178 74 M 122 74 Q 143 90 164 62 Q 174 65 178 74'),
 S('A flowing tail','Add two little neck lines. Draw two curves down from the shoulders, bending to one side.','M 133 105 L 133 113 Q 113 153 145 178 Q 184 206 211 202 M 167 105 L 167 113 Q 189 154 166 173 Q 192 183 211 202'),
 S('A fishy tail fin','Add two leaf shapes at the end of the tail.','M 211 202 Q 218 163 250 173 Q 248 198 211 202 Q 242 208 235 238 Q 211 236 211 202'),
 S('Long wavy hair','Draw a curve over the fringe, then long hair outside the face.','M 122 74 C 108 27 192 27 178 74 M 122 74 Q 97 103 108 137 M 178 74 Q 203 103 192 137'),
 S('A smile and little arms','Below the fringe, draw two small eyes and a little smile. Add arms reaching out.',E(140,87,2.5,3.5),E(160,87,2.5,3.5),'M 140 98 Q 150 106 160 98',P([133,118],[106,145],[94,138]),P([167,118],[195,146],[207,137])),
 S('Tail details','Draw a waistband and two little V shapes below it. Keep the tiny scales inside the tail.','M 126 149 Q 151 161 176 149',P([140,161],[145,166],[150,161]),P([150,170],[155,175],[160,170]))]);
L('Dreamy unicorn','Princesses',[
 S('Gentle cheeks','Draw a wide U for the face, leaving the top open.','M 107 120 C 68 175 110 211 150 211 C 190 211 232 175 193 120'),
 S('A magical horn','Draw a tall, skinny triangle above the open face.',P([140,105],[150,39],[164,105],[140,105])),
 S('Two little ears','Add two pointed ears. Join their inner ends to the bottom of the horn.','M 107 120 Q 82 63 127 106 L 140 105 M 164 105 L 173 106 Q 218 63 193 120'),
 S('A flowing mane','Draw a swooping fringe inside the face. Add one long curl outside the right cheek, leaving space beside the cheek.','M 127 106 Q 146 142 177 116 M 200 132 C 237 127 249 157 239 178 Q 232 190 250 204 C 267 225 231 247 207 222 Q 240 226 238 210 Q 221 198 224 177 Q 230 151 200 132'),
 S('Sleepy eyes and a smile','Add two curved eyes, tiny nostrils and a little smile.','M 116 151 Q 126 163 136 151 M 163 151 Q 173 163 183 151',E(138,183,2),E(160,183,2),smile(150,194)),
 S('Horn stripes','Draw two short lines across the horn, stopping on its edges.',P([144.55,75],[159.33,83]),P([142.27,90],[162.73,99]))]);
L('Friendly T. rex','Dinosaurs',[
 S('A big dinosaur head','Draw a wide, rounded head. Leave a small gap underneath for the neck.','M 127 123 C 67 104 98 46 160 52 C 221 48 243 107 183 125'),
 S('A pear-shaped body','Curve down each side of the neck. Add two short belly curves below. Leave gaps for the tail and two feet.','M 127 123 Q 109 148 110 174 M 111 201 Q 113 211 125 219 M 151 223 Q 165 225 178 217 M 193 207 Q 209 161 183 125'),
 S('A swooshy tail','Join the gap on the left with two curves that meet in a point.','M 110 174 Q 61 183 35 157 Q 49 211 111 201'),
 S('Two strong feet','Start at the leg gaps, draw down to the feet, then come back up.',P([125,219],[117,247],[146,247],[151,223]),P([178,217],[180,247],[211,247],[195,233],[193,207])),
 S('Tiny arms','Draw two little bent arms on the body.',P([126,151],[116,163],[126,171]),P([180,151],[190,163],[180,171])),
 S('A friendly smile','Add an eye, a nostril and a gentle curved smile inside the head.',E(171,82,4),E(208,87,2),'M 165 105 Q 187 118 207 102')]);
L('Spiky stegosaurus','Dinosaurs',[
 S('A long body','Draw a long curved back. Add three short belly lines, leaving gaps for the legs.','M 76 146 Q 143 86 219 147 M 112 195 L 125 199 M 143 201 L 162 200 M 180 195 L 192 191'),
 S('A tiny head','At the right end of the back, draw a little head, then curve down to the front leg.','M 219 147 C 258 129 279 164 255 178 Q 235 189 217 173 L 209 181'),
 S('A pointy tail','Join the left end of the back to a tail point. Curve back to the first leg.','M 76 146 L 31 124 Q 42 168 93 185'),
 S('Four short legs','Join each belly gap with a short leg and a flat foot.','M 93 185 L 93 218 L 112 218 L 112 195 M 125 199 L 125 223 L 143 223 L 143 201 M 162 200 L 162 223 L 180 223 L 180 195 M 192 191 L 192 218 L 209 218 L 209 181'),
 S('Plates on the back','Draw four points outside the back. Each point starts and ends on the curved back.',P([87,137],[86,103],[113,122.5]),P([119,120.5],[133,82],[151,117.8]),P([157,118.2],[177,89],[187,123.4]),P([193,125.5],[216,109],[219,147])),
 S('A happy dino face','Add an eye and a little smile inside the head.',E(248,155,3),'M 246 170 Q 253 174 259 165')]);
L('Long-neck dinosaur','Dinosaurs',[
 S('A round tummy','Draw a curved back and short belly lines. Leave gaps for the tail, neck and four legs.','M 65 163 Q 105 126 165 150 M 102 217 L 111 220 M 128 221 L 143 218 M 164 210 L 173 202'),
 S('A long, long neck','From the right end of the back, curve up to a tall neck. Draw the other side down to the last leg.','M 165 150 Q 187 122 187 82 M 211 85 Q 214 155 188 194'),
 S('A little head','Join the two neck ends with a rounded head. Leave the bottom between them open.','M 187 82 C 163 58 196 31 224 46 C 254 62 237 93 211 85'),
 S('A swishy tail','From the left end of the back, draw to a tail point and curve down to the first leg.','M 65 163 Q 40 169 22 147 Q 28 194 78 205'),
 S('Four sturdy legs','Use the four belly gaps for four short legs. Stop each leg at the body edge.','M 78 205 L 76 246 L 98 246 L 102 217 M 111 220 L 111 242 L 125 242 L 128 221 M 143 218 L 143 246 L 164 246 L 164 210 M 173 202 L 174 237 L 188 237 L 188 194'),
 S('A smile and spots','Add a little face and three circles on the tummy.',E(220,61,3),'M 221 76 Q 231 80 237 72',E(93,178,7),E(123,165,9),E(149,186,6))]);
L('Three-horn friend','Dinosaurs',[
 S('A rounded frill','Draw a big curved frill on the left. Leave the right side open for the face.','M 108 105 C 35 56 15 211 101 225 Q 143 233 158 204'),
 S('A long dinosaur face','Draw the cheek and a rounded snout facing right. Add two short forehead lines, leaving three gaps for horns.','M 241 149 C 275 150 276 185 251 194 Q 213 215 158 204 Q 117 211 100 175 Q 90 142 108 105',P([136,111],[151,115]),P([180,124],[220,137])),
 S('Horns one and two','Join the two forehead gaps with tall, pointy horns. Count them: one, two!',P([108,105],[112,69],[136,111]),P([151,115],[171,73],[180,124])),
 S('Horn number three','At the end of the snout, join the last gap with a third horn pointing upward. Now there are three!',P([220,137],[245,110],[241,149])),
 S('A friendly face','Add one eye, a little nostril near the snout, and a smile below the nose horn.',E(177,153,4,6),E(250,166,2),'M 228 181 Q 244 190 257 178'),
 S('Frill decorations','Add five little circles inside the frill, behind the cheek. Keep them away from the outline.',E(65,125,5),E(54,159,5),E(73,194,5),E(108,213,5),E(89,111,4))]);
L('Flying pterodactyl','Dinosaurs',[
 S('A skinny body','Draw a long, narrow oval in the middle.',E(150,166,19,41)),
 S('A little head and beak','Draw a round head with a gap on the right. Join that gap with a long triangle beak.','M 169 93 C 155 69 119 83 128 110 Q 140 137 170 116 L 214 108 Z'),
 S('Wide flying wings','Draw a long line from each side of the body to a wingtip. Keep the right wing below the beak.',P([133,146],[37,83]),P([167,146],[263,83])),
 S('Curved wing bottoms','Draw a wavy line back from each wingtip. Stop at the body edge.','M 37 83 Q 41 149 77 142 Q 80 177 111 162 Q 119 191 132 180 M 263 83 Q 259 149 223 142 Q 220 177 189 162 Q 181 191 168 180'),
 S('A crest and little feet','Add a little point behind the head and two short feet below the body.',P([130,88],[113,61],[126,102]),P([143,204],[137,223],[145,221]),P([157,204],[163,223],[155,221])),
 S('Eye and wing lines','Add an eye. Draw one long line inside each wing, stopping at the body.',E(156,100,3),P([131,158],[77,142]),P([169,158],[223,142]))]);
L('Baby dino egg','Dinosaurs',[
 S('The bottom of an egg','Draw a big bowl shape with a zigzag top.','M 78 158 Q 70 252 150 252 Q 230 252 222 158 L 201 172 L 180 156 L 159 175 L 138 157 L 117 174 L 97 155 Z'),
 S('A baby head','Draw two cheeks up from the shell. Leave the top open for three little spikes.','M 117 174 C 100 146 93 112 117 86 M 191 92 Q 211 119 201 172'),
 S('Eyes and a nose','Draw two eyes and two tiny nostrils.',...eyes(153,115,23),E(144,139,2),E(164,139,2)),
 S('Little baby spikes','Join the open top with three little spikes and short lines between them.',P([117,86],[117,60],[135,77],[141,75],[151,48],[162,75],[174,78],[195,62],[191,92])),
 S('Decorate the shell','Add three spots to the egg. Your baby dinosaur has hatched!',E(117,209,11,14),E(177,220,13,9),E(156,191,5))]);
L('Dinosaur footprint','Dinosaurs',[
 S('The foot pad','Draw a round shape near the bottom of the page.',E(150,192,47,43)),
 S('A middle toe','Draw a tall oval above the pad.',E(150,104,15,38)),
 S('A toe on the left','Add another oval, tilted out to the left.','M 104 148 C 55 144 56 77 81 90 C 101 99 117 136 104 148'),
 S('A toe on the right','Add a matching oval on the right.','M 196 148 C 245 144 244 77 219 90 C 199 99 183 136 196 148'),
 S('Little claw marks','Draw a little upside-down V inside each toe tip. Keep the bottom open. Can you imagine who walked here?',P([144,87],[150,72],[156,87]),P([72,111],[72,96],[83,107]),P([217,107],[228,96],[228,111]))]);
const mouseHead=['M 113 103 Q 150 82 187 103','M 87 134 C 62 206 108 249 150 244 C 192 249 238 206 213 134'];
const mouseEars=['M 113 103 C 123 66 90 37 64 49 C 23 68 41 119 87 134','M 187 103 C 177 66 210 37 236 49 C 277 68 259 119 213 134'];
const mouseFace='M 150 139 C 132 106 106 121 112 158 C 91 167 101 210 128 222 Q 150 232 172 222 C 199 210 209 167 188 158 C 194 121 168 106 150 139';
L('Mickey Mouse','Disney',[
 S('Round cheeks','Draw a wide U for the cheeks. Above it, draw a short curved line. Leave two gaps for the ears.',...mouseHead),
 S('Two big round ears','Join each side gap with a big, round loop. Stop when the loop reaches the cheek.',...mouseEars),
 S('Mickey’s face shape','Inside the head, draw two rounded forehead bumps, then round cheeks that meet at the chin.',mouseFace),
 S('Tall eyes and nose','Draw two tall ovals. Add a short line inside each eye and a sideways oval nose.',E(135,155,7,14),E(165,155,7,14),P([137,155],[137,162]),P([163,155],[163,162]),E(150,181,16,8)),
 S('A happy smile','Draw a wide smile below the nose. Curve down and back up underneath it for an open mouth.','M 118 193 Q 150 213 182 193 M 126 197 Q 150 231 174 197'),
 S('Cheek dimples','Add a tiny curved dimple at each end of the smile. Color his ears if you like.','M 114 194 Q 116 188 122 190 M 178 190 Q 184 188 186 194')]);
L('Minnie Mouse','Disney',[
 S('Round cheeks','Draw a wide U for the cheeks. Add a short curved line above it, leaving two gaps for the ears.',...mouseHead),
 S('Two round ears','Join each gap with a big round loop. Keep the loops outside the cheeks.',...mouseEars),
 S('Minnie’s face shape','Inside the head, draw two soft forehead bumps and rounded cheeks. This line stays inside the outer head.',mouseFace),
 S('A bow above her head','Between the ears, draw a small oval knot and a loop on each side. Leave a little space above the head.',E(150,69,9,10),'M 141 63 C 121 39 111 45 120 75 Q 124 86 141 75','M 159 63 C 179 39 189 45 180 75 Q 176 86 159 75'),
 S('Eyes and eyelashes','Draw two tall oval eyes, with a short line inside each. Add two eyelashes from the top of each eye.',E(135,155,7,14),E(165,155,7,14),P([137,155],[137,162]),P([163,155],[163,162]),P([132,142],[128,135]),P([136,141],[137,133]),P([164,141],[163,133]),P([168,142],[172,135])),
 S('A nose and smile','Add a sideways oval nose. Draw a wide smile and a curved bottom for the open mouth.',E(150,181,16,8),'M 118 193 Q 150 213 182 193 M 126 197 Q 150 231 174 197'),
 S('Little bow dots','Add one small dot inside each bow loop. Keep each dot away from the outline.',E(126,65,3),E(174,65,3))]);
L('Olaf','Disney',[
 S('A snowy head','Draw a tall oval near the top.',E(150,88,38,47)),
 S('Two snowballs','Add a small snowball touching the head. Put a bigger snowball just below it, touching rather than crossing.',E(150,157,28,22),E(150,215,48,36)),
 S('Eyes and carrot nose','Draw two eyes. Under them, draw a small carrot triangle that stays inside the head.',E(138,77,5,7),E(160,77,5,7),P([142,91],[175,97],[143,103],[142,91])),
 S('One big front tooth','Draw a wide U for the smile. Across the top, draw a short line, a little down-across-up step for ONE tooth, then finish the top line.','M 128 109 Q 150 145 172 109',P([128,109],[144,109],[144,118],[156,118],[156,109],[172,109])),
 S('Twig arms and hair','Draw a stick arm on each side with two little twig fingers at the end. Add three short hair twigs on top.',P([126,157],[80,129],[70,134]),P([80,129],[79,116]),P([174,157],[220,129],[230,134]),P([220,129],[221,116]),P([144,41],[133,22]),P([151,40],[152,17]),P([157,41],[170,24])),
 S('Buttons and feet','Add three buttons. Draw two short leg lines below the big snowball, with an oval foot at each end.',E(150,156,4),E(150,201,4),E(150,221,4),P([124,245.27],[124,251]),P([176,245.27],[176,251]),E(124,260,20,9),E(176,260,20,9))]);
L('Baymax','Disney',[
 S('A little oval head','Draw a wide oval near the top of your page.',E(150,75,42,27)),
 S('A soft round body','Draw shoulders below the head. Leave gaps at the sides for arms and at the bottom for feet.','M 137 101 L 126 108 Q 115 113 112 123 M 104 174 Q 96 198 111 219 M 144 229 Q 150 231 156 229 M 189 219 Q 204 198 196 174 M 188 123 Q 185 113 174 108 L 163 101'),
 S('Two simple eyes','Draw two small circles and connect them with a straight line.',E(132,74,4),E(168,74,4),P([136,74],[164,74])),
 S('Long soft arms','Join each side gap with a long, soft arm. Keep the arm outside the body.','M 112 123 C 74 126 48 214 77 211 Q 94 210 104 174 M 188 123 C 226 126 252 214 223 211 Q 206 210 196 174'),
 S('Little feet','Join each lower gap with a short rounded foot.','M 111 219 Q 101 263 137 255 L 144 229 M 156 229 L 163 255 Q 199 263 189 219'),
 S('A chest badge','Add a tiny circle on one side of the chest, with a short line across its middle.',E(174,135,9),P([168,135],[180,135]))]);
L('Winnie the Pooh','Disney',[
 S('A soft bear face','Draw round cheeks and a short curve across the top. Leave two little gaps for ears.','M 106 78 C 88 108 113 138 150 138 C 187 138 212 108 194 78 M 126 57 Q 150 47 174 57'),
 S('Two little ears','Join each gap with a small round ear.','M 106 78 C 74 57 108 28 126 57 M 174 57 C 192 28 226 57 194 78'),
 S('A round tummy','Draw two round sides below the head. Leave spaces for the arms and feet.','M 125 136 Q 110 143 105 153 M 102 183 Q 93 208 110 226 M 134 236 Q 150 241 166 236 M 190 226 Q 207 208 198 183 M 195 153 Q 190 143 175 136'),
 S('A little shirt','Draw the bottom of the shirt and a sleeve at each side.','M 102 183 Q 150 197 198 183 M 105 153 L 86 169 L 102 183 M 195 153 L 214 169 L 198 183'),
 S('A gentle face','Add little eyes, a small nose, curved eyebrows and a smile.',...eyes(150,94,18),E(150,112,8,5),smile(150,121),'M 126 80 Q 132 76 138 80 M 162 80 Q 168 76 174 80'),
 S('Arms and paws','Draw an arm below each sleeve. Join the lower gaps with two little paws.','M 89 173 Q 73 204 94 213 Q 102 211 102 183 M 211 173 Q 227 204 206 213 Q 198 211 198 183 M 110 226 Q 91 250 114 254 Q 138 259 134 236 M 166 236 Q 162 259 186 254 Q 209 250 190 226')]);
L('Piglet','Disney',[
 S('A little face','Draw round cheeks and a short forehead line. Leave a small gap for each ear.','M 121 83 C 91 115 122 155 150 155 C 178 155 209 115 179 83 M 139 70 Q 150 67 161 70'),
 S('Two very tall ears','Join each gap with a long, narrow ear.','M 121 83 C 72 9 137 5 139 70 M 161 70 C 163 5 228 9 179 83'),
 S('A round body','Draw a tall rounded body below the face. Leave two gaps at the bottom for feet.','M 139 153 C 101 159 98 220 129 237 M 143 242 Q 150 244 157 242 M 171 237 C 202 220 199 159 161 153'),
 S('A shy little smile','Add two eyes, a triangle nose, and a little smile.',...eyes(150,109,17),P([143,124],[157,124],[150,132],[143,124]),smile(150,137)),
 S('Stripy outfit','Draw three curves inside the body. Stop just before the outline on each side.','M 116 178 Q 150 190 184 178 M 113 195 Q 150 207 187 195 M 116 213 Q 150 225 184 213'),
 S('Little arms and feet','Put the arms outside the body. Join the bottom gaps with two little feet.','M 119 168 Q 81 177 93 195 Q 105 199 109 186 M 181 168 Q 219 177 207 195 Q 195 199 191 186 M 129 237 Q 107 250 124 255 Q 144 259 143 242 M 157 242 Q 156 259 176 255 Q 193 250 171 237')]);
L('Nemo','Disney',[
 S('A round fish body','Draw a wide oval in the middle.',E(148,150,68,48)),
 S('A fan-shaped tail','Draw a rounded triangle outside the left side. Its two ends touch the body edge.','M 84 133.78 Q 47 109 42 128 L 42 185 Q 50 202 84 166.22'),
 S('A fin on top','Draw a small wavy fin outside the top of the body.','M 108 111.2 Q 116 80 129 104 Q 143 79 153 102.1 Q 172 82 185 109.7'),
 S('Two white stripes','Draw two pairs of curved stripes across the back half. Leave the front clear for the face.','M 104 113.4 Q 89 150 104 186.6 M 115 108 Q 101 150 115 192 M 136 102.8 Q 125 150 136 197.2 M 148 102 Q 137 150 148 198'),
 S('An eye and smile','In the clear front of the body, add one big eye, a little pupil and a smile.',E(191,138,11,13),E(194,139,3),'M 193 165 Q 202 171 210 160'),
 S('A lucky little fin','Add a small side fin in the space below the eye. Add two bubbles if you like.','M 174 157 Q 155 165 174 179 Z',E(239,110,7),E(248,84,4))]);
L('Pascal','Disney',[
 S('A chameleon head','Draw the sides and bottom of a wide head. Leave the top open for three little points.','M 147 83 C 116 96 122 142 156 151 Q 212 163 235 119 Q 242 91 205 77'),
 S('A little body','Draw a curved back and short belly lines below the head. Add a short curve from the cheek down to the body. Leave gaps for the tail and two legs.','M 150 150 Q 103 133 79 164 M 82 186 L 100 195 M 122 203 Q 142 207 151 198 M 174 179 Q 177 166 169 154'),
 S('A curly tail','Start at the back and draw a big curl. Follow it back with a second line, leaving a little space between the lines.','M 79 164 C 14 127 20 231 71 228 C 111 224 100 188 76 191 C 57 193 63 213 76 207 Q 80 203 75 202 Q 71 205 70 200 C 77 193 95 202 86 216 C 58 248 13 176 58 173 Q 69 176 82 186'),
 S('A big watchful eye','Add a large circle on the head, then a smaller circle inside.',E(190,105,21),E(196,105,7)),
 S('Two bent legs','Join each lower gap with a bent leg and tiny toes.','M 100 195 L 93 217 L 117 217 L 122 203 M 151 198 L 157 221 L 183 221 L 188 213 L 173 211 L 174 179'),
 S('A smile and head crest','Add a smile inside the head. Close the top with three little points.','M 180 134 Q 208 147 230 124',P([147,83],[143,64],[162,74],[171,55],[183,72],[198,56],[205,77]))]);
const categoryInfo={All:{icon:'✦',tint:'#eee8f8'},Animals:{icon:'🐾',tint:'#f4e9da'},Princesses:{icon:'♕',tint:'#f5e4ec'},Dinosaurs:{icon:'🦕',tint:'#e6efdf'},Disney:{icon:'✧',tint:'#e4ecf7'}};
function illustration(lesson,step=Infinity,animate=false,ghost=false){return `<svg viewBox="0 0 300 300" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-label="${lesson.name} drawing" role="img" class="step-drawing">${lesson.steps.map((s,i)=>i<=step?`<g class="${ghost?(i===step?'ghost current':'ghost'):i===step?'new':'old'}">${s.paths.map(d=>`<path d="${d}"${animate&&i===step?' data-animate="true"':''}/>`).join('')}</g>`:'').join('')}</svg>`;}
