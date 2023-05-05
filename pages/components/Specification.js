import React from 'react';
import {
  Card,
  CardContent,
  Collapse,
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@mui/material';
import fileDownload from 'js-file-download';

const styles = {
  AcCharger: {
    fontFamily: 'Playfair Display',
    fontSize: '20px',
    verticalAlign: 'center',
    color: '#ff5733',
    fontWeight: 'bold',
    marginTop: 9,
  },
  tablecell: {
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Playfair Display',
  },
  sxPlus: {
    fontSize: 21,
    color: '#ff5733',
  },
  heading: {
    color: '#ff5733',
  },
};
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('1', 'Input Supply', '3 Phase 415 V AC'),
  createData('2', 'Voltage Range', 9.0),
  createData('3', 'Rated Frequency', 16.0),
  createData('4', 'Frequency Range', 3.7),
  createData('5', 'Output Power', '60 KW'),
  createData('5', 'Dimension', '1254 x 690 x 250 mm'),
  createData('5', 'Emergency Stop Button', 'Provided'),
  createData('5', 'Charger to CMS', 'OCPP1.6'),
];
const Specification = () => {
  const [open, setopen] = React.useState(false);
  const [open1, setopen1] = React.useState(false);

  const _open = async () => {
    setopen(!open);
  };
  const _open1 = async () => {
    setopen1(!open1);
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div style={{ height: 1 }} />
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
            Specification
          </Typography>{' '}
        </Grid>
      </Grid>
      {/* <Typography
        style={{
          color: 'rgb(33, 37, 41)',
          fontFamily: 'Playfair Display',
          fontSize: '28px',
          marginLeft: 21,
          marginTop: 51,
          fontWeight: 'bold',
        }}
      >
        Specifications
      </Typography> */}

      {/* <Link
        target="_blank"
        href="https://hicharge.in/admin/wp-content/uploads/2023/05/Brochure-X3-30kW-DC-CCS-2.pdf"
      >
        fileDownload
      </Link> */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{}}
      >
        <Grid item xs={3}>
          <Paper>
            <Card
              sx={{ minWidth: 275 }}
              style={{
                backgroundColor: '#f8f9fa',
                width: '90vw',
                marginTop: 21,
              }}
            >
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography style={styles.AcCharger} sx={{}}>
                      Hicharge AC Charger
                    </Typography>
                  </Grid>
                  <Button onClick={_open}>
                    <Grid item>
                      <Typography sx={styles.sxPlus}>+</Typography>
                    </Grid>
                  </Button>
                </Grid>

                {open ? (
                  <>
                    <TableContainer
                      component={Paper}
                      style={{ width: '100vw' }}
                    >
                      <Table sx={{}} aria-label="simple table">
                        <TableHead>
                          <TableRow
                            style={{
                              backgroundColor: 'green',
                              width: '100vw',
                            }}
                          >
                            <TableCell style={styles.tablecell} width={21}>
                              Sr No
                            </TableCell>
                            <TableCell width={221} style={styles.tablecell}>
                              General{' '}
                            </TableCell>
                            <TableCell style={styles.tablecell}>
                              Specification&nbsp;
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                '&:last-child td, &:last-child th': {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell>{row.calories}</TableCell>
                              <TableCell>{row.fat}</TableCell>
                              <TableCell>{row.carbs}</TableCell>
                              <TableCell>{row.protein}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                ) : null}
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{}}
      >
        <Grid item xs={3}>
          <Card
            sx={{ minWidth: 275 }}
            style={{
              backgroundColor: '#f8f9fa',
              width: '90vw',
              marginTop: 21,
            }}
          >
            <CardContent>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography
                    style={styles.AcCharger}
                    sx={{
                      fontSize: 21,
                      fontWeight: 'bold',
                      color: 'grey',
                      marginTop: 1.2,
                    }}
                  >
                    Hicharge DC Charger
                  </Typography>
                </Grid>
                <Button onClick={_open1}>
                  <Grid item>
                    <Typography sx={styles.sxPlus}>+</Typography>
                  </Grid>
                </Button>
              </Grid>

              {open1 ? (
                <>
                  <TableContainer component={Paper} style={{ width: '100vw' }}>
                    <Table sx={{}} aria-label="simple table">
                      <TableHead>
                        <TableRow
                          style={{
                            backgroundColor: 'green',
                            width: '100vw',
                          }}
                        >
                          <TableCell style={styles.tablecell} width={21}>
                            Sr No
                          </TableCell>
                          <TableCell width={221} style={styles.tablecell}>
                            General{' '}
                          </TableCell>
                          <TableCell style={styles.tablecell}>
                            Specification&nbsp;
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell>{row.calories}</TableCell>
                            <TableCell>{row.fat}</TableCell>
                            <TableCell>{row.carbs}</TableCell>
                            <TableCell>{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ height: 21 }} />
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Link
          target="_blank"
          href="https://hicharge.in/admin/wp-content/uploads/2023/05/Brochure-X3-30kW-DC-CCS-2.pdf"
        >
          <Button
            size="81px"
            style={{
              backgroundColor: '#669900ff',
            }}
            variant="contained"
          >
            Download Brochure
          </Button>
        </Link>
      </Grid>
      <div style={{ height: 51 }} />
    </div>
    // <div style={{ backgroundColor: '#fff' }}>
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
    //       inlineSize: '1425px',
    //       lineHeight: '24px',
    //       outlineColor: 'rgb(33, 37, 41)',
    //       textDecoration: 'none solid rgb(33, 37, 41)',
    //       textDecorationColor: 'rgb(33, 37, 41)',
    //       textEmphasisColor: 'rgb(33, 37, 41)',
    //       textSizeAdjust: '100%',
    //       WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //       WebkitTextFillColor: 'rgb(33, 37, 41)',
    //       WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //     }}
    //     id={'specifications'}
    //   >
    //     <div
    //       style={{
    //         blockSize: '153.586px',
    //         borderBlockEndColor: 'rgb(33, 37, 41)',
    //         borderBlockStartColor: 'rgb(33, 37, 41)',
    //         borderBottomColor: 'rgb(33, 37, 41)',
    //         borderInlineEndColor: 'rgb(33, 37, 41)',
    //         borderInlineStartColor: 'rgb(33, 37, 41)',
    //         borderLeftColor: 'rgb(33, 37, 41)',
    //         borderRightColor: 'rgb(33, 37, 41)',
    //         borderTopColor: 'rgb(33, 37, 41)',
    //         bottom: '-3041.15px',
    //         boxSizing: 'border-box',
    //         caretColor: 'rgb(33, 37, 41)',
    //         color: 'rgb(33, 37, 41)',
    //         columnRuleColor: 'rgb(33, 37, 41)',
    //         fontFamily: 'Manrope',
    //         fontSize: '16px',
    //         inlineSize: '177px',
    //         insetBlockEnd: '-3041.15px',
    //         insetBlockStart: '3676.56px',
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
    //         top: '3676.56px',
    //         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //         WebkitTextFillColor: 'rgb(33, 37, 41)',
    //         WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //       }}
    //       className={'element1'}
    //     >
    //       <img
    //         style={{
    //           blockSize: '153.586px',
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
    //           width: '80%',
    //           height: '153.586px',
    //         }}
    //         // src={'http://www.qyk.energy/assets/img/element1.png'}
    //         className={'elementimg1'}
    //         alt="elementimg1"
    //       ></img>
    //     </div>
    //     <div
    //       style={{
    //         blockSize: '309.594px',
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
    //         inlineSize: '1353.75px',
    //         lineHeight: '24px',
    //         marginInlineEnd: '35.625px',
    //         marginInlineStart: '35.625px',
    //         marginLeft: 'auto',
    //         marginRight: 'auto',
    //         outlineColor: 'rgb(33, 37, 41)',
    //         paddingInlineEnd: '12px',
    //         paddingInlineStart: '12px',
    //         paddingLeft: '12px',
    //         paddingRight: '12px',
    //         textDecoration: 'none solid rgb(33, 37, 41)',
    //         textDecorationColor: 'rgb(33, 37, 41)',
    //         textEmphasisColor: 'rgb(33, 37, 41)',
    //         textSizeAdjust: '100%',
    //         transform: 'matrix(1, 0, 0, 1, 0, 0)',
    //         transformOrigin: '676.875px 154.797px',
    //         transitionDuration: '1s',
    //         transitionProperty: 'opacity, transform',
    //         transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    //         WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //         WebkitTextFillColor: 'rgb(33, 37, 41)',
    //         WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //         width: '95%',
    //       }}
    //       className={'container-fluid aos-init aos-animate'}
    //       data-aos={'fade-up'}
    //     >
    //       <div
    //         style={{
    //           blockSize: '91.5938px',
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
    //           display: 'flex',
    //           flexWrap: 'wrap',
    //           fontFamily: 'Manrope',
    //           fontSize: '16px',
    //           inlineSize: '1353.75px',
    //           lineHeight: '24px',
    //           marginInlineEnd: '-12px',
    //           marginInlineStart: '-12px',
    //           marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
    //           marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
    //           marginTop: 'calc(var(--bs-gutter-y) * -1)',
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
    //         className={'row commoncontainer'}
    //       >
    //         <div
    //           style={{
    //             blockSize: '41.5938px',
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
    //             flexShrink: 0,
    //             fontFamily: 'Manrope',
    //             fontSize: '16px',
    //             inlineSize: '1353.75px',
    //             lineHeight: '24px',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             maxInlineSize: '100%',
    //             maxWidth: '100%',
    //             minBlockSize: 'auto',
    //             minHeight: 'auto',
    //             minInlineSize: 'auto',
    //             minWidth: 'auto',
    //             outlineColor: 'rgb(33, 37, 41)',
    //             paddingInlineEnd: '12px',
    //             paddingInlineStart: '12px',
    //             paddingLeft: '12px',
    //             paddingRight: '12px',
    //             textDecoration: 'none solid rgb(33, 37, 41)',
    //             textDecorationColor: 'rgb(33, 37, 41)',
    //             textEmphasisColor: 'rgb(33, 37, 41)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(33, 37, 41)',
    //             WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //             width: '100%',
    //           }}
    //           className={'col-md-12'}
    //         >
    //           <div
    //             style={{
    //               blockSize: '33.5938px',
    //               borderBlockEndColor: 'rgb(33, 37, 41)',
    //               borderBlockStartColor: 'rgb(33, 37, 41)',
    //               borderBottomColor: 'rgb(33, 37, 41)',
    //               borderInlineEndColor: 'rgb(33, 37, 41)',
    //               borderInlineStartColor: '#ff5733',
    //               borderInlineStartStyle: 'solid',
    //               borderInlineStartWidth: '4px',
    //               borderLeftColor: '#ff5733',
    //               borderLeftStyle: 'solid',
    //               borderLeftWidth: '4px',
    //               borderRightColor: 'rgb(33, 37, 41)',
    //               borderTopColor: 'rgb(33, 37, 41)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(33, 37, 41)',
    //               color: 'rgb(33, 37, 41)',
    //               columnRuleColor: 'rgb(33, 37, 41)',
    //               fontFamily: 'Manrope',
    //               fontSize: '16px',
    //               inlineSize: '1329.75px',
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
    //             className={'vl'}
    //           >
    //             <div
    //               style={{
    //                 blockSize: '33.5938px',
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
    //                 inlineSize: '1325.75px',
    //                 lineHeight: '24px',
    //                 marginLeft: 0,
    //                 marginRight: 0,
    //                 outlineColor: 'rgb(33, 37, 41)',
    //                 paddingInlineStart: '15px',
    //                 paddingLeft: '15px',
    //                 textDecoration: 'none solid rgb(33, 37, 41)',
    //                 textDecorationColor: 'rgb(33, 37, 41)',
    //                 textEmphasisColor: 'rgb(33, 37, 41)',
    //                 textSizeAdjust: '100%',
    //                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                 WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                 WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //               }}
    //               className={'vltext'}
    //             >
    //               <h3
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
    //                   fontFamily: 'Playfair Display',
    //                   fontSize: '28px',
    //                   fontWeight: 500,
    //                   inlineSize: '1310.75px',
    //                   lineHeight: '33.6px',
    //                   marginBlockEnd: '8px',
    //                   marginBlockStart: '0px',
    //                   marginBottom: '0.5rem',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '0px',
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
    //                 <b
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
    //                     fontFamily: 'Playfair Display',
    //                     fontSize: '28px',
    //                     lineHeight: '33.6px',
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
    //                 >
    //                   Specifications
    //                 </b>
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <br
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
    //           lineHeight: '24px',
    //           marginLeft: 0,
    //           marginRight: 0,
    //           outlineColor: 'rgb(33, 37, 41)',
    //           textDecoration: 'none solid rgb(33, 37, 41)',
    //           textDecorationColor: 'rgb(33, 37, 41)',
    //           textEmphasisColor: 'rgb(33, 37, 41)',
    //           textSizeAdjust: '100%',
    //           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //           WebkitTextFillColor: 'rgb(33, 37, 41)',
    //           WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //         }}
    //       />
    //       <div
    //         style={{
    //           blockSize: '146px',
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
    //           display: 'flex',
    //           flexWrap: 'wrap',
    //           fontFamily: 'Manrope',
    //           fontSize: '16px',
    //           inlineSize: '1353.75px',
    //           lineHeight: '24px',
    //           marginInlineEnd: '-12px',
    //           marginInlineStart: '-12px',
    //           marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
    //           marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
    //           marginTop: 'calc(var(--bs-gutter-y) * -1)',
    //           outlineColor: 'rgb(33, 37, 41)',
    //           textDecoration: 'none solid rgb(33, 37, 41)',
    //           textDecorationColor: 'rgb(33, 37, 41)',
    //           textEmphasisColor: 'rgb(33, 37, 41)',
    //           textSizeAdjust: '100%',
    //           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //           WebkitTextFillColor: 'rgb(33, 37, 41)',
    //           WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //         }}
    //         className={'row'}
    //       >
    //         <div
    //           style={{
    //             blockSize: '146px',
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
    //             flexShrink: 0,
    //             fontFamily: 'Manrope',
    //             fontSize: '16px',
    //             inlineSize: '1128.12px',
    //             lineHeight: '24px',
    //             marginInlineEnd: '112.812px',
    //             marginInlineStart: '112.812px',
    //             marginLeft: 'auto',
    //             marginRight: 'auto',
    //             maxInlineSize: '100%',
    //             maxWidth: '100%',
    //             minBlockSize: 'auto',
    //             minHeight: 'auto',
    //             minInlineSize: 'auto',
    //             minWidth: 'auto',
    //             outlineColor: 'rgb(33, 37, 41)',
    //             paddingInlineEnd: '12px',
    //             paddingInlineStart: '12px',
    //             paddingLeft: '12px',
    //             paddingRight: '12px',
    //             textDecoration: 'none solid rgb(33, 37, 41)',
    //             textDecorationColor: 'rgb(33, 37, 41)',
    //             textEmphasisColor: 'rgb(33, 37, 41)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(33, 37, 41)',
    //             WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //             width: '1128.12px',
    //           }}
    //           className={'col-md-12 col-lg-10 marginauto'}
    //         >
    //           <div
    //             style={{
    //               blockSize: '129px',
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
    //               inlineSize: '1104.12px',
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
    //             className={'accordion specificationacc'}
    //             id={'accordionExample'}
    //           >
    //             <div
    //               style={{
    //                 backgroundColor: 'rgb(255, 255, 255)',
    //                 blockSize: '56px',
    //                 borderBlockEndColor: 'rgb(33, 37, 41)',
    //                 borderBlockStartColor: 'rgb(33, 37, 41)',
    //                 borderBottomColor: 'rgb(33, 37, 41)',
    //                 borderInlineEndColor: 'rgb(33, 37, 41)',
    //                 borderInlineStartColor: 'rgb(33, 37, 41)',
    //                 borderLeftColor: 'rgb(33, 37, 41)',
    //                 borderRightColor: 'rgb(33, 37, 41)',
    //                 borderStartEndRadius: '4px',
    //                 borderStartStartRadius: '4px',
    //                 borderTopColor: 'rgb(33, 37, 41)',
    //                 borderTopLeftRadius: '4px',
    //                 borderTopRightRadius: '4px',
    //                 boxShadow: 'rgba(0, 0, 0, 0.22) 0px 0px 4px 1px',
    //                 boxSizing: 'border-box',
    //                 caretColor: 'rgb(33, 37, 41)',
    //                 color: 'rgb(33, 37, 41)',
    //                 columnRuleColor: 'rgb(33, 37, 41)',
    //                 fontFamily: 'Manrope',
    //                 fontSize: '16px',
    //                 inlineSize: '1104.12px',
    //                 lineHeight: '24px',
    //                 marginBlockEnd: '17px',
    //                 marginBottom: '17px !important',
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
    //               className={'accordion-item'}
    //             >
    //               <h2
    //                 style={{
    //                   blockSize: '56px',
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
    //                   fontSize: '32px',
    //                   fontWeight: 500,
    //                   inlineSize: '1104.12px',
    //                   lineHeight: '38.4px',
    //                   marginBlockEnd: '0px',
    //                   marginBlockStart: '0px',
    //                   marginBottom: '0px',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '0px',
    //                   outlineColor: 'rgb(33, 37, 41)',
    //                   textDecoration: 'none solid rgb(33, 37, 41)',
    //                   textDecorationColor: 'rgb(33, 37, 41)',
    //                   textEmphasisColor: 'rgb(33, 37, 41)',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //                 }}
    //                 className={'accordion-header'}
    //                 id={'headingOne'}
    //               >
    //                 <button
    //                   style={{
    //                     alignItems: 'center',
    //                     appearance: 'button',
    //                     backgroundColor: 'rgb(247, 245, 245)',
    //                     blockSize: '56px',
    //                     borderBlockEndColor: 'rgb(44, 44, 45)',
    //                     borderBlockEndStyle: 'none',
    //                     borderBlockEndWidth: '0px',
    //                     borderBlockStartColor: 'rgb(44, 44, 45)',
    //                     borderBlockStartStyle: 'none',
    //                     borderBlockStartWidth: '0px',
    //                     borderBottomColor: 'rgb(44, 44, 45)',
    //                     borderBottomStyle: 'none',
    //                     borderBottomWidth: '0px',
    //                     borderInlineEndColor: 'rgb(44, 44, 45)',
    //                     borderInlineEndStyle: 'none',
    //                     borderInlineEndWidth: '0px',
    //                     borderInlineStartColor: 'rgb(44, 44, 45)',
    //                     borderInlineStartStyle: 'none',
    //                     borderInlineStartWidth: '0px',
    //                     borderLeftColor: 'rgb(44, 44, 45)',
    //                     borderLeftStyle: 'none',
    //                     borderLeftWidth: '0px',
    //                     borderRightColor: 'rgb(44, 44, 45)',
    //                     borderRightStyle: 'none',
    //                     borderRightWidth: '0px',
    //                     borderStartEndRadius: '3px',
    //                     borderStartStartRadius: '3px',
    //                     borderTopColor: 'rgb(44, 44, 45)',
    //                     borderTopLeftRadius: '3px',
    //                     borderTopRightRadius: '3px',
    //                     borderTopStyle: 'none',
    //                     borderTopWidth: '0px',
    //                     bottom: '0px',
    //                     boxSizing: 'border-box',
    //                     caretColor: 'rgb(44, 44, 45)',
    //                     color: 'rgb(44, 44, 45)',
    //                     columnRuleColor: 'rgb(44, 44, 45)',
    //                     cursor: 'pointer',
    //                     display: 'flex',
    //                     fontFamily: 'Playfair Display',
    //                     fontSize: '20px',
    //                     fontWeight: 600,
    //                     inlineSize: '1104.12px',
    //                     insetBlockEnd: '0px',
    //                     insetBlockStart: '0px',
    //                     insetInlineEnd: '0px',
    //                     insetInlineStart: '0px',
    //                     left: '0px',
    //                     lineHeight: '24px',
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     outlineColor: 'rgb(44, 44, 45)',
    //                     overflowAnchor: 'none',
    //                     paddingBlockEnd: '16px',
    //                     paddingBlockStart: '16px',
    //                     paddingBottom: '16px',
    //                     paddingInlineEnd: '20px',
    //                     paddingInlineStart: '20px',
    //                     paddingLeft: '20px',
    //                     paddingRight: '20px',
    //                     paddingTop: '16px',
    //                     position: 'relative',
    //                     right: '0px',
    //                     textAlign: 'left',
    //                     textDecoration: 'none solid rgb(44, 44, 45)',
    //                     textDecorationColor: 'rgb(44, 44, 45)',
    //                     textEmphasisColor: 'rgb(44, 44, 45)',
    //                     textSizeAdjust: '100%',
    //                     top: '0px',
    //                     transitionDelay: '0s, 0s, 0s, 0s, 0s',
    //                     transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
    //                     transitionProperty:
    //                       'color, background-color, border-color, box-shadow, border-radius',
    //                     transitionTimingFunction:
    //                       'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
    //                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                     WebkitTextFillColor: 'rgb(44, 44, 45)',
    //                     WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //                     width: '100%',
    //                   }}
    //                   className={'accordion-button collapsed'}
    //                   type={'button'}
    //                   data-bs-toggle={'collapse'}
    //                   data-bs-target={'#collapseOne'}
    //                   aria-expanded={'true'}
    //                   aria-controls={'collapseOne'}
    //                   onClick={_open}
    //                 >
    //                   Hicharge AC Chargers
    //                 </button>
    //               </h2>
    //               <Collapse in={open} timeout="auto" unmountOnExit>
    //                 Swapnil vishwakarma
    //               </Collapse>
    //             </div>
    //             <div
    //               style={{
    //                 backgroundColor: 'rgb(255, 255, 255)',
    //                 blockSize: '56px',
    //                 borderBlockEndColor: 'rgb(33, 37, 41)',
    //                 borderBlockStartColor: 'rgb(33, 37, 41)',
    //                 borderBottomColor: 'rgb(33, 37, 41)',
    //                 borderBottomLeftRadius: '4px',
    //                 borderBottomRightRadius: '4px',
    //                 borderEndEndRadius: '4px',
    //                 borderEndStartRadius: '4px',
    //                 borderInlineEndColor: 'rgb(33, 37, 41)',
    //                 borderInlineStartColor: 'rgb(33, 37, 41)',
    //                 borderLeftColor: 'rgb(33, 37, 41)',
    //                 borderRightColor: 'rgb(33, 37, 41)',
    //                 borderTopColor: 'rgb(33, 37, 41)',
    //                 boxShadow: 'rgba(0, 0, 0, 0.22) 0px 0px 4px 1px',
    //                 boxSizing: 'border-box',
    //                 caretColor: 'rgb(33, 37, 41)',
    //                 color: 'rgb(33, 37, 41)',
    //                 columnRuleColor: 'rgb(33, 37, 41)',
    //                 fontFamily: 'Manrope',
    //                 fontSize: '16px',
    //                 inlineSize: '1104.12px',
    //                 lineHeight: '24px',
    //                 marginBlockEnd: '17px',
    //                 marginBottom: '17px !important',
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
    //               className={'accordion-item'}
    //             >
    //               <h2
    //                 style={{
    //                   blockSize: '56px',
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
    //                   fontSize: '32px',
    //                   fontWeight: 500,
    //                   inlineSize: '1104.12px',
    //                   lineHeight: '38.4px',
    //                   marginBlockEnd: '0px',
    //                   marginBlockStart: '0px',
    //                   marginBottom: '0px',
    //                   marginLeft: 0,
    //                   marginRight: 0,
    //                   marginTop: '0px',
    //                   outlineColor: 'rgb(33, 37, 41)',
    //                   textDecoration: 'none solid rgb(33, 37, 41)',
    //                   textDecorationColor: 'rgb(33, 37, 41)',
    //                   textEmphasisColor: 'rgb(33, 37, 41)',
    //                   textSizeAdjust: '100%',
    //                   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                   WebkitTextFillColor: 'rgb(33, 37, 41)',
    //                   WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //                 }}
    //                 className={'accordion-header'}
    //                 id={'headingTwo'}
    //               >
    //                 <button
    //                   style={{
    //                     alignItems: 'center',
    //                     appearance: 'button',
    //                     backgroundColor: 'rgb(247, 245, 245)',
    //                     blockSize: '56px',
    //                     borderBlockEndColor: 'rgb(44, 44, 45)',
    //                     borderBlockEndStyle: 'none',
    //                     borderBlockEndWidth: '0px',
    //                     borderBlockStartColor: 'rgb(44, 44, 45)',
    //                     borderBlockStartStyle: 'none',
    //                     borderBlockStartWidth: '0px',
    //                     borderBottomColor: 'rgb(44, 44, 45)',
    //                     borderBottomLeftRadius: '3px',
    //                     borderBottomRightRadius: '3px',
    //                     borderBottomStyle: 'none',
    //                     borderBottomWidth: '0px',
    //                     borderEndEndRadius: '3px',
    //                     borderEndStartRadius: '3px',
    //                     borderInlineEndColor: 'rgb(44, 44, 45)',
    //                     borderInlineEndStyle: 'none',
    //                     borderInlineEndWidth: '0px',
    //                     borderInlineStartColor: 'rgb(44, 44, 45)',
    //                     borderInlineStartStyle: 'none',
    //                     borderInlineStartWidth: '0px',
    //                     borderLeftColor: 'rgb(44, 44, 45)',
    //                     borderLeftStyle: 'none',
    //                     borderLeftWidth: '0px',
    //                     borderRightColor: 'rgb(44, 44, 45)',
    //                     borderRightStyle: 'none',
    //                     borderRightWidth: '0px',
    //                     borderTopColor: 'rgb(44, 44, 45)',
    //                     borderTopStyle: 'none',
    //                     borderTopWidth: '0px',
    //                     bottom: '0px',
    //                     boxSizing: 'border-box',
    //                     caretColor: 'rgb(44, 44, 45)',
    //                     color: 'rgb(44, 44, 45)',
    //                     columnRuleColor: 'rgb(44, 44, 45)',
    //                     cursor: 'pointer',
    //                     display: 'flex',
    //                     fontFamily: 'Playfair Display',
    //                     fontSize: '20px',
    //                     fontWeight: 600,
    //                     inlineSize: '1104.12px',
    //                     insetBlockEnd: '0px',
    //                     insetBlockStart: '0px',
    //                     insetInlineEnd: '0px',
    //                     insetInlineStart: '0px',
    //                     left: '0px',
    //                     lineHeight: '24px',
    //                     marginLeft: 0,
    //                     marginRight: 0,
    //                     outlineColor: 'rgb(44, 44, 45)',
    //                     overflowAnchor: 'none',
    //                     paddingBlockEnd: '16px',
    //                     paddingBlockStart: '16px',
    //                     paddingBottom: '16px',
    //                     paddingInlineEnd: '20px',
    //                     paddingInlineStart: '20px',
    //                     paddingLeft: '20px',
    //                     paddingRight: '20px',
    //                     paddingTop: '16px',
    //                     position: 'relative',
    //                     right: '0px',
    //                     textAlign: 'left',
    //                     textDecoration: 'none solid rgb(44, 44, 45)',
    //                     textDecorationColor: 'rgb(44, 44, 45)',
    //                     textEmphasisColor: 'rgb(44, 44, 45)',
    //                     textSizeAdjust: '100%',
    //                     top: '0px',
    //                     transitionDelay: '0s, 0s, 0s, 0s, 0s',
    //                     transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s, 0.15s',
    //                     transitionProperty:
    //                       'color, background-color, border-color, box-shadow, border-radius',
    //                     transitionTimingFunction:
    //                       'ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease',
    //                     WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                     WebkitTextFillColor: 'rgb(44, 44, 45)',
    //                     WebkitTextStrokeColor: 'rgb(44, 44, 45)',
    //                     width: '100%',
    //                   }}
    //                   className={'accordion-button collapsed'}
    //                   type={'button'}
    //                   data-bs-toggle={'collapse'}
    //                   data-bs-target={'#collapseTwo'}
    //                   aria-expanded={'false'}
    //                   aria-controls={'collapseTwo'}
    //                 >
    //                   Hicharge DC Chargers
    //                 </button>
    //               </h2>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           blockSize: '48px',
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
    //           display: 'flex',
    //           flexWrap: 'wrap',
    //           fontFamily: 'Manrope',
    //           fontSize: '16px',
    //           inlineSize: '1353.75px',
    //           lineHeight: '24px',
    //           marginInlineEnd: '-12px',
    //           marginInlineStart: '-12px',
    //           marginLeft: 'calc(var(--bs-gutter-x) * -0.5)',
    //           marginRight: 'calc(var(--bs-gutter-x) * -0.5)',
    //           marginTop: 'calc(var(--bs-gutter-y) * -1)',
    //           outlineColor: 'rgb(33, 37, 41)',
    //           textDecoration: 'none solid rgb(33, 37, 41)',
    //           textDecorationColor: 'rgb(33, 37, 41)',
    //           textEmphasisColor: 'rgb(33, 37, 41)',
    //           textSizeAdjust: '100%',
    //           WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //           WebkitTextFillColor: 'rgb(33, 37, 41)',
    //           WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //         }}
    //         className={'row'}
    //       >
    //         <div
    //           style={{
    //             blockSize: '48px',
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
    //             flexShrink: 0,
    //             fontFamily: 'Manrope',
    //             fontSize: '16px',
    //             inlineSize: '1353.75px',
    //             lineHeight: '24px',
    //             marginLeft: 0,
    //             marginRight: 0,
    //             maxInlineSize: '100%',
    //             maxWidth: '100%',
    //             minBlockSize: 'auto',
    //             minHeight: 'auto',
    //             minInlineSize: 'auto',
    //             minWidth: 'auto',
    //             outlineColor: 'rgb(33, 37, 41)',
    //             paddingInlineEnd: '12px',
    //             paddingInlineStart: '12px',
    //             paddingLeft: '12px',
    //             paddingRight: '12px',
    //             textAlign: 'center',
    //             textDecoration: 'none solid rgb(33, 37, 41)',
    //             textDecorationColor: 'rgb(33, 37, 41)',
    //             textEmphasisColor: 'rgb(33, 37, 41)',
    //             textSizeAdjust: '100%',
    //             WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //             WebkitTextFillColor: 'rgb(33, 37, 41)',
    //             WebkitTextStrokeColor: 'rgb(33, 37, 41)',
    //             width: '100%',
    //           }}
    //           className={'col-md-12 text-center'}
    //         >
    //           <a
    //             style={{
    //               borderBlockEndColor: 'rgb(13, 110, 253)',
    //               borderBlockStartColor: 'rgb(13, 110, 253)',
    //               borderBottomColor: 'rgb(13, 110, 253)',
    //               borderInlineEndColor: 'rgb(13, 110, 253)',
    //               borderInlineStartColor: 'rgb(13, 110, 253)',
    //               borderLeftColor: 'rgb(13, 110, 253)',
    //               borderRightColor: 'rgb(13, 110, 253)',
    //               borderTopColor: 'rgb(13, 110, 253)',
    //               boxSizing: 'border-box',
    //               caretColor: 'rgb(13, 110, 253)',
    //               color: 'rgb(13, 110, 253)',
    //               columnRuleColor: 'rgb(13, 110, 253)',
    //               cursor: 'pointer',
    //               fontFamily: 'Manrope',
    //               fontSize: '16px',
    //               lineHeight: '24px',
    //               marginLeft: 0,
    //               marginRight: 0,
    //               outlineColor: 'rgb(13, 110, 253)',
    //               textAlign: 'center',
    //               textDecoration: 'underline solid rgb(13, 110, 253)',
    //               textDecorationColor: 'rgb(13, 110, 253)',
    //               textDecorationLine: 'underline',
    //               textEmphasisColor: 'rgb(13, 110, 253)',
    //               textSizeAdjust: '100%',
    //               WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //               WebkitTextFillColor: 'rgb(13, 110, 253)',
    //               WebkitTextStrokeColor: 'rgb(13, 110, 253)',
    //             }}
    //             href={
    //               'https://docs.google.com/document/d/1VGv_QrHqD4QoyzfyisfYOImYI9HWIF-0slAiXX0N-Jg/edit#heading=h.8j55j5xn5rjj'
    //             }
    //             target={'_blank'}
    //           >
    //             {' '}
    //             <button
    //               style={{
    //                 appearance: 'button',
    //                 backgroundColor: '#ff5733',
    //                 blockSize: '48px',
    //                 borderBlockEndColor: 'rgba(0, 0, 0, 0)',
    //                 borderBlockEndStyle: 'solid',
    //                 borderBlockEndWidth: '1px',
    //                 borderBlockStartColor: 'rgba(0, 0, 0, 0)',
    //                 borderBlockStartStyle: 'solid',
    //                 borderBlockStartWidth: '1px',
    //                 borderBottomColor: 'rgba(0, 0, 0, 0)',
    //                 borderBottomLeftRadius: '4.8px',
    //                 borderBottomRightRadius: '4.8px',
    //                 borderBottomStyle: 'solid',
    //                 borderBottomWidth: '1px',
    //                 borderEndEndRadius: '4.8px',
    //                 borderEndStartRadius: '4.8px',
    //                 borderInlineEndColor: 'rgba(0, 0, 0, 0)',
    //                 borderInlineEndStyle: 'solid',
    //                 borderInlineEndWidth: '1px',
    //                 borderInlineStartColor: 'rgba(0, 0, 0, 0)',
    //                 borderInlineStartStyle: 'solid',
    //                 borderInlineStartWidth: '1px',
    //                 borderLeftColor: 'rgba(0, 0, 0, 0)',
    //                 borderLeftStyle: 'solid',
    //                 borderLeftWidth: '1px',
    //                 borderRightColor: 'rgba(0, 0, 0, 0)',
    //                 borderRightStyle: 'solid',
    //                 borderRightWidth: '1px',
    //                 borderStartEndRadius: '4.8px',
    //                 borderStartStartRadius: '4.8px',
    //                 borderTopColor: 'rgba(0, 0, 0, 0)',
    //                 borderTopLeftRadius: '4.8px',
    //                 borderTopRightRadius: '4.8px',
    //                 borderTopStyle: 'solid',
    //                 borderTopWidth: '1px',
    //                 boxSizing: 'border-box',
    //                 caretColor: 'rgb(255, 255, 255)',
    //                 color: 'rgb(255, 255, 255)',
    //                 columnRuleColor: 'rgb(255, 255, 255)',
    //                 cursor: 'pointer',
    //                 fontFamily: 'Playfair Display, serif',
    //                 fontSize: '20px',
    //                 inlineSize: '213.203px',
    //                 lineHeight: '30px',
    //                 marginLeft: 0,
    //                 marginRight: 0,
    //                 outlineColor: 'rgb(255, 255, 255)',
    //                 paddingBlockEnd: '8px',
    //                 paddingBlockStart: '8px',
    //                 paddingBottom: '8px',
    //                 paddingInlineEnd: '16px',
    //                 paddingInlineStart: '16px',
    //                 paddingLeft: '16px',
    //                 paddingRight: '16px',
    //                 paddingTop: '8px',
    //                 textDecoration: 'none solid rgb(255, 255, 255)',
    //                 textDecorationColor: 'rgb(255, 255, 255)',
    //                 textEmphasisColor: 'rgb(255, 255, 255)',
    //                 textSizeAdjust: '100%',
    //                 transitionDelay: '0s, 0s, 0s, 0s',
    //                 transitionDuration: '0.15s, 0.15s, 0.15s, 0.15s',
    //                 transitionProperty:
    //                   'color, background-color, border-color, box-shadow',
    //                 transitionTimingFunction:
    //                   'ease-in-out, ease-in-out, ease-in-out, ease-in-out',
    //                 userSelect: 'none',
    //                 verticalAlign: 'middle',
    //                 WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    //                 WebkitTextFillColor: 'rgb(255, 255, 255)',
    //                 WebkitTextStrokeColor: 'rgb(255, 255, 255)',
    //               }}
    //               className={'btn qyk-btn btn-lg'}
    //             >
    //               Download Brochure
    //             </button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div style={{ height: '51px' }} />
    // </div>
  );
};

export default Specification;
