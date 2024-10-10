export const teamData = [
    {
        id: 1,
        team: "App Team",
        teamPic: require('../assets/teams/appTeam.jpeg'),
        description: [
            {
                id: 0,
                name: "App Team",
            },
            {
                id: 1,
                name: "Description",
                text: "The App team is dedicated to the development of an informational cross-platform app that acts as a portal showcasing our research on communities within Georgia Tech through interactive content such as video/audio interviews and augmented reality games and models."
            },
            {
                id: 2,
                name: "Tech Stack",
                text: "React Native, Expo, JavaScript, Google Firestore",
                techStackImages: [
                    require('../assets/teams/app_team_tech_stack/react.png'),
                    require('../assets/teams/app_team_tech_stack/expo.png'),
                    require('../assets/teams/app_team_tech_stack/javascript.png'),
                    require('../assets/teams/app_team_tech_stack/firestore.png')
                ]
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers",
                developers: [
                    {
                        name: "Genesis Fu",
                        role: "Team Lead",
                        image: require('../assets/teams/app_team_dev/genesis.jpg')
                    },
                    {
                        name: "Felicia Jamba",
                        role: "Team Lead",
                        image: require('../assets/teams/app_team_dev/felicia.jpg')
                    },
                    {
                        name: "Via Hu",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/temp.png')
                    },
                    {
                        name: "Julian Lautzenheiser",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/julian.jpg')
                    },
                    {
                        name: "Richard Nguyen",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/richard.jpg')
                    },
                    {
                        name: "Rose Wen",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/temp.png')
                    },
                    {
                        name: "Steven Li",
                        role: "Backend Developer",
                        image: require('../assets/teams/app_team_dev/steven.jpg')
                    },
                    {
                        name: "Aaron Liu",
                        role: "Backend Developer",
                        image: require('../assets/teams/app_team_dev/temp.png')
                    },
                    {
                        name: "Eileen Yang",
                        role: "Backend Developer",
                        image: require('../assets/teams/app_team_dev/eileen.jpg')
                    }
                ]
            }]
    },
    {
        id: 2,
        team: "Web Team",
        teamPic: require('../assets/teams/webTeam.jpeg'),
        description: [
            {
                id: 0,
                name: "Web Team",
            },
            {
                id: 1,
                name: "Description",
                text: "The web team develops a website utilized to showcase our research. Our team is split into two subteams for Web Development and Design. We created the site using GatsbyJS and Decoupled Drupal. We also are experimenting with Web 3D using Three.js.                "
            },
            {
                id: 2,
                name: "Tech Stack",
                text: "GatsbyJS, Decoupled Drupal, Three.js",
                techStackImages: [
                    require('../assets/teams/web_team_tech_stack/gatsby.png'),
                    require('../assets/teams/web_team_tech_stack/drupal.png'),
                    require('../assets/teams/web_team_tech_stack/threejs.png'),
                ]
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers",
                developers: [
                    {
                        name: "Developer 1",
                        role: "Frontend Developer",
                        image: require('../assets/teams/web_team_dev/temp.png')
                    },
                    {
                        name: "Developer 2",
                        role: "Backend Developer",
                        image: require('../assets/teams/web_team_dev/temp.png')
                    }
                ]
            }]
    },
    {
        id: 3,
        team: "VR/AR Team",
        teamPic: require('../assets/teams/vrTeam.jpeg'),
        description: [
            {
                id: 0,
                name: "VR/AR Team",
            },
            {
                id: 1,
                name: "Description",
                text: "The VR team at Empathy Bytes specializes in developing virtual reality experiences and digital preservation projects using technologies like Unity for development, photogrammetry for 3D modeling, and Blender for asset creation and optimization. They focus on creating immersive environments and preserving historical artifacts in accessible digital formats."
            },
            {
                id: 2,
                name: "Tech Stack",
                text: "Unity, Blender ",
                techStackImages: [
                    require('../assets/teams/vr_ar_team_tech_stack/unity.png'),
                    require('../assets/teams/vr_ar_team_tech_stack/blender.png'),
                ]
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers",
                developers: [
                    {
                        name: "Developer 1",
                        role: "Frontend Developer",
                        image: require('../assets/teams/vr_ar_team_dev/temp.png')
                    },
                    {
                        name: "Developer 2",
                        role: "Backend Developer",
                        image: require('../assets/teams/vr_ar_team_dev/temp.png')
                    }
                ]
            }]
    },
    {
        id: 4,
        team: "Media Team",
        //will have different description
        teamPic: require('../assets/teams/mediaTeam.jpeg'),
        description: [
            {
                id: 0,
                name: "Media Team",
            },
            {
                id: 1,
                name: "Descriptions",
                text: "The Media Team strives to explore new communities, document the work of all of our sub-teams, and promote our VIP in new and creative ways. When exploring communities we often interview several members to find a clear view of what makes their community special. We also search for different artifacts that we can pass on to our different sub-teams so that they can discover new ways to preserve them in an engaging way.                "
            },
            {
                id: 2,
                name: "Tech Stack",
                text: "this is the tech stack",
                techStackImages: [
                    require('../assets/teams/media_team_tech_stack/camera.png'),
                ]
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers",
                developers: [
                    {
                        name: "Developer 1",
                        role: "Frontend Developer",
                        image: require('../assets/teams/media_team_dev/temp.png')
                    },
                    {
                        name: "Developer 2",
                        role: "Backend Developer",
                        image: require('../assets/teams/media_team_dev/temp.png')
                    }
                ]
            }]
    }
]