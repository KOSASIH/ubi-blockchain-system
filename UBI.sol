// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UBI is ERC20, Ownable {
    uint256 public monthlyDistribution;
    mapping(address => uint256) public lastClaimed;

    event UBIClaimed(address indexed user, uint256 amount);
    event MonthlyDistributionUpdated(uint256 newDistribution);

    constructor(uint256 _monthlyDistribution) ERC20("Universal Basic Income Token", "UBI") {
        monthlyDistribution = _monthlyDistribution;
    }

    function updateMonthlyDistribution(uint256 _newDistribution) external onlyOwner {
        monthlyDistribution = _newDistribution;
        emit MonthlyDistributionUpdated(_newDistribution);
    }

    function claimUBI() external {
        require(block.timestamp >= lastClaimed[msg.sender] + 30 days, "Claim not available yet");
        
        lastClaimed[msg.sender] = block.timestamp;
        _mint(msg.sender, monthlyDistribution);
        
        emit UBIClaimed(msg.sender, monthlyDistribution);
    }

    function getClaimableAmount(address user) external view returns (uint256) {
        if (block.timestamp < lastClaimed[user] + 30 days) {
            return 0;
        }
        return monthlyDistribution;
    }
}
