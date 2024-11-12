// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Taxation is Ownable {
    uint256 public taxRate; // Tax rate in basis points (1/100th of a percent)
    mapping(address => uint256) public taxesCollected;

    event TaxRateUpdated(uint256 newTaxRate);
    event TaxCollected(address indexed payer, uint256 amount);

    constructor(uint256 _initialTaxRate) {
        taxRate = _initialTaxRate;
    }

    function updateTaxRate(uint256 _newTaxRate) external onlyOwner {
        taxRate = _newTaxRate;
        emit TaxRateUpdated(_newTaxRate);
    }

    function collectTax(address payer, uint256 amount) external onlyOwner {
        uint256 taxAmount = (amount * taxRate) / 10000; // Calculate tax
        taxesCollected[payer] += taxAmount;

        emit TaxCollected(payer, taxAmount);
    }

    function getTaxAmount(address payer) external view returns (uint256) {
        return taxesCollected[payer];
    }
}
