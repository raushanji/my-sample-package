// Type definitions for MySamplePackage 1.0.0
// Project: https://github.com/raushanji/my-sample-package.git
// TypeScript Version: 3.0

import * as React from 'react'

// Message Screen
export interface MessageProps {
    ViewWidth?: number
    ViewHeight?: number
    Message?: string
    fontSize?: number
    TextColor?: string
    FontWeight?: string
    TextAllign?: string
}

export class Message extends React.Component<MessageProps> {}

// Welcome Screen
export interface WelcomeProps {
    ViewWidth?: number
    ViewHeight?: number    
    fontSize?: number
    TextColor?: string
    FontWeight?: string
    TextAllign?: string
}

export class Welcome extends React.Component<WelcomeProps> {}
