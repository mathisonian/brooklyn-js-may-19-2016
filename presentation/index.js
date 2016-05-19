// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  sandwich: require('../assets/sandwich.svg'),
  pix1: require('../assets/pix1.svg'),
  pix2: require('../assets/pix2.svg'),
  chart: require('../assets/chart.png'),
  pharm: require('../assets/pharm.jpg'),
  anatomy1: require('../assets/anatomy1.png'),
  anatomy2: require('../assets/anatomy2.png'),
  anatomy25: require('../assets/anatomy2.5.png'),
  anatomy3: require('../assets/anatomy3.png'),
  architect: require('../assets/architect.png'),
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  secondary: '#000000'
});

console.log(theme);
theme.screen.components.codePane.pre.fontSize = '2.0rem';
theme.screen.components.codePane.pre.width = '75%';
theme.screen.components.codePane.pre.minWidth = 0;
console.log(theme.screen)
theme.screen.progress.pacman.pacmanBottom.background = 'black';
theme.screen.progress.pacman.pacmanTop.background = 'black';
theme.screen.progress.pacman.point.borderColor = 'black';
//
// borderColor
// :
// "white"



export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Image width={'50%'} src={images.sandwich} />
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Data Sandwich
            </Heading>
            <Link href="http://www.mathisonian.com">@mathisonian</Link>
          </Slide>
          <Slide>
            <Fill>
              <iframe src="http://delicate-boundary.surge.sh/" width="100%" height="600px" scrolling="no" style={{display: 'block', border: 'none', overflow: 'hidden'}} />
            </Fill>
          </Slide>
          <Slide notes="You can even put notes on your slide. How awesome is that?">
            <Fill>
              <iframe src="http://minimal.be/lab/fluGL/" width="100%" height="600px" scrolling="no" style={{display: 'block', border: 'none', overflow: 'hidden'}} />
              <Link href="http://minimal.be/lab/fluGL">http://minimal.be/lab/fluGL</Link>
            </Fill>
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Image width="100%" src={images.pix1}/>
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Image width="100%" src={images.pix2}/>
          </Slide>
          <Slide bgImage={images.pharm.replace("/", "")} bgDarken={0.5}>
            <Appear fid="1">
              <Heading size={1} caps textColor="primary">
                It is our job to choose the proper technologies
              </Heading>
            </Appear>
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Image width="100%" src={images.chart}/>
            <Appear><Link href="https://msdn.microsoft.com/en-us/library/gg193983(v=vs.85).aspx">https://msdn.microsoft.com/en-us/library/gg193983(v=vs.85).aspx</Link></Appear>
          </Slide>
          <Slide>
            <Fill>
              <Text lineHeight={1} textColor="black">
                {"What's in a chart?"}
              </Text>
              <List>
                <ListItem>Axes and labels</ListItem>
                <ListItem>Data</ListItem>
                <ListItem>Annotations</ListItem>
                <ListItem>Interactivity Layer</ListItem>
              </List>
            </Fill>
          </Slide>
          <Slide bgColor="primary">
            <Image src={images.anatomy1}/>
          </Slide>
          <Slide bgColor="primary">
            <Image src={images.anatomy2}/>
          </Slide>
          <Slide bgColor="primary">
            <Image src={images.anatomy25}/>
          </Slide>
          <Slide bgColor="primary">
            <Image src={images.anatomy3}/>
          </Slide>
          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code1.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code2.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="primary">
            <Text lineHeight={1} textColor="black">
              SVG is great for:
            </Text>
            <List>
              <ListItem>Axes</ListItem>
              <ListItem>Text</ListItem>
              <ListItem>Annotations, arrows</ListItem>
              <ListItem>DOM events</ListItem>
            </List>
          </Slide>
          <Slide>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code3.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="primary">
            <Image width="100%" src={images.architect}/>
          </Slide>
          <Slide>
            <Fill>
              <Link href="http://www.nytimes.com/interactive/2016/04/29/upshot/money-race-and-success-how-your-school-district-compares.html">http://www.nytimes.com/interactive/2016/04/29/upshot/money-race-and-success-how-your-school-district-compares.html?_r=0</Link>
            </Fill>
          </Slide>
          <Slide>
            <Fill>
              <Link href="http://projects.fivethirtyeight.com/sumo/">http://projects.fivethirtyeight.com/sumo/</Link>
            </Fill>
          </Slide>
          <Slide bgColor="primary">
            <Text lineHeight={1} textColor="black">
              Strategies for adding interactivity to canvas:
            </Text>
            <List>
              <Appear><ListItem>Hit Region - <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility#Hit_regions">Mozilla Link</Link></ListItem></Appear>
              <Appear><ListItem>Pixel Color</ListItem></Appear>
              <Appear><ListItem>Voronoi</ListItem></Appear>
              <Appear><ListItem>Quad Tree - <Link href="http://bl.ocks.org/veltman/1b43f61887e89c371f1c8c73341540a3">http://bl.ocks.org/veltman/1b43f6...</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Text lineHeight={1} textColor="black">
              Further work:
            </Text>
            <List>
              <Appear><ListItem>Component-ization of chart elements - <Link href="https://github.com/FormidableLabs/victory">https://github.com/FormidableLabs/victory</Link></ListItem></Appear>
              <Appear><ListItem>Data driven WebGL - see <Link href="https://github.com/mikolalysenko/regl">https://github.com/mikolalysenko/regl</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={6} fit caps textColor="black">
              Thank you!
            </Heading>
            <Link href="https://github.com/mathisonian">@mathisonian</Link>
            <Text lineHeight={1} textColor="black">
              Talk to me about:
            </Text>
            <List>
              <ListItem>{"FiveThirtyEight - journalism + javascript (we're hiring)"}</ListItem>
              <ListItem>{"HHMI Janelia - building tools for open science (with javascript)"}</ListItem>
            </List>
            <Text>
              <small><i>Attribution: <a href="https://thenounproject.com/search/?q=sandwich&i=444858">Sandwich SVG</a>, <a href="https://www.flickr.com/photos/apothecary/25324916930/in/photolist-EzSPuN-5kK8Yo-bqrSeR-JHoVj-qwN48P-21Rhg-21Rhf-21Rhh-5iQHan-21QbF-h2Vfh1-4AVuP-cwNzms-fQ4tdJ-4AXST-4qBKRw-bj4WMK-hVaRb4-9kRvca-h8gGcP-djWVWT-47CVbr-47FtPC-2YFVh5-53VFpy-4HBE9-4qvYHc-CchLW-bLMZKx-47BpAk-8ay67q-dCfZFF-bxRHxA-6Tayar-qh9tP6-3Z3Cfu-3gkdUF-eAKGsw-7cYfsH-kZmwB-mQPFqL-fcmLwC-8f8nBs-R5JTm-dy5H5F-6tgUgR-3Hpb8g-cT1ZjJ-GiFLh-2H1oSS">Pharmacy Image</a></i></small>
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
