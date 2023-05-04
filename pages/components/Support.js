import { Grid, Typography, Container } from '@mui/material';
import React from 'react';

const Support = () => {
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
            Support
          </Typography>{' '}
        </Grid>
      </Grid>
      <Container style={{ marginLeft: 51 }}>
        <Grid container>
          <Grid item sx={12} lg={9}>
            <div>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    marginRight: { xs: 9, sm: 2, md: 0 },
                    marginBottom: {
                      xs: 2,
                      sm: 2,
                      md: 0,
                    },
                  }}
                  style={{
                    color: 'grey',
                    color: 'rgb(33, 37, 41)',
                    columnRuleColor: 'rgb(33, 37, 41)',
                    fontFamily: 'Playfair Display',
                    fontSize: '21px',
                  }}
                >
                  Our customer support team is available 24*7 to assist you with
                  any issue regarding the product.
                </Typography>
              </Grid>

              <div style={{ height: 12 }} />
              <Grid item xs={12}>
                <Typography
                  sx={{
                    marginRight: { xs: 9, sm: 2, md: 0 },
                  }}
                  style={{
                    color: 'grey',
                    color: 'rgb(33, 37, 41)',
                    columnRuleColor: 'rgb(33, 37, 41)',
                    fontFamily: 'Playfair Display',
                    fontSize: '21px',
                  }}
                >
                  You may email us at info@hicharge.in or+91 72490 96655 for
                  product related queries, order shipments, or any query
                  associated with the warranty of the product.
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid item sx={12} lg={3}>
            <img
              className="responsive"
              src="https://images.pexels.com/photos/14825005/pexels-photo-14825005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
    // <div style={{ backgroundColor: 'red' }}>
    //   <Grid container>
    //     <Grid item xs={12} lg={9}>
    //       <div style={{ height: '24px' }} />
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
    //           bottom: '-5002.73px',
    //           boxSizing: 'border-box',
    //           caretColor: 'rgb(33, 37, 41)',
    //           color: 'rgb(33, 37, 41)',
    //           columnRuleColor: 'rgb(33, 37, 41)',
    //           fontFamily: 'Manrope',
    //           fontSize: '16px',
    //           inlineSize: '177px',
    //           insetBlockEnd: '-5002.73px',
    //           insetBlockStart: '5676.15px',
    //           insetInlineEnd: '1248px',
    //           insetInlineStart: '0px',
    //           left: '0px',
    //           lineHeight: '24px',
    //           marginBlockStart: '-38px',
    //           marginLeft: 0,
    //           marginRight: 0,
    //           marginTop: '-38px',
    //           outlineColor: 'rgb(33, 37, 41)',
    //           position: 'absolute',
    //           right: '1248px',
    //           textDecoration: 'none solid rgb(33, 37, 41)',
    //           textDecorationColor: 'rgb(33, 37, 41)',
    //           textEmphasisColor: 'rgb(33, 37, 41)',
    //           textSizeAdjust: '100%',
    //           top: '5676.15px',
    //           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //           WebkitTextFillColor: 'rgb(33, 37, 41)',
    //           WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //         }}
    //         className={'element3'}
    //       ></div>
    //       <div
    //         style={{
    //           color: 'rgb(33, 37, 41)',
    //           fontFamily: 'Manrope',
    //           fontSize: '16px',
    //           paddingLeft: '12px',
    //           paddingRight: '12px',
    //         }}
    //       >
    //         <div
    //           style={{
    //             alignItems: 'center',
    //             color: 'rgb(33, 37, 41)',
    //             columnRuleColor: 'rgb(33, 37, 41)',
    //             display: 'flex',
    //             flexWrap: 'wrap',
    //             fontFamily: 'Manrope',
    //             fontSize: '16px',
    //           }}
    //           className={'row align-items-center'}
    //         >
    //           <div
    //             style={{
    //               fontFamily: 'Manrope',
    //               fontSize: '16px',
    //               inlineSize: '902.5px',
    //               lineHeight: '24px',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               maxInlineSize: '100%',
    //               maxWidth: '100%',
    //               minBlockSize: 'auto',
    //               minHeight: 'auto',
    //               minInlineSize: 'auto',
    //               minWidth: 'auto',
    //               outlineColor: 'rgb(33, 37, 41)',
    //               paddingInlineEnd: '12px',
    //               paddingInlineStart: '12px',
    //               paddingLeft: '12px',
    //               paddingRight: '12px',
    //               textDecoration: 'none solid rgb(33, 37, 41)',
    //               textDecorationColor: 'rgb(33, 37, 41)',
    //               textEmphasisColor: 'rgb(33, 37, 41)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(33, 37, 41)',
    //               WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //               width: '902.5px',
    //               height: '174.094px',
    //             }}
    //             className={'col-md-8'}
    //           >
    //             <div
    //               style={{
    //                 blockSize: '33.5938px',
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
    //                   blockSize: '33.5938px',
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
    //                 <h3
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
    //                     fontFamily: 'Playfair Display',
    //                     fontSize: '28px',
    //                     fontWeight: 500,
    //                     inlineSize: '859.5px',
    //                     lineHeight: '33.6px',
    //                     marginBlockEnd: '8px',
    //                     marginBlockStart: '0px',
    //                     marginBottom: '0.5rem',
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     marginTop: '0px',
    //                     outlineColor: 'rgb(33, 37, 41)',
    //                     textDecoration: 'none solid rgb(33, 37, 41)',
    //                     textDecorationColor: 'rgb(33, 37, 41)',
    //                     textEmphasisColor: 'rgb(33, 37, 41)',
    //                     textSizeAdjust: '100%',
    //                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                     WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //                   }}
    //                 >
    //                   <b
    //                     style={{
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
    //                       lineHeight: '33.6px',
    //                       marginLeft: 0,
    //                       marginRight: 0,
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
    //                     Support
    //                   </b>
    //                 </h3>
    //               </div>
    //             </div>
    //             <br
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
    //             />
    //             <Grid container>
    //               <Typography>
    //                 Our customer support team is available 24*7 to assist you
    //                 with any issue regarding the product.
    //               </Typography>
    //               <div style={{ height: 51 }} />
    //               <Typography>
    //                 You may email us at info@hicharge.in or+91 72490 96655 for
    //                 product related queries, order shipments, or any query
    //                 associated with the warranty of the product.
    //               </Typography>
    //             </Grid>
    //             {/* <div
    //               style={{
    //                 blockSize: '92.5px',
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
    //                   blockSize: '25.5px',
    //                   borderBlockEndColor: 'rgb(44, 44, 45)',
    //                   borderBlockStartColor: 'rgb(44, 44, 45)',
    //                   borderBottomColor: 'rgb(44, 44, 45)',
    //                   borderInlineEndColor: 'rgb(44, 44, 45)',
    //                   borderInlineStartColor: 'rgb(44, 44, 45)',
    //                   borderLeftColor: 'rgb(44, 44, 45)',
    //                   borderRightColor: 'rgb(44, 44, 45)',
    //                   borderTopColor: 'rgb(44, 44, 45)',
    //                   boxSizing: 'border-box',
    //                   caretColor: 'rgb(44, 44, 45)',
    //                   color: 'rgb(44, 44, 45)',
    //                   columnRuleColor: 'rgb(44, 44, 45)',
    //                   fontFamily: 'Manrope',
    //                   fontSize: '17px',
    //                   inlineSize: '858.5px',
    //                   lineHeight: '25.5px',
    //                   marginBlockStart: '0px',
    //                   marginBottom: '1rem',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '0px',
    //                   outlineColor: 'rgb(44, 44, 45)',
    //                   textDecoration: 'none solid rgb(44, 44, 45)',
    //                   textDecorationColor: 'rgb(44, 44, 45)',
    //                   textEmphasisColor: 'rgb(44, 44, 45)',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: 'rgb(44, 44, 45)',
    //                   WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //                 }}
    //               >
    //                 Our customer support team is{' '}
    //                 <span
    //                   style={{
    //                     borderBlockEndColor: '#ff5733',
    //                     borderBlockStartColor: '#ff5733',
    //                     borderBottomColor: '#ff5733',
    //                     borderInlineEndColor: '#ff5733',
    //                     borderInlineStartColor: '#ff5733',
    //                     borderLeftColor: '#ff5733',
    //                     borderRightColor: '#ff5733',
    //                     borderTopColor: '#ff5733',
    //                     boxSizing: 'border-box',
    //                     caretColor: '#ff5733',
    //                     color: '#ff5733',
    //                     columnRuleColor: '#ff5733',
    //                     fontFamily: 'Manrope',
    //                     fontSize: '17px',
    //                     lineHeight: '25.5px',
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     outlineColor: '#ff5733',
    //                     textDecoration: 'none solid #ff5733',
    //                     textDecorationColor: '#ff5733',
    //                     textEmphasisColor: '#ff5733',
    //                     textSizeAdjust: '100%',
    //                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                     WebkitTextFillColor: '#ff5733',
    //                     WebkitTextStrokeColor: '#ff5733',
    //                   }}
    //                   className={'colorgreen'}
    //                 >
    //                   available 24*7
    //                 </span>{' '}
    //                 to assist you with any issue regarding the product.{' '}
    //               </p>
    //               <p
    //                 style={{
    //                   blockSize: '51px',
    //                   borderBlockEndColor: 'rgb(44, 44, 45)',
    //                   borderBlockStartColor: 'rgb(44, 44, 45)',
    //                   borderBottomColor: 'rgb(44, 44, 45)',
    //                   borderInlineEndColor: 'rgb(44, 44, 45)',
    //                   borderInlineStartColor: 'rgb(44, 44, 45)',
    //                   borderLeftColor: 'rgb(44, 44, 45)',
    //                   borderRightColor: 'rgb(44, 44, 45)',
    //                   borderTopColor: 'rgb(44, 44, 45)',
    //                   boxSizing: 'border-box',
    //                   caretColor: 'rgb(44, 44, 45)',
    //                   color: 'rgb(44, 44, 45)',
    //                   columnRuleColor: 'rgb(44, 44, 45)',
    //                   fontFamily: 'Manrope',
    //                   fontSize: '17px',
    //                   inlineSize: '858.5px',
    //                   lineHeight: '25.5px',
    //                   marginBlockStart: '0px',
    //                   marginBottom: '1rem',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '0px',
    //                   outlineColor: 'rgb(44, 44, 45)',
    //                   textDecoration: 'none solid rgb(44, 44, 45)',
    //                   textDecorationColor: 'rgb(44, 44, 45)',
    //                   textEmphasisColor: 'rgb(44, 44, 45)',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: 'rgb(44, 44, 45)',
    //                   WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //                 }}
    //               >
    //                 You may email us at{' '}
    //                 <a
    //                   style={{
    //                     borderBlockEndColor: '#ff5733',
    //                     borderBlockStartColor: '#ff5733',
    //                     borderBottomColor: '#ff5733',
    //                     borderInlineEndColor: '#ff5733',
    //                     borderInlineStartColor: '#ff5733',
    //                     borderLeftColor: '#ff5733',
    //                     borderRightColor: '#ff5733',
    //                     borderTopColor: '#ff5733',
    //                     boxSizing: 'border-box',
    //                     caretColor: '#ff5733',
    //                     color: '#ff5733',
    //                     columnRuleColor: '#ff5733',
    //                     cursor: 'pointer',
    //                     fontFamily: 'Manrope',
    //                     fontSize: '17px',
    //                     lineHeight: '25.5px',
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     outlineColor: '#ff5733',
    //                     textDecoration: 'none',
    //                     textDecorationColor: '#ff5733',
    //                     textEmphasisColor: '#ff5733',
    //                     textSizeAdjust: '100%',
    //                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                     WebkitTextFillColor: '#ff5733',
    //                     WebkitTextStrokeColor: '#ff5733',
    //                   }}
    //                   href={'https://mailto:support@qyk.energy'}
    //                   className={'greenlink'}
    //                 >
    //                   info@hicharge.in
    //                 </a>{' '}
    //                 or
    //                 <a
    //                   style={{
    //                     borderBlockEndColor: '#ff5733',
    //                     borderBlockStartColor: '#ff5733',
    //                     borderBottomColor: '#ff5733',
    //                     borderInlineEndColor: '#ff5733',
    //                     borderInlineStartColor: '#ff5733',
    //                     borderLeftColor: '#ff5733',
    //                     borderRightColor: '#ff5733',
    //                     borderTopColor: '#ff5733',
    //                     boxSizing: 'border-box',
    //                     caretColor: '#ff5733',
    //                     color: '#ff5733',
    //                     columnRuleColor: '#ff5733',
    //                     cursor: 'pointer',
    //                     fontFamily: 'Manrope',
    //                     fontSize: '17px',
    //                     lineHeight: '25.5px',
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     outlineColor: '#ff5733',
    //                     textDecoration: 'none',
    //                     textDecorationColor: '#ff5733',
    //                     textEmphasisColor: '#ff5733',
    //                     textSizeAdjust: '100%',
    //                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                     WebkitTextFillColor: '#ff5733',
    //                     WebkitTextStrokeColor: '#ff5733',
    //                   }}
    //                   href={'tel:+917411876038'}
    //                   className={'greenlink'}
    //                 >
    //                   +91 72490 96655
    //                 </a>{' '}
    //                 for product related queries, order shipments, or any query
    //                 associated with the warranty of the product.
    //               </p>
    //             </div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} lg={3}>
    //       <div style={{ height: '24px' }} />

    //       <div style={{ height: '24px' }} />
    //     </Grid>
    //   </Grid>
    //   {/* <div
    //     style={{
    //       margin: 0,
    //       blockSize: '265.414px',
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
    //       inlineSize: '1425px',
    //       lineHeight: '24px',
    //       outlineColor: 'rgb(33, 37, 41)',
    //       paddingBlockStart: '50px',
    //       paddingTop: '50px',
    //       textDecoration: 'none solid rgb(33, 37, 41)',
    //       textDecorationColor: 'rgb(33, 37, 41)',
    //       textEmphasisColor: 'rgb(33, 37, 41)',
    //       textSizeAdjust: '100%',
    //       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //       WebkitTextFillColor: 'rgb(33, 37, 41)',
    //       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //     }}
    //     className={'commoncontainer'}
    //     id={'support'}
    //   ></div> */}
    // </div>
  );
};

