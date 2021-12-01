import React from 'react'
import styled from 'styled-components'
import Section  from './Section'

const Home = () => {
    return (
        <Container>
            <Section title="Model S" p="Order Online for Touchless Delivery" leftbuttonText="CUSTOM ORDER" rightbuttonText="EXISTING INVENTORY" bgImage="model-1.jpg" />
            <Section title="Model Y" p="Order Online for Touchless Delivery" leftbuttonText="CUSTOM ORDER" rightbuttonText="EXISTING INVENTORY" bgImage="model-2.jpg" />
            <Section title="Model Z" p="Order Online for Touchless Delivery" leftbuttonText="CUSTOM ORDER" rightbuttonText="EXISTING INVENTORY" bgImage="model-3.jpg" />
            <Section title="Model One" p="Order Online for Touchless Delivery" leftbuttonText="CUSTOM ORDER" rightbuttonText="EXISTING INVENTORY" bgImage="model-4.jpg" />
            <Section title="Model Two" p="Order Online for Touchless Delivery" leftbuttonText="CUSTOM ORDER" rightbuttonText="EXISTING INVENTORY" bgImage="model-5.jpg" />
            <Section title="Accessories" p="Order Online for Touchless Delivery" leftbuttonText="CUSTOM ORDER" bgImage="model-6.jpg" />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`
