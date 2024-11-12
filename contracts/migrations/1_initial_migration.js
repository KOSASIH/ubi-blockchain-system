const UBI = artifacts.require("UBI");
const Taxation = artifacts.require("Taxation");
const Governance = artifacts.require("Governance");

module.exports = async function (deployer) {
    // Deploy UBI contract with an initial monthly distribution of 100 UBI tokens
    await deployer.deploy(UBI, 100);
    const ubiInstance = await UBI.deployed();

    // Deploy Taxation contract with an initial tax rate of 500 basis points (5%)
    await deployer.deploy(Taxation, 500);
    const taxationInstance = await Taxation.deployed();

    // Deploy Governance contract
    await deployer.deploy(Governance);
    const governanceInstance = await Governance.deployed();

    // Optionally, you can set up initial configurations or link contracts here
    // e.g., setting the UBI contract address in the Taxation contract if needed
};
