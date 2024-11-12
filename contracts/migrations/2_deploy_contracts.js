const UBI = artifacts.require("UBI");
const Taxation = artifacts.require("Taxation");
const Governance = artifacts.require("Governance");

module.exports = async function (deployer) {
    await deployer.deploy(UBI, 100);
    await deployer.deploy(Taxation, 500);
    await deployer.deploy(Governance);
};