export default Support;

// <div
// style={{
//   borderBlockEndColor: 'rgb(33, 37, 41)',
//   borderBlockStartColor: 'rgb(33, 37, 41)',
//   borderBottomColor: 'rgb(33, 37, 41)',
//   borderInlineEndColor: 'rgb(33, 37, 41)',
//   borderInlineStartColor: 'rgb(33, 37, 41)',
//   borderLeftColor: 'rgb(33, 37, 41)',
//   borderRightColor: 'rgb(33, 37, 41)',
//   borderTopColor: 'rgb(33, 37, 41)',
//   boxSizing: 'border-box',
//   caretColor: 'rgb(33, 37, 41)',
//   color: 'rgb(33, 37, 41)',
//   columnRuleColor: 'rgb(33, 37, 41)',
//   flexShrink: 0,
//   fontFamily: 'Manrope',
//   fontSize: '16px',
//   inlineSize: '451.25px',
//   lineHeight: '24px',
//   marginLeft: 0,
//   marginRight: 0,
//   maxInlineSize: '100%',
//   maxWidth: '100%',
//   minBlockSize: 'auto',
//   minHeight: 'auto',
//   minInlineSize: 'auto',
//   minWidth: 'auto',
//   outlineColor: 'rgb(33, 37, 41)',
//   paddingInlineEnd: '12px',
//   paddingInlineStart: '12px',
//   paddingLeft: '12px',
//   paddingRight: '12px',
//   textAlign: 'center',
//   textDecoration: 'none solid rgb(33, 37, 41)',
//   textDecorationColor: 'rgb(33, 37, 41)',
//   textEmphasisColor: 'rgb(33, 37, 41)',
//   textSizeAdjust: '100%',
//   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//   WebkitTextFillColor: 'rgb(33, 37, 41)',
//   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//   width: '451.25px',
//   height: '215.414px',
// }}
// className={'col-md-4 text-center'}
// >
// <img
//   alt="supportimg"
//   style={{
//     borderBlockEndColor: 'rgb(33, 37, 41)',
//     borderBlockStartColor: 'rgb(33, 37, 41)',
//     borderBottomColor: 'rgb(33, 37, 41)',
//     borderBottomLeftRadius: '8px',
//     borderBottomRightRadius: '8px',
//     borderEndEndRadius: '8px',
//     borderEndStartRadius: '8px',
//     borderInlineEndColor: 'rgb(33, 37, 41)',
//     borderInlineStartColor: 'rgb(33, 37, 41)',
//     borderLeftColor: 'rgb(33, 37, 41)',
//     borderRightColor: 'rgb(33, 37, 41)',
//     borderStartEndRadius: '8px',
//     borderStartStartRadius: '8px',
//     borderTopColor: 'rgb(33, 37, 41)',
//     borderTopLeftRadius: '8px',
//     borderTopRightRadius: '8px',
//     boxSizing: 'border-box',
//     caretColor: 'rgb(33, 37, 41)',
//     color: 'rgb(33, 37, 41)',
//     columnRuleColor: 'rgb(33, 37, 41)',
//     fontFamily: 'Manrope',
//     fontSize: '16px',
//     inlineSize: '427.25px',
//     lineHeight: '24px',
//     marginLeft: 0,
//     marginRight: 0,
//     outlineColor: 'rgb(33, 37, 41)',
//     textAlign: 'center',
//     textDecoration: 'none solid rgb(33, 37, 41)',
//     textDecorationColor: 'rgb(33, 37, 41)',
//     textEmphasisColor: 'rgb(33, 37, 41)',
//     textSizeAdjust: '100%',
//     verticalAlign: 'middle',
//     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
//     WebkitTextFillColor: 'rgb(33, 37, 41)',
//     WebkitTextStrokeColor: 'rgb(33, 37, 41)',
//     width: '100%',
//     height: '215.414px',
//   }}
//   src={'http://www.qyk.energy/assets/img/supportimg.jpg'}
//   className={'storyimg'}
// ></img>
// </div>
