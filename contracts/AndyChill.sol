// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract AndyChill is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    uint256 public tokenID = 0;

    //Track wallet token balances
    mapping(address => uint256) public balances;
    string public name = "Andy Chill";
    string public symbol = "Chill";

    constructor()
        ERC1155(
            "https://gateway.pinata.cloud/ipfs/QmQrsgMPJxZihqicPeBMCi2frT4iPWrQC2B3d38jgU78nY"
        )
    {}

    function setURI(string memory _newuri) public onlyOwner {
        _setURI(_newuri);
    }

    event MintComplete(address _reciver, uint256 _amounts);

    function mint(uint256 _id, uint256 _amount) public {
        // require(balances[msg.sender] < 2, "Limit 2 Tokens");
        balances[msg.sender] += _amount;
        _mint(msg.sender, _id, _amount, "");
        emit MintComplete(msg.sender, _amount);
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
