import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";

type ToolbarProps = {}

const Toolbar: FC<ToolbarProps> = ({}) => {

    return (
      <React.Fragment>
        <Tooltip title="Logout" enterDelay={500} onClick={ () => { localStorage.removeItem('persist:root'); window.location.href = '/'; } }>
          <div>
            <IconButton
              type="button"
              sx={{
                color: 'white'
              }}
            >
              <LogoutIcon />
            </IconButton>
          </div>
        </Tooltip>
      </React.Fragment>
    );
}

export default Toolbar;