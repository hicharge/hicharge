// import React from 'react';
// import { useEffect, useState } from 'react';
// import Faq from 'react-faq-component';

// const styles = {
//   // bgColor: 'white',
//   titleTextColor: 'blue',
//   rowTitleColor: 'blue',
//   // rowContentColor: 'grey',
//   // arrowColor: "red",
// };

// const FFaq = () => {
//   const [first, setfirst] = useState();
//   return (
//     <div style={{ backgroundColor: '#fff' }}>
//       <div
//         style={{
//           margin: 0,
//           blockSize: '373.188px',
//           borderBlockEndColor: 'rgb(33, 37, 41)',
//           borderBlockStartColor: 'rgb(33, 37, 41)',
//           borderBottomColor: 'rgb(33, 37, 41)',
//           borderInlineEndColor: 'rgb(33, 37, 41)',
//           borderInlineStartColor: 'rgb(33, 37, 41)',
//           borderLeftColor: 'rgb(33, 37, 41)',
//           borderRightColor: 'rgb(33, 37, 41)',
//           borderTopColor: 'rgb(33, 37, 41)',
//           boxSizing: 'border-box',
//           caretColor: 'rgb(33, 37, 41)',
//           color: 'rgb(33, 37, 41)',
//           columnRuleColor: 'rgb(33, 37, 41)',
//           fontFamily: 'Manrope',
//           fontSize: '16px',
//           inlineSize: '1425px',
//           lineHeight: '24px',
//           outlineColor: 'rgb(33, 37, 41)',
//           paddingBlockStart: '50px',
//           paddingTop: '50px',
//           textDecoration: 'none solid rgb(33, 37, 41)',
//           textDecorationColor: 'rgb(33, 37, 41)',
//           textEmphasisColor: 'rgb(33, 37, 41)',
//           textSizeAdjust: '100%',
//           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//           WebkitTextFillColor: 'rgb(33, 37, 41)',
//           WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//         }}
//         classNameName={'commoncontainer'}
//       >
//         <div
//           style={{
//             blockSize: '153.586px',
//             borderBlockEndColor: 'rgb(33, 37, 41)',
//             borderBlockStartColor: 'rgb(33, 37, 41)',
//             borderBottomColor: 'rgb(33, 37, 41)',
//             borderInlineEndColor: 'rgb(33, 37, 41)',
//             borderInlineStartColor: 'rgb(33, 37, 41)',
//             borderLeftColor: 'rgb(33, 37, 41)',
//             borderRightColor: 'rgb(33, 37, 41)',
//             borderTopColor: 'rgb(33, 37, 41)',
//             bottom: '-5292.15px',
//             boxSizing: 'border-box',
//             caretColor: 'rgb(33, 37, 41)',
//             color: 'rgb(33, 37, 41)',
//             columnRuleColor: 'rgb(33, 37, 41)',
//             fontFamily: 'Manrope',
//             fontSize: '16px',
//             inlineSize: '177px',
//             insetBlockEnd: '-5292.15px',
//             insetBlockStart: '5989.56px',
//             insetInlineEnd: '1248px',
//             insetInlineStart: '0px',
//             left: '0px',
//             lineHeight: '24px',
//             marginBlockStart: '-62px',
//             marginLeft: 0,
//             marginRight: 0,
//             marginTop: '-62px',
//             outlineColor: 'rgb(33, 37, 41)',
//             position: 'absolute',
//             right: '1248px',
//             textDecoration: 'none solid rgb(33, 37, 41)',
//             textDecorationColor: 'rgb(33, 37, 41)',
//             textEmphasisColor: 'rgb(33, 37, 41)',
//             textSizeAdjust: '100%',
//             top: '5989.56px',
//             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//             WebkitTextFillColor: 'rgb(33, 37, 41)',
//             WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//           }}
//           classNameName={'element4'}
//         >
//           <img
//             style={{
//               blockSize: '153.586px',
//               borderBlockEndColor: 'rgb(33, 37, 41)',
//               borderBlockStartColor: 'rgb(33, 37, 41)',
//               borderBottomColor: 'rgb(33, 37, 41)',
//               borderInlineEndColor: 'rgb(33, 37, 41)',
//               borderInlineStartColor: 'rgb(33, 37, 41)',
//               borderLeftColor: 'rgb(33, 37, 41)',
//               borderRightColor: 'rgb(33, 37, 41)',
//               borderTopColor: 'rgb(33, 37, 41)',
//               boxSizing: 'border-box',
//               caretColor: 'rgb(33, 37, 41)',
//               color: 'rgb(33, 37, 41)',
//               columnRuleColor: 'rgb(33, 37, 41)',
//               fontFamily: 'Manrope',
//               fontSize: '16px',
//               inlineSize: '141.594px',
//               lineHeight: '24px',
//               marginLeft: 0,
//               marginRight: 0,
//               outlineColor: 'rgb(33, 37, 41)',
//               textDecoration: 'none solid rgb(33, 37, 41)',
//               textDecorationColor: 'rgb(33, 37, 41)',
//               textEmphasisColor: 'rgb(33, 37, 41)',
//               textSizeAdjust: '100%',
//               verticalAlign: 'middle',
//               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//               WebkitTextFillColor: 'rgb(33, 37, 41)',
//               WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//               width: '153.586px',
//               height: '153.586px',
//               opacity: 0,
//             }}
//             src={
//               'https://hicharge.in/admin/wp-content/uploads/2023/04/favicon-96x96-1.png'
//             }
//             classNameName={'elementimg1'}
//             alt="elementimg1Faq"
//           ></img>
//         </div>
//         <div
//           style={{
//             blockSize: '323.188px',
//             borderBlockEndColor: 'rgb(33, 37, 41)',
//             borderBlockStartColor: 'rgb(33, 37, 41)',
//             borderBottomColor: 'rgb(33, 37, 41)',
//             borderInlineEndColor: 'rgb(33, 37, 41)',
//             borderInlineStartColor: 'rgb(33, 37, 41)',
//             borderLeftColor: 'rgb(33, 37, 41)',
//             borderRightColor: 'rgb(33, 37, 41)',
//             borderTopColor: 'rgb(33, 37, 41)',
//             boxSizing: 'border-box',
//             caretColor: 'rgb(33, 37, 41)',
//             color: 'rgb(33, 37, 41)',
//             columnRuleColor: 'rgb(33, 37, 41)',
//             fontFamily: 'Manrope',
//             fontSize: '16px',
//             inlineSize: '1353.75px',
//             lineHeight: '24px',
//             marginInlineEnd: '35.625px',
//             marginInlineStart: '35.625px',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             outlineColor: 'rgb(33, 37, 41)',
//             paddingInlineEnd: '12px',
//             paddingInlineStart: '12px',
//             paddingLeft: '12px',
//             paddingRight: '12px',
//             textDecoration: 'none solid rgb(33, 37, 41)',
//             textDecorationColor: 'rgb(33, 37, 41)',
//             textEmphasisColor: 'rgb(33, 37, 41)',
//             textSizeAdjust: '100%',
//             transform: 'matrix(1, 0, 0, 1, 0, 0)',
//             transformOrigin: '676.875px 161.594px',
//             transitionDuration: '1s',
//             transitionProperty: 'opacity, transform',
//             transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//             WebkitTextFillColor: 'rgb(33, 37, 41)',
//             WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//             width: '100%',
//           }}
//           classNameName={'container-fluid aos-init aos-animate'}
//           data-aos={'fade-up'}
//         >
//           <div
//             style={{
//               blockSize: '41.5938px',
//               borderBlockEndColor: 'rgb(33, 37, 41)',
//               borderBlockStartColor: 'rgb(33, 37, 41)',
//               borderBottomColor: 'rgb(33, 37, 41)',
//               borderInlineEndColor: 'rgb(33, 37, 41)',
//               borderInlineStartColor: 'rgb(33, 37, 41)',
//               borderLeftColor: 'rgb(33, 37, 41)',
//               borderRightColor: 'rgb(33, 37, 41)',
//               borderTopColor: 'rgb(33, 37, 41)',
//               boxSizing: 'border-box',
//               caretColor: 'rgb(33, 37, 41)',
//               color: 'rgb(33, 37, 41)',
//               columnRuleColor: 'rgb(33, 37, 41)',
//               display: 'flex',
//               flexWrap: 'wrap',
//               fontFamily: 'Manrope',
//               fontSize: '16px',
//               inlineSize: '1353.75px',
//               lineHeight: '24px',
//               marginInlineEnd: '-12px',
//               marginInlineStart: '-12px',
//               marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
//               marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
//               marginTop: 'calc(var(--bs-gutter-y) * -1)',
//               outlineColor: 'rgb(33, 37, 41)',
//               textDecoration: 'none solid rgb(33, 37, 41)',
//               textDecorationColor: 'rgb(33, 37, 41)',
//               textEmphasisColor: 'rgb(33, 37, 41)',
//               textSizeAdjust: '100%',
//               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//               WebkitTextFillColor: 'rgb(33, 37, 41)',
//               WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//             }}
//             classNameName={'row'}
//           >
//             <div
//               style={{
//                 blockSize: '41.5938px',
//                 borderBlockEndColor: 'rgb(33, 37, 41)',
//                 borderBlockStartColor: 'rgb(33, 37, 41)',
//                 borderBottomColor: 'rgb(33, 37, 41)',
//                 borderInlineEndColor: 'rgb(33, 37, 41)',
//                 borderInlineStartColor: 'rgb(33, 37, 41)',
//                 borderLeftColor: 'rgb(33, 37, 41)',
//                 borderRightColor: 'rgb(33, 37, 41)',
//                 borderTopColor: 'rgb(33, 37, 41)',
//                 boxSizing: 'border-box',
//                 caretColor: 'rgb(33, 37, 41)',
//                 color: 'rgb(33, 37, 41)',
//                 columnRuleColor: 'rgb(33, 37, 41)',
//                 flexShrink: 0,
//                 fontFamily: 'Manrope',
//                 fontSize: '16px',
//                 inlineSize: '1353.75px',
//                 lineHeight: '24px',
//                 marginLeft: 0,
//                 marginRight: 0,
//                 maxInlineSize: '100%',
//                 maxWidth: '100%',
//                 minBlockSize: 'auto',
//                 minHeight: 'auto',
//                 minInlineSize: 'auto',
//                 minWidth: 'auto',
//                 outlineColor: 'rgb(33, 37, 41)',
//                 paddingInlineEnd: '12px',
//                 paddingInlineStart: '12px',
//                 paddingLeft: '12px',
//                 paddingRight: '12px',
//                 textDecoration: 'none solid rgb(33, 37, 41)',
//                 textDecorationColor: 'rgb(33, 37, 41)',
//                 textEmphasisColor: 'rgb(33, 37, 41)',
//                 textSizeAdjust: '100%',
//                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                 WebkitTextFillColor: 'rgb(33, 37, 41)',
//                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                 width: '100%',
//               }}
//               classNameName={'col-md-12'}
//             >
//               <div
//                 style={{
//                   blockSize: '33.5938px',
//                   borderBlockEndColor: 'rgb(33, 37, 41)',
//                   borderBlockStartColor: 'rgb(33, 37, 41)',
//                   borderBottomColor: 'rgb(33, 37, 41)',
//                   borderInlineEndColor: 'rgb(33, 37, 41)',
//                   borderInlineStartColor: '#ff5733',
//                   borderInlineStartStyle: 'solid',
//                   borderInlineStartWidth: '4px',
//                   borderLeftColor: '#ff5733',
//                   borderLeftStyle: 'solid',
//                   borderLeftWidth: '4px',
//                   borderRightColor: 'rgb(33, 37, 41)',
//                   borderTopColor: 'rgb(33, 37, 41)',
//                   boxSizing: 'border-box',
//                   caretColor: 'rgb(33, 37, 41)',
//                   color: 'rgb(33, 37, 41)',
//                   columnRuleColor: 'rgb(33, 37, 41)',
//                   fontFamily: 'Manrope',
//                   fontSize: '16px',
//                   inlineSize: '1329.75px',
//                   lineHeight: '24px',
//                   marginLeft: 0,
//                   marginRight: 0,
//                   outlineColor: 'rgb(33, 37, 41)',
//                   textDecoration: 'none solid rgb(33, 37, 41)',
//                   textDecorationColor: 'rgb(33, 37, 41)',
//                   textEmphasisColor: 'rgb(33, 37, 41)',
//                   textSizeAdjust: '100%',
//                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                   WebkitTextFillColor: 'rgb(33, 37, 41)',
//                   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                 }}
//                 classNameName={'vl'}
//               >
//                 <div
//                   style={{
//                     blockSize: '33.5938px',
//                     borderBlockEndColor: 'rgb(33, 37, 41)',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomColor: 'rgb(33, 37, 41)',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '1325.75px',
//                     lineHeight: '24px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     paddingInlineStart: '15px',
//                     paddingLeft: '15px',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'vltext'}
//                 >
//                   <h3
//                     style={{
//                       blockSize: '33.5938px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '28px',
//                       fontWeight: 500,
//                       inlineSize: '1310.75px',
//                       lineHeight: '33.6px',
//                       marginBlockEnd: '8px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0.5rem',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                   >
//                     <b
//                       style={{
//                         borderBlockEndColor: 'rgb(33, 37, 41)',
//                         borderBlockStartColor: 'rgb(33, 37, 41)',
//                         borderBottomColor: 'rgb(33, 37, 41)',
//                         borderInlineEndColor: 'rgb(33, 37, 41)',
//                         borderInlineStartColor: 'rgb(33, 37, 41)',
//                         borderLeftColor: 'rgb(33, 37, 41)',
//                         borderRightColor: 'rgb(33, 37, 41)',
//                         borderTopColor: 'rgb(33, 37, 41)',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(33, 37, 41)',
//                         color: 'rgb(33, 37, 41)',
//                         columnRuleColor: 'rgb(33, 37, 41)',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '28px',
//                         lineHeight: '33.6px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(33, 37, 41)',
//                         textDecoration: 'none solid rgb(33, 37, 41)',
//                         textDecorationColor: 'rgb(33, 37, 41)',
//                         textEmphasisColor: 'rgb(33, 37, 41)',
//                         textSizeAdjust: '100%',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(33, 37, 41)',
//                         WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                       }}
//                     >
//                       Frequently Asked Questions
//                     </b>
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <br
//             style={{
//               borderBlockEndColor: 'rgb(33, 37, 41)',
//               borderBlockStartColor: 'rgb(33, 37, 41)',
//               borderBottomColor: 'rgb(33, 37, 41)',
//               borderInlineEndColor: 'rgb(33, 37, 41)',
//               borderInlineStartColor: 'rgb(33, 37, 41)',
//               borderLeftColor: 'rgb(33, 37, 41)',
//               borderRightColor: 'rgb(33, 37, 41)',
//               borderTopColor: 'rgb(33, 37, 41)',
//               boxSizing: 'border-box',
//               caretColor: 'rgb(33, 37, 41)',
//               color: 'rgb(33, 37, 41)',
//               columnRuleColor: 'rgb(33, 37, 41)',
//               fontFamily: 'Manrope',
//               fontSize: '16px',
//               lineHeight: '24px',
//               marginLeft: 0,
//               marginRight: 0,
//               outlineColor: 'rgb(33, 37, 41)',
//               textDecoration: 'none solid rgb(33, 37, 41)',
//               textDecorationColor: 'rgb(33, 37, 41)',
//               textEmphasisColor: 'rgb(33, 37, 41)',
//               textSizeAdjust: '100%',
//               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//               WebkitTextFillColor: 'rgb(33, 37, 41)',
//               WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//             }}
//           />
//           <div
//             style={{
//               blockSize: '257.594px',
//               borderBlockEndColor: 'rgb(33, 37, 41)',
//               borderBlockStartColor: 'rgb(33, 37, 41)',
//               borderBottomColor: 'rgb(33, 37, 41)',
//               borderInlineEndColor: 'rgb(33, 37, 41)',
//               borderInlineStartColor: 'rgb(33, 37, 41)',
//               borderLeftColor: 'rgb(33, 37, 41)',
//               borderRightColor: 'rgb(33, 37, 41)',
//               borderTopColor: 'rgb(33, 37, 41)',
//               boxSizing: 'border-box',
//               caretColor: 'rgb(33, 37, 41)',
//               color: 'rgb(33, 37, 41)',
//               columnRuleColor: 'rgb(33, 37, 41)',
//               display: 'flex',
//               flexWrap: 'wrap',
//               fontFamily: 'Manrope',
//               fontSize: '16px',
//               inlineSize: '1353.75px',
//               lineHeight: '24px',
//               marginInlineEnd: '-12px',
//               marginInlineStart: '-12px',
//               marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
//               marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
//               marginTop: 'calc(var(--bs-gutter-y) * -1)',
//               outlineColor: 'rgb(33, 37, 41)',
//               textDecoration: 'none solid rgb(33, 37, 41)',
//               textDecorationColor: 'rgb(33, 37, 41)',
//               textEmphasisColor: 'rgb(33, 37, 41)',
//               textSizeAdjust: '100%',
//               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//               WebkitTextFillColor: 'rgb(33, 37, 41)',
//               WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//             }}
//             classNameName={'row'}
//           >
//             <div
//               style={{
//                 blockSize: '257.594px',
//                 borderBlockEndColor: 'rgb(33, 37, 41)',
//                 borderBlockStartColor: 'rgb(33, 37, 41)',
//                 borderBottomColor: 'rgb(33, 37, 41)',
//                 borderInlineEndColor: 'rgb(33, 37, 41)',
//                 borderInlineStartColor: 'rgb(33, 37, 41)',
//                 borderLeftColor: 'rgb(33, 37, 41)',
//                 borderRightColor: 'rgb(33, 37, 41)',
//                 borderTopColor: 'rgb(33, 37, 41)',
//                 boxSizing: 'border-box',
//                 caretColor: 'rgb(33, 37, 41)',
//                 color: 'rgb(33, 37, 41)',
//                 columnRuleColor: 'rgb(33, 37, 41)',
//                 flexShrink: 0,
//                 fontFamily: 'Manrope',
//                 fontSize: '16px',
//                 inlineSize: '676.875px',
//                 lineHeight: '24px',
//                 marginLeft: 0,
//                 marginRight: 0,
//                 maxInlineSize: '100%',
//                 maxWidth: '100%',
//                 minBlockSize: 'auto',
//                 minHeight: 'auto',
//                 minInlineSize: 'auto',
//                 minWidth: 'auto',
//                 outlineColor: 'rgb(33, 37, 41)',
//                 paddingInlineEnd: '12px',
//                 paddingInlineStart: '12px',
//                 paddingLeft: '12px',
//                 paddingRight: '12px',
//                 textDecoration: 'none solid rgb(33, 37, 41)',
//                 textDecorationColor: 'rgb(33, 37, 41)',
//                 textEmphasisColor: 'rgb(33, 37, 41)',
//                 textSizeAdjust: '100%',
//                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                 WebkitTextFillColor: 'rgb(33, 37, 41)',
//                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                 width: '676.875px',
//               }}
//               classNameName={'col-md-6'}
//             >
//               <div
//                 style={{
//                   blockSize: '242.594px',
//                   borderBlockEndColor: 'rgb(33, 37, 41)',
//                   borderBlockStartColor: 'rgb(33, 37, 41)',
//                   borderBottomColor: 'rgb(33, 37, 41)',
//                   borderInlineEndColor: 'rgb(33, 37, 41)',
//                   borderInlineStartColor: 'rgb(33, 37, 41)',
//                   borderLeftColor: 'rgb(33, 37, 41)',
//                   borderRightColor: 'rgb(33, 37, 41)',
//                   borderTopColor: 'rgb(33, 37, 41)',
//                   boxSizing: 'border-box',
//                   caretColor: 'rgb(33, 37, 41)',
//                   color: 'rgb(33, 37, 41)',
//                   columnRuleColor: 'rgb(33, 37, 41)',
//                   fontFamily: 'Manrope',
//                   fontSize: '16px',
//                   inlineSize: '652.875px',
//                   lineHeight: '24px',
//                   marginLeft: 0,
//                   marginRight: 0,
//                   outlineColor: 'rgb(33, 37, 41)',
//                   textDecoration: 'none solid rgb(33, 37, 41)',
//                   textDecorationColor: 'rgb(33, 37, 41)',
//                   textEmphasisColor: 'rgb(33, 37, 41)',
//                   textSizeAdjust: '100%',
//                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                   WebkitTextFillColor: 'rgb(33, 37, 41)',
//                   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                 }}
//                 classNameName={'accordion'}
//                 id={'accordionExample1'}
//               >
//                 <div
//                   style={{
//                     blockSize: '49.3984px',
//                     borderBlockEndStyle: 'solid',
//                     borderBlockEndWidth: '1px',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomStyle: 'solid',
//                     borderBottomWidth: '1px',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '652.875px',
//                     lineHeight: '24px',
//                     marginBlockEnd: '15px',
//                     marginBottom: '15px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'accordion-item'}
//                 >
//                   <h2
//                     style={{
//                       blockSize: '48.3984px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '32px',
//                       fontWeight: 500,
//                       inlineSize: '652.875px',
//                       lineHeight: '38.4px',
//                       marginBlockEnd: '0px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0px',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                     classNameName={'accordion-header'}
//                     id={'faqheading1'}
//                   >
//                     <button
//                       style={{
//                         alignItems: 'center',
//                         appearance: 'button',
//                         backgroundColor: 'rgba(0, 0, 0, 0)',
//                         blockSize: '48.3984px',
//                         borderBlockEndColor: 'rgb(255, 255, 255)',
//                         borderBlockEndStyle: 'none',
//                         borderBlockEndWidth: '0px',
//                         borderBlockStartColor: 'rgb(255, 255, 255)',
//                         borderBlockStartStyle: 'none',
//                         borderBlockStartWidth: '0px',
//                         borderBottomColor: 'rgb(255, 255, 255)',
//                         borderBottomStyle: 'none',
//                         borderBottomWidth: '0px',
//                         borderInlineEndColor: 'rgb(255, 255, 255)',
//                         borderInlineEndStyle: 'none',
//                         borderInlineEndWidth: '0px',
//                         borderInlineStartColor: 'rgb(255, 255, 255)',
//                         borderInlineStartStyle: 'none',
//                         borderInlineStartWidth: '0px',
//                         borderLeftColor: 'rgb(255, 255, 255)',
//                         borderLeftStyle: 'none',
//                         borderLeftWidth: '0px',
//                         borderRightColor: 'rgb(255, 255, 255)',
//                         borderRightStyle: 'none',
//                         borderRightWidth: '0px',
//                         borderStartEndRadius: '3px',
//                         borderStartStartRadius: '3px',
//                         borderTopColor: 'rgb(255, 255, 255)',
//                         borderTopLeftRadius: '3px',
//                         borderTopRightRadius: '3px',
//                         borderTopStyle: 'none',
//                         borderTopWidth: '0px',
//                         bottom: '0px',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(255, 255, 255)',
//                         color: 'rgb(255, 255, 255)',
//                         columnRuleColor: 'rgb(255, 255, 255)',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '17px',
//                         inlineSize: '652.875px',
//                         insetBlockEnd: '0px',
//                         insetBlockStart: '0px',
//                         insetInlineEnd: '0px',
//                         insetInlineStart: '0px',
//                         left: '0px',
//                         lineHeight: '20.4px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(255, 255, 255)',
//                         overflowAnchor: 'none',
//                         paddingBlockEnd: '12px',
//                         paddingBlockStart: '16px',
//                         paddingBottom: '12px',
//                         paddingInlineEnd: '0px',
//                         paddingInlineStart: '12px',
//                         paddingLeft: '12px',
//                         paddingRight: '0px',
//                         paddingTop: '16px',
//                         position: 'relative',
//                         right: '0px',
//                         textAlign: 'left',
//                         textDecoration: 'none solid rgb(255, 255, 255)',
//                         textDecorationColor: 'rgb(255, 255, 255)',
//                         textEmphasisColor: 'rgb(255, 255, 255)',
//                         textSizeAdjust: '100%',
//                         top: '0px',
//                         transitionDelay: '0s, 0s, 0s, 0s, 0s',
//                         transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
//                         transitionProperty:
//                           'color, background-color, border-color, box-shadow, border-radius',
//                         transitionTimingFunction:
//                           'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(255, 255, 255)',
//                         WebkitTextStrokeColor: 'rgb(255, 255, 255)',
//                         width: '100%',
//                       }}
//                       classNameName={'accordion-button collapsed'}
//                       type={'button'}
//                       data-bs-toggle={'collapse'}
//                       data-bs-target={'#faq1'}
//                       aria-expanded={'true'}
//                       aria-controls={'faq1'}
//                     >
//                       <p
//                         style={{
//                           blockSize: '20.3984px',
//                           borderBlockEndColor: 'rgb(44, 44, 45)',
//                           borderBlockStartColor: 'rgb(44, 44, 45)',
//                           borderBottomColor: 'rgb(44, 44, 45)',
//                           borderInlineEndColor: 'rgb(44, 44, 45)',
//                           borderInlineStartColor: 'rgb(44, 44, 45)',
//                           borderLeftColor: 'rgb(44, 44, 45)',
//                           borderRightColor: 'rgb(44, 44, 45)',
//                           borderTopColor: 'rgb(44, 44, 45)',
//                           boxSizing: 'border-box',
//                           caretColor: 'rgb(44, 44, 45)',
//                           color: 'rgb(44, 44, 45)',
//                           columnRuleColor: 'rgb(44, 44, 45)',
//                           cursor: 'pointer',
//                           fontFamily: 'Manrope',
//                           fontSize: '17px',
//                           inlineSize: '118.656px',
//                           lineHeight: '20.4px',
//                           marginBlockEnd: '0px',
//                           marginBlockStart: '0px',
//                           marginBottom: '0px',
//                           marginLeft: 0,
//                           marginRight: 0,
//                           marginTop: '0px',
//                           minBlockSize: 'auto',
//                           minHeight: 'auto',
//                           minInlineSize: 'auto',
//                           minWidth: 'auto',
//                           outlineColor: 'rgb(44, 44, 45)',
//                           textAlign: 'left',
//                           textDecoration: 'none solid rgb(44, 44, 45)',
//                           textDecorationColor: 'rgb(44, 44, 45)',
//                           textEmphasisColor: 'rgb(44, 44, 45)',
//                           textSizeAdjust: '100%',
//                           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                           WebkitTextFillColor: 'rgb(44, 44, 45)',
//                           WebkitTextStrokeColor: 'rgb(44, 44, 45)',
//                         }}
//                       >
//                         Can I rent Hicharge?
//                       </p>
//                     </button>
//                   </h2>
//                 </div>
//                 <div
//                   style={{
//                     blockSize: '49.3984px',
//                     borderBlockEndStyle: 'solid',
//                     borderBlockEndWidth: '1px',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomStyle: 'solid',
//                     borderBottomWidth: '1px',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '652.875px',
//                     lineHeight: '24px',
//                     marginBlockEnd: '15px',
//                     marginBottom: '15px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'accordion-item'}
//                 >
//                   <h2
//                     style={{
//                       blockSize: '48.3984px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '32px',
//                       fontWeight: 500,
//                       inlineSize: '652.875px',
//                       lineHeight: '38.4px',
//                       marginBlockEnd: '0px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0px',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                     classNameName={'accordion-header'}
//                     id={'faqheading2'}
//                   >
//                     <button
//                       style={{
//                         alignItems: 'center',
//                         appearance: 'button',
//                         backgroundColor: 'rgba(0, 0, 0, 0)',
//                         blockSize: '48.3984px',
//                         borderBlockEndColor: 'rgb(255, 255, 255)',
//                         borderBlockEndStyle: 'none',
//                         borderBlockEndWidth: '0px',
//                         borderBlockStartColor: 'rgb(255, 255, 255)',
//                         borderBlockStartStyle: 'none',
//                         borderBlockStartWidth: '0px',
//                         borderBottomColor: 'rgb(255, 255, 255)',
//                         borderBottomStyle: 'none',
//                         borderBottomWidth: '0px',
//                         borderInlineEndColor: 'rgb(255, 255, 255)',
//                         borderInlineEndStyle: 'none',
//                         borderInlineEndWidth: '0px',
//                         borderInlineStartColor: 'rgb(255, 255, 255)',
//                         borderInlineStartStyle: 'none',
//                         borderInlineStartWidth: '0px',
//                         borderLeftColor: 'rgb(255, 255, 255)',
//                         borderLeftStyle: 'none',
//                         borderLeftWidth: '0px',
//                         borderRightColor: 'rgb(255, 255, 255)',
//                         borderRightStyle: 'none',
//                         borderRightWidth: '0px',
//                         borderTopColor: 'rgb(255, 255, 255)',
//                         borderTopStyle: 'none',
//                         borderTopWidth: '0px',
//                         bottom: '0px',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(255, 255, 255)',
//                         color: 'rgb(255, 255, 255)',
//                         columnRuleColor: 'rgb(255, 255, 255)',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '17px',
//                         inlineSize: '652.875px',
//                         insetBlockEnd: '0px',
//                         insetBlockStart: '0px',
//                         insetInlineEnd: '0px',
//                         insetInlineStart: '0px',
//                         left: '0px',
//                         lineHeight: '20.4px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(255, 255, 255)',
//                         overflowAnchor: 'none',
//                         paddingBlockEnd: '12px',
//                         paddingBlockStart: '16px',
//                         paddingBottom: '12px',
//                         paddingInlineEnd: '0px',
//                         paddingInlineStart: '12px',
//                         paddingLeft: '12px',
//                         paddingRight: '0px',
//                         paddingTop: '16px',
//                         position: 'relative',
//                         right: '0px',
//                         textAlign: 'left',
//                         textDecoration: 'none solid rgb(255, 255, 255)',
//                         textDecorationColor: 'rgb(255, 255, 255)',
//                         textEmphasisColor: 'rgb(255, 255, 255)',
//                         textSizeAdjust: '100%',
//                         top: '0px',
//                         transitionDelay: '0s, 0s, 0s, 0s, 0s',
//                         transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
//                         transitionProperty:
//                           'color, background-color, border-color, box-shadow, border-radius',
//                         transitionTimingFunction:
//                           'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(255, 255, 255)',
//                         WebkitTextStrokeColor: 'rgb(255, 255, 255)',
//                         width: '100%',
//                       }}
//                       classNameName={'accordion-button collapsed'}
//                       type={'button'}
//                       data-bs-toggle={'collapse'}
//                       data-bs-target={'#faq2'}
//                       aria-expanded={'false'}
//                       aria-controls={'faq2'}
//                     >
//                       <p
//                         style={{
//                           blockSize: '20.3984px',
//                           borderBlockEndColor: 'rgb(44, 44, 45)',
//                           borderBlockStartColor: 'rgb(44, 44, 45)',
//                           borderBottomColor: 'rgb(44, 44, 45)',
//                           borderInlineEndColor: 'rgb(44, 44, 45)',
//                           borderInlineStartColor: 'rgb(44, 44, 45)',
//                           borderLeftColor: 'rgb(44, 44, 45)',
//                           borderRightColor: 'rgb(44, 44, 45)',
//                           borderTopColor: 'rgb(44, 44, 45)',
//                           boxSizing: 'border-box',
//                           caretColor: 'rgb(44, 44, 45)',
//                           color: 'rgb(44, 44, 45)',
//                           columnRuleColor: 'rgb(44, 44, 45)',
//                           cursor: 'pointer',
//                           fontFamily: 'Manrope',
//                           fontSize: '17px',
//                           inlineSize: '304.328px',
//                           lineHeight: '20.4px',
//                           marginBlockEnd: '0px',
//                           marginBlockStart: '0px',
//                           marginBottom: '0px',
//                           marginLeft: 0,
//                           marginRight: 0,
//                           marginTop: '0px',
//                           minBlockSize: 'auto',
//                           minHeight: 'auto',
//                           minInlineSize: 'auto',
//                           minWidth: 'auto',
//                           outlineColor: 'rgb(44, 44, 45)',
//                           textAlign: 'left',
//                           textDecoration: 'none solid rgb(44, 44, 45)',
//                           textDecorationColor: 'rgb(44, 44, 45)',
//                           textEmphasisColor: 'rgb(44, 44, 45)',
//                           textSizeAdjust: '100%',
//                           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                           WebkitTextFillColor: 'rgb(44, 44, 45)',
//                           WebkitTextStrokeColor: 'rgb(44, 44, 45)',
//                         }}
//                       >
//                         What kind of batteries are used in Hicharge?
//                       </p>
//                     </button>
//                   </h2>
//                 </div>
//                 <div
//                   style={{
//                     blockSize: '49.3984px',
//                     borderBlockEndStyle: 'solid',
//                     borderBlockEndWidth: '1px',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomStyle: 'solid',
//                     borderBottomWidth: '1px',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '652.875px',
//                     lineHeight: '24px',
//                     marginBlockEnd: '15px',
//                     marginBottom: '15px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'accordion-item'}
//                 >
//                   <h2
//                     style={{
//                       blockSize: '48.3984px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '32px',
//                       fontWeight: 500,
//                       inlineSize: '652.875px',
//                       lineHeight: '38.4px',
//                       marginBlockEnd: '0px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0px',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                     classNameName={'accordion-header'}
//                     id={'faqheading3'}
//                   >
//                     <button
//                       style={{
//                         alignItems: 'center',
//                         appearance: 'button',
//                         backgroundColor: 'rgba(0, 0, 0, 0)',
//                         blockSize: '48.3984px',
//                         borderBlockEndColor: 'rgb(255, 255, 255)',
//                         borderBlockEndStyle: 'none',
//                         borderBlockEndWidth: '0px',
//                         borderBlockStartColor: 'rgb(255, 255, 255)',
//                         borderBlockStartStyle: 'none',
//                         borderBlockStartWidth: '0px',
//                         borderBottomColor: 'rgb(255, 255, 255)',
//                         borderBottomStyle: 'none',
//                         borderBottomWidth: '0px',
//                         borderInlineEndColor: 'rgb(255, 255, 255)',
//                         borderInlineEndStyle: 'none',
//                         borderInlineEndWidth: '0px',
//                         borderInlineStartColor: 'rgb(255, 255, 255)',
//                         borderInlineStartStyle: 'none',
//                         borderInlineStartWidth: '0px',
//                         borderLeftColor: 'rgb(255, 255, 255)',
//                         borderLeftStyle: 'none',
//                         borderLeftWidth: '0px',
//                         borderRightColor: 'rgb(255, 255, 255)',
//                         borderRightStyle: 'none',
//                         borderRightWidth: '0px',
//                         borderTopColor: 'rgb(255, 255, 255)',
//                         borderTopStyle: 'none',
//                         borderTopWidth: '0px',
//                         bottom: '0px',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(255, 255, 255)',
//                         color: 'rgb(255, 255, 255)',
//                         columnRuleColor: 'rgb(255, 255, 255)',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '17px',
//                         inlineSize: '652.875px',
//                         insetBlockEnd: '0px',
//                         insetBlockStart: '0px',
//                         insetInlineEnd: '0px',
//                         insetInlineStart: '0px',
//                         left: '0px',
//                         lineHeight: '20.4px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(255, 255, 255)',
//                         overflowAnchor: 'none',
//                         paddingBlockEnd: '12px',
//                         paddingBlockStart: '16px',
//                         paddingBottom: '12px',
//                         paddingInlineEnd: '0px',
//                         paddingInlineStart: '12px',
//                         paddingLeft: '12px',
//                         paddingRight: '0px',
//                         paddingTop: '16px',
//                         position: 'relative',
//                         right: '0px',
//                         textAlign: 'left',
//                         textDecoration: 'none solid rgb(255, 255, 255)',
//                         textDecorationColor: 'rgb(255, 255, 255)',
//                         textEmphasisColor: 'rgb(255, 255, 255)',
//                         textSizeAdjust: '100%',
//                         top: '0px',
//                         transitionDelay: '0s, 0s, 0s, 0s, 0s',
//                         transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
//                         transitionProperty:
//                           'color, background-color, border-color, box-shadow, border-radius',
//                         transitionTimingFunction:
//                           'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(255, 255, 255)',
//                         WebkitTextStrokeColor: 'rgb(255, 255, 255)',
//                         width: '100%',
//                       }}
//                       classNameName={'accordion-button collapsed'}
//                       type={'button'}
//                       data-bs-toggle={'collapse'}
//                       data-bs-target={'#faq3'}
//                       aria-expanded={'false'}
//                       aria-controls={'faq3'}
//                     >
//                       <p
//                         style={{
//                           blockSize: '20.3984px',
//                           borderBlockEndColor: 'rgb(44, 44, 45)',
//                           borderBlockStartColor: 'rgb(44, 44, 45)',
//                           borderBottomColor: 'rgb(44, 44, 45)',
//                           borderInlineEndColor: 'rgb(44, 44, 45)',
//                           borderInlineStartColor: 'rgb(44, 44, 45)',
//                           borderLeftColor: 'rgb(44, 44, 45)',
//                           borderRightColor: 'rgb(44, 44, 45)',
//                           borderTopColor: 'rgb(44, 44, 45)',
//                           boxSizing: 'border-box',
//                           caretColor: 'rgb(44, 44, 45)',
//                           color: 'rgb(44, 44, 45)',
//                           columnRuleColor: 'rgb(44, 44, 45)',
//                           cursor: 'pointer',
//                           fontFamily: 'Manrope',
//                           fontSize: '17px',
//                           inlineSize: '569.547px',
//                           lineHeight: '20.4px',
//                           marginBlockEnd: '0px',
//                           marginBlockStart: '0px',
//                           marginBottom: '0px',
//                           marginLeft: 0,
//                           marginRight: 0,
//                           marginTop: '0px',
//                           minBlockSize: 'auto',
//                           minHeight: 'auto',
//                           minInlineSize: 'auto',
//                           minWidth: 'auto',
//                           outlineColor: 'rgb(44, 44, 45)',
//                           textAlign: 'left',
//                           textDecoration: 'none solid rgb(44, 44, 45)',
//                           textDecorationColor: 'rgb(44, 44, 45)',
//                           textEmphasisColor: 'rgb(44, 44, 45)',
//                           textSizeAdjust: '100%',
//                           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                           WebkitTextFillColor: 'rgb(44, 44, 45)',
//                           WebkitTextStrokeColor: 'rgb(44, 44, 45)',
//                         }}
//                       >
//                         What are some key differences between Hicharge and other
//                         DC fast chargers?
//                       </p>
//                     </button>
//                   </h2>
//                 </div>
//                 <div
//                   style={{
//                     blockSize: '49.3984px',
//                     borderBlockEndStyle: 'solid',
//                     borderBlockEndWidth: '1px',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomStyle: 'solid',
//                     borderBottomWidth: '1px',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '652.875px',
//                     lineHeight: '24px',
//                     marginBlockEnd: '15px',
//                     marginBottom: '15px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'accordion-item'}
//                 >
//                   <h2
//                     style={{
//                       blockSize: '48.3984px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '32px',
//                       fontWeight: 500,
//                       inlineSize: '652.875px',
//                       lineHeight: '38.4px',
//                       marginBlockEnd: '0px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0px',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                     classNameName={'accordion-header'}
//                     id={'faqheading4'}
//                   >
//                     <button
//                       style={{
//                         alignItems: 'center',
//                         appearance: 'button',
//                         backgroundColor: 'rgba(0, 0, 0, 0)',
//                         blockSize: '48.3984px',
//                         borderBlockEndColor: 'rgb(255, 255, 255)',
//                         borderBlockEndStyle: 'none',
//                         borderBlockEndWidth: '0px',
//                         borderBlockStartColor: 'rgb(255, 255, 255)',
//                         borderBlockStartStyle: 'none',
//                         borderBlockStartWidth: '0px',
//                         borderBottomColor: 'rgb(255, 255, 255)',
//                         borderBottomLeftRadius: '3px',
//                         borderBottomRightRadius: '3px',
//                         borderBottomStyle: 'none',
//                         borderBottomWidth: '0px',
//                         borderEndEndRadius: '3px',
//                         borderEndStartRadius: '3px',
//                         borderInlineEndColor: 'rgb(255, 255, 255)',
//                         borderInlineEndStyle: 'none',
//                         borderInlineEndWidth: '0px',
//                         borderInlineStartColor: 'rgb(255, 255, 255)',
//                         borderInlineStartStyle: 'none',
//                         borderInlineStartWidth: '0px',
//                         borderLeftColor: 'rgb(255, 255, 255)',
//                         borderLeftStyle: 'none',
//                         borderLeftWidth: '0px',
//                         borderRightColor: 'rgb(255, 255, 255)',
//                         borderRightStyle: 'none',
//                         borderRightWidth: '0px',
//                         borderTopColor: 'rgb(255, 255, 255)',
//                         borderTopStyle: 'none',
//                         borderTopWidth: '0px',
//                         bottom: '0px',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(255, 255, 255)',
//                         color: 'rgb(255, 255, 255)',
//                         columnRuleColor: 'rgb(255, 255, 255)',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '17px',
//                         inlineSize: '652.875px',
//                         insetBlockEnd: '0px',
//                         insetBlockStart: '0px',
//                         insetInlineEnd: '0px',
//                         insetInlineStart: '0px',
//                         left: '0px',
//                         lineHeight: '20.4px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(255, 255, 255)',
//                         overflowAnchor: 'none',
//                         paddingBlockEnd: '12px',
//                         paddingBlockStart: '16px',
//                         paddingBottom: '12px',
//                         paddingInlineEnd: '0px',
//                         paddingInlineStart: '12px',
//                         paddingLeft: '12px',
//                         paddingRight: '0px',
//                         paddingTop: '16px',
//                         position: 'relative',
//                         right: '0px',
//                         textAlign: 'left',
//                         textDecoration: 'none solid rgb(255, 255, 255)',
//                         textDecorationColor: 'rgb(255, 255, 255)',
//                         textEmphasisColor: 'rgb(255, 255, 255)',
//                         textSizeAdjust: '100%',
//                         top: '0px',
//                         transitionDelay: '0s, 0s, 0s, 0s, 0s',
//                         transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
//                         transitionProperty:
//                           'color, background-color, border-color, box-shadow, border-radius',
//                         transitionTimingFunction:
//                           'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(255, 255, 255)',
//                         WebkitTextStrokeColor: 'rgb(255, 255, 255)',
//                         width: '100%',
//                       }}
//                       classNameName={'accordion-button collapsed'}
//                       type={'button'}
//                       data-bs-toggle={'collapse'}
//                       data-bs-target={'#faq4'}
//                       aria-expanded={'false'}
//                       aria-controls={'faq4'}
//                     >
//                       <p
//                         style={{
//                           blockSize: '20.3984px',
//                           borderBlockEndColor: 'rgb(44, 44, 45)',
//                           borderBlockStartColor: 'rgb(44, 44, 45)',
//                           borderBottomColor: 'rgb(44, 44, 45)',
//                           borderInlineEndColor: 'rgb(44, 44, 45)',
//                           borderInlineStartColor: 'rgb(44, 44, 45)',
//                           borderLeftColor: 'rgb(44, 44, 45)',
//                           borderRightColor: 'rgb(44, 44, 45)',
//                           borderTopColor: 'rgb(44, 44, 45)',
//                           boxSizing: 'border-box',
//                           caretColor: 'rgb(44, 44, 45)',
//                           color: 'rgb(44, 44, 45)',
//                           columnRuleColor: 'rgb(44, 44, 45)',
//                           cursor: 'pointer',
//                           fontFamily: 'Manrope',
//                           fontSize: '17px',
//                           inlineSize: '263.336px',
//                           lineHeight: '20.4px',
//                           marginBlockEnd: '0px',
//                           marginBlockStart: '0px',
//                           marginBottom: '0px',
//                           marginLeft: 0,
//                           marginRight: 0,
//                           marginTop: '0px',
//                           minBlockSize: 'auto',
//                           minHeight: 'auto',
//                           minInlineSize: 'auto',
//                           minWidth: 'auto',
//                           outlineColor: 'rgb(44, 44, 45)',
//                           textAlign: 'left',
//                           textDecoration: 'none solid rgb(44, 44, 45)',
//                           textDecorationColor: 'rgb(44, 44, 45)',
//                           textEmphasisColor: 'rgb(44, 44, 45)',
//                           textSizeAdjust: '100%',
//                           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                           WebkitTextFillColor: 'rgb(44, 44, 45)',
//                           WebkitTextStrokeColor: 'rgb(44, 44, 45)',
//                         }}
//                       >
//                         {' '}
//                         Can I charge any EV with the Hicharge?
//                       </p>
//                     </button>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 blockSize: '257.594px',
//                 borderBlockEndColor: 'rgb(33, 37, 41)',
//                 borderBlockStartColor: 'rgb(33, 37, 41)',
//                 borderBottomColor: 'rgb(33, 37, 41)',
//                 borderInlineEndColor: 'rgb(33, 37, 41)',
//                 borderInlineStartColor: 'rgb(33, 37, 41)',
//                 borderLeftColor: 'rgb(33, 37, 41)',
//                 borderRightColor: 'rgb(33, 37, 41)',
//                 borderTopColor: 'rgb(33, 37, 41)',
//                 boxSizing: 'border-box',
//                 caretColor: 'rgb(33, 37, 41)',
//                 color: 'rgb(33, 37, 41)',
//                 columnRuleColor: 'rgb(33, 37, 41)',
//                 flexShrink: 0,
//                 fontFamily: 'Manrope',
//                 fontSize: '16px',
//                 inlineSize: '676.875px',
//                 lineHeight: '24px',
//                 marginLeft: 0,
//                 marginRight: 0,
//                 maxInlineSize: '100%',
//                 maxWidth: '100%',
//                 minBlockSize: 'auto',
//                 minHeight: 'auto',
//                 minInlineSize: 'auto',
//                 minWidth: 'auto',
//                 outlineColor: 'rgb(33, 37, 41)',
//                 paddingInlineEnd: '12px',
//                 paddingInlineStart: '12px',
//                 paddingLeft: '12px',
//                 paddingRight: '12px',
//                 textDecoration: 'none solid rgb(33, 37, 41)',
//                 textDecorationColor: 'rgb(33, 37, 41)',
//                 textEmphasisColor: 'rgb(33, 37, 41)',
//                 textSizeAdjust: '100%',
//                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                 WebkitTextFillColor: 'rgb(33, 37, 41)',
//                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                 width: '676.875px',
//                 height: '257.594px',
//               }}
//               classNameName={'col-md-6'}
//             >
//               <div
//                 style={{
//                   blockSize: '178.195px',
//                   borderBlockEndColor: 'rgb(33, 37, 41)',
//                   borderBlockStartColor: 'rgb(33, 37, 41)',
//                   borderBottomColor: 'rgb(33, 37, 41)',
//                   borderInlineEndColor: 'rgb(33, 37, 41)',
//                   borderInlineStartColor: 'rgb(33, 37, 41)',
//                   borderLeftColor: 'rgb(33, 37, 41)',
//                   borderRightColor: 'rgb(33, 37, 41)',
//                   borderTopColor: 'rgb(33, 37, 41)',
//                   boxSizing: 'border-box',
//                   caretColor: 'rgb(33, 37, 41)',
//                   color: 'rgb(33, 37, 41)',
//                   columnRuleColor: 'rgb(33, 37, 41)',
//                   fontFamily: 'Manrope',
//                   fontSize: '16px',
//                   inlineSize: '652.875px',
//                   lineHeight: '24px',
//                   marginLeft: 0,
//                   marginRight: 0,
//                   outlineColor: 'rgb(33, 37, 41)',
//                   textDecoration: 'none solid rgb(33, 37, 41)',
//                   textDecorationColor: 'rgb(33, 37, 41)',
//                   textEmphasisColor: 'rgb(33, 37, 41)',
//                   textSizeAdjust: '100%',
//                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                   WebkitTextFillColor: 'rgb(33, 37, 41)',
//                   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                 }}
//                 classNameName={'accordion'}
//                 id={'accordionExample2'}
//               >
//                 <div
//                   style={{
//                     blockSize: '49.3984px',
//                     borderBlockEndStyle: 'solid',
//                     borderBlockEndWidth: '1px',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomStyle: 'solid',
//                     borderBottomWidth: '1px',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '652.875px',
//                     lineHeight: '24px',
//                     marginBlockEnd: '15px',
//                     marginBottom: '15px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'accordion-item'}
//                 >
//                   <h2
//                     style={{
//                       blockSize: '48.3984px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '32px',
//                       fontWeight: 500,
//                       inlineSize: '652.875px',
//                       lineHeight: '38.4px',
//                       marginBlockEnd: '0px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0px',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                     classNameName={'accordion-header'}
//                     id={'faqheading1'}
//                   >
//                     <button
//                       style={{
//                         alignItems: 'center',
//                         appearance: 'button',
//                         backgroundColor: 'rgba(0, 0, 0, 0)',
//                         blockSize: '48.3984px',
//                         borderBlockEndColor: 'rgb(255, 255, 255)',
//                         borderBlockEndStyle: 'none',
//                         borderBlockEndWidth: '0px',
//                         borderBlockStartColor: 'rgb(255, 255, 255)',
//                         borderBlockStartStyle: 'none',
//                         borderBlockStartWidth: '0px',
//                         borderBottomColor: 'rgb(255, 255, 255)',
//                         borderBottomStyle: 'none',
//                         borderBottomWidth: '0px',
//                         borderInlineEndColor: 'rgb(255, 255, 255)',
//                         borderInlineEndStyle: 'none',
//                         borderInlineEndWidth: '0px',
//                         borderInlineStartColor: 'rgb(255, 255, 255)',
//                         borderInlineStartStyle: 'none',
//                         borderInlineStartWidth: '0px',
//                         borderLeftColor: 'rgb(255, 255, 255)',
//                         borderLeftStyle: 'none',
//                         borderLeftWidth: '0px',
//                         borderRightColor: 'rgb(255, 255, 255)',
//                         borderRightStyle: 'none',
//                         borderRightWidth: '0px',
//                         borderStartEndRadius: '3px',
//                         borderStartStartRadius: '3px',
//                         borderTopColor: 'rgb(255, 255, 255)',
//                         borderTopLeftRadius: '3px',
//                         borderTopRightRadius: '3px',
//                         borderTopStyle: 'none',
//                         borderTopWidth: '0px',
//                         bottom: '0px',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(255, 255, 255)',
//                         color: 'rgb(255, 255, 255)',
//                         columnRuleColor: 'rgb(255, 255, 255)',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '17px',
//                         inlineSize: '652.875px',
//                         insetBlockEnd: '0px',
//                         insetBlockStart: '0px',
//                         insetInlineEnd: '0px',
//                         insetInlineStart: '0px',
//                         left: '0px',
//                         lineHeight: '20.4px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(255, 255, 255)',
//                         overflowAnchor: 'none',
//                         paddingBlockEnd: '12px',
//                         paddingBlockStart: '16px',
//                         paddingBottom: '12px',
//                         paddingInlineEnd: '0px',
//                         paddingInlineStart: '12px',
//                         paddingLeft: '12px',
//                         paddingRight: '0px',
//                         paddingTop: '16px',
//                         position: 'relative',
//                         right: '0px',
//                         textAlign: 'left',
//                         textDecoration: 'none solid rgb(255, 255, 255)',
//                         textDecorationColor: 'rgb(255, 255, 255)',
//                         textEmphasisColor: 'rgb(255, 255, 255)',
//                         textSizeAdjust: '100%',
//                         top: '0px',
//                         transitionDelay: '0s, 0s, 0s, 0s, 0s',
//                         transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
//                         transitionProperty:
//                           'color, background-color, border-color, box-shadow, border-radius',
//                         transitionTimingFunction:
//                           'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(255, 255, 255)',
//                         WebkitTextStrokeColor: 'rgb(255, 255, 255)',
//                         width: '100%',
//                       }}
//                       classNameName={'accordion-button collapsed'}
//                       type={'button'}
//                       data-bs-toggle={'collapse'}
//                       data-bs-target={'#faq5'}
//                       aria-expanded={'true'}
//                       aria-controls={'faq5'}
//                     >
//                       <p
//                         style={{
//                           blockSize: '20.3984px',
//                           borderBlockEndColor: 'rgb(44, 44, 45)',
//                           borderBlockStartColor: 'rgb(44, 44, 45)',
//                           borderBottomColor: 'rgb(44, 44, 45)',
//                           borderInlineEndColor: 'rgb(44, 44, 45)',
//                           borderInlineStartColor: 'rgb(44, 44, 45)',
//                           borderLeftColor: 'rgb(44, 44, 45)',
//                           borderRightColor: 'rgb(44, 44, 45)',
//                           borderTopColor: 'rgb(44, 44, 45)',
//                           boxSizing: 'border-box',
//                           caretColor: 'rgb(44, 44, 45)',
//                           color: 'rgb(44, 44, 45)',
//                           columnRuleColor: 'rgb(44, 44, 45)',
//                           cursor: 'pointer',
//                           fontFamily: 'Manrope',
//                           fontSize: '17px',
//                           inlineSize: '377.914px',
//                           lineHeight: '20.4px',
//                           marginBlockEnd: '0px',
//                           marginBlockStart: '0px',
//                           marginBottom: '0px',
//                           marginLeft: 0,
//                           marginRight: 0,
//                           marginTop: '0px',
//                           minBlockSize: 'auto',
//                           minHeight: 'auto',
//                           minInlineSize: 'auto',
//                           minWidth: 'auto',
//                           outlineColor: 'rgb(44, 44, 45)',
//                           textAlign: 'left',
//                           textDecoration: 'none solid rgb(44, 44, 45)',
//                           textDecorationColor: 'rgb(44, 44, 45)',
//                           textEmphasisColor: 'rgb(44, 44, 45)',
//                           textSizeAdjust: '100%',
//                           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                           WebkitTextFillColor: 'rgb(44, 44, 45)',
//                           WebkitTextStrokeColor: 'rgb(44, 44, 45)',
//                         }}
//                       >
//                         How many EVs can be charged per day with Hicharge?
//                       </p>
//                     </button>
//                   </h2>
//                 </div>
//                 <div
//                   style={{
//                     blockSize: '49.3984px',
//                     borderBlockEndStyle: 'solid',
//                     borderBlockEndWidth: '1px',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomStyle: 'solid',
//                     borderBottomWidth: '1px',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '652.875px',
//                     lineHeight: '24px',
//                     marginBlockEnd: '15px',
//                     marginBottom: '15px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'accordion-item'}
//                 >
//                   <h2
//                     style={{
//                       blockSize: '48.3984px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '32px',
//                       fontWeight: 500,
//                       inlineSize: '652.875px',
//                       lineHeight: '38.4px',
//                       marginBlockEnd: '0px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0px',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                     classNameName={'accordion-header'}
//                     id={'faqheading6'}
//                   >
//                     <button
//                       style={{
//                         alignItems: 'center',
//                         appearance: 'button',
//                         backgroundColor: 'rgba(0, 0, 0, 0)',
//                         blockSize: '48.3984px',
//                         borderBlockEndColor: 'rgb(255, 255, 255)',
//                         borderBlockEndStyle: 'none',
//                         borderBlockEndWidth: '0px',
//                         borderBlockStartColor: 'rgb(255, 255, 255)',
//                         borderBlockStartStyle: 'none',
//                         borderBlockStartWidth: '0px',
//                         borderBottomColor: 'rgb(255, 255, 255)',
//                         borderBottomStyle: 'none',
//                         borderBottomWidth: '0px',
//                         borderInlineEndColor: 'rgb(255, 255, 255)',
//                         borderInlineEndStyle: 'none',
//                         borderInlineEndWidth: '0px',
//                         borderInlineStartColor: 'rgb(255, 255, 255)',
//                         borderInlineStartStyle: 'none',
//                         borderInlineStartWidth: '0px',
//                         borderLeftColor: 'rgb(255, 255, 255)',
//                         borderLeftStyle: 'none',
//                         borderLeftWidth: '0px',
//                         borderRightColor: 'rgb(255, 255, 255)',
//                         borderRightStyle: 'none',
//                         borderRightWidth: '0px',
//                         borderTopColor: 'rgb(255, 255, 255)',
//                         borderTopStyle: 'none',
//                         borderTopWidth: '0px',
//                         bottom: '0px',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(255, 255, 255)',
//                         color: 'rgb(255, 255, 255)',
//                         columnRuleColor: 'rgb(255, 255, 255)',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '17px',
//                         inlineSize: '652.875px',
//                         insetBlockEnd: '0px',
//                         insetBlockStart: '0px',
//                         insetInlineEnd: '0px',
//                         insetInlineStart: '0px',
//                         left: '0px',
//                         lineHeight: '20.4px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(255, 255, 255)',
//                         overflowAnchor: 'none',
//                         paddingBlockEnd: '12px',
//                         paddingBlockStart: '16px',
//                         paddingBottom: '12px',
//                         paddingInlineEnd: '0px',
//                         paddingInlineStart: '12px',
//                         paddingLeft: '12px',
//                         paddingRight: '0px',
//                         paddingTop: '16px',
//                         position: 'relative',
//                         right: '0px',
//                         textAlign: 'left',
//                         textDecoration: 'none solid rgb(255, 255, 255)',
//                         textDecorationColor: 'rgb(255, 255, 255)',
//                         textEmphasisColor: 'rgb(255, 255, 255)',
//                         textSizeAdjust: '100%',
//                         top: '0px',
//                         transitionDelay: '0s, 0s, 0s, 0s, 0s',
//                         transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
//                         transitionProperty:
//                           'color, background-color, border-color, box-shadow, border-radius',
//                         transitionTimingFunction:
//                           'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(255, 255, 255)',
//                         WebkitTextStrokeColor: 'rgb(255, 255, 255)',
//                         width: '100%',
//                       }}
//                       classNameName={'accordion-button collapsed'}
//                       type={'button'}
//                       data-bs-toggle={'collapse'}
//                       data-bs-target={'#faq6'}
//                       aria-expanded={'false'}
//                       aria-controls={'faq6'}
//                     >
//                       <p
//                         style={{
//                           blockSize: '20.3984px',
//                           borderBlockEndColor: 'rgb(44, 44, 45)',
//                           borderBlockStartColor: 'rgb(44, 44, 45)',
//                           borderBottomColor: 'rgb(44, 44, 45)',
//                           borderInlineEndColor: 'rgb(44, 44, 45)',
//                           borderInlineStartColor: 'rgb(44, 44, 45)',
//                           borderLeftColor: 'rgb(44, 44, 45)',
//                           borderRightColor: 'rgb(44, 44, 45)',
//                           borderTopColor: 'rgb(44, 44, 45)',
//                           boxSizing: 'border-box',
//                           caretColor: 'rgb(44, 44, 45)',
//                           color: 'rgb(44, 44, 45)',
//                           columnRuleColor: 'rgb(44, 44, 45)',
//                           cursor: 'pointer',
//                           fontFamily: 'Manrope',
//                           fontSize: '17px',
//                           inlineSize: '365.445px',
//                           lineHeight: '20.4px',
//                           marginBlockEnd: '0px',
//                           marginBlockStart: '0px',
//                           marginBottom: '0px',
//                           marginLeft: 0,
//                           marginRight: 0,
//                           marginTop: '0px',
//                           minBlockSize: 'auto',
//                           minHeight: 'auto',
//                           minInlineSize: 'auto',
//                           minWidth: 'auto',
//                           outlineColor: 'rgb(44, 44, 45)',
//                           textAlign: 'left',
//                           textDecoration: 'none solid rgb(44, 44, 45)',
//                           textDecorationColor: 'rgb(44, 44, 45)',
//                           textEmphasisColor: 'rgb(44, 44, 45)',
//                           textSizeAdjust: '100%',
//                           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                           WebkitTextFillColor: 'rgb(44, 44, 45)',
//                           WebkitTextStrokeColor: 'rgb(44, 44, 45)',
//                         }}
//                       >
//                         {' '}
//                         Can Hicharge operate without cellular connectivity?
//                       </p>
//                     </button>
//                   </h2>
//                 </div>
//                 <div
//                   style={{
//                     blockSize: '49.3984px',
//                     borderBlockEndStyle: 'solid',
//                     borderBlockEndWidth: '1px',
//                     borderBlockStartColor: 'rgb(33, 37, 41)',
//                     borderBottomStyle: 'solid',
//                     borderBottomWidth: '1px',
//                     borderInlineEndColor: 'rgb(33, 37, 41)',
//                     borderInlineStartColor: 'rgb(33, 37, 41)',
//                     borderLeftColor: 'rgb(33, 37, 41)',
//                     borderRightColor: 'rgb(33, 37, 41)',
//                     borderTopColor: 'rgb(33, 37, 41)',
//                     boxSizing: 'border-box',
//                     caretColor: 'rgb(33, 37, 41)',
//                     color: 'rgb(33, 37, 41)',
//                     columnRuleColor: 'rgb(33, 37, 41)',
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '652.875px',
//                     lineHeight: '24px',
//                     marginBlockEnd: '15px',
//                     marginBottom: '15px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     outlineColor: 'rgb(33, 37, 41)',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                   }}
//                   classNameName={'accordion-item'}
//                 >
//                   <h2
//                     style={{
//                       blockSize: '48.3984px',
//                       borderBlockEndColor: 'rgb(33, 37, 41)',
//                       borderBlockStartColor: 'rgb(33, 37, 41)',
//                       borderBottomColor: 'rgb(33, 37, 41)',
//                       borderInlineEndColor: 'rgb(33, 37, 41)',
//                       borderInlineStartColor: 'rgb(33, 37, 41)',
//                       borderLeftColor: 'rgb(33, 37, 41)',
//                       borderRightColor: 'rgb(33, 37, 41)',
//                       borderTopColor: 'rgb(33, 37, 41)',
//                       boxSizing: 'border-box',
//                       caretColor: 'rgb(33, 37, 41)',
//                       color: 'rgb(33, 37, 41)',
//                       columnRuleColor: 'rgb(33, 37, 41)',
//                       fontFamily: 'Playfair Display',
//                       fontSize: '32px',
//                       fontWeight: 500,
//                       inlineSize: '652.875px',
//                       lineHeight: '38.4px',
//                       marginBlockEnd: '0px',
//                       marginBlockStart: '0px',
//                       marginBottom: '0px',
//                       marginLeft: 0,
//                       marginRight: 0,
//                       marginTop: '0px',
//                       outlineColor: 'rgb(33, 37, 41)',
//                       textDecoration: 'none solid rgb(33, 37, 41)',
//                       textDecorationColor: 'rgb(33, 37, 41)',
//                       textEmphasisColor: 'rgb(33, 37, 41)',
//                       textSizeAdjust: '100%',
//                       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                       WebkitTextFillColor: 'rgb(33, 37, 41)',
//                       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//                     }}
//                     classNameName={'accordion-header'}
//                     id={'faqheading7'}
//                   >
//                     <button
//                       style={{
//                         alignItems: 'center',
//                         appearance: 'button',
//                         backgroundColor: 'rgba(0, 0, 0, 0)',
//                         blockSize: '48.3984px',
//                         borderBlockEndColor: 'rgb(255, 255, 255)',
//                         borderBlockEndStyle: 'none',
//                         borderBlockEndWidth: '0px',
//                         borderBlockStartColor: 'rgb(255, 255, 255)',
//                         borderBlockStartStyle: 'none',
//                         borderBlockStartWidth: '0px',
//                         borderBottomColor: 'rgb(255, 255, 255)',
//                         borderBottomLeftRadius: '3px',
//                         borderBottomRightRadius: '3px',
//                         borderBottomStyle: 'none',
//                         borderBottomWidth: '0px',
//                         borderEndEndRadius: '3px',
//                         borderEndStartRadius: '3px',
//                         borderInlineEndColor: 'rgb(255, 255, 255)',
//                         borderInlineEndStyle: 'none',
//                         borderInlineEndWidth: '0px',
//                         borderInlineStartColor: 'rgb(255, 255, 255)',
//                         borderInlineStartStyle: 'none',
//                         borderInlineStartWidth: '0px',
//                         borderLeftColor: 'rgb(255, 255, 255)',
//                         borderLeftStyle: 'none',
//                         borderLeftWidth: '0px',
//                         borderRightColor: 'rgb(255, 255, 255)',
//                         borderRightStyle: 'none',
//                         borderRightWidth: '0px',
//                         borderTopColor: 'rgb(255, 255, 255)',
//                         borderTopStyle: 'none',
//                         borderTopWidth: '0px',
//                         bottom: '0px',
//                         boxSizing: 'border-box',
//                         caretColor: 'rgb(255, 255, 255)',
//                         color: 'rgb(255, 255, 255)',
//                         columnRuleColor: 'rgb(255, 255, 255)',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         fontFamily: 'Playfair Display',
//                         fontSize: '17px',
//                         inlineSize: '652.875px',
//                         insetBlockEnd: '0px',
//                         insetBlockStart: '0px',
//                         insetInlineEnd: '0px',
//                         insetInlineStart: '0px',
//                         left: '0px',
//                         lineHeight: '20.4px',
//                         marginLeft: 0,
//                         marginRight: 0,
//                         outlineColor: 'rgb(255, 255, 255)',
//                         overflowAnchor: 'none',
//                         paddingBlockEnd: '12px',
//                         paddingBlockStart: '16px',
//                         paddingBottom: '12px',
//                         paddingInlineEnd: '0px',
//                         paddingInlineStart: '12px',
//                         paddingLeft: '12px',
//                         paddingRight: '0px',
//                         paddingTop: '16px',
//                         position: 'relative',
//                         right: '0px',
//                         textAlign: 'left',
//                         textDecoration: 'none solid rgb(255, 255, 255)',
//                         textDecorationColor: 'rgb(255, 255, 255)',
//                         textEmphasisColor: 'rgb(255, 255, 255)',
//                         textSizeAdjust: '100%',
//                         top: '0px',
//                         transitionDelay: '0s, 0s, 0s, 0s, 0s',
//                         transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
//                         transitionProperty:
//                           'color, background-color, border-color, box-shadow, border-radius',
//                         transitionTimingFunction:
//                           'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
//                         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                         WebkitTextFillColor: 'rgb(255, 255, 255)',
//                         WebkitTextStrokeColor: 'rgb(255, 255, 255)',
//                         width: '100%',
//                       }}
//                       classNameName={'accordion-button collapsed'}
//                       type={'button'}
//                       data-bs-toggle={'collapse'}
//                       data-bs-target={'#faq7'}
//                       aria-expanded={'false'}
//                       aria-controls={'faq7'}
//                     >
//                       <p
//                         style={{
//                           blockSize: '20.3984px',
//                           borderBlockEndColor: 'rgb(44, 44, 45)',
//                           borderBlockStartColor: 'rgb(44, 44, 45)',
//                           borderBottomColor: 'rgb(44, 44, 45)',
//                           borderInlineEndColor: 'rgb(44, 44, 45)',
//                           borderInlineStartColor: 'rgb(44, 44, 45)',
//                           borderLeftColor: 'rgb(44, 44, 45)',
//                           borderRightColor: 'rgb(44, 44, 45)',
//                           borderTopColor: 'rgb(44, 44, 45)',
//                           boxSizing: 'border-box',
//                           caretColor: 'rgb(44, 44, 45)',
//                           color: 'rgb(44, 44, 45)',
//                           columnRuleColor: 'rgb(44, 44, 45)',
//                           cursor: 'pointer',
//                           fontFamily: 'Manrope',
//                           fontSize: '17px',
//                           inlineSize: '287.031px',
//                           lineHeight: '20.4px',
//                           marginBlockEnd: '0px',
//                           marginBlockStart: '0px',
//                           marginBottom: '0px',
//                           marginLeft: 0,
//                           marginRight: 0,
//                           marginTop: '0px',
//                           minBlockSize: 'auto',
//                           minHeight: 'auto',
//                           minInlineSize: 'auto',
//                           minWidth: 'auto',
//                           outlineColor: 'rgb(44, 44, 45)',
//                           textAlign: 'left',
//                           textDecoration: 'none solid rgb(44, 44, 45)',
//                           textDecorationColor: 'rgb(44, 44, 45)',
//                           textEmphasisColor: 'rgb(44, 44, 45)',
//                           textSizeAdjust: '100%',
//                           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                           WebkitTextFillColor: 'rgb(44, 44, 45)',
//                           WebkitTextStrokeColor: 'rgb(44, 44, 45)',
//                         }}
//                       >
//                         {' '}
//                         How much ground space is required?
//                       </p>
//                     </button>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FFaq;

