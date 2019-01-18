
import * as React from 'react';
import { AnimatedSwitch } from 'react-router-transition';

export interface RedirectProps {
    to: H.LocationDescriptor;
    push?: boolean;
    from?: string;
    path?: string;
    exact?: boolean;
    strict?: boolean;
  }
  
  export class AnimatedSwitch extends React.Component<any, any> { }