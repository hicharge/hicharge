import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const styles = {
  container: {
    margin: 0,
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
    inlineSize: '1353.75px',
    lineHeight: '24px',
    outlineColor: 'rgb(33, 37, 41)',
    paddingInlineEnd: '12px',
    paddingInlineStart: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    transitionDuration: '1s',
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    width: '1353.75px',
  },
  element2: {
    borderBlockEndColor: 'rgb(33, 37, 41)',
    borderBlockStartColor: 'rgb(33, 37, 41)',
    borderBottomColor: 'rgb(33, 37, 41)',
    borderInlineEndColor: 'rgb(33, 37, 41)',
    borderInlineStartColor: 'rgb(33, 37, 41)',
    borderLeftColor: 'rgb(33, 37, 41)',
    borderRightColor: 'rgb(33, 37, 41)',
    borderTopColor: 'rgb(33, 37, 41)',
    bottom: '48.2031px',
    boxSizing: 'border-box',
    caretColor: 'rgb(33, 37, 41)',
    color: 'rgb(33, 37, 41)',
    columnRuleColor: 'rgb(33, 37, 41)',
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '161px',
    insetBlockEnd: '48.2031px',
    insetBlockStart: '0px',
    insetInlineEnd: '-66px',
    insetInlineStart: '1258.75px',
    left: '1258.75px',
    lineHeight: '24px',
    marginBlockStart: '550px',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '550px',
    outlineColor: 'rgb(33, 37, 41)',
    position: 'absolute',
    right: '-66px',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    top: '0px',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
  },
  image: {
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
    inlineSize: '128.797px',
    lineHeight: '24px',
    marginLeft: 0,
    marginRight: 0,
    outlineColor: 'rgb(33, 37, 41)',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    width: '80%',
    height: '162.391px',
  },
  img: {
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
    marginLeft: 0,
    marginRight: 0,
    outlineColor: 'rgb(33, 37, 41)',
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
  commonContainer: {
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
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '1353.75px',
    lineHeight: '24px',
    marginInlineEnd: '-12px',
    marginInlineStart: '-12px',
    marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
    marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
    marginTop: 'calc(var(--bs-gutter-y) * -1)',
    outlineColor: 'rgb(33, 37, 41)',
    paddingBlockStart: '50px',
    paddingTop: '50px',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
  },
  para: {
    borderBlockEndColor: 'rgb(44, 44, 45)',
    borderBlockStartColor: 'rgb(44, 44, 45)',
    borderBottomColor: 'rgb(44, 44, 45)',
    borderInlineEndColor: 'rgb(44, 44, 45)',
    borderInlineStartColor: 'rgb(44, 44, 45)',
    borderLeftColor: 'rgb(44, 44, 45)',
    borderRightColor: 'rgb(44, 44, 45)',
    borderTopColor: 'rgb(44, 44, 45)',
    boxSizing: 'border-box',
    caretColor: 'rgb(44, 44, 45)',
    color: 'rgb(44, 44, 45)',
    columnRuleColor: 'rgb(44, 44, 45)',
    fontFamily: 'Manrope',
    fontSize: '17px',
    inlineSize: '336.461px',
    lineHeight: '25.5px',
    marginBlockStart: '0px',
    marginBottom: '1rem',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '0px',
    outlineColor: 'rgb(44, 44, 45)',
    textDecoration: 'none solid rgb(44, 44, 45)',
    textDecorationColor: 'rgb(44, 44, 45)',
    textEmphasisColor: 'rgb(44, 44, 45)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(44, 44, 45)',
    WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    width: '80%',
  },
  para9: {
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
    fontWeight: 600,
    inlineSize: '336.461px',
    lineHeight: '25.5px',
    marginBlockEnd: '8px',
    marginBlockStart: '8px',
    marginBottom: '8px',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '8px',
    outlineColor: '#ff5733',
    textDecoration: 'none solid #ff5733',
    textDecorationColor: '#ff5733',
    textEmphasisColor: '#ff5733',
    textSizeAdjust: '100%',
    textTransform: 'uppercase',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: '#ff5733',
    WebkitTextStrokeColor: '#ff5733',
    width: '80%',
  },
  colMd4: {
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
    flexShrink: 0,
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '444.578px',
    lineHeight: '24px',
    marginBlockEnd: '24px',
    marginBottom: '1.5rem !important',
    marginLeft: 0,
    marginRight: 0,
    maxInlineSize: '100%',
    maxWidth: '100%',
    minBlockSize: 'auto',
    minHeight: 'auto',
    minInlineSize: 'auto',
    minWidth: 'auto',
    outlineColor: 'rgb(33, 37, 41)',
    paddingInlineEnd: '12px',
    paddingInlineStart: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    width: '444.578px',
    height: '174px',
  },
  description: {
    borderBlockEndColor: 'rgb(44, 44, 45)',
    borderBlockStartColor: 'rgb(44, 44, 45)',
    borderBottomColor: 'rgb(44, 44, 45)',
    borderInlineEndColor: 'rgb(44, 44, 45)',
    borderInlineStartColor: 'rgb(44, 44, 45)',
    borderLeftColor: 'rgb(44, 44, 45)',
    borderRightColor: 'rgb(44, 44, 45)',
    borderTopColor: 'rgb(44, 44, 45)',
    boxSizing: 'border-box',
    caretColor: 'rgb(44, 44, 45)',
    color: 'rgb(44, 44, 45)',
    columnRuleColor: 'rgb(44, 44, 45)',
    fontFamily: 'Manrope',
    fontSize: '17px',
    inlineSize: '336.461px',
    lineHeight: '25.5px',
    marginBlockStart: '0px',
    marginBottom: '1rem',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '0px',
    outlineColor: 'rgb(44, 44, 45)',
    textDecoration: 'none solid rgb(44, 44, 45)',
    textDecorationColor: 'rgb(44, 44, 45)',
    textEmphasisColor: 'rgb(44, 44, 45)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(44, 44, 45)',
    WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    width: '80%',
  },
  colmd4ml4: {
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
    flexShrink: 0,
    fontFamily: 'Manrope',
    fontSize: '16px',
    inlineSize: '444.578px',
    lineHeight: '24px',
    marginBlockEnd: '24px',
    marginBottom: '1.5rem !important',
    marginLeft: 0,
    marginRight: 0,
    maxInlineSize: '100%',
    maxWidth: '100%',
    minBlockSize: 'auto',
    minHeight: 'auto',
    minInlineSize: 'auto',
    minWidth: 'auto',
    outlineColor: 'rgb(33, 37, 41)',
    paddingInlineEnd: '12px',
    paddingInlineStart: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
    textDecoration: 'none solid rgb(33, 37, 41)',
    textDecorationColor: 'rgb(33, 37, 41)',
    textEmphasisColor: 'rgb(33, 37, 41)',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTextFillColor: 'rgb(33, 37, 41)',
    WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    width: '444.578px',
    height: '199.5px',
  },
};

const Benifits = () => {
  return (
    <Box style={{ backgroundColor: '#fff', marginBottom: 21 }}>
      <Grid container>
        <Grid item sx={12} lg={8}>
          <Typography
            sx={{
              typography: { lg: 'h3', xs: 'h5' },
            }}
            lg={{}}
            color="black"
            fontFamily="Playfair Display"
            mt={3}
            ml={3}
          >
            Benefits
          </Typography>
        </Grid>
      </Grid>
      <Container
        disableGutters
        backgroundColor="#fff"
        maxWidth={false}
        style={{ margin: 21 }}
      >
        <Grid container direction="row">
          <Grid item xs={12} md={4}>
            <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
              <img
                style={styles.img}
                src={'http://www.qyk.energy/assets/img/benefit1.png'}
                className={'benefiticon'}
                alt="benefiticon"
              ></img>
              <p style={styles.para9} className={'benefitheading'}>
                Infrastructure light
              </p>
              <p
                style={{
                  borderBlockEndColor: 'rgb(44, 44, 45)',
                  borderBlockStartColor: 'rgb(44, 44, 45)',
                  borderBottomColor: 'rgb(44, 44, 45)',
                  borderInlineEndColor: 'rgb(44, 44, 45)',
                  borderInlineStartColor: 'rgb(44, 44, 45)',
                  borderLeftColor: 'rgb(44, 44, 45)',
                  borderRightColor: 'rgb(44, 44, 45)',
                  borderTopColor: 'rgb(44, 44, 45)',
                  boxSizing: 'border-box',
                  caretColor: 'rgb(44, 44, 45)',
                  color: 'rgb(44, 44, 45)',
                  columnRuleColor: 'rgb(44, 44, 45)',
                  fontFamily: 'Manrope',
                  fontSize: '17px',
                  inlineSize: '336.461px',
                  lineHeight: '25.5px',
                  marginBlockStart: '0px',
                  marginBottom: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '0px',
                  outlineColor: 'rgb(44, 44, 45)',
                  textDecoration: 'none solid rgb(44, 44, 45)',
                  textDecorationColor: 'rgb(44, 44, 45)',
                  textEmphasisColor: 'rgb(44, 44, 45)',
                  textSizeAdjust: '100%',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextFillColor: 'rgb(44, 44, 45)',
                  WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                  width: '80%',
                  height: '102px',
                }}
              >
                The charging system can be installed without costly and
                time-consuming infrastructure upgrades, permits, or civil works.
                It can seamlessly integrate with existing electrical
                infrastructure.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
              <img
                style={styles.img}
                src={'http://www.qyk.energy/assets/img/benefit1.png'}
                className={'benefiticon'}
                alt="benefiticon"
              ></img>
              <p style={styles.para9} className={'benefitheading'}>
                HIGH ENERGY SAVINGS
              </p>
              <p
                style={{
                  borderBlockEndColor: 'rgb(44, 44, 45)',
                  borderBlockStartColor: 'rgb(44, 44, 45)',
                  borderBottomColor: 'rgb(44, 44, 45)',
                  borderInlineEndColor: 'rgb(44, 44, 45)',
                  borderInlineStartColor: 'rgb(44, 44, 45)',
                  borderLeftColor: 'rgb(44, 44, 45)',
                  borderRightColor: 'rgb(44, 44, 45)',
                  borderTopColor: 'rgb(44, 44, 45)',
                  boxSizing: 'border-box',
                  caretColor: 'rgb(44, 44, 45)',
                  color: 'rgb(44, 44, 45)',
                  columnRuleColor: 'rgb(44, 44, 45)',
                  fontFamily: 'Manrope',
                  fontSize: '17px',
                  inlineSize: '336.461px',
                  lineHeight: '25.5px',
                  marginBlockStart: '0px',
                  marginBottom: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '0px',
                  outlineColor: 'rgb(44, 44, 45)',
                  textDecoration: 'none solid rgb(44, 44, 45)',
                  textDecorationColor: 'rgb(44, 44, 45)',
                  textEmphasisColor: 'rgb(44, 44, 45)',
                  textSizeAdjust: '100%',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextFillColor: 'rgb(44, 44, 45)',
                  WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                  width: '80%',
                  height: '102px',
                }}
              >
                The charging system does not incur high demand charges,
                penalties, or peak-time charges. This is because of the energy
                buffering technology that allows energy to be stored during
                cheaper periods and used when needed, thereby reducing overall
                energy costs.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
              <img
                style={styles.img}
                src={'http://www.qyk.energy/assets/img/benefit1.png'}
                className={'benefiticon'}
                alt="benefiticon"
              ></img>
              <p style={styles.para9} className={'benefitheading'}>
                UNINTERRUPTED CHARGING
              </p>
              <p
                style={{
                  borderBlockEndColor: 'rgb(44, 44, 45)',
                  borderBlockStartColor: 'rgb(44, 44, 45)',
                  borderBottomColor: 'rgb(44, 44, 45)',
                  borderInlineEndColor: 'rgb(44, 44, 45)',
                  borderInlineStartColor: 'rgb(44, 44, 45)',
                  borderLeftColor: 'rgb(44, 44, 45)',
                  borderRightColor: 'rgb(44, 44, 45)',
                  borderTopColor: 'rgb(44, 44, 45)',
                  boxSizing: 'border-box',
                  caretColor: 'rgb(44, 44, 45)',
                  color: 'rgb(44, 44, 45)',
                  columnRuleColor: 'rgb(44, 44, 45)',
                  fontFamily: 'Manrope',
                  fontSize: '17px',
                  inlineSize: '336.461px',
                  lineHeight: '25.5px',
                  marginBlockStart: '0px',
                  marginBottom: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '0px',
                  outlineColor: 'rgb(44, 44, 45)',
                  textDecoration: 'none solid rgb(44, 44, 45)',
                  textDecorationColor: 'rgb(44, 44, 45)',
                  textEmphasisColor: 'rgb(44, 44, 45)',
                  textSizeAdjust: '100%',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextFillColor: 'rgb(44, 44, 45)',
                  WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                  width: '80%',
                  height: '102px',
                }}
              >
                The EV charging system is designed to deliver reliable and
                uninterrupted charging services, even during power outages or at
                sites with an erratic power supply. This ensures that electric
                vehicles can be charged consistently without any downtime or
                interruptions.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
              <img
                style={styles.img}
                src={'http://www.qyk.energy/assets/img/benefit1.png'}
                className={'benefiticon'}
                alt="benefiticon"
              ></img>
              <p style={styles.para9} className={'benefitheading'}>
                UNINTERRUPTED CHARGING
              </p>
              <p
                style={{
                  borderBlockEndColor: 'rgb(44, 44, 45)',
                  borderBlockStartColor: 'rgb(44, 44, 45)',
                  borderBottomColor: 'rgb(44, 44, 45)',
                  borderInlineEndColor: 'rgb(44, 44, 45)',
                  borderInlineStartColor: 'rgb(44, 44, 45)',
                  borderLeftColor: 'rgb(44, 44, 45)',
                  borderRightColor: 'rgb(44, 44, 45)',
                  borderTopColor: 'rgb(44, 44, 45)',
                  boxSizing: 'border-box',
                  caretColor: 'rgb(44, 44, 45)',
                  color: 'rgb(44, 44, 45)',
                  columnRuleColor: 'rgb(44, 44, 45)',
                  fontFamily: 'Manrope',
                  fontSize: '17px',
                  inlineSize: '336.461px',
                  lineHeight: '25.5px',
                  marginBlockStart: '0px',
                  marginBottom: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '0px',
                  outlineColor: 'rgb(44, 44, 45)',
                  textDecoration: 'none solid rgb(44, 44, 45)',
                  textDecorationColor: 'rgb(44, 44, 45)',
                  textEmphasisColor: 'rgb(44, 44, 45)',
                  textSizeAdjust: '100%',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextFillColor: 'rgb(44, 44, 45)',
                  WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                  width: '80%',
                  height: '102px',
                }}
              >
                The EV charging system is designed to deliver reliable and
                uninterrupted charging services, even during power outages or at
                sites with an erratic power supply. This ensures that electric
                vehicles can be charged consistently without any downtime or
                interruptions.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
              <img
                style={styles.img}
                src={'http://www.qyk.energy/assets/img/benefit1.png'}
                className={'benefiticon'}
                alt="benefiticon"
              ></img>
              <p style={styles.para9} className={'benefitheading'}>
                UNINTERRUPTED CHARGING
              </p>
              <p
                style={{
                  borderBlockEndColor: 'rgb(44, 44, 45)',
                  borderBlockStartColor: 'rgb(44, 44, 45)',
                  borderBottomColor: 'rgb(44, 44, 45)',
                  borderInlineEndColor: 'rgb(44, 44, 45)',
                  borderInlineStartColor: 'rgb(44, 44, 45)',
                  borderLeftColor: 'rgb(44, 44, 45)',
                  borderRightColor: 'rgb(44, 44, 45)',
                  borderTopColor: 'rgb(44, 44, 45)',
                  boxSizing: 'border-box',
                  caretColor: 'rgb(44, 44, 45)',
                  color: 'rgb(44, 44, 45)',
                  columnRuleColor: 'rgb(44, 44, 45)',
                  fontFamily: 'Manrope',
                  fontSize: '17px',
                  inlineSize: '336.461px',
                  lineHeight: '25.5px',
                  marginBlockStart: '0px',
                  marginBottom: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '0px',
                  outlineColor: 'rgb(44, 44, 45)',
                  textDecoration: 'none solid rgb(44, 44, 45)',
                  textDecorationColor: 'rgb(44, 44, 45)',
                  textEmphasisColor: 'rgb(44, 44, 45)',
                  textSizeAdjust: '100%',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextFillColor: 'rgb(44, 44, 45)',
                  WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                  width: '80%',
                  height: '102px',
                }}
              >
                The EV charging system is designed to deliver reliable and
                uninterrupted charging services, even during power outages or at
                sites with an erratic power supply. This ensures that electric
                vehicles can be charged consistently without any downtime or
                interruptions.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
              <img
                style={styles.img}
                src={'http://www.qyk.energy/assets/img/benefit1.png'}
                className={'benefiticon'}
                alt="benefiticon"
              ></img>
              <p style={styles.para9} className={'benefitheading'}>
                UNINTERRUPTED CHARGING
              </p>
              <p
                style={{
                  borderBlockEndColor: 'rgb(44, 44, 45)',
                  borderBlockStartColor: 'rgb(44, 44, 45)',
                  borderBottomColor: 'rgb(44, 44, 45)',
                  borderInlineEndColor: 'rgb(44, 44, 45)',
                  borderInlineStartColor: 'rgb(44, 44, 45)',
                  borderLeftColor: 'rgb(44, 44, 45)',
                  borderRightColor: 'rgb(44, 44, 45)',
                  borderTopColor: 'rgb(44, 44, 45)',
                  boxSizing: 'border-box',
                  caretColor: 'rgb(44, 44, 45)',
                  color: 'rgb(44, 44, 45)',
                  columnRuleColor: 'rgb(44, 44, 45)',
                  fontFamily: 'Manrope',
                  fontSize: '17px',
                  inlineSize: '336.461px',
                  lineHeight: '25.5px',
                  marginBlockStart: '0px',
                  marginBottom: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '0px',
                  outlineColor: 'rgb(44, 44, 45)',
                  textDecoration: 'none solid rgb(44, 44, 45)',
                  textDecorationColor: 'rgb(44, 44, 45)',
                  textEmphasisColor: 'rgb(44, 44, 45)',
                  textSizeAdjust: '100%',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextFillColor: 'rgb(44, 44, 45)',
                  WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                  width: '80%',
                  height: '102px',
                }}
              >
                The EV charging system is designed to deliver reliable and
                uninterrupted charging services, even during power outages or at
                sites with an erratic power supply. This ensures that electric
                vehicles can be charged consistently without any downtime or
                interruptions.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
              <img
                style={styles.img}
                src={'http://www.qyk.energy/assets/img/benefit1.png'}
                className={'benefiticon'}
                alt="benefiticon"
              ></img>
              <p style={styles.para9} className={'benefitheading'}>
                UNINTERRUPTED CHARGING
              </p>
              <p
                style={{
                  borderBlockEndColor: 'rgb(44, 44, 45)',
                  borderBlockStartColor: 'rgb(44, 44, 45)',
                  borderBottomColor: 'rgb(44, 44, 45)',
                  borderInlineEndColor: 'rgb(44, 44, 45)',
                  borderInlineStartColor: 'rgb(44, 44, 45)',
                  borderLeftColor: 'rgb(44, 44, 45)',
                  borderRightColor: 'rgb(44, 44, 45)',
                  borderTopColor: 'rgb(44, 44, 45)',
                  boxSizing: 'border-box',
                  caretColor: 'rgb(44, 44, 45)',
                  color: 'rgb(44, 44, 45)',
                  columnRuleColor: 'rgb(44, 44, 45)',
                  fontFamily: 'Manrope',
                  fontSize: '17px',
                  inlineSize: '336.461px',
                  lineHeight: '25.5px',
                  marginBlockStart: '0px',
                  marginBottom: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '0px',
                  outlineColor: 'rgb(44, 44, 45)',
                  textDecoration: 'none solid rgb(44, 44, 45)',
                  textDecorationColor: 'rgb(44, 44, 45)',
                  textEmphasisColor: 'rgb(44, 44, 45)',
                  textSizeAdjust: '100%',
                  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextFillColor: 'rgb(44, 44, 45)',
                  WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                  width: '80%',
                  height: '102px',
                }}
              >
                The EV charging system is designed to deliver reliable and
                uninterrupted charging services, even during power outages or at
                sites with an erratic power supply. This ensures that electric
                vehicles can be charged consistently without any downtime or
                interruptions.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>

    // <div style={{ backgroundColor: '#fff' }}>
    //   <div
    //     style={styles.container}
    //     className={'container-fluid aos-init aos-animate'}
    //     data-aos={'fade-up'}
    //   >
    //     {/* <div style={styles.element2} className={'element2'}>
    //       <img
    //         style={styles.image}
    //         src={'http://www.qyk.energy/assets/img/element3.png'}
    //         className={'elementimg1'}
    //         alt={'elementimg1'}
    //       ></img>
    //     </div> */}
    //     <div style={styles.commonContainer} className={'row commoncontainer'}>
    //       <div style={{}} className={'col-md-12'}>
    //         <div
    //           style={{
    //             borderBlockEndColor: 'rgb(33, 37, 41)',
    //             borderBlockStartColor: 'rgb(33, 37, 41)',
    //             borderBottomColor: 'rgb(33, 37, 41)',
    //             borderInlineEndColor: 'rgb(33, 37, 41)',
    //             borderInlineStartColor: '#ff5733',
    //             borderInlineStartStyle: 'solid',
    //             borderInlineStartWidth: '4px',
    //             borderLeftColor: '#ff5733',
    //             borderLeftStyle: 'solid',
    //             borderLeftWidth: '4px',
    //             borderRightColor: 'rgb(33, 37, 41)',
    //             borderTopColor: 'rgb(33, 37, 41)',
    //             boxSizing: 'border-box',
    //             caretColor: 'rgb(33, 37, 41)',
    //             color: 'rgb(33, 37, 41)',
    //             columnRuleColor: 'rgb(33, 37, 41)',
    //             fontFamily: 'Manrope',
    //             fontSize: '16px',
    //             inlineSize: '1329.75px',
    //             lineHeight: '24px',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             outlineColor: 'rgb(33, 37, 41)',
    //             textDecoration: 'none solid rgb(33, 37, 41)',
    //             textDecorationColor: 'rgb(33, 37, 41)',
    //             textEmphasisColor: 'rgb(33, 37, 41)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(33, 37, 41)',
    //             WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //           }}
    //           className={'vl'}
    //         >
    //           <div
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
    //               inlineSize: '1325.75px',
    //               lineHeight: '24px',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               outlineColor: 'rgb(33, 37, 41)',
    //               paddingInlineStart: '15px',
    //               paddingLeft: '15px',
    //               textDecoration: 'none solid rgb(33, 37, 41)',
    //               textDecorationColor: 'rgb(33, 37, 41)',
    //               textEmphasisColor: 'rgb(33, 37, 41)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(33, 37, 41)',
    //               WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //             }}
    //             className={'vltext'}
    //           >
    //             <h3
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
    //                 fontFamily: 'Playfair Display',
    //                 fontSize: '28px',
    //                 fontWeight: 500,
    //                 inlineSize: '1310.75px',
    //                 lineHeight: '33.6px',
    //                 marginBlockEnd: '8px',
    //                 marginBlockStart: '0px',
    //                 marginBottom: '0.5rem',
    //                 marginLeft: 0,
    //                 marginRight: 0,
    //                 marginTop: '0px',
    //                 outlineColor: 'rgb(33, 37, 41)',
    //                 textDecoration: 'none solid rgb(33, 37, 41)',
    //                 textDecorationColor: 'rgb(33, 37, 41)',
    //                 textEmphasisColor: 'rgb(33, 37, 41)',
    //                 textSizeAdjust: '100%',
    //                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                 WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //               }}
    //             >
    //               <b
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
    //                   fontFamily: 'Playfair Display',
    //                   fontSize: '28px',
    //                   lineHeight: '33.6px',
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
    //               >
    //                 Benefits
    //               </b>
    //             </h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <Grid container>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             The charging system can be installed without costly and
    //             time-consuming infrastructure upgrades, permits, or civil works.
    //             It can seamlessly integrate with existing electrical
    //             infrastructure.
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             HIGH ENERGY SAVINGS
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             The charging system does not incur high demand charges,
    //             penalties, or peak-time charges. This is because of the energy
    //             buffering technology that allows energy to be stored .
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             No expensive and time-consuming infrastructure upgrades. No
    //             permits. No civil works. Works with existing electrical
    //             infrastructure
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             No expensive and time-consuming infrastructure upgrades. No
    //             permits. No civil works. Works with existing electrical
    //             infrastructure
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             No expensive and time-consuming infrastructure upgrades. No
    //             permits. No civil works. Works with existing electrical
    //             infrastructure
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             No expensive and time-consuming infrastructure upgrades. No
    //             permits. No civil works. Works with existing electrical
    //             infrastructure
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             No expensive and time-consuming infrastructure upgrades. No
    //             permits. No civil works. Works with existing electrical
    //             infrastructure
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             No expensive and time-consuming infrastructure upgrades. No
    //             permits. No civil works. Works with existing electrical
    //             infrastructure
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid item xs={12} lg={4} md={6}>
    //         <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //           <img
    //             style={styles.img}
    //             src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //             className={'benefiticon'}
    //             alt="benefiticon"
    //           ></img>
    //           <p style={styles.para9} className={'benefitheading'}>
    //             Infrastructure light
    //           </p>
    //           <p
    //             style={{
    //               borderBlockEndColor: 'rgb(44, 44, 45)',
    //               borderBlockStartColor: 'rgb(44, 44, 45)',
    //               borderBottomColor: 'rgb(44, 44, 45)',
    //               borderInlineEndColor: 'rgb(44, 44, 45)',
    //               borderInlineStartColor: 'rgb(44, 44, 45)',
    //               borderLeftColor: 'rgb(44, 44, 45)',
    //               borderRightColor: 'rgb(44, 44, 45)',
    //               borderTopColor: 'rgb(44, 44, 45)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(44, 44, 45)',
    //               color: 'rgb(44, 44, 45)',
    //               columnRuleColor: 'rgb(44, 44, 45)',
    //               fontFamily: 'Manrope',
    //               fontSize: '17px',
    //               inlineSize: '336.461px',
    //               lineHeight: '25.5px',
    //               marginBlockStart: '0px',
    //               marginBottom: '1rem',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               marginTop: '0px',
    //               outlineColor: 'rgb(44, 44, 45)',
    //               textDecoration: 'none solid rgb(44, 44, 45)',
    //               textDecorationColor: 'rgb(44, 44, 45)',
    //               textEmphasisColor: 'rgb(44, 44, 45)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(44, 44, 45)',
    //               WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //               width: '80%',
    //               height: '102px',
    //             }}
    //           >
    //             No expensive and time-consuming infrastructure upgrades. No
    //             permits. No civil works. Works with existing electrical
    //             infrastructure
    //           </p>
    //         </div>
    //       </Grid>
    //     </Grid>

    //     {/* <br
    //       style={{
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
    //         fontFamily: 'Manrope',
    //         fontSize: '16px',
    //         lineHeight: '24px',
    //         marginLeft: 0,
    //         marginRight: 0,
    //         outlineColor: 'rgb(33, 37, 41)',
    //         textDecoration: 'none solid rgb(33, 37, 41)',
    //         textDecorationColor: 'rgb(33, 37, 41)',
    //         textEmphasisColor: 'rgb(33, 37, 41)',
    //         textSizeAdjust: '100%',
    //         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //         WebkitTextFillColor: 'rgb(33, 37, 41)',
    //         WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //       }}
    //     />
    //     <div
    //       style={{
    //         blockSize: '645px',
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
    //         paddingInlineStart: '20px',
    //         paddingLeft: '20px',
    //         textDecoration: 'none solid rgb(33, 37, 41)',
    //         textDecorationColor: 'rgb(33, 37, 41)',
    //         textEmphasisColor: 'rgb(33, 37, 41)',
    //         textSizeAdjust: '100%',
    //         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //         WebkitTextFillColor: 'rgb(33, 37, 41)',
    //         WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //       }}
    //       className={'row leftdiv benefitsrow'}
    //     >
    //       <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit1.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           Infrastructure light
    //         </p>
    //         <p
    //           style={{

    //             borderBlockEndColor: 'rgb(44, 44, 45)',
    //             borderBlockStartColor: 'rgb(44, 44, 45)',
    //             borderBottomColor: 'rgb(44, 44, 45)',
    //             borderInlineEndColor: 'rgb(44, 44, 45)',
    //             borderInlineStartColor: 'rgb(44, 44, 45)',
    //             borderLeftColor: 'rgb(44, 44, 45)',
    //             borderRightColor: 'rgb(44, 44, 45)',
    //             borderTopColor: 'rgb(44, 44, 45)',
    //             boxSizing: 'border-box',
    //             caretColor: 'rgb(44, 44, 45)',
    //             color: 'rgb(44, 44, 45)',
    //             columnRuleColor: 'rgb(44, 44, 45)',
    //             fontFamily: 'Manrope',
    //             fontSize: '17px',
    //             inlineSize: '336.461px',
    //             lineHeight: '25.5px',
    //             marginBlockStart: '0px',
    //             marginBottom: '1rem',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             marginTop: '0px',
    //             outlineColor: 'rgb(44, 44, 45)',
    //             textDecoration: 'none solid rgb(44, 44, 45)',
    //             textDecorationColor: 'rgb(44, 44, 45)',
    //             textEmphasisColor: 'rgb(44, 44, 45)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(44, 44, 45)',
    //             WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //             width: '80%',
    //             height: '102px',
    //           }}
    //         >
    //           No expensive and time-consuming infrastructure upgrades. No
    //           permits. No civil works. Works with existing electrical
    //           infrastructure
    //         </p>
    //       </div>

    //       <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit2.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon1"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           High energy savings
    //         </p>
    //         <p
    //           style={{

    //             borderBlockEndColor: 'rgb(44, 44, 45)',
    //             borderBlockStartColor: 'rgb(44, 44, 45)',
    //             borderBottomColor: 'rgb(44, 44, 45)',
    //             borderInlineEndColor: 'rgb(44, 44, 45)',
    //             borderInlineStartColor: 'rgb(44, 44, 45)',
    //             borderLeftColor: 'rgb(44, 44, 45)',
    //             borderRightColor: 'rgb(44, 44, 45)',
    //             borderTopColor: 'rgb(44, 44, 45)',
    //             boxSizing: 'border-box',
    //             caretColor: 'rgb(44, 44, 45)',
    //             color: 'rgb(44, 44, 45)',
    //             columnRuleColor: 'rgb(44, 44, 45)',
    //             fontFamily: 'Manrope',
    //             fontSize: '17px',
    //             inlineSize: '336.461px',
    //             lineHeight: '25.5px',
    //             marginBlockStart: '0px',
    //             marginBottom: '1rem',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             marginTop: '0px',
    //             outlineColor: 'rgb(44, 44, 45)',
    //             textDecoration: 'none solid rgb(44, 44, 45)',
    //             textDecorationColor: 'rgb(44, 44, 45)',
    //             textEmphasisColor: 'rgb(44, 44, 45)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(44, 44, 45)',
    //             WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //             width: '80%',
    //             height: '102px',
    //           }}
    //         >
    //           No high demand charges. No penalties. No peak-time charges. Energy
    //           buffering technology enables to store energy when cheaper and use
    //           when needed.
    //         </p>
    //       </div>
    //       <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit3.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon3"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           Uninterrupted charging
    //         </p>
    //         <p
    //           style={{

    //             borderBlockEndColor: 'rgb(44, 44, 45)',
    //             borderBlockStartColor: 'rgb(44, 44, 45)',
    //             borderBottomColor: 'rgb(44, 44, 45)',
    //             borderInlineEndColor: 'rgb(44, 44, 45)',
    //             borderInlineStartColor: 'rgb(44, 44, 45)',
    //             borderLeftColor: 'rgb(44, 44, 45)',
    //             borderRightColor: 'rgb(44, 44, 45)',
    //             borderTopColor: 'rgb(44, 44, 45)',
    //             boxSizing: 'border-box',
    //             caretColor: 'rgb(44, 44, 45)',
    //             color: 'rgb(44, 44, 45)',
    //             columnRuleColor: 'rgb(44, 44, 45)',
    //             fontFamily: 'Manrope',
    //             fontSize: '17px',
    //             inlineSize: '336.461px',
    //             lineHeight: '25.5px',
    //             marginBlockStart: '0px',
    //             marginBottom: '1rem',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             marginTop: '0px',
    //             outlineColor: 'rgb(44, 44, 45)',
    //             textDecoration: 'none solid rgb(44, 44, 45)',
    //             textDecorationColor: 'rgb(44, 44, 45)',
    //             textEmphasisColor: 'rgb(44, 44, 45)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(44, 44, 45)',
    //             WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //             width: '80%',
    //             height: '102px',
    //           }}
    //         >
    //           No downtimes. Deliver reliable and uninterrupted EV Charging
    //           during power outages or at sites with erratic power supply.
    //         </p>
    //       </div>
    //       <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit4.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon4"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           Easy setup
    //         </p>
    //         <p style={styles.description}>
    //           Deploy EV fast charging in hours rather than months. Hicharge
    //           allows for immediate deployment with no waiting time.
    //         </p>
    //       </div>
    //       <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit5.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon5"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           Space efficient
    //         </p>
    //         <p style={styles.description}>
    //           5X space efficient vis-à-vis traditional fast chargers. No bulky
    //           transformers. No distribution panels. No large parking lots.
    //         </p>
    //       </div>
    //       <div
    //         style={{
    //           blockSize: '199.5px',
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
    //           inlineSize: '444.578px',
    //           lineHeight: '24px',
    //           marginBlockEnd: '24px',
    //           marginBottom: '1.5rem !important',
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
    //           width: '444.578px',
    //           height: '199.5px',
    //         }}
    //         className={'col-md-4 mb-4'}
    //       >
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit6.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon6"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           Flexibility
    //         </p>
    //         <p
    //           style={{

    //             borderBlockEndColor: 'rgb(44, 44, 45)',
    //             borderBlockStartColor: 'rgb(44, 44, 45)',
    //             borderBottomColor: 'rgb(44, 44, 45)',
    //             borderInlineEndColor: 'rgb(44, 44, 45)',
    //             borderInlineStartColor: 'rgb(44, 44, 45)',
    //             borderLeftColor: 'rgb(44, 44, 45)',
    //             borderRightColor: 'rgb(44, 44, 45)',
    //             borderTopColor: 'rgb(44, 44, 45)',
    //             boxSizing: 'border-box',
    //             caretColor: 'rgb(44, 44, 45)',
    //             color: 'rgb(44, 44, 45)',
    //             columnRuleColor: 'rgb(44, 44, 45)',
    //             fontFamily: 'Manrope',
    //             fontSize: '17px',
    //             inlineSize: '336.461px',
    //             lineHeight: '25.5px',
    //             marginBlockStart: '0px',
    //             marginBottom: '1rem',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             marginTop: '0px',
    //             outlineColor: 'rgb(44, 44, 45)',
    //             textDecoration: 'none solid rgb(44, 44, 45)',
    //             textDecorationColor: 'rgb(44, 44, 45)',
    //             textEmphasisColor: 'rgb(44, 44, 45)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(44, 44, 45)',
    //             WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //             width: '80%',
    //           }}
    //         >
    //           Hicharge combines flexibility of both Stationary charging and
    //           Mobile Charging when needed. Wrong location? Low Utilization? No
    //           Problem. Move to a better location.
    //         </p>
    //       </div>
    //       <div style={styles.colMd4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit7.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon7"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           On-demand charging
    //         </p>
    //         <p style={styles.description}>
    //           Mobile unit enables bringing charger to customers doorstep and
    //           delivering on-demand charging services.{' '}
    //         </p>
    //       </div>
    //       <div style={styles.colMd4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit8.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon8"
    //         ></img>
    //         <p style={styles.para9} className={'benefitheading'}>
    //           Software
    //         </p>
    //         <p style={styles.para}>
    //           Intuitive software to smoothly monitor and manage EV charging
    //         </p>
    //       </div>
    //       <div style={styles.colMd4} className={'col-md-4 mb-4'}>
    //         <img
    //           style={styles.img}
    //           src={'http://www.qyk.energy/assets/img/benefit9.png'}
    //           className={'benefiticon'}
    //           alt="benefiticon9"
    //         ></img>
    //         <p
    //           style={{
    //             color: '#ff5733',
    //             columnRuleColor: '#ff5733',
    //             fontFamily: 'Manrope',
    //             fontSize: '17px',
    //             fontWeight: 600,
    //             inlineSize: '336.461px',
    //             lineHeight: '25.5px',
    //             marginBlockEnd: '8px',
    //             marginBlockStart: '8px',
    //             marginBottom: '8px',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             marginTop: '8px',
    //             outlineColor: '#ff5733',
    //             textDecoration: 'none solid #ff5733',
    //             textDecorationColor: '#ff5733',
    //             textEmphasisColor: '#ff5733',
    //             textSizeAdjust: '100%',
    //             textTransform: 'uppercase',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: '#ff5733',
    //             WebkitTextStrokeColor: '#ff5733',
    //             width: '80%',
    //           }}
    //           className={'benefitheading'}
    //         >
    //           Highly Scalable
    //         </p>
    //         <p style={styles.para}>
    //           With Hicharge we can now deploy EV Fast Charging anywhere we want
    //         </p>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default Benifits;

{
  /* <div style={styles.colmd4ml4} className={'col-md-4 mb-4'}>
            <img
              style={styles.img}
              src={'http://www.qyk.energy/assets/img/benefit1.png'}
              className={'benefiticon'}
              alt="benefiticon"
            ></img>
            <p style={styles.para9} className={'benefitheading'}>
              Infrastructure light
            </p>
            <p
              style={{
                
                borderBlockEndColor: 'rgb(44, 44, 45)',
                borderBlockStartColor: 'rgb(44, 44, 45)',
                borderBottomColor: 'rgb(44, 44, 45)',
                borderInlineEndColor: 'rgb(44, 44, 45)',
                borderInlineStartColor: 'rgb(44, 44, 45)',
                borderLeftColor: 'rgb(44, 44, 45)',
                borderRightColor: 'rgb(44, 44, 45)',
                borderTopColor: 'rgb(44, 44, 45)',
                boxSizing: 'border-box',
                caretColor: 'rgb(44, 44, 45)',
                color: 'rgb(44, 44, 45)',
                columnRuleColor: 'rgb(44, 44, 45)',
                fontFamily: 'Manrope',
                fontSize: '17px',
                inlineSize: '336.461px',
                lineHeight: '25.5px',
                marginBlockStart: '0px',
                marginBottom: '1rem',
                marginLeft: 0,
                marginRight: 0,
                marginTop: '0px',
                outlineColor: 'rgb(44, 44, 45)',
                textDecoration: 'none solid rgb(44, 44, 45)',
                textDecorationColor: 'rgb(44, 44, 45)',
                textEmphasisColor: 'rgb(44, 44, 45)',
                textSizeAdjust: '100%',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                WebkitTextFillColor: 'rgb(44, 44, 45)',
                WebkitTextStrokeColor: 'rgb(44, 44, 45)',
                width: '80%',
                height: '102px',
              }}
            >
              No expensive and time-consuming infrastructure upgrades. No
              permits. No civil works. Works with existing electrical
              infrastructure
            </p>
          </div> */
}
