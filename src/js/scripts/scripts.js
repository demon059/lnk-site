let app = new Vue({
    el: '#app',
    data: {
        defaultPrice: {
            team: 8,
            business: 16,
            consultant: 12
        },
        modifyPrice: {},
        annualyPrice: {},
        windowWidth: 0,
        mobileMatrix: [],
        currentMatrix: [],
        planId: 0,
        plans: [],
        plansData: [
            {
                planName: 'Free',
                price: 0,
                description: '',
                color: 'default',
                btnName: 'Get started'
            },
            {
                planName: 'Team',
                price: 8,
                description: '',
                color: 'gray',
                btnName: 'Buy Team'
            },
            {
                planName: 'Business',
                price: 16,
                description: '',
                color: 'rose',
                btnName: 'Buy Business'
            },
            {
                planName: 'Enterprise',
                price: 'Custom',
                description: '',
                color: 'yellow',
                btnName: 'Contact us'
            },
            {
                planName: 'Consultant',
                price: 12,
                description: '',
                color: 'default',
                btnName: 'Buy Consultant'
            }
        ],
        storagePlansData: [
            {
                planName: 'Free',
                price: 0,
                description: '',
                color: 'default',
                btnName: 'Get started'
            },
            {
                planName: 'Team',
                price: 8,
                description: '',
                color: 'gray',
                btnName: 'Buy Team'
            },
            {
                planName: 'Business',
                price: 16,
                description: '',
                color: 'rose',
                btnName: 'Buy Business'
            },
            {
                planName: 'Enterprise',
                price: 'Custom',
                description: '',
                color: 'yellow',
                btnName: 'Contact us'
            },
            {
                planName: 'Consultant',
                price: 12,
                description: '',
                color: 'default',
                btnName: 'Buy Consultant'
            }
        ],
        matrixData: [
            {
                groupName: 'Features',
                groupData: [
                    {
                        propName: {
                            value: 'Number of Editable Boards',
                            tooltip: {},
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: 'text',
                                    value: '3'
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: 'text',
                                    value: 'Unlimited'
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: 'text',
                                    value: 'Unlimited'
                                },
                                {
                                    plan: 'Enterprise',
                                    color: '',
                                    type: 'text',
                                    value: 'Unlimited'
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: 'text',
                                    value: 'Unlimited'
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Number of Team Members',
                            tooltip: {},
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: 'text',
                                    value: '1+'
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: 'text',
                                    value: '5+'
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: 'text',
                                    value: '20+'
                                },
                                {
                                    plan: 'Enterprise',
                                    color: '',
                                    type: 'text',
                                    value: '50+'
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: 'text',
                                    value: '1+'
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Anonymous Users',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: 'text',
                                    value: 'Viewers'
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: 'text',
                                    value: 'Commenters'
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: 'text',
                                    value: 'Commenters'
                                },
                                {
                                    plan: 'Enterprise',
                                    color: '',
                                    type: 'text',
                                    value: 'Commentors & Configurable Sharing'
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: 'text',
                                    value: 'Commenters'
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Premade Templates',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Board Exports',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: 'text',
                                    value: 'Basic'
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: 'text',
                                    value: 'Advanced'
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: 'text',
                                    value: 'Advanced'
                                },
                                {
                                    plan: 'Enterprise',
                                    color: '',
                                    type: 'text',
                                    value: 'Advanced'
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: 'text',
                                    value: 'Advanced'
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Integrations',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: 'text',
                                    value: 'Core'
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: 'text',
                                    value: 'Premium'
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: 'text',
                                    value: 'Premium'
                                },
                                {
                                    plan: 'Enterprise',
                                    color: '',
                                    type: 'text',
                                    value: 'Premium'
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: 'text',
                                    value: 'Premium'
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Custom Template Sharing',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Voting',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Timer',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Projects',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'External Editors',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-dollar',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-dollar',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Developer Platform & Resources',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                ]
            },
            {
                groupName: 'Sharing & collaboration',
                groupData: [
                    {
                        propName: {
                            value: 'Real-Time Collaboration',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Video Chat',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Private Board Sharing',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    }
                ]
            },
            {
                groupName: 'Security',
                groupData: [
                    {
                        propName: {
                            value: 'Authentication via Google, Office 365, and Slack',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'SAML Single Sign-On (SSO)',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Configurable Sharing Policies',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Audit Logs & Integrations with SIEM',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Security Review & MSA Support',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    }
                ]
            },
            {
                groupName: 'Data governance',
                groupData: [
                    {
                        propName: {
                            value: 'Data Segregation Capabilities',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Custom Encryption Key Management',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Support for Data Backup Zones',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    }
                ]
            },
            {
                groupName: 'Support & success',
                groupData: [
                    {
                        propName: {
                            value: 'Self-Service Knowledge Base',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Email Support',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: 'gray',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Dedicated Customer Success Manager',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Dedicated Account Manager',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Personalized Onboarding Program',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Flexible Payment Options',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: 'rose',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-plus',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: 'default',
                                    type: 'circle-plus',
                                    value: ''
                                }
                            ]
                        }
                    },
                    {
                        propName: {
                            value: 'Premium Support',
                            tooltip: {
                                imgSrc: 'build/img/img-tooltip.PNG',
                                content: 'Use empathy map, service blueprint, user story map, and other premade templates with your team.'
                            },
                            list: [
                                {
                                    plan: 'Free',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Team',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Business',
                                    color: '',
                                    type: '',
                                    value: ''
                                },
                                {
                                    plan: 'Enterprise',
                                    color: 'yellow',
                                    type: 'circle-dollar',
                                    value: ''
                                },
                                {
                                    plan: 'Consultant',
                                    color: '',
                                    type: '',
                                    value: ''
                                }
                            ]
                        }
                    }
                ]
            },
        ],
        showMatrix: false,
        modifyPlansData: false,
    },
    computed: {
        currentMobileMatrix() {
            return this.currentMatrix = this.mobileMatrix[this.planId]
        }
    },
    methods: {
        // стоимость за месяц
        changePriceOnMonthly() {
            this.modifyPrice = this.defaultPrice
            this.plans = this.storagePlansData
        },
        // меняет стоимость тарифного плана
        changePrice(percent) {
            if (percent === 0) {
                this.changePriceOnMonthly()
            } else {
                if (Object.keys(this.annualyPrice).length === 0) {
                    for (let key in this.defaultPrice) {
                        this.annualyPrice[key] = this.defaultPrice[key] - (percent / 100 * this.defaultPrice[key])
                    }
                }
                this.modifyPrice = this.annualyPrice

                if (!this.modifyPlansData) {
                    this.modifyPlansData = true
                    this.plansData.forEach((item) => {
                        if (typeof item.price === 'number') {
                            item.price = item.price - (percent / 100 * item.price)
                        }
                    })
                }
                this.plans = this.plansData
            }
        },
        // переключатель на следующий план
        nextMatrixPlan() {
            if (this.planId < (this.plansData.length - 1)) {
                this.planId = this.planId + 1
            }
        },
        // переключатель на пердыдущий план
        prevMatrixPlan() {
            if (this.planId > 0) {
                this.planId = this.planId - 1
            }
        },
        // получить сформированный массив для матрицы для мобилы
        getMobileMatrix() {
            if (this.mobileMatrix.length === 0) {
                this.plansData.forEach((plan) => {
                    let groups = []
                    this.matrixData.forEach((item, index) => {
                        let props = []
                        for (let prop in item.groupData) {
                            props.push(
                                {
                                    name: item.groupData[prop].propName.value,
                                    tooltip: item.groupData[prop].propName.tooltip,
                                    value: item.groupData[prop].propName.list.filter((item) => item.plan === plan.planName)[0]
                                }
                            )
                        }
                        groups.push({groupName: item.groupName, props: props})
                    })
                    this.mobileMatrix.push({plan: plan, groups: groups})
                })
            }
        },
        // получить ширину экрана
        getWindowWidth() {
            let scroll = 17
            this.windowWidth = document.documentElement.clientWidth + scroll
        },
        // показать тултип
        showTooltip(event) {
            let lastChild = event.target.lastChild
            if (lastChild.className === 'tooltip') {
                let distanceHandlebox = event.target.getBoundingClientRect().right
                let widthHandlebox = event.target.getBoundingClientRect().width + 15
                let widthTooltip = lastChild.getBoundingClientRect().width + 15
                let distance = distanceHandlebox + widthTooltip
                let windowWidth = this.windowWidth - 17
                let difference = Math.abs(distance - windowWidth)

                lastChild.style.left = widthHandlebox + 'px'
                if (distance > windowWidth) {
                    lastChild.style.left = widthHandlebox - difference + 'px'
                    lastChild.style.bottom = 25 + 'px'
                    lastChild.classList.add('arrow-bottom')
                }
            }
        }
    },
    beforeMount() {
        this.changePriceOnMonthly()
        this.getMobileMatrix()
    },
    mounted() {
        this.$nextTick(function () {
            window.addEventListener('resize', this.getWindowWidth)
            this.getWindowWidth()
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth)
    }
})