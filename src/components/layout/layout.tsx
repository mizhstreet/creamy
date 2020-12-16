import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CreditCardTwoToneIcon from "@material-ui/icons/CreditCardTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import WhatshotTwoToneIcon from "@material-ui/icons/WhatshotTwoTone";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, Theme, createStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// import logo from "../../../public/images/logo.png";

const drawerWidth = 120;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      border: "none",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    icon: {
      fontSize: 30,
      // marginBottom: 10,
      // color: red[500],
    },
    logo: {
      width: "70%",
      marginLeft: 20,
      maxWidth: 100,
    },
    navListItem: {
      margin: "0 auto",
      padding: 0,
      maxWidth: 80,
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 15,
      overflow: "hidden",
    },
    navItemText: {
      fontSize: 14,
      fontWeight: "bold",
      // color: red[800],
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      border: "none",
    },
    content: {
      flexGrow: 1,
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const Layout: React.FC<Props> = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box pt={2} pb={3}>
        <img className={classes.logo} src={"images/logo1.png"} alt="some" />
      </Box>
      <List>
        <ListItem className={classes.navListItem} button>
          <Box width={1} display="flex" pt={2} pb={2} flexDirection="column" alignItems="center" bgcolor={red[100]}>
            <CreditCardTwoToneIcon className={classes.icon} />
            <Typography className={classes.navItemText}>レジ</Typography>
          </Box>
        </ListItem>
        <ListItem className={classes.navListItem} button>
          <Box width={1} display="flex" pt={2} pb={2} flexDirection="column" alignItems="center">
            <ListAltTwoToneIcon className={classes.icon} />
            <Typography className={classes.navItemText}>レシート</Typography>
          </Box>
        </ListItem>
        <ListItem className={classes.navListItem} button>
          <Box width={1} display="flex" pt={2} pb={2} flexDirection="column" alignItems="center">
            <WhatshotTwoToneIcon className={classes.icon} />
            <Typography className={classes.navItemText}>人気</Typography>
          </Box>
        </ListItem>
        <ListItem className={classes.navListItem} button>
          <Box width={1} display="flex" pt={2} pb={2} flexDirection="column" alignItems="center">
            <SearchTwoToneIcon className={classes.icon} />
            <Typography className={classes.navItemText}>検索</Typography>
          </Box>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};
