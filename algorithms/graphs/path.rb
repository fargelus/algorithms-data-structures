def traverse(graph, start, goal)
  unexplored = Queue.new
  unexplored << start
  passed = { start => true }
  while (current = unexplored.pop) do
    break if current == goal

    graph[current].each do |neighbor|
      next if passed.has_key?(neighbor)

      unexplored << neighbor
      passed[neighbor] = true
    end
  end

  passed.keys
end

graph = {'A' => ['B', 'C'],
         'B' => ['C', 'E'],
         'C' => ['F'],
         'D' => ['C'],
         'E' => ['D'],
         'F' => ['C']}
puts traverse(graph, 'A', 'D') # [A B C E F D]
