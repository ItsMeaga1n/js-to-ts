import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.timeBar {
  height: 34px;
  background-color: #212121;
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 0;
  margin: 0 !important;
  overflow: hidden;
}

.pianoRollTimeBar {
  height: 34px;
  background-color: #212121;
  top: 0;
  right: 0;
  left: 100px;
  position: absolute;
  z-index: 0;
  margin: 0 !important;
  overflow: hidden;
}

.timeBarBeat {
  width: 50px;
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin-left: -25px;
  align-items: center;
  justify-content: center;
  opacity: .5;
}

.timeBarBeat:nth-child(4n+1){
  opacity: 100;
  font-weight: 800;
}

.compositionPanel {
  height: calc(100vh - 100px);
  background-color: #3a3a3a;
  margin-left: 0;
}

.compositionPanelPianoRoll {
  height: calc(100vh - 100px);
  background-color: #3a3a3a;
  margin-left: 0;
}

.compositionRowList {
  margin-top: 34px;
  overflow: scroll;
  height: calc(100vh - 134px);

}

.trackCompositionRow {
  height: 65px;
  width: fit-content;    
  background-color: #9E9E9E;
  white-space: nowrap;
  border-style: solid;
  border-top-width: thin;
  border-bottom-width: thin;
  border-color: #212121;
}

.auxTrackCompositionRow {
  height: 65px;
  width: fit-content;    
  background-color: #3a3a3a;
  white-space: nowrap;
  border-style: solid;
  border-top-width: thin;
  border-bottom-width: thin;
  border-color: #212121;
}

.trackCompositionBit {
  height: 64px;
  width: 50px;
  border-style: solid;
  border-right-width: thin;
  border-color: #212121;
  display: inline-block;
}

.region {
  background-color: rgb(85, 95, 189);
  /* background-color: rgb(95, 143, 155);  */
  border-bottom-width: thin;
}

.region.noRightBorder {
  border-right: 0;
}

.region.copied {
  background-color: rgb(118, 129, 223);
  /* background-color: rgb(128, 193, 209); */
}

.keyRow {
  width: fit-content;
  white-space: nowrap;
  height: 20px;
  border-style: solid;
  border-bottom-width: thin;
  border-color: #212121;
  
}

.keyRow.white {
  background: repeating-linear-gradient(90deg,#9E9E9E,#9E9E9E 29px, #545454 29px, #545454 30px, #9E9E9E 30px,
                                      #9E9E9E 59px, #545454 59px, #545454 60px,#9E9E9E 60px,
                                      #9E9E9E 89px, #545454 89px, #545454 90px, #9E9E9E 90px,
                                      #9E9E9E 118px,#4b4b4b 118px, #4b4b4b 120px, #9E9E9E 120px,
                                      #9E9E9E 149px,#545454 149px, #545454 150px, #9E9E9E 150px,
                                      #9E9E9E 179px,#545454 179px, #545454 180px, #9E9E9E 180px,
                                      #9E9E9E 209px,#545454 209px, #545454 210px, #9E9E9E 210px,
                                      #9E9E9E 238px,#4b4b4b 238px, #4b4b4b 240px, #9E9E9E 240px,
                                      #9E9E9E 269px,#545454 269px, #545454 270px, #9E9E9E 270px,
                                      #9E9E9E 299px,#545454 299px, #545454 300px, #9E9E9E 300px,
                                      #9E9E9E 329px,#545454 329px, #545454 330px, #9E9E9E 330px,
                                      #9E9E9E 358px,#4b4b4b 358px, #4b4b4b 360px, #9E9E9E 360px,
                                      #9E9E9E 389px,#545454 389px, #545454 390px, #9E9E9E 390px,
                                      #9E9E9E 419px,#545454 419px, #545454 420px, #9E9E9E 420px,
                                      #9E9E9E 449px,#545454 449px, #545454 450px, #9E9E9E 450px,
                                      #9E9E9E 477px,#212121 477px, #212121 480px, #9E9E9E 480px
                                      );

}

