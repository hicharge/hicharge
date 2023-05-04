import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const OurProducts = () => {
  return (
    <div style={product.container}>
      <h5 style={product.product}>Our Product</h5>
      <div style={product.divH} className={'vl'}>
        <h3
          style={{
            color: '#fff',
          }}
        >
          <b style={product.b}>Features</b>
        </h3>
      </div>
      <div style={{ height: 21 }} />
      <div style={{ marginLeft: 30 }}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div style={{}}>
              <Grid item>
                <div>
                  <div
                    style={product.productAlign}
                    className={'align hidden-xs-down'}
                  >
                    <img
                      style={product.imageIcon}
                      src={
                        'https://hicharge.in/admin/wp-content/uploads/2023/05/bulding.png'
                      }
                      className={'featureicon'}
                      alt="feature1"
                    ></img>
                  </div>
                  <div style={product.text} className={'text'}>
                    <p style={product.colorGreen} className={'colorgreen'}>
                      Quick Charging
                    </p>
                    <hr style={product.hr1} className={'greenhr'} />
                    <p
                      style={product.description}
                      className={'colorlightwhite'}
                    >
                      EV fast charging, a feature enables electric vehicles to
                      recharge their battery.
                    </p>
                  </div>
                </div>
              </Grid>
            </div>
            <div style={{ marginTop: 51 }}>
              {' '}
              <Grid item>
                <div>
                  <div
                    style={product.productAlign}
                    className={'align hidden-xs-down'}
                  >
                    <img
                      style={product.imageIcon}
                      src={
                        'https://hicharge.in/admin/wp-content/uploads/2023/05/fast-charge.png'
                      }
                      className={'featureicon'}
                      alt="feature1"
                    ></img>
                  </div>
                  <div style={product.text} className={'text'}>
                    <p style={product.colorGreen} className={'colorgreen'}>
                      Convenient Recharge
                    </p>
                    <hr style={product.hr1} className={'greenhr'} />
                    <p
                      style={product.description}
                      className={'colorlightwhite'}
                    >
                      It is possible to recharge an electric vehicle using any
                      existing power outlet.{' '}
                    </p>
                  </div>
                </div>
              </Grid>
            </div>
            <div style={{ marginTop: 51 }}>
              {' '}
              <Grid item xs={12}>
                <div>
                  <div
                    style={product.productAlign}
                    className={'align hidden-xs-down'}
                  >
                    <img
                      style={product.imageIcon}
                      src={
                        'https://hicharge.in/admin/wp-content/uploads/2023/05/flexibility.png'
                      }
                      className={'featureicon'}
                      alt="feature1"
                    ></img>
                  </div>
                  <div style={product.text} className={'text'}>
                    <p style={product.colorGreen} className={'colorgreen'}>
                      Mobile
                    </p>
                    <hr style={product.hr1} className={'greenhr'} />
                    <p
                      style={product.description}
                      className={'colorlightwhite'}
                    >
                      The EV charging station is designed to be fully mobile and
                      mounted on wheels, making it easy to move from one
                      location to another.{' '}
                    </p>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>

          {/* Secong column */}
          <Grid item xs={12} lg={4}>
            <div>
              <Grid container>
                <div>
                  <div
                    style={product.productAlign}
                    className={'align hidden-xs-down'}
                  >
                    <img
                      style={product.imageIcon}
                      src={
                        'https://hicharge.in/admin/wp-content/uploads/2023/05/smartphone.png'
                      }
                      className={'featureicon'}
                      alt="feature1"
                    ></img>
                  </div>
                  <div style={product.text} className={'text'}>
                    <p style={product.colorGreen} className={'colorgreen'}>
                      Software
                    </p>
                    <hr style={product.hr1} className={'greenhr'} />
                    <p
                      style={product.description}
                      className={'colorlightwhite'}
                    >
                      The charging system features an integrated software that
                      simplifies its operation and management{' '}
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: 51 }}>
                  {' '}
                  <Grid item>
                    <div>
                      <div
                        style={product.productAlign}
                        className={'align hidden-xs-down'}
                      >
                        <img
                          style={product.imageIcon}
                          src={
                            'https://hicharge.in/admin/wp-content/uploads/2023/05/car-battery.png'
                          }
                          className={'featureicon'}
                          alt="feature1"
                        ></img>
                      </div>
                      <div style={product.text} className={'text'}>
                        <p style={product.colorGreen} className={'colorgreen'}>
                          Battery powered
                        </p>
                        <hr style={product.hr1} className={'greenhr'} />
                        <p
                          style={product.description}
                          className={'colorlightwhite'}
                        >
                          Efficient energy storage is achieved through the use
                          of powerful lithium-ion batteries.
                        </p>
                      </div>
                    </div>
                  </Grid>
                </div>
                <div style={{ marginTop: 51 }}>
                  {' '}
                  <Grid item>
                    <div>
                      <div
                        style={product.productAlign}
                        className={'align hidden-xs-down'}
                      >
                        <img
                          style={product.imageIcon}
                          src={
                            'https://hicharge.in/admin/wp-content/uploads/2023/05/repairing-service.png'
                          }
                          className={'featureicon'}
                          alt="feature1"
                        ></img>
                      </div>
                      <div style={product.text} className={'text'}>
                        <p style={product.colorGreen} className={'colorgreen'}>
                          Customizable{' '}
                        </p>
                        <hr style={product.hr1} className={'greenhr'} />
                        <p
                          style={product.description}
                          className={'colorlightwhite'}
                        >
                          Select the charger (GB/T or CCS) and the appropriate
                          core length that suits your needs.
                        </p>
                      </div>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
          </Grid>

          {/* Image */}
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                alignSelf: 'center',
                marginLeft: '15%',
              }}
              lg={{
                marginLeft: '10%',
              }}
            >
              <img
                sx={
                  {
                    // marginLeft: '50%',
                  }
                }
                lg={
                  {
                    // marginLeft: '20%',
                  }
                }
                style={{
                  width: '251px',
                  height: 'auto',
                }}
                src={
                  'https://hicharge.in/admin/wp-content/uploads/2023/05/30kwnew-removebg-preview.png'
                }
                className={'featureimg'}
                alt="My-project"
              ></img>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OurProducts;

