export const teamData = [
    {
        id: 1,
        name: "App Team",
        teamPic: "gs://empathy-bytes-app.appspot.com/team_photo/AppTeamPic.jpeg",
        description: [
            {
                id: 1,
                name: "Description",
                text: "The App team is dedicated to the development of an informational cross-platform app that acts as a portal showcasing our research on communities within Georgia Tech through interactive content such as video/audio interviews and augmented reality games and models."
            },
            {
                id: 2,
                text: "React Native, Expo, JavaScript, Google Firestore"
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers"
            }]
    },
    {
        id: 2,
        name: "Web Team",
        teamPic: 'gs://empathy-bytes-app.appspot.com/team_photo/webTeam.jpg',
        description: [
            {
                id: 1,
                name: "Description",
                text: "The web team develops a website utilized to showcase our research. Our team is split into two subteams for Web Development and Design. We created the site using GatsbyJS and Decoupled Drupal. We also are experimenting with Web 3D using Three.js.                "
            },
            {
                id: 2,
                text: "GatsbyJS, Decoupled Drupal, Three.js"
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers"
            }]
    },
    {
        id: 3,
        name: "VR/AR Team",
        teamPic: 'gs://empathy-bytes-app.appspot.com/team_photo/Emerging/Jack_0.jpg',
        //will include 3d artifacts here
        description: [
            {
                id: 1,
                name: "Description",
                text: "The VR team at Empathy Bytes specializes in developing virtual reality experiences and digital preservation projects using technologies like Unity for development, photogrammetry for 3D modeling, and Blender for asset creation and optimization. They focus on creating immersive environments and preserving historical artifacts in accessible digital formats."
            },
            {
                id: 2,
                name: "Tech Stack",
                text: "Unity, Blender "
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers"
            }]
    },
    {
        id: 4,
        name: "Media Team",
        //will have different description
        teamPic: 'gs://empathy-bytes-app.appspot.com/team_photo/Media Team.jpg', 
        description: [
            {
                id: 1,
                name: "Descriptions",
                text: "The Media Team strives to explore new communities, document the work of all of our sub-teams, and promote our VIP in new and creative ways. When exploring communities we often interview several members to find a clear view of what makes their community special. We also search for different artifacts that we can pass on to our different sub-teams so that they can discover new ways to preserve them in an engaging way.                "
            },
            {
                id: 2,
                name: "Tech Stack",
                text: "this is the tech stack"
            },
            {
                id: 3,
                name: "Developers",
                text: "these are the developers"
            }]
    }
]