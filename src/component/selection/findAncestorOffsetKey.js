/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 * @emails oncall+draft_js
 */

'use strict';

const getCorrectDocumentFromNode = require('getCorrectDocumentFromNode');
const getSelectionOffsetKeyForNode = require('getSelectionOffsetKeyForNode');
/**
 * Get the key from the node's nearest offset-aware ancestor.
 */
function findAncestorOffsetKey(node: Node, nameOffsetKey?: string): ?string {
  let searchNode = node;
  while (
    searchNode &&
    searchNode !== getCorrectDocumentFromNode(node).documentElement
  ) {
    const key = getSelectionOffsetKeyForNode(searchNode, nameOffsetKey);
    if (key != null) {
      return key;
    }
    searchNode = searchNode.parentNode;
  }
  return null;
}

module.exports = findAncestorOffsetKey;