const product = {
  product: {
    fontFamily: 'Manrope',
    fontSize: '21px',
    marginBottom: '1rem',
    marginLeft: 12,
  },
  container: {
    margin: 9,
    backgroundColor: 'black',
  },
  b: {
    fontFamily: 'Playfair Display',
    fontSize: '28px',
    color: '#fff',
    marginLeft: 12,
  },
  divH: {
    borderLeftColor: '#ff5733',
    borderLeftStyle: 'solid',
    borderLeftWidth: '4px',
    borderRightColor: 'rgb(33, 37, 41)',
    borderTopColor: 'rgb(33, 37, 41)',
    boxSizing: 'border-box',

    color: 'rgb(33, 37, 41)',

    fontFamily: 'Manrope',
    fontSize: '16px',
    marginLeft: 12,
  },
  fastcharging: {
    fontFamily: 'Manrope',
    fontSize: '17px',
    color: '#ff5733',
  },
  hr: {
    backgroundColor: '#ff5733',
    blockSize: '1px',
    borderBlockEndColor: 'rgb(33, 37, 41)',
    borderBlockEndStyle: 'none',
    borderBlockEndWidth: '0px',
    borderBlockStartColor: 'rgb(33, 37, 41)',
    borderBlockStartStyle: 'none',
    borderBlockStartWidth: '0px',
    borderBottomColor: 'rgb(33, 37, 41)',
    borderBottomStyle: 'none',
    borderBottomWidth: '0px',
    borderInlineEndColor: 'rgb(33, 37, 41)',
    borderInlineEndStyle: 'none',
    borderInlineEndWidth: '0px',
    borderInlineStartColor: 'rgb(33, 37, 41)',
    borderInlineStartStyle: 'none',
    borderInlineStartWidth: '0px',
    borderLeftColor: 'rgb(33, 37, 41)',
    borderLeftStyle: 'none',
    borderLeftWidth: '0px',
    borderRightColor: 'rgb(33, 37, 41)',
    borderRightStyle: 'none',
    borderRightWidth: '0px',
    borderTopColor: 'rgb(33, 37, 41)',
    borderTopStyle: 'none',
    borderTopWidth: '0px',
    boxSizing: 'border-box',
    caretColor: 'rgb(33, 37, 41)',
    color: 'rgb(33, 37, 41)',
    columnRuleColor: 'rgb(33, 37, 41)',
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '251px',
    lineHeight: '24px',
    listStyleType: 'none',
    marginBlockEnd: '10px',
    marginBlockStart: '10px',
    marginBottom: '10px',
    marginInlineEnd: '0px',
    marginInlineStart: '0px',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '10px',
    outlineColor: 'rgb(33, 37, 41)',
    textAlign: 'left',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    width: '251px',
  },
  p: {
    fontFamily: 'Manrope',
    fontSize: '17px',
  },
  description: {
    borderBlockEndColor: 'rgba(255, 255, 255, 0.7)',
    borderBlockStartColor: 'rgba(255, 255, 255, 0.7)',
    borderBottomColor: 'rgba(255, 255, 255, 0.7)',
    borderInlineEndColor: 'rgba(255, 255, 255, 0.7)',
    borderInlineStartColor: 'rgba(255, 255, 255, 0.7)',
    borderLeftColor: 'rgba(255, 255, 255, 0.7)',
    borderRightColor: 'rgba(255, 255, 255, 0.7)',
    borderTopColor: 'rgba(255, 255, 255, 0.7)',
    boxSizing: 'border-box',
    caretColor: 'rgba(255, 255, 255, 0.7)',
    color: 'rgba(255, 255, 255, 0.7)',
    columnRuleColor: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Manrope',
    fontSize: '17px',
    inlineSize: '277.688px',
    lineHeight: '25.5px',
    listStyleType: 'none',
    marginBlockEnd: '0px',
    marginBlockStart: '0px',
    marginBottom: '0px',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '0px',
    outlineColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
    textDecoration: 'none solid rgba(255, 255, 255, 0.7)',
    textDecorationColor: 'rgba(255, 255, 255, 0.7)',
    textEmphasisColor: 'rgba(255, 255, 255, 0.7)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgba(255, 255, 255, 0.7)',
    WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.7)',
    width: '75%',
  },
  hr1: {
    backgroundColor: '#ff5733',
    blockSize: '1px',
    borderBlockEndColor: 'rgb(33, 37, 41)',
    borderBlockEndStyle: 'none',
    borderBlockEndWidth: '0px',
    borderBlockStartColor: 'rgb(33, 37, 41)',
    borderBlockStartStyle: 'none',
    borderBlockStartWidth: '0px',
    borderBottomColor: 'rgb(33, 37, 41)',
    borderBottomStyle: 'none',
    borderBottomWidth: '0px',
    borderInlineEndColor: 'rgb(33, 37, 41)',
    borderInlineEndStyle: 'none',
    borderInlineEndWidth: '0px',
    borderInlineStartColor: 'rgb(33, 37, 41)',
    borderInlineStartStyle: 'none',
    borderInlineStartWidth: '0px',
    borderLeftColor: 'rgb(33, 37, 41)',
    borderLeftStyle: 'none',
    borderLeftWidth: '0px',
    borderRightColor: 'rgb(33, 37, 41)',
    borderRightStyle: 'none',
    borderRightWidth: '0px',
    borderTopColor: 'rgb(33, 37, 41)',
    borderTopStyle: 'none',
    borderTopWidth: '0px',
    boxSizing: 'border-box',
    caretColor: 'rgb(33, 37, 41)',
    color: 'rgb(33, 37, 41)',
    columnRuleColor: 'rgb(33, 37, 41)',
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '251px',
    lineHeight: '24px',
    listStyleType: 'none',
    marginBlockEnd: '10px',
    marginBlockStart: '10px',
    marginBottom: '10px',
    marginInlineEnd: '0px',
    marginInlineStart: '0px',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '10px',
    outlineColor: 'rgb(33, 37, 41)',
    textAlign: 'left',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    width: '251px',
  },
  colorGreen: {
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
    inlineSize: '277.688px',
    lineHeight: '25.5px',
    listStyleType: 'none',
    marginBlockEnd: '0px',
    marginBlockStart: '0px',
    marginBottom: '0px',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '0px',
    outlineColor: '#ff5733',
    textAlign: 'left',
    textDecoration: 'none solid #ff5733',
    textDecorationColor: '#ff5733',
    textEmphasisColor: '#ff5733',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: '#ff5733',
    WebkitTextStrokeColor: '#ff5733',
    width: '75%',
  },
  text: {
    borderBlockEndColor: 'rgb(33, 37, 41)',
    borderBlockStartColor: 'rgb(33, 37, 41)',
    borderBottomColor: 'rgb(33, 37, 41)',
    borderInlineEndColor: 'rgb(33, 37, 41)',
    borderInlineStartColor: 'rgb(33, 37, 41)',
    borderLeftColor: 'rgb(33, 37, 41)',
    borderRightColor: 'rgb(33, 37, 41)',
    borderTopColor: 'rgb(33, 37, 41)',
    boxSizing: 'border-box',
    caretColor: 'rgb(33, 37, 41)',
    color: 'rgb(33, 37, 41)',
    columnRuleColor: 'rgb(33, 37, 41)',
    display: 'table-cell',
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '387.25px',
    lineHeight: '24px',
    listStyleType: 'none',
    marginLeft: 0,
    marginRight: 0,
    outlineColor: 'rgb(33, 37, 41)',
    paddingInlineStart: '17px',
    paddingLeft: '17px',
    textAlign: 'left',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
  },
  imageIcon: {
    borderBlockEndColor: 'rgb(33, 37, 41)',
    borderBlockStartColor: 'rgb(33, 37, 41)',
    borderBottomColor: 'rgb(33, 37, 41)',
    borderInlineEndColor: 'rgb(33, 37, 41)',
    borderInlineStartColor: 'rgb(33, 37, 41)',
    borderLeftColor: 'rgb(33, 37, 41)',
    borderRightColor: 'rgb(33, 37, 41)',
    borderTopColor: 'rgb(33, 37, 41)',
    boxSizing: 'border-box',
    caretColor: 'rgb(33, 37, 41)',
    color: 'rgb(33, 37, 41)',
    columnRuleColor: 'rgb(33, 37, 41)',
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '40px',
    lineHeight: '24px',
    listStyleType: 'none',
    marginLeft: 0,
    marginRight: 0,
    outlineColor: 'rgb(33, 37, 41)',
    textAlign: 'left',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    width: '40px',
    height: '40px',
  },
  productAlign: {
    borderBlockEndColor: 'rgb(33, 37, 41)',
    borderBlockStartColor: 'rgb(33, 37, 41)',
    borderBottomColor: 'rgb(33, 37, 41)',
    borderInlineEndColor: 'rgb(33, 37, 41)',
    borderInlineStartColor: 'rgb(33, 37, 41)',
    borderLeftColor: 'rgb(33, 37, 41)',
    borderRightColor: 'rgb(33, 37, 41)',
    borderTopColor: 'rgb(33, 37, 41)',
    boxSizing: 'border-box',
    caretColor: 'rgb(33, 37, 41)',
    color: 'rgb(33, 37, 41)',
    columnRuleColor: 'rgb(33, 37, 41)',
    display: 'table-cell',
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '40px',
    lineHeight: '24px',
    listStyleType: 'none',
    marginLeft: 0,
    marginRight: 0,
    outlineColor: 'rgb(33, 37, 41)',
    textAlign: 'left',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
  },
};
