/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * @flow
 */

'use strict';

/**
 * Get offset key from a node or it's child nodes. Return the first offset key
 * found on the DOM tree of given node.
 */
function getSelectionOffsetKeyForNode(node: Node, nameOffsetKey): ?string {
  function _getSelectionOffsetKeyForNode(_node: Node) {
    if (_node instanceof Element) {
      const offsetKey = _node.getAttribute(nameOffsetKey);
      if (offsetKey) {
        return offsetKey;
      }
      for (let ii = 0; ii < _node.childNodes.length; ii++) {
        const childOffsetKey = _getSelectionOffsetKeyForNode(
          _node.childNodes[ii],
        );
        if (childOffsetKey) {
          return childOffsetKey;
        }
      }
    }
    return null;
  }
  return _getSelectionOffsetKeyForNode(node);
}

module.exports = getSelectionOffsetKeyForNode;