import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
const data = {
  // title: 'FAQ (How it works)',
  rows: [
    {
      title: 'What is an EV charging station?',
      content: (
        <p>
          An EV charging station is a device that supplies electric energy to
          recharge electric vehicles (EVs). There are several types of EV
          charging stations available, including Level 1, Level 2, and Level 3
          (DC fast charging) stations.
        </p>
      ),
    },
    {
      title: 'What are the different types of EV charging stations?',
      content: (
        <p>
          Level 1 charging stations use a standard 120-volt outlet and provide
          the slowest charging speed. Level 2 charging stations require a
          240-volt circuit and offer faster charging than Level 1. Level 3
          charging stations (also known as DC fast charging) use direct current
          and can charge a vehicle much faster than Level 1 or 2 stations.
        </p>
      ),
    },
    {
      title: 'How long does it take to charge an electric vehicle?',
      content: (
        <p>
          The time it takes to charge an electric vehicle depends on several
          factors, including the type of EV, the size of the battery, and the
          charging station used. Level 1 charging can take up to 20 hours, Level
          2 can take anywhere from 3-8 hours, and Level 3 (DC fast charging) can
          take as little as 20-30 minutes for an 80% charge.
        </p>
      ),
    },
    {
      title: 'How do I find an EV charging station?',
      content: (
        <p>
          here are several ways to find EV charging stations, including using an
          app like PlugShare or ChargePoint, checking the website of your EV
          manufacturer, or contacting your local utility company for information
          on charging stations in your area.
        </p>
      ),
    },
  ],
};
const data1 = {
  // title: 'FAQ (How it works)',
  rows: [
    {
      title: 'Can I install an EV charging station at my home?',
      content: (
        <p>
          Yes, you can install an EV charging station at your home. However,
          it&apos;s important to hire a licensed electrician to ensure the
          installation is safe and meets local building codes.
        </p>
      ),
    },
    {
      title: 'Can I charge my EV at any charging station?',
      content: (
        <p>
          Not all charging stations are compatible with all EVs. It&apos;s
          important to check the specifications of your EV to ensure it&apos;s
          compatible with the charging station you plan to use.
        </p>
      ),
    },
    {
      title: 'How many charging stations do I need for my business?',
      content: (
        <p>
          The number of charging stations you need for your business depends on
          several factors, including the size of your parking lot, the number of
          EVs in your area, and the charging needs of your customers. A
          professional EV charging station installer can help you determine the
          optimal number of charging stations for your business
        </p>
      ),
    },
    {
      title: 'Can I make money by selling electricity to EV drivers?',
      content: (
        <p>
          Yes, you can make money by selling electricity to EV drivers. Many
          businesses offer charging as a paid service or offer it for free to
          attract customers. Some EV charging stations also have the capability
          to track and bill customers for the electricity they use.
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: 'white',
  titleTextColor: '#ff5733',
  rowTitleColor: 'grey',
  rowContentColor: 'grey',
  // arrowColor: 'red',
};

const config = {
  animate: true,
  // arrowIcon: 'V',
  tabFocus: true,
};

const FFaq = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Grid
        container
        direction="row"
        style={{
          justifyItems: 'center',
          marginLeft: 42,
        }}
      >
        <Grid item>
          {' '}
          <Typography
            color="black"
            style={{
              color: 'green',
              fontWeight: '700',
              fontSize: 51,
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            {' '}
            |
          </Typography>{' '}
        </Grid>
        <Grid item>
          <Typography
            color="red"
            style={{
              color: 'rgb(33, 37, 41)',
              fontFamily: 'Playfair Display',
              fontSize: '28px',
              marginTop: 21,
              marginLeft: 21,
            }}
          >
            Frequently Asked Questions
          </Typography>{' '}
        </Grid>
      </Grid>
      <Container style={{ backgroundColor: '#fff', marginLeft: 51 }}>
        <div style={{}} />

        <div style={{ height: 21 }} />
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} lg={6}>
            <Faq data={data} styles={styles} config={config} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Faq data={data1} styles={styles} config={config} />
          </Grid>
        </Grid>
      </Container>
      <div style={{ height: 21 }} />
    </div>
  );
};

export default FFaq;