.keyRow.black {
  background: repeating-linear-gradient(90deg,#616161,#616161 29px, #4d4d4d 29px, #4d4d4d 30px, #616161 30px,
                                      #616161 59px, #4d4d4d 59px,#4d4d4d 60px, #616161 60px,
                                      #616161 89px, #4d4d4d 89px, #4d4d4d 90px, #616161 90px,
                                      #616161 118px,#3c3c3c 118px, #3c3c3c 120px, #616161 120px,
                                      #616161 149px,#4d4d4d 149px, #4d4d4d 150px, #616161 150px,
                                      #616161 179px,#4d4d4d 179px, #4d4d4d 180px, #616161 180px,
                                      #616161 209px,#4d4d4d 209px, #4d4d4d 210px, #616161 210px,
                                      #616161 238px,#3c3c3c 238px, #3c3c3c 240px, #616161 240px,
                                      #616161 269px,#4d4d4d 269px, #4d4d4d 270px, #616161 270px,
                                      #616161 299px,#4d4d4d 299px, #4d4d4d 300px, #616161 300px,
                                      #616161 329px,#4d4d4d 329px, #4d4d4d 330px, #616161 330px,
                                      #616161 358px,#3c3c3c 358px, #3c3c3c 360px, #616161 360px,
                                      #616161 389px,#4d4d4d 389px, #4d4d4d 390px, #616161 390px,
                                      #616161 419px,#4d4d4d 419px, #4d4d4d 420px, #616161 420px,
                                      #616161 449px,#4d4d4d 449px, #4d4d4d 450px, #616161 450px,
                                      #616161 477px,#212121 477px, #212121 480px, #616161 480px
  );}



  .pianoRollKeyboard {
  top: 34px;
  width: 100px;
  height: calc(100vh - 134px);
  overflow: hidden;
  position: absolute;
  z-index: 2;
  left: 0;
}

.pianRollKeyRows{
  top: 34px;
  position: relative;
  left: 100px;
  width: calc(100% - 100px);
}

.pianoRollKeyRowsContent{
  position: relative;
  overflow: scroll;
  height: calc(100vh - 134px);
}

.pianoRollKey {
  height: 30px;
  box-sizing: border-box;
  background-image: linear-gradient(90deg,#888,#eee);
  position: relative;
  overflow: hidden;
  border-bottom-width: thin;
  border-bottom-color: rgb(177, 175, 175);
  border-style: solid;
  text-align: right;
  color: #212121;
}

.pianoRollKey.long {
  height: 40px;
}

.pianoRollKey.short {
  height: 30px;
}

.pianoRollKey.sharp {
  position: absolute;
  z-index: 1;
  width: 65%;
  margin-top: -20px;
  border-radius: 0 .1em .1em 0;
  background-image: linear-gradient(90deg,#111,#444);
  height: 20px;
}

.pianoRow {
  display: inline;
}

.note{
  position: absolute;
  height: 20px;
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,2989d8+50,207cca+51,7db9e8+100;Blue+Gloss+Default */
  background-color: #1e5799;
  background-image:
      radial-gradient(
          #406185,
          #304964
      );
  border-width: thin;
  border-color: #212121;
  border-style: solid;
  text-overflow: ellipsis;
  font-weight: 700;
  white-space: nowrap;
  color: #212121;
  font-size: small;
}

.timePointer {
  position: absolute;
  width: 20px;
  height: 10px;
  bottom: 0px;
  fill: #f4f4f4;
  margin-left: -10px;
}

.svgContainer{
  width: 3px;
  height: 100%;
  top: 34px;
  position: absolute;
}

.currTimeLine{
  display: block;
  fill: #f4f4f4;
  stroke: #f4f4f4;
  stroke-opacity: .2;
  stroke-width: 2px;
  height: 100%;
  width: 1px;
}
`;
