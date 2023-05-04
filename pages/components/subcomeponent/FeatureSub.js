import React from 'react';

const FeatureSub = () => {
  return (
    <div>
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
          uninterrupted charging services, even during power outages or at sites
          with an erratic power supply. This ensures that electric vehicles can
          be charged consistently without any downtime or interruptions.
        </p>
      </div>
    </div>
  );
};

export default FeatureSub;
