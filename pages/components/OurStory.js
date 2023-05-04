import React from 'react';
import { Grid, Typography } from '@mui/material';

const OurStory = () => {
  return (
    <div>
      <Typography variant="h5" marginLeft={'21px'} marginTop={2}>
        Our Story
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6} lg={9}>
          <div
            style={{
              color: 'rgb(33, 37, 41)',
              fontFamily: 'Manrope',
              fontSize: '16px',
              inlineSize: '878.5px',
              lineHeight: '24px',
              marginLeft: 0,
              marginRight: 0,
              paddingInlineStart: '20px',
              paddingLeft: '20px',
            }}
          >
            <p
              style={{
                borderBlockEndColor: '#ff5733',
                borderBlockStartColor: '#ff5733',
                borderBottomColor: '#ff5733',
                borderInlineEndColor: '#ff5733',
                borderInlineStartColor: '#ff5733',
                borderLeftColor: '#ff5733',
                borderRightColor: '#ff5733',
                borderTopColor: '#ff5733',
                boxSizing: 'border-box',
                caretColor: '#ff5733',
                color: '#ff5733',
                columnRuleColor: '#ff5733',
                fontFamily: 'Manrope',
                fontSize: '17px',
                inlineSize: '858.5px',
                lineHeight: '25.5px',
                marginBlockStart: '0px',
                marginBottom: '1rem',
                marginLeft: 0,
                marginRight: 0,
                marginTop: '0px',
                outlineColor: '#ff5733',
                textDecoration: 'none solid #ff5733',
                textDecorationColor: '#ff5733',
                textEmphasisColor: '#ff5733',
                textSizeAdjust: '100%',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                WebkitTextFillColor: '#ff5733',
                WebkitTextStrokeColor: '#ff5733',
              }}
              className={'colorgreen'}
            >
              Changing the Way We Charge Electric Vehicles
            </p>
            <hr
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.28)',
                blockSize: '1px',
                color: 'rgb(33, 37, 41)',
                fontFamily: 'Manrope',
                fontSize: '16px',

                marginTop: '10px',
              }}
              className={'storyhr'}
            />

            <p
              style={{
                fontFamily: 'Manrope',
                fontSize: '17px',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                WebkitTextFillColor: 'rgba(255, 255, 255, 0.7)',
                WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.7)',
              }}
              className={'colorlightwhite'}
            >
              Access to Fast Charging is critical for large scale adoption of
              electric vehicles. Infrastructure bottlenecks limit fast charging
              deployments at scale.
              <br />
              Our objective is to simplify Fast Charging and make it more
              accessible for everyone.
              <br />
              We specialize in combining flexible energy storage systems with
              fast charging technology and intelligent software to mitigate
              infrastructure challenges and help unlock large scale deployment
              of Fast Charging.
              <br />
              With Hicharge we now help bring Fast Charging to consumers&apos;
              doorstep and make it easy and convenient to access when and where
              they need.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <img
            style={{
              height: '282px',
              width: 'auto',
              paddingRight: 51,
            }}
            src={
              'https://c8.alamy.com/comp/2A9051R/camouflage-ships-steel-ship-construction-moore-shibbuilding-co-oakland-calif-ss-fresno-requisitioned-hull-no-118-on-trial-trip-4026-x-53-x266-2A9051R.jpg'
            }
            className={'storyimg'}
            alt="storyimg"
          ></img>
        </Grid>
      </Grid>
    </div>
    // <div>
    //   <div
    //     style={{
    //       margin: 0,
    //       borderBlockEndColor: 'rgb(33, 37, 41)',
    //       borderBlockStartColor: 'rgb(33, 37, 41)',
    //       borderBottomColor: 'rgb(33, 37, 41)',
    //       borderInlineEndColor: 'rgb(33, 37, 41)',
    //       borderInlineStartColor: 'rgb(33, 37, 41)',
    //       borderLeftColor: 'rgb(33, 37, 41)',
    //       borderRightColor: 'rgb(33, 37, 41)',
    //       borderTopColor: 'rgb(33, 37, 41)',
    //       boxSizing: 'border-box',
    //       caretColor: 'rgb(33, 37, 41)',
    //       color: 'rgb(33, 37, 41)',
    //       columnRuleColor: 'rgb(33, 37, 41)',
    //       fontFamily: 'Manrope',
    //       fontSize: '16px',
    //       inlineSize: '1353.75px',
    //       lineHeight: '24px',
    //       outlineColor: 'rgb(33, 37, 41)',
    //       paddingInlineEnd: '12px',
    //       paddingInlineStart: '12px',
    //       paddingLeft: '12px',
    //       paddingRight: '12px',
    //       textDecoration: 'none solid rgb(33, 37, 41)',
    //       textDecorationColor: 'rgb(33, 37, 41)',
    //       textEmphasisColor: 'rgb(33, 37, 41)',
    //       textSizeAdjust: '100%',
    //       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //       WebkitTextFillColor: 'rgb(33, 37, 41)',
    //       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //     }}
    //     className={'container-fluid'}
    //   >
    //     <div
    //       style={{
    //         borderBlockEndColor: 'rgb(33, 37, 41)',
    //         borderBlockStartColor: 'rgb(33, 37, 41)',
    //         borderBottomColor: 'rgb(33, 37, 41)',
    //         borderInlineEndColor: 'rgb(33, 37, 41)',
    //         borderInlineStartColor: 'rgb(33, 37, 41)',
    //         borderLeftColor: 'rgb(33, 37, 41)',
    //         borderRightColor: 'rgb(33, 37, 41)',
    //         borderTopColor: 'rgb(33, 37, 41)',
    //         bottom: '303.914px',
    //         boxSizing: 'border-box',
    //         caretColor: 'rgb(33, 37, 41)',
    //         color: 'rgb(33, 37, 41)',
    //         columnRuleColor: 'rgb(33, 37, 41)',
    //         fontFamily: 'Manrope',
    //         fontSize: '16px',
    //         inlineSize: '177px',
    //         insetBlockEnd: '303.914px',
    //         insetBlockStart: '0px',
    //         insetInlineEnd: '1248px',
    //         insetInlineStart: '0px',
    //         left: '0px',
    //         lineHeight: '24px',
    //         marginLeft: 0,
    //         marginRight: 0,
    //         outlineColor: 'rgb(33, 37, 41)',
    //         position: 'absolute',
    //         right: '1248px',
    //         textDecoration: 'none solid rgb(33, 37, 41)',
    //         textDecorationColor: 'rgb(33, 37, 41)',
    //         textEmphasisColor: 'rgb(33, 37, 41)',
    //         textSizeAdjust: '100%',
    //         top: '0px',
    //         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //         WebkitTextFillColor: 'rgb(33, 37, 41)',
    //         WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //       }}
    //       className={'element1'}
    //     >
    //       <img
    //         style={{
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
    //           inlineSize: '141.594px',
    //           lineHeight: '24px',
    //           marginLeft: 0,
    //           marginRight: 0,
    //           outlineColor: 'rgb(33, 37, 41)',
    //           textDecoration: 'none solid rgb(33, 37, 41)',
    //           textDecorationColor: 'rgb(33, 37, 41)',
    //           textEmphasisColor: 'rgb(33, 37, 41)',
    //           textSizeAdjust: '100%',
    //           verticalAlign: 'middle',
    //           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //           WebkitTextFillColor: 'rgb(33, 37, 41)',
    //           WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //           width: 'auto',
    //           height: '153.586px',
    //         }}
    //         // src={'http://www.qyk.energy/assets/img/element1.png'}
    //         className={'elementimg1'}
    //         alt="elementimg1"
    //       ></img>
    //     </div>
    //     <div
    //       style={{
    //         alignItems: 'center',

    //         borderBlockEndColor: 'rgb(33, 37, 41)',
    //         borderBlockStartColor: 'rgb(33, 37, 41)',
    //         borderBottomColor: 'rgb(33, 37, 41)',
    //         borderInlineEndColor: 'rgb(33, 37, 41)',
    //         borderInlineStartColor: 'rgb(33, 37, 41)',
    //         borderLeftColor: 'rgb(33, 37, 41)',
    //         borderRightColor: 'rgb(33, 37, 41)',
    //         borderTopColor: 'rgb(33, 37, 41)',
    //         boxSizing: 'border-box',
    //         caretColor: 'rgb(33, 37, 41)',
    //         color: 'rgb(33, 37, 41)',
    //         columnRuleColor: 'rgb(33, 37, 41)',
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //         fontFamily: 'Manrope',
    //         fontSize: '16px',
    //         inlineSize: '1353.75px',
    //         lineHeight: '24px',
    //         marginInlineEnd: '-12px',
    //         marginInlineStart: '-12px',
    //         marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
    //         marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
    //         marginTop: 'calc(var(--bs-gutter-y) * -1)',
    //         outlineColor: 'rgb(33, 37, 41)',
    //         paddingBlockStart: '50px',
    //         paddingTop: '50px',
    //         textDecoration: 'none solid rgb(33, 37, 41)',
    //         textDecorationColor: 'rgb(33, 37, 41)',
    //         textEmphasisColor: 'rgb(33, 37, 41)',
    //         textSizeAdjust: '100%',
    //         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //         WebkitTextFillColor: 'rgb(33, 37, 41)',
    //         WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //       }}
    //       className={'row align-items-center commoncontainer'}
    //     >
    //       <div
    //         style={{
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
    //           flexShrink: 0,
    //           fontFamily: 'Manrope',
    //           fontSize: '16px',
    //           inlineSize: '902.5px',
    //           lineHeight: '24px',
    //           marginLeft: 0,
    //           marginRight: 0,
    //           maxInlineSize: '100%',
    //           maxWidth: '100%',
    //           minBlockSize: 'auto',
    //           minHeight: 'auto',
    //           minInlineSize: 'auto',
    //           minWidth: 'auto',
    //           outlineColor: 'rgb(33, 37, 41)',
    //           paddingInlineEnd: '12px',
    //           paddingInlineStart: '12px',
    //           paddingLeft: '12px',
    //           paddingRight: '12px',
    //           textDecoration: 'none solid rgb(33, 37, 41)',
    //           textDecorationColor: 'rgb(33, 37, 41)',
    //           textEmphasisColor: 'rgb(33, 37, 41)',
    //           textSizeAdjust: '100%',
    //           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //           WebkitTextFillColor: 'rgb(33, 37, 41)',
    //           WebkitTextStrokeColor: 'rgb(33, 37, 41)',

    //           height: '377.5px',
    //         }}
    //         className={'col-md-8'}
    //       >
    //         <p
    //           style={{
    //             borderBlockEndColor: 'rgb(255, 255, 255)',
    //             borderBlockStartColor: 'rgb(255, 255, 255)',
    //             borderBottomColor: 'rgb(255, 255, 255)',
    //             borderInlineEndColor: 'rgb(255, 255, 255)',
    //             borderInlineStartColor: 'rgb(255, 255, 255)',
    //             borderLeftColor: 'rgb(255, 255, 255)',
    //             borderRightColor: 'rgb(255, 255, 255)',
    //             borderTopColor: 'rgb(255, 255, 255)',
    //             boxSizing: 'border-box',
    //             caretColor: 'rgb(255, 255, 255)',
    //             color: 'rgb(255, 255, 255)',
    //             columnRuleColor: 'rgb(255, 255, 255)',
    //             fontFamily: 'Manrope',
    //             fontSize: '17px',
    //             inlineSize: '878.5px',
    //             lineHeight: '25.5px',
    //             marginBlockStart: '0px',
    //             marginBottom: '1rem',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             marginTop: '0px',
    //             outlineColor: 'rgb(255, 255, 255)',
    //             textDecoration: 'none solid rgb(255, 255, 255)',
    //             textDecorationColor: 'rgb(255, 255, 255)',
    //             textEmphasisColor: 'rgb(255, 255, 255)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(255, 255, 255)',
    //             WebkitTextStrokeColor: 'rgb(255, 255, 255)',
    //           }}
    //           className={'colorwhite'}
    //         >
    //           Our Story
    //         </p>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} lg={10}>
    //             <div
    //               style={{
    //                 borderBlockEndColor: 'rgb(33, 37, 41)',
    //                 borderBlockStartColor: 'rgb(33, 37, 41)',
    //                 borderBottomColor: 'rgb(33, 37, 41)',
    //                 borderInlineEndColor: 'rgb(33, 37, 41)',
    //                 borderInlineStartColor: '#ff5733',
    //                 borderInlineStartStyle: 'solid',
    //                 borderInlineStartWidth: '4px',
    //                 borderLeftColor: '#ff5733',
    //                 borderLeftStyle: 'solid',
    //                 borderLeftWidth: '4px',
    //                 borderRightColor: 'rgb(33, 37, 41)',
    //                 borderTopColor: 'rgb(33, 37, 41)',
    //                 boxSizing: 'border-box',
    //                 caretColor: 'rgb(33, 37, 41)',
    //                 color: 'rgb(33, 37, 41)',
    //                 columnRuleColor: 'rgb(33, 37, 41)',
    //                 fontFamily: 'Manrope',
    //                 fontSize: '16px',
    //                 inlineSize: '878.5px',
    //                 lineHeight: '24px',
    //                 marginLeft: 0,
    //                 marginRight: 0,
    //                 outlineColor: 'rgb(33, 37, 41)',
    //                 textDecoration: 'none solid rgb(33, 37, 41)',
    //                 textDecorationColor: 'rgb(33, 37, 41)',
    //                 textEmphasisColor: 'rgb(33, 37, 41)',
    //                 textSizeAdjust: '100%',
    //                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                 WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //               }}
    //               className={'vl'}
    //             >
    //               <div
    //                 style={{
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
    //                   inlineSize: '874.5px',
    //                   lineHeight: '24px',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   outlineColor: 'rgb(33, 37, 41)',
    //                   paddingInlineStart: '15px',
    //                   paddingLeft: '15px',
    //                   textDecoration: 'none solid rgb(33, 37, 41)',
    //                   textDecorationColor: 'rgb(33, 37, 41)',
    //                   textEmphasisColor: 'rgb(33, 37, 41)',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //                 }}
    //                 className={'vltext'}
    //               >
    //                 <img
    //                   style={{
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
    //                     inlineSize: '110px',
    //                     lineHeight: '24px',
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     outlineColor: 'rgb(33, 37, 41)',
    //                     textDecoration: 'none solid rgb(33, 37, 41)',
    //                     textDecorationColor: 'rgb(33, 37, 41)',
    //                     textEmphasisColor: 'rgb(33, 37, 41)',
    //                     textSizeAdjust: '100%',
    //                     verticalAlign: 'middle',
    //                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                     WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //                     width: 'auto',
    //                     height: '41px',
    //                   }}
    //                   src={'http://www.qyk.energy/assets/img/mojotext.png'}
    //                   alt="mojotext"
    //                 ></img>
    //               </div>
    //             </div>
    //             <div
    //               style={{
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
    //                 fontFamily: 'Manrope',
    //                 fontSize: '16px',
    //                 inlineSize: '878.5px',
    //                 lineHeight: '24px',
    //                 marginLeft: 0,
    //                 marginRight: 0,
    //                 outlineColor: 'rgb(33, 37, 41)',
    //                 paddingInlineStart: '20px',
    //                 paddingLeft: '20px',
    //                 textDecoration: 'none solid rgb(33, 37, 41)',
    //                 textDecorationColor: 'rgb(33, 37, 41)',
    //                 textEmphasisColor: 'rgb(33, 37, 41)',
    //                 textSizeAdjust: '100%',
    //                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                 WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //               }}
    //               className={'leftdiv'}
    //             >
    //               <p
    //                 style={{
    //                   borderBlockEndColor: '#ff5733',
    //                   borderBlockStartColor: '#ff5733',
    //                   borderBottomColor: '#ff5733',
    //                   borderInlineEndColor: '#ff5733',
    //                   borderInlineStartColor: '#ff5733',
    //                   borderLeftColor: '#ff5733',
    //                   borderRightColor: '#ff5733',
    //                   borderTopColor: '#ff5733',
    //                   boxSizing: 'border-box',
    //                   caretColor: '#ff5733',
    //                   color: '#ff5733',
    //                   columnRuleColor: '#ff5733',
    //                   fontFamily: 'Manrope',
    //                   fontSize: '17px',
    //                   inlineSize: '858.5px',
    //                   lineHeight: '25.5px',
    //                   marginBlockStart: '0px',
    //                   marginBottom: '1rem',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '0px',
    //                   outlineColor: '#ff5733',
    //                   textDecoration: 'none solid #ff5733',
    //                   textDecorationColor: '#ff5733',
    //                   textEmphasisColor: '#ff5733',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: '#ff5733',
    //                   WebkitTextStrokeColor: '#ff5733',
    //                 }}
    //                 className={'colorgreen'}
    //               >
    //                 Changing the Way We Charge Electric Vehicles
    //               </p>
    //               <hr
    //                 style={{
    //                   backgroundColor: 'rgba(255, 255, 255, 0.28)',
    //                   blockSize: '1px',
    //                   borderBlockEndColor: 'rgb(33, 37, 41)',
    //                   borderBlockEndStyle: 'none',
    //                   borderBlockEndWidth: '0px',
    //                   borderBlockStartColor: 'rgb(33, 37, 41)',
    //                   borderBlockStartStyle: 'none',
    //                   borderBlockStartWidth: '0px',
    //                   borderBottomColor: 'rgb(33, 37, 41)',
    //                   borderBottomStyle: 'none',
    //                   borderBottomWidth: '0px',
    //                   borderInlineEndColor: 'rgb(33, 37, 41)',
    //                   borderInlineEndStyle: 'none',
    //                   borderInlineEndWidth: '0px',
    //                   borderInlineStartColor: 'rgb(33, 37, 41)',
    //                   borderInlineStartStyle: 'none',
    //                   borderInlineStartWidth: '0px',
    //                   borderLeftColor: 'rgb(33, 37, 41)',
    //                   borderLeftStyle: 'none',
    //                   borderLeftWidth: '0px',
    //                   borderRightColor: 'rgb(33, 37, 41)',
    //                   borderRightStyle: 'none',
    //                   borderRightWidth: '0px',
    //                   borderTopColor: 'rgb(33, 37, 41)',
    //                   borderTopStyle: 'none',
    //                   borderTopWidth: '0px',
    //                   boxSizing: 'border-box',
    //                   caretColor: 'rgb(33, 37, 41)',
    //                   color: 'rgb(33, 37, 41)',
    //                   columnRuleColor: 'rgb(33, 37, 41)',
    //                   fontFamily: 'Manrope',
    //                   fontSize: '16px',
    //                   inlineSize: '815.57px',
    //                   lineHeight: '24px',
    //                   marginBlockEnd: '10px',
    //                   marginBlockStart: '10px',
    //                   marginBottom: '10px',
    //                   marginInlineEnd: '0px',
    //                   marginInlineStart: '0px',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '10px',
    //                   outlineColor: 'rgb(33, 37, 41)',
    //                   textDecoration: 'none solid rgb(33, 37, 41)',
    //                   textDecorationColor: 'rgb(33, 37, 41)',
    //                   textEmphasisColor: 'rgb(33, 37, 41)',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //                   width: '95%',
    //                 }}
    //                 className={'storyhr'}
    //               />

    //               <p
    //                 style={{
    //                   borderBlockEndColor: 'rgba(255, 255, 255, 0.7)',
    //                   borderBlockStartColor: 'rgba(255, 255, 255, 0.7)',
    //                   borderBottomColor: 'rgba(255, 255, 255, 0.7)',
    //                   borderInlineEndColor: 'rgba(255, 255, 255, 0.7)',
    //                   borderInlineStartColor: 'rgba(255, 255, 255, 0.7)',
    //                   borderLeftColor: 'rgba(255, 255, 255, 0.7)',
    //                   borderRightColor: 'rgba(255, 255, 255, 0.7)',
    //                   borderTopColor: 'rgba(255, 255, 255, 0.7)',
    //                   caretColor: 'rgba(255, 255, 255, 0.7)',
    //                   color: 'rgba(255, 255, 255, 0.7)',
    //                   columnRuleColor: 'rgba(255, 255, 255, 0.7)',
    //                   fontFamily: 'Manrope',
    //                   fontSize: '17px',
    //                   inlineSize: '858.5px',
    //                   lineHeight: '25.5px',
    //                   marginBlockStart: '0px',
    //                   marginBottom: '1rem',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '0px',
    //                   outlineColor: 'rgba(255, 255, 255, 0.7)',
    //                   textDecoration: 'none solid rgba(255, 255, 255, 0.7)',
    //                   textDecorationColor: 'rgba(255, 255, 255, 0.7)',
    //                   textEmphasisColor: 'rgba(255, 255, 255, 0.7)',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: 'rgba(255, 255, 255, 0.7)',
    //                   WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.7)',
    //                 }}
    //                 className={'colorlightwhite'}
    //               >
    //                 Access to Fast Charging is critical for large scale adoption
    //                 of electric vehicles. Infrastructure bottlenecks limit fast
    //                 charging deployments at scale.
    //                 <br />
    //                 Our objective is to simplify Fast Charging and make it more
    //                 accessible for everyone.
    //                 <br />
    //                 We specialize in combining flexible energy storage systems
    //                 with fast charging technology and intelligent software to
    //                 mitigate infrastructure challenges and help unlock large
    //                 scale deployment of Fast Charging.
    //                 <br />
    //                 With Hicharge we now help bring Fast Charging to consumers'
    //                 doorstep and make it easy and convenient to access when and
    //                 where they need.
    //               </p>
    //             </div>
    //           </Grid>
    //           <Grid item xs={12} lg={2}>
    //             <p style={{ color: '#fff' }}>hello</p>
    //             <p style={{ color: '#fff' }}>hello</p>
    //             <p style={{ color: '#fff' }}>hello</p>
    //             <p style={{ color: '#fff' }}>hello</p>
    //             {/* <img
    //               style={{
    //                 borderBlockEndColor: 'rgb(33, 37, 41)',
    //                 borderBlockStartColor: 'rgb(33, 37, 41)',
    //                 borderBottomColor: 'rgb(33, 37, 41)',
    //                 borderBottomLeftRadius: '8px',
    //                 borderBottomRightRadius: '8px',
    //                 borderEndEndRadius: '8px',
    //                 borderEndStartRadius: '8px',
    //                 borderInlineEndColor: 'rgb(33, 37, 41)',
    //                 borderInlineStartColor: 'rgb(33, 37, 41)',
    //                 borderLeftColor: 'rgb(33, 37, 41)',
    //                 borderRightColor: 'rgb(33, 37, 41)',
    //                 borderStartEndRadius: '8px',
    //                 borderStartStartRadius: '8px',
    //                 borderTopColor: 'rgb(33, 37, 41)',
    //                 borderTopLeftRadius: '8px',
    //                 borderTopRightRadius: '8px',
    //                 boxSizing: 'border-box',
    //                 caretColor: 'rgb(33, 37, 41)',
    //                 color: 'rgb(33, 37, 41)',
    //                 columnRuleColor: 'rgb(33, 37, 41)',
    //                 fontFamily: 'Manrope',
    //                 fontSize: '16px',
    //                 inlineSize: '427.25px',
    //                 lineHeight: '24px',
    //                 outlineColor: 'rgb(33, 37, 41)',
    //                 textAlign: 'center',
    //                 textDecoration: 'none solid rgb(33, 37, 41)',
    //                 textDecorationColor: 'rgb(33, 37, 41)',
    //                 textEmphasisColor: 'rgb(33, 37, 41)',
    //                 textSizeAdjust: '100%',
    //                 verticalAlign: 'middle',
    //                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                 WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //                 height: '282px',
    //                 width: 'auto',
    //               }}
    //               src={
    //                 'https://c8.alamy.com/comp/2A9051R/camouflage-ships-steel-ship-construction-moore-shibbuilding-co-oakland-calif-ss-fresno-requisitioned-hull-no-118-on-trial-trip-4026-x-53-x266-2A9051R.jpg'
    //               }
    //               className={'storyimg'}
    //               alt="storyimg"
    //             ></img> */}
    //           </Grid>
    //         </Grid>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default OurStory;

// <Grid item xs={12} lg={2}>
//                 <div
//                   style={{
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
//                     flexShrink: 0,
//                     fontFamily: 'Manrope',
//                     fontSize: '16px',
//                     inlineSize: '451.25px',
//                     lineHeight: '24px',
//                     marginLeft: 0,
//                     marginRight: 0,
//                     maxInlineSize: '100%',

//                     minBlockSize: 'auto',
//                     minHeight: 'auto',
//                     minInlineSize: 'auto',
//                     minWidth: 'auto',
//                     outlineColor: 'rgb(33, 37, 41)',
//                     paddingInlineEnd: '12px',
//                     paddingInlineStart: '12px',
//                     paddingLeft: '12px',
//                     paddingRight: '12px',
//                     textAlign: 'center',
//                     textDecoration: 'none solid rgb(33, 37, 41)',
//                     textDecorationColor: 'rgb(33, 37, 41)',
//                     textEmphasisColor: 'rgb(33, 37, 41)',
//                     textSizeAdjust: '100%',
//                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//                     WebkitTextFillColor: 'rgb(33, 37, 41)',
//                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',

//                     height: '282px',
//                   }}
//                   className={'col-md-4 text-center'}
//                 >

//                 </div>
//               </Grid>
