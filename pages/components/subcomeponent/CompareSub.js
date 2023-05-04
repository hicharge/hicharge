import { Typography } from '@mui/material';
import React from 'react';

const CompareSub = (props) => {
  return (
    <div
      style={{
        // backgroundColor: 'red',
        marginTop: 51,
        marginBottom: 51,
        width: '100%',
      }}
    >
      <div class="plan">
        <div class="plan-inner" style={{ width: '30rem' }}>
          <div class="entry-title">
            <h3>{props.header} </h3>
          </div>
          <div class="entry-content">
            <ul>
              <li>
                <div>
                  <Typography variant="h6" color="green">
                    Average Installation Costs
                  </Typography>
                </div>
                <div style={{ height: 9 }} />
                <div>
                  <Typography>₹ {props.price} </Typography>{' '}
                </div>
                <div style={{ height: 9 }} />
                <Typography variant="body1" color="grey">
                  {props.description}
                </Typography>
              </li>
              <li>
                <div>
                  <Typography variant="h6" color="green">
                    Average Installation Time
                  </Typography>
                </div>
                <div style={{ height: 9 }} />
                <div>
                  <Typography>₹ {props.installationTime} </Typography>{' '}
                </div>
                <div style={{ height: 9 }} />
                <Typography variant="body1" color="grey">
                  {props.installationDescription}
                </Typography>
              </li>
              <li>
                <div>
                  <Typography variant="h6" color="green">
                    Average Space Required
                  </Typography>
                </div>
                <div style={{ height: 9 }} />
                <div>
                  <Typography>₹ {props.spaceRequired} </Typography>{' '}
                </div>
                <div style={{ height: 9 }} />
                <Typography variant="body1" color="grey">
                  {props.spaceDescription}
                </Typography>
              </li>
              <li>
                <div>
                  <Typography variant="h6" color="green">
                    High Recurring Energy Bills
                  </Typography>
                </div>
                <div style={{ height: 9 }} />

                <Typography variant="body1" color="grey">
                  {props.descriptionRecurring}
                </Typography>
              </li>
              <li>
                <div>
                  <Typography variant="h6" color="green">
                    Flexibility
                  </Typography>
                </div>

                <div style={{ height: 9 }} />
                <Typography variant="body1" color="grey">
                  {props.descriptionFlexibility}
                </Typography>
              </li>
              <li>
                <div>
                  <Typography variant="h6" color="green">
                    High Downtimes
                  </Typography>
                </div>
                <div style={{ height: 9 }} />

                <div style={{ height: 9 }} />
                <Typography variant="body1" color="grey">
                  {props.descriptionDowntimes}
                </Typography>
              </li>
              <li>
                <div>
                  <Typography variant="h6" color="green">
                    High Maintenance
                  </Typography>
                </div>

                <div style={{ height: 9 }} />
                <Typography variant="body1" color="grey">
                  {props.description.Maintenance}
                </Typography>
              </li>
            </ul>
          </div>
          <div class="btn">
            <a href="#">Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSub;
