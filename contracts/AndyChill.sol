// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract AndyChill is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    // sets 2 items (index 0 & 1) as start
    uint256 public tokenID = 1;
    //Track wallet token balances
    mapping(address => uint256) public balances;

    constructor() ERC1155("QmVTxY2Xt3KjnrvoDCsXpex1hDfPxEapWGDcqhnS1JSj82") {
        _mint(msg.sender, tokenID, 1, "");
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(uint256 id, uint256 amount) public payable {
        // require(
        //     id < currentItems &&
        //         msg.value >= 0.00 ether &&
        //         balances[msg.sender] < 2
        // );
        // require(msg.value >= 0.00 ether);
        // require(balances[msg.sender] < 2);
        balances[msg.sender] += amount;
        _mint(msg.sender, id, amount, "");
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
