require_relative 'node'

class BST
  def initialize(*values)
    @root = empty_node(values.shift)
    values.each { |val| insert(val) }
  end

  def insert(v)
    parent = find_node(v)
    if parent.value > v
      parent.left = empty_node(v)
    else
      parent.right = empty_node(v)
    end
  end

  def min
  end

  def remove(v)
  end

  def traverse(node = @root)
    puts node.left
    # if node
    #   traverse(node.left)
    #   print "#{node.value} "
    #   traverse(node.right)
    # end
  end

  private

  def find_node(v)
    current = parent = @root
    while current do
      parent = current
      current = current.value > v ? current.left : current.right
    end

    parent
  end

  def empty_node(value)
    Node.new(
      value: value,
      left: nil,
      right: nil,
    )
  end
end

tree = BST.new(8, 1) # 8 1
tree.traverse
